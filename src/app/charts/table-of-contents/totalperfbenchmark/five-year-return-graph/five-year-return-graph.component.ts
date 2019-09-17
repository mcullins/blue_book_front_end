import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


// Highcharts3d(Highcharts);

@Component({
    selector: 'app-five-year-return-graph',
    templateUrl: './five-year-return-graph.component.html',
    styleUrls: ['./five-year-return-graph.component.css']
})
export class FiveYearReturnGraphComponent implements OnInit {

    Highcharts = Highcharts;

    chartOptions = {
        chart: {
            type: 'column',
            options3d: {
                enabled: false,
                alpha: 15,
                beta: 35,
                depth: 70
            }
        },

        title: {
            text: '5 Yr. Returns'
        },

        plotOptions: {
            column: {
                depth: 90,
                colorByPoint: true
            }
        },
        xAxis: {
            categories: ['Total Fund', 'Net of Fees', 'Relative Objective'],
            labels: {
                skew3d: true,
                style: {
                    fontSize: '18px'
                }
            }
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        yAxis: {
            labels: {
                format: '{value:.2f}' + '%'
            },
            title: {
                text: null
            }
        },
        tooltip: {
            valueDecimals: 2,
            formatter: function () {
                return this.x + ' ' + this.y + '%';
            }
        },

        colors: [
            '#730505',
            '#626262',
            '#050850'
        ],

        series: [{
            data: [
                {
                    name: 'Total Fund',
                    y: 7.15


                }, {
                    name: 'Net of Fees',
                    y: 6.75
                },
                {
                    name: 'Relative Objective',
                    y: 7.18
                }]


        }]

    }



    constructor() { }

    ngOnInit() {


    }
}

