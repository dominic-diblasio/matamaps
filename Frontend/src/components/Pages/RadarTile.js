import React, { useState } from "react";
import Chart from "react-apexcharts";
import { Dropdown } from "react-bootstrap";

function RadarTile(props) {

    const { data } = props;
    const [options, setOptions] = useState(data.chartData ? data.chartData.options : "");
    const [series, setSeries] = useState(data.chartData ? data.chartData.series : "");
    
    return (
        <div className="card mb-4">
            <div className="card-header d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                <h6 className="m-0">{data.title}</h6>
                <Dropdown drop="left">
                    <button className="btn btn-sm btn-link text-muted" type="button"><i className="fa fa-external-link"></i></button>
                    <Dropdown.Toggle variant="" className="btn btn-sm btn-link text-muted">
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#!">Action</Dropdown.Item>
                        <Dropdown.Item href="#!">Another action</Dropdown.Item>
                        <Dropdown.Item href="#!">Something else here</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className="card-body">
                {options ? <Chart
                    options={options}
                    series={series}
                    type={options ? options.chart.type : "bar"}
                    height={options ? options.chart.height : 315}
                /> : null}
            </div>
        </div>
    );
}


export default RadarTile;