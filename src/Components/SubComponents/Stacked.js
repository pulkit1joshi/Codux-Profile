import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'
import 'chartjs-plugin-datalabels';

const options = {
    maintainAspectRatio: false,
    scales: {
        xAxes: [{
            stacked: true
        }],
        yAxes: [{
            stacked: true,
            ticks: {
                beginAtZero: true,
                steps: 7,
                stepValue: 1,
                max: 7 //max value for the chart is 60
            }
        }]
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
            display: false,
            color: 'white',
        }
    },
}

export default class SBar extends Component {


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


        /* //console.log(this.props.tags);
         var data2 = [];
         var labels = [];
         //console.log(this.props.tags);
         this.props.tags.map((tag, index) => {
             data2.push(this.props.data[tag])
             labels.push(tag);
             return 0;
         })
         while (coloR.length < labels.length) {
             let col = dynamicColors();
             //console.log(col);
             while (coloR.indexOf(col) !== -1)
                 col = dynamicColors();
             coloR.push(col);
         }*/

        let data2 = [];
        let dat = [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        for (let i = dat.length; i < 375; i++) {
            dat.push(0);
            i++;
        }

        for (let i = 0; i < 7; i++) {
            let val = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
            let data3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (let j = 0; j < 30; j++) {
                if (dat[j * 7 + i] == 1) {
                    val[j] = 0;
                    data3[j] = 1;
                }
                else {

                    val[j] = 1;
                    data3[j] = 0;
                }
            }
            data2.push({
                label: '',
                data: val,
                backgroundColor: '#FFFFFF',
                borderWidth: 0.1,
            })
            data2.push({
                label: '',
                data: data3,
                backgroundColor: '#92C67D',
                borderWidth: 0.1,
            })
        }
        let data = {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
            datasets: data2,
        }
        return data;
    }
    render() {
        //console.log("Height is:" + this.state.height);
        return (
            <div>
                <Bar data={this.getdata} options={options} />
            </div >
        );
    }
}