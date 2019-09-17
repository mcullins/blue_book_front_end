import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

import more from 'highcharts/highcharts-more';


@Component({
  selector: 'app-d-c-long-term-perf',
  templateUrl: './d-c-long-term-perf.component.html',
  styleUrls: ['./d-c-long-term-perf.component.css']
})
export class DCLongTermPerfComponent implements OnInit {
   

    Highcharts = Highcharts;
    date: any = new Date();
    chartOptions = {
        chart: {
            type: 'columnrange',
            marginBottom: 100,
            events: {
                load: function () {
                    var label = this.renderer.label("\xb9 +9% <br> \xb2 R1000V")
                        .add();

                    label.align(Highcharts.extend(label.getBBox(), {
                        align: 'left',
                        x: 0, // offset
                        verticalAlign: 'bottom',
                        y: 0 // offset
                    }), null, 'spacingBox');

                }
            }
        },

        title: {
            text: 'Trailing Performance Relative To Manager Universe (Core Relative Value)'
        },

        legend: {
            enabled: true,
            y: -200,
            x: 0,
            floating: true,
            layout: 'vertical',
            borderWidth: 1
        },
        credits: {
            enabled: false
        },

        plotOptions: {
            column: {
                stacking: 'normal',
                borderColor: '#303030',
                borderWidth: 1,
                dataLabels: {
                    enabled: false
                },
                grouping: false
            }
        },
        xAxis:
            {
                offset: 0,
                lineWidth: 0,
                title: {
                    text: ''
                },
                tickPositions: [0, 1, 2, 5, 6, 7],
                tickLength: 0,
                gridLineColor: 'transparent',
                "categories": {
                    "0": "One Quarter",
                    "1": "Year To Date",
                    "2": "One Year",
                    "5": "Three Years",
                    "6": "Five Years",
                    "7": "Ten Years"

                }
            },


        yAxis: [{
            tickLength: 10,
            tickWidth: 1,
            lineWidth: 1,
            tickColor: 'black',
            lineColor: 'black',
            tickPosition: 'inside',
            gridLineColor: 'transparent',
            min: -7,
            max: 9,
            tickPositions: [-11, -8, -5, -2, 1, 4, 7, 10, 13],
            title: {
                text: ''
            }
        }, {
            tickLength: 10,
            tickWidth: 1,
            lineWidth: 1,
            tickColor: 'black',
            lineColor: 'black',
            tickPosition: 'inside',
            gridLineWidth: 0,
            tickPositions: [1, 3, 5, 7, 9, 11, 13, 15, 17],
            opposite: true,
            title: {
                text: ''
            }
        }],

        series: [
            //First three grouping 
            {
            data: [
                { x:0, low: -2.2, high: -1},
                { x: 0, low:- 1, high: 0},
                { x: 0, low: 0, high: 2 },
                { x: 0, low: 2, high: 3.5 }],
            color: 'white',
            showInLegend: false,
            borderColor: '#303030',
            borderWidth: 1,
            grouping: false
        },
            {
                data: [
                    { x: 1, low: -2.2, high: -1 },
                    { x: 1, low: - 1, high: 0 },
                    { x: 1, low: 0, high: 2 },
                    { x: 1, low: 2, high: 3.5 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 2, low: -8, high: -4.8 },
                    { x: 2, low: - 4.8, high: -2 },
                    { x: 2, low: -2, high: 0 },
                    { x: 2, low: 0, high: 3 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            },
            //Last three grouping
     
            {
                yAxis: 1,
                data: [
                { x: 5, low: 6, high: 8.6 },
                { x: 5, low: 8.6, high: 10 },
                { x: 5, low: 10, high: 11 },
                { x: 5, low: 11, high: 12.5 }],
            color: 'white',
            showInLegend: false,
            borderColor: '#303030',
            borderWidth: 1,
            grouping: false
        },
            {
                yAxis: 1,
              data: [
            { x: 6, low: 7, high: 9 },
            { x: 6, low: 9, high: 10 },
            { x: 6, low: 10, high: 11.5},
            { x: 6, low: 11.5, high: 13.3 }],
            color: 'white',
            showInLegend: false,
            borderColor: '#303030',
            borderWidth: 1,
            grouping: false
            }, {
                yAxis: 1,
              data: [
            { x: 7, low: 4.5, high: 6 },
            { x: 7, low: 6, high: 6.8 },
            { x: 7, low: 6.8, high: 7.9 },
            { x: 7, low: 7.9, high: 8.9 }],
            color: 'white',
            showInLegend: false,
            borderColor: '#303030',
            borderWidth: 1,
            grouping: false

                },
            
        {
            name: 'Total Fund',
            type: 'scatter',
            data: [
                [0, -1],
                [1, -1],
                [2, -4],
                [],
                [],
                [],
                [],
                []
            ],
            marker: {
                fillColor: 'black',
                lineWidth: 1,
                lineColor: 'black'
            },
            color: '#000000',
            tooltip: {
                pointFormat: '{point.y}'
            }
        },
        {
            name: 'Total Fund',
            type: 'scatter',
            yAxis: 1,
            data: [
                [],
                [],
                [],
                [],
                [],
                [5, 9.8],
                [6, 10],
                [7, 5]
            ],
            showInLegend: false,
            marker: {
                fillColor: 'black',
                lineWidth: 1,
                lineColor: 'black',
                symbol: 'circle'
            },
            color: '#000000',
            tooltip: {
                pointFormat: '{point.y}'
            }
        },
        {
            name: 'Absolute Objective\xb9',
            type: 'scatter',
            data: [
                [0, 2.5],
                [1, 2.5],
                [2, 9],
                [],
                [],
                [],
                [],
                []
            ],
            color: '#000000',
            marker: {
                fillColor: 'white',
                lineWidth: 1,
                lineColor: 'black'
            },
            tooltip: {
                pointFormat: '{point.y}'
            }
        }, {
            name: 'Absolute Objective\xb9',
            type: 'scatter',
            yAxis: 1,
            data: [
                [],
                [],
                [],
                [],
                [],
                [5, 9],
                [6, 9],
                [7, 9]
            ],
            color: '#000000',
            marker: {
                fillColor: 'white',
                lineWidth: 1,
                lineColor: 'black',
                symbol: 'diamond',
            },
            tooltip: {
                pointFormat: '{point.y}'
            },
            showInLegend: false,
        },
        {
            name: 'Relative Benchmark\xb2',
            color: '#000000',
            type: 'scatter',
            data: [
                [0, 2],
                [1, 2],
                [2, -1.5],
                [],
                [],
                [],
                [],
                []
            ],
            marker: {
                fillColor: 'white',
                lineWidth: 1,
                lineColor: 'black',
                symbol: 'triangle'
            },
            tooltip: {
                pointFormat: '{point.y}',
            }
        },
        {
            name: 'Relative Benchmark\xb2',
            type: 'scatter',
            yAxis: 1,
            data: [
                [],
                [],
                [],
                [],
                [],
                [5, 9.1],
                [6, 10],
                [7, 5.8]
            ],
            color: '#000000',
            marker: {
                fillColor: 'white',
                lineWidth: 1,
                lineColor: 'black',
                symbol: 'triangle',
            },
            tooltip: {
                pointFormat: '{point.y}'
            },
            showInLegend: false,
        },
        ],
    }

    constructor() { }

    ngOnInit() {
    }

}