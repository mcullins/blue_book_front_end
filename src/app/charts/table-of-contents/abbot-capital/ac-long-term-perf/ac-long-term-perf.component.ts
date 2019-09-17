import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-ac-long-term-perf',
  templateUrl: './ac-long-term-perf.component.html',
  styleUrls: ['./ac-long-term-perf.component.css']
})
export class AcLongTermPerfComponent implements OnInit {


    Highcharts = Highcharts;
    date: any = new Date();
    chartOptions = {
        chart: {
            type: 'columnrange',
            marginBottom: 100,
            events: {
                load: function () {
                    var label = this.renderer.label("\xb9 GDP Deflator +8% <br> \xb2 Big PE Abbot")
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
            text: 'Performance Relative To Manager Universe (Domestic Equity Composite)'
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
            tickPositions: [-17, -13, -9, -5, -1, 3, 7, 11, 15],
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
            tickPositions: [2, 4, 6, 8, 10, 12, 14, 16, 18],
            opposite: true,
            title: {
                text: ''
            }
        }],

        series: [
 
            //First three grouping 
            {
                data: [
                    { x: 0, low: -5.1, high: -1.2 },
                    { x: 0, low: -1.2, high: 0 },
                    { x: 0, low: 0, high: 2.7 },
                    { x: 0, low: 2.7, high: 5 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                data: [
                    { x: 1, low: -5.1, high: -1.2 },
                    { x: 1, low: -1.2, high: 0 },
                    { x: 1, low: 0, high: 2.7 },
                    { x: 1, low: 2.7, high: 5 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 2, low: -13, high: -7 },
                    { x: 2, low: -7, high: -4 },
                    { x: 2, low: -4, high: -0.8 },
                    { x: 2, low: -.8, high: 3.1 }],
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
                    { x: 5, low: 5, high: 8.1 },
                    { x: 5, low: 8.1, high: 10 },
                    { x: 5, low: 10, high: 11.9 },
                    { x: 5, low: 11.9, high: 14.5 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                yAxis: 1,
                data: [
                    { x: 6, low: 6, high: 8.2 },
                    { x: 6, low: 8.2, high: 10 },
                    { x: 6, low: 10, high: 11.5 },
                    { x: 6, low: 11.5, high: 13 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                yAxis: 1,
                data: [
                    { x: 7, low: 4.5, high: 6.1 },
                    { x: 7, low: 6.1, high: 7.5 },
                    { x: 7, low: 7.5, high: 8.1 },
                    { x: 7, low: 8.1, high: 10 }],
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
                [2, 11],
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
                [5, 12.3],
                [6, 8.1],
                []
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
                [0, 2.7],
                [1, 2.7],
                [2, 10],
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
                [5, 9.5],
                [6, 9.7],
                [7, 10]
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
                [0, 7.5],
                [1, 7.5],
                [2, 2.8],
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
                [5, 15.5],
                [6, 10],
                []
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