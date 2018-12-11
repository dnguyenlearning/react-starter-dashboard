import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import styled from "styled-components";

const Thumbnail = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background: ${props =>`url(${props.background}) no-repeat center center`};
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
`;


export default function UserAvatar(props){
    const {imageUrl, name, phone} = props.userInfo;
    return (
        <div id="userAvatar" className="d-flex">
            <Thumbnail background={imageUrl}/>
            <div className="details">
                <span className="fullname">{name}</span>
                <span className="phone">{phone}</span>
            </div>
        </div>
    )
}


UserAvatar.Protypes = {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
}