import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'

const options = {
	showAllTooltips: true,
	tooltips: {
	  callbacks: {
		title: function(tooltipItem, data) {
		  return;
		}
	  }
	}
  }

export default class Graph extends Component {
    getdata=() => {
        var data2 =[];
        var labels = [];
		this.props.data.map((datapoint, index) => 
			{
			data2.push(datapoint);
			labels.push(index);
			return 0;
			}
		);
        let data = {
            labels: this.props.labels,
            datasets: [
                {
                    label: 'Rating',
                    backgroundColor: 'rgba(65, 142, 200, 0.2)',
					borderColor: 'rgba(65, 142, 200, 1)',
					borderWidth: 1,
                    data: data2,
                },
			],
		}
        return data;
    }
    render() {
		return (
		<div>
			<Line options={options} data={this.getdata}/>
		</div>
		);
	}
}