import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import "./index.scss"
/**
 * Create Data
 * @type {number}
 */
let id = 0;

function createData(title, stores, cat, activeUsers, progress, deliverable) {
    id += 1;
    return {id, title, stores, cat, activeUsers, progress, deliverable};
}


const rows = [
    createData('Frozen yoghurt, extended string to make it longer', 159, "TO && DTH", 24, "-", 100),
    createData('Ice cream sandwich', 200, "TO", 12, "-", 241),
    createData('Eclair', 159, "DTH", 14, "-", 125),
    createData('Cupcake', 219, "ZH", 124, "-", 51),
    createData('Gingerbread', 159, "TO && DTH", 24, "-", 100),
    createData('fqr124 co', 19, "ZL", 124, "-", 121),
    createData('fqr124 co', 19, "ZL", 124, "-", 121),
    createData('fqr124 co', 19, "ZL", 124, "-", 121),
];

/**
 * Create a Table
 */


class CustomTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: rows,
            selectedRow: {}
        };
    }


    buildComponent = (props, state) => {
        const {data} = this.state;
        return (
            <div id="dashboard_custom_table">
                <ReactTable
                    data={data}
                    columns={[
                        {
                            Header: "Title",
                            accessor: "title",
                            minWidth: 300
                        },
                        {
                            Header: "Stores",
                            accessor: "stores"
                        },
                        {
                            Header: "Cat",
                            accessor: "cat"
                        },
                        {
                            Header: "Active Users",
                            accessor: "activeUsers"
                        },
                        {
                            Header: "Progress",
                            accessor: "progress"
                        },
                        {
                            Header: "Delivarable",
                            accessor: "deliverable"
                        }
                    ]}
                    getTdProps={(state, rowInfo, column, instance) => {
                        return {
                            onMouseDown: e =>{
                                console.log('Selected Row', rowInfo.original);
                                let rowData = rowInfo.original;
                                this.setState({
                                    selectedRow: rowData
                                })
                            }
                        };
                    }}
                    defaultSorted={[
                        {
                            id: "stores",
                            desc: true
                        }
                    ]}
                    defaultPageSize={data.length}
                    className=" -highlight custom"
                />
            </div>
        );
    };

    render() {
        return this.buildComponent(this.props, this.state)
    }
}

export default CustomTable;