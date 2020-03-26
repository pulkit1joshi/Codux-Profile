import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2'

const options = {

	maintainAspectRatio: false,
	showAllTooltips: true,
	tooltips: {
		callbacks: {
			title: function (tooltipItem, data) {
				return;
			}
		}
	},
	legend: {
		display: true,
		position: 'right',
		labels: {
			display: false,
			usePointStyle: true,
			fontSize: 10,
		},
	},
	plugins: {
		datalabels: {
			display: false,
			color: 'white',
		}
	},
}

export default class PieChart extends Component {


	componentDidMount() {
		this.forceUpdate();

	}
	getdata = (canvas) => {

		var coloR = [];
		if (this.props.color)
			coloR = this.props.color;

		var dynamicColors = function () {
			var r = Math.floor(Math.random() * 255);
			var g = Math.floor(Math.random() * 255);
			var b = Math.floor(Math.random() * 255);
			r = r.toString(16);
			g = g.toString(16);
			b = b.toString(16);
			return "#" + r + g + b;
		};



		var data2 = [];
		var labels = [];
		console.log(this.props.tags);
		this.props.tags.map((tag, index) => {
			data2.push(this.props.data[tag].length)
			labels.push(tag);
			return 0;
		})
		while (coloR.length < labels.length) {
			let col = dynamicColors();
			console.log(col);
			while (coloR.indexOf(col) !== -1)
				col = dynamicColors();
			coloR.push(col);
		}

		for (let i = 0; i < labels.length; i++) {
			labels[i] = labels[i] + " : " + data2[i];
		}
		let data = {
			labels: labels,
			datasets: [
				{
					label: 'Questions',
					data: data2,
					backgroundColor: coloR,
					borderWidth: 0.1,
				}
			],


		}

		return data;
	}
	render() {
		return (
			<div>
				<Pie data={this.getdata}
					height={300}
					options={options}
					ref={(Pie) => { this.chartto = Pie }}
				/>
			</div >
		);
	}
}