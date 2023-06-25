import { AMADEUS_AUTH_URL, AMAEDEUS_BASE_URL, HEADERS, CREDENTIALS, formatAsPercent} from "../utils";
import "./styles/Analytics.css";
import React, { useState, useEffect} from "react";
import Chart from "react-apexcharts";

function generateDayWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = baseval;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([x, y]);
    baseval += 86400000;
    i++;
  }
  return series;
}

const Analytics = () => {
  const stackedBarChartState = {
    series: [{
      name: 'Singapore',
      data: [44, 55, 41, 37, 22, 43, 21]
    }, {
      name: 'Indonesia',
      data: [53, 32, 33, 52, 13, 43, 32]
    }, {
      name: 'India',
      data: [12, 17, 11, 9, 15, 11, 20]
    }, {
      name: 'China',
      data: [9, 7, 5, 8, 6, 9, 4]
    }, {
      name: 'Vietnam',
      data: [25, 12, 19, 32, 25, 24, 10]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        stackType: '100%'
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff']
      },
      title: {
        text: 'Sales by Customer Home Country'
      },
      xaxis: {
        categories: ["January", "February", "March", "April", "May", "June", "July"],
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + "K"
          }
        }
      },
      fill: {
        opacity: 1
      
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
      }
    },
  }

  const donutChartState = {
    options: {
      title: {
        text: 'Rating'
      },
      labels: ['5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Star']
    },
    series: [55.2, 28.4, 10.3, 2, 4.1],

  }

  const areaChartState = {
    series: [
      {
        name: 'Bangkok',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'Kuala Lumpur',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 20
        })
      },
      {
        name: 'Jakarta',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 15
        })
      }
    ],
    options: {
      chart: {
        type: 'area',
        height: 350,
        stacked: true,
        events: {
          selection: function (chart, e) {
            console.log(new Date(e.xaxis.min))
          }
        },
      },
      colors: [ '#8F00FF','#008FFB', '#00E396'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.6,
          opacityTo: 0.8,
        }
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left'
      },
      title: {
        text: 'Sales by branches'
      },
      xaxis: {
        type: 'datetime'
      },
    },
  }

  const columnChartState = {
    series: [{
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }, {
      name: 'Free Cash Flow',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      yaxis: {
        title: {
          text: '$ (thousands)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands"
          }
        }
      }
    },
  }

  const [cityCode, setCityCode] = useState("");
  const [topDestinations, setTopDestinations] = useState([]);
  const [pointsOfInterests, setPointsOfInterests] = useState([]);
  useEffect(
    () => {
      getTopDestinations();
      },[]      
  )

  const getAccessToken = async ()=>{
    try {
      const res = await fetch(AMADEUS_AUTH_URL, {
        method: "POST",
        headers: HEADERS,
        body: CREDENTIALS
      })
      const data = await res.json();
      return data.access_token;
    }catch (error) {
      console.error(error);
    }
  }

  const getTopDestinations = async (cityCode)=>{
      const accessToken = await getAccessToken();
      fetch(AMAEDEUS_BASE_URL + "recommended-locations?cityCodes=HAN", {
        method: "GET",
        headers:{
          "Authorization" : "Bearer " + accessToken
        }
        })
        .then(response => response.json())
        .then(res=> setTopDestinations(res.data))
        .catch(error => {
          console.error(error);
        });

      fetch(AMAEDEUS_BASE_URL + "locations/pois/by-square?north=13.023577&west=77.536856&south=12.923210&east=77.642256&page%5Blimit%5D=10&page%5Boffset%5D=0", {
          method: "GET",
          headers:{
            "Authorization" : "Bearer " + accessToken
          }
          })
          .then(response => response.json())
          .then(res=> setPointsOfInterests(res.data))
          .catch(error => {
            console.error(error);
          });

  }
  
  return (
<div class="grid-container">
  <div class="grid-item">
   <Chart
     options={areaChartState.options}
     series={areaChartState.series}
     type="area"
   />
    </div>
  <div class="grid-item">
     <Chart
         options={stackedBarChartState.options}
         series={stackedBarChartState.series}
         type="bar"
       />
      </div>

  <div class="grid-item">
    <Chart 
        options={columnChartState.options}
        series={columnChartState.series}
        type="bar"
      />
    </div>
    <div class="grid-item">
    <Chart
        options={donutChartState.options}
        series={donutChartState.series}
        type="donut" 
       />
  </div>
  <div class="grid-item">
  <p>Tourists who travel here are also interested in: </p>
    {topDestinations.map(
      (destination)=>(
        <div>
          <span>{destination.name }</span> {" "}
          <span>{formatAsPercent(destination.relevance)}</span>
        </div>
      )
    )}
  </div>
    <div class="grid-item">
      <p>Points of interests in Bangalore</p>
    {pointsOfInterests.map(
      (point)=>(
        <div>
          <span>{point.name }</span> {" "}
        </div>
      )
    )}
    </div>
    
</div>


  );
};

export default Analytics;
