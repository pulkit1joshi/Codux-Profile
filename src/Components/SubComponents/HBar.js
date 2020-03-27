import React, { Component } from 'react'
import { HorizontalBar } from 'react-chartjs-2'
import 'chartjs-plugin-datalabels';

const options = {
    maintainAspectRatio: false,
    scales: {
        axisY: {
            reversed: true,
        },
    },
    showAllTooltips: true,
    tooltips: {
        callbacks: {
            title: function (tooltipItem, data) {
                return;
            }
        }
    },
    legend: {
        display: false,
        label:
        {
            boxWidth: 20,
        }
    },
    plugins: {
        datalabels: {
            display: true,
            color: 'white',
        }
    },
}

export default class HBar extends Component {


    constructor(props) {
        super(props);
        this.state = {
            height: 0,
        }
    }

    componentDidMount() {
        // this.forceUpdate();

    }
    getdata = () => {
        var coloR = [];
        if (this.props.color)
            coloR = this.props.color;
        var dynamicColors = function () {
            var r = Math.floor(Math.random() * 255);
            var g = Math.floor(Math.random() * 255);
            var b = Math.floor(Math.random() * 255);
            return "rgb(" + r + "," + g + "," + b + ")";
        };


        //console.log(this.props.tags);
        var data2 = [];
        var labels = [];
        //console.log(this.props.tags);
        this.props.tags.map((tag, index) => {
            data2.push(this.props.data[tag].length)
            labels.push(tag);
            return 0;
        })
        while (coloR.length < labels.length) {
            let col = dynamicColors();
            //console.log(col);
            while (coloR.indexOf(col) !== -1)
                col = dynamicColors();
            coloR.push(col);
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
        //console.log("Height is:" + this.state.height);
        return (
            <div>
                <HorizontalBar data={this.getdata}
                    height={700}
                    options={options}
                />
            </div >
        );
    }
}