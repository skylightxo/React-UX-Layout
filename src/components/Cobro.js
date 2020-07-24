import React from "react";
import Chart from "react-apexcharts";

class Bar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [
            400,
            430,
            448,
            470,
            540,
            580,
            690,
            1100,
            1200,
            1380,
            650,
            750,
            300,
          ],
        },
      ],
      options: {
        chart: {
          type: "bar",
        },
        fill: {
          type: "gradient",
          gradient: {
            type: "vertical",
            opacityFrom: 0.7,
            opacityTo: 0.9,
            colorStops: [
              {
                offset: 0,
                color: "#1767AC",
              },
              {
                offset: 100,
                color: "#8CF4EA",
              },
            ],
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "20%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [
            "South Korea",
            "Canada",
            "United Kingdom",
            "Netherlands",
            "Italy",
            "France",
            "Japan",
            "United States",
            "China",
            "Germany",
            "Ukraine",
            "Russia",
            "Moldova",
          ],
          labels: {
            style: {
              colors: "rgba(255, 255, 255, 0.6)",
              fontFamily: "Montserrat, Helvetica",
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: "rgba(255, 255, 255, 0.6)",
              fontFamily: "Montserrat, Helvetica",
            },
          },
        },
        grid: {
          show: true,
          borderColor: "rgba(255, 255, 255, 0.1)",
          position: "back",
          xaxis: {
            lines: {
              show: false,
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width="100%"
        />
      </div>
    );
  }
}

export default Bar;
