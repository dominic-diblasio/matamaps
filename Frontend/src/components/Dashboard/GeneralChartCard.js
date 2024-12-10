import React from "react";
import { useState } from "react";
import Chart from 'react-apexcharts';

function GeneralChartCard (props){
    const{identity,Title,TitleRight,extraDivBody,data} = props;
    const [option,setOption]= useState(data.options);
    const [series,setSeries] = useState(data.options.series);
        return(
            <div className="card">
                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                    <h6 className="mb-0 fw-bold ">{Title}</h6>
                    {TitleRight?<h4 className="mb-0 fw-bold">{TitleRight}</h4>:null}
                </div>
                <div className="card-body" >
                    {extraDivBody?extraDivBody():null}
                    <div ac-chart="'donut'" id={"SimpleCahrt"+identity}>
                        <Chart 
                            options={option} 
                            series={series} 
                            type={option?option.chart.type:"bar"} 
                            height={option?option.chart.height:320} 
                        />
                    </div>
                </div>
            </div>
            
        )
    }


export default GeneralChartCard;