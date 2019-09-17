import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-ls-long-term-perf',
  templateUrl: './ls-long-term-perf.component.html',
  styleUrls: ['./ls-long-term-perf.component.css']
})
export class LsLongTermPerfComponent implements OnInit {


    Highcharts = Highcharts;
    date: any = new Date();
    chartOptions = {
        chart: {
            type: 'columnrange',
            marginBottom: 100,
            events: {
                load: function () {
                    var label = this.renderer.label("\xb9 GDP Deflator +3% <br> \xb2 BC Agg - Benchmark has changed since inception")
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
            text: 'Performance Relative To Manager Universe (Core Extended)'
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
            tickPositions: [-7, -5, -3, -1, 1, 3, 5, 7, 9],
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
            tickPositions: [-4, -2, 0, 2, 4, 6, 8, 10, 12],
            opposite: true,
            title: {
                text: ''
            }
        }],

        series: [
        //    {
        //    data: [
        //        [2, 2.5, 3, 3.2, 3.7],
        //        [2, 2.5, 3, 3.2, 3.7],
        //        [-1.1, 0.2, 1, 1.8, 2],
        //        [],
        //        [],
        //        [],
        //        [],
        //        []
        //    ],
        //    color: 'black',
        //    showInLegend: false,
        //    grouping: false
        //}, {
        //    yAxis: 1,
        //    data: [
        //        [],
        //        [],
        //        [],
        //        [],
        //        [],
        //        [2, 2.2, 2.4, 2.6, 3.5],
        //        [4, 4.2, 4.4, 4.6, 5.5],
        //        [5, 5.5, 5.7, 6.1, 7.2]
        //    ],
        //    color: 'black',
        //    showInLegend: false,
        //    grouping: false
        //},
            //First three grouping 
            {
                data: [
                    { x: 0, low: 2, high: 2.5 },
                    { x: 0, low: 2.5, high: 3 },
                    { x: 0, low: 3, high: 3.2 },
                    { x: 0, low: 3.2, high: 3.7 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                data: [
                    { x: 1, low: 2, high: 2.5 },
                    { x: 1, low: 2.5, high: 3 },
                    { x: 1, low: 3, high: 3.2 },
                    { x: 1, low: 3.2, high: 3.7 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 2, low: -1.1, high: 0.2 },
                    { x: 2, low: 0.2, high: 1 },
                    { x: 2, low: 1, high: 1.8 },
                    { x: 2, low: 1.8, high: 2 }],
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
                    { x: 5, low: 2, high: 2.2 },
                    { x: 5, low: 2.2, high: 2.4 },
                    { x: 5, low: 2.4, high: 2.6 },
                    { x: 5, low: 2.6, high: 3.5 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                yAxis: 1,
                data: [
                    { x: 6, low: 4, high: 4.2 },
                    { x: 6, low: 4.2, high: 4.4 },
                    { x: 6, low: 4.4, high: 4.6 },
                    { x: 6, low: 4.6, high: 5.5 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                yAxis: 1,
                data: [
                    { x: 7, low: 5, high: 5.5 },
                    { x: 7, low: 5.5, high: 5.7 },
                    { x: 7, low: 5.7, high: 6.1 },
                    { x: 7, low: 6.1, high: 7.2 }],
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
                [0, 4.3],
                [1, 4.3],
                [2, 0.1],
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
                [5, 2.5],
                [6, 4.5],
                [7, 5.1]
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
                [0, 0.9],
                [1, 0.9],
                [2, 4.4],
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
                [5, 4.1],
                [6, 4.3],
                [7, 4.4]
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
                [0, 3],
                [1, 3],
                [2, 2],
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
                [5, 2.5],
                [6, 4],
                [7, 4.8]
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