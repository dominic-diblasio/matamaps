import React, { useState } from "react";
import Chart from "react-apexcharts";

function SimpleChartTile(props) {
  const { data } = props;
  const [options, setOptions] = useState(data.chartData ? data.chartData.options : "");
  const [series, setSeries] = useState(data.chartData ? data.chartData.series : "");

  return (
    <div className="card mb-4">
      <div className="card-body">
        {options ? <Chart
          options={options}
          series={series}
          type={options ? options.chart.type : "bar"}
          height={options ? options.chart.height : 315}
          width={options ? options.chart.width : 100}
        /> : null}
      </div>
    </div>
  );
}


export default SimpleChartTile;