import React, {Component} from "react";
import {withGoogleMap, InfoWindow, GoogleMap, Marker} from "react-google-maps";
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";
import * as _ from "lodash";
import "./index.scss";
import Avartar from "components/utilComponents/userAvatar";
import styled from "styled-components";
import PropTypes from "prop-types";
import variables from "styled_variables";

const MapElement = styled.div`
      display: flex;
      background: ${props => props.background ? props.background : "red"};
      .markerInfor{
        align-self: stretch;
        flex-basis: 30%;
        padding: 20px;
        .body{
          margin-top: 10px;
          padding-left: 20px;
        }
      }
      .filters{
        padding: 10px;
        display:flex;
        flex-direction: column;
        border: 1px solid gray;
        button{
            text-align: center;
            padding: 10px 15px;
            background: light-grey;
            &:hover{
                background: gray;
                cursor: pointer;
            }
        }
      }
`;

const ShowMarkerInfor = ({marker}) => {
    if (_.isEmpty(marker)) return <div className="markerInfor">pls select marker to see details</div>
    return (
        <div className="markerInfor">
            <Avartar userInfo={{
                imageUrl: marker.photo_file_url,
                name: marker.owner_name,
                phone: marker.photo_id
            }}/>
            <ul className="body">
                <li className="title">{marker.photo_title}</li>
                <li className="date">{marker.upload_date}</li>
            </ul>
        </div>
    )
};

ShowMarkerInfor.propTypes = {
    marker: PropTypes.object
};


const GettingPropertiesExampleGoogleMap = withGoogleMap(({markers, markerId, handleToggleOpen, onMapMounted, onZoomChanged, center, zoom}) => {
    return <GoogleMap
        ref={onMapMounted}
        onZoomChanged={onZoomChanged}
        defaultCenter={center}
        zoom={zoom}
    >
        {markers.map(marker => {
            return <Marker
                icon={marker.photo_id === markerId ? "http://maps.google.com/mapfiles/ms/icons/green-dot.png" : "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"}
                position={{lat: marker.latitude, lng: marker.longitude}}
                key={marker.photo_id}
                onClick={() => handleToggleOpen(marker)}
            >
                {marker.photo_id === markerId && <InfoWindow defaultPosition={center}>
                    <div className="infoDetails">
                        <ShowMarkerInfor marker={marker}/>
                    </div>
                    </InfoWindow>}

            </Marker>
        })}
    </GoogleMap>
});


GettingPropertiesExampleGoogleMap.propTypes = {
    markers: PropTypes.array,
    markerId: PropTypes.number,
    handleToggleOpen: PropTypes.func,
    onMapMounted: PropTypes.func,
    onZoomChanged: PropTypes.func,
    center: PropTypes.object.isRequired,
    zoom: PropTypes.number.isRequired
};


class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zoom: 2,
            content: 'This is Content',
            markers: [],
            selectedMaker: {},
            filterMakers: [],
            map: {}
        }
    }

    async componentDidMount() {
        try {
            let res = await fetch(`https://gist.githubusercontent.com/farrrr/dfda7dd7fccfec5474d3/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`)
            let data = await res.json();
            this.setState({
                markers: data.photos,
                selectedMaker: data.photos[0],
                filterMakers: data.photos
            });
        } catch (err) {
            /**
             * TODO: put modal error here
             * */
        }
    }

    handleMapMounted = (map) => {
        this.setState({map})
    };

    boundMarkers = () => {
        let latlngbounds = new google.maps.LatLngBounds();
        let makersPrivate = this.state.markers.map(marker => ({lat: marker.latitude, lng: marker.longitude}))
        for (let i = 0; i < makersPrivate.length; i++) {
            latlngbounds.extend(makersPrivate[i]);
        }
        this.state.map.fitBounds(latlngbounds)
    };

    handleZoomChanged = () => {
        const nextZoom = this.state.map.getZoom();
        if (nextZoom !== this.state.zoom) {
            this.setState({
                zoom: nextZoom,
                content: `Zoom: ${nextZoom}`,
            })
        }
    };

    filterSomeMakers = (fields) => {
        this.setState({
            filterMakers: this.state.markers.slice(0, 100)
        }, () => {
            this.setSelectedMaker(this.state.filterMakers[0])
        })
    };

    filterAndCenter = () => {
        this.setState({
            filterMakers: this.state.markers.filter(marker => marker.photo_id === 535234)
        }, () => {
            this.setSelectedMaker(this.state.filterMakers[0])
        })
    };

    resetMarker = () => {
        this.setState({
            filterMakers: [...this.state.markers]
        }, () => {
            this.setSelectedMaker(this.state.filterMakers[0])
        })
    };

    setSelectedMaker = (selectedMaker, callback) => {
        this.setState({
            selectedMaker: selectedMaker
        }, () => {
            this.state.map.panTo({lat: selectedMaker.latitude, lng: selectedMaker.longitude})
        })
    };

    onMakerClicked = (selectedMaker) => {
        this.setSelectedMaker(selectedMaker)
    };

    buildComponent = (props, state) => {
        const {filterMakers, markers, zoom, selectedMaker, content} = state;

        if (_.isEmpty(markers)) {
            return <div>Loading....</div>
        }
        return (
            <MapElement background ={variables.$sub_bg}>
                <div className="filters">
                    <button onClick={this.filterSomeMakers}>Filter Somes</button>
                    <button onClick={this.filterAndCenter}>Filter And center</button>
                    <button onClick={this.resetMarker}>Reset</button>
                </div>
                <GettingPropertiesExampleGoogleMap
                    containerElement={
                        <div className="embed-responsive embed-responsive-21by9"/>
                    }
                    mapElement={<div className="embed-responsive-item"/>}
                    onMapMounted={this.handleMapMounted}
                    onZoomChanged={this.handleZoomChanged}
                    markers={filterMakers}
                    center={{lat: selectedMaker.latitude, lng: selectedMaker.longitude}}
                    zoom={zoom}
                    content={content}
                    handleToggleOpen={this.onMakerClicked}
                    markerId={selectedMaker.photo_id}
                />
                {/*<ShowMarkerInfor marker={selectedMaker}/>*/}
            </MapElement>
        )
    };

    render() {
        return this.buildComponent(this.props, this.state);
    }
}

Map.propTypes = {
    zoom: PropTypes.number,
    markers: PropTypes.array
};

export default Map;