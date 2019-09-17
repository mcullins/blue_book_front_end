import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-sit-long-term-perf',
  templateUrl: './sit-long-term-perf.component.html',
  styleUrls: ['./sit-long-term-perf.component.css']
})
export class SitLongTermPerfComponent implements OnInit {


    Highcharts = Highcharts;
    date: any = new Date();
    chartOptions = {
        chart: {
            type: 'columnrange',
            marginBottom: 100,
            events: {
                load: function () {
                    var label = this.renderer.label("\xb9 GDP Deflator +6% <br> \xb2 R1000G")
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
            text: 'Performance Relative To Manager Universe (Core Growth)'
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
            tickPositions: [-12, -9, -6, -3, 0, 3, 6, 9, 12],
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
            tickPositions: [3, 5, 7, 9, 11, 13, 15, 17, 19],
            opposite: true,
            title: {
                text: ''
            }
        }],

        series: [
        //    {
        //    data: [
        //        [-6, -3.2, -2.5, -.5, 1.5],
        //        [-6, -3.2, -2.5, -.5, 1.5],
        //        [-7, -2.5, -.5, 1, 3.5],
        //        [],
        //        [],
        //        [],
        //        [],
        //        []
        //    ],
        //    color: 'black',
        //    showInLegend: false,
        //    grouping: false
        //    },
        //    {
        //    yAxis: 1,
        //    data: [
        //        [],
        //        [],
        //        [],
        //        [],
        //        [],
        //        [9, 11.5, 13, 14.5, 15.5],
        //        [8, 10.5, 11.5, 12.5, 13.5],
        //        [6, 7, 8.5, 9, 10]
        //    ],
        //    color: 'black',
        //    showInLegend: false,
        //    grouping: false
        //},
            {
                data: [
                    { x: 0, low: -6, high: -3.2 },
                    { x: 0, low: -3.2, high: -2.5 },
                    { x: 0, low: -2.5, high: -.5 },
                    { x: 0, low: -.5, high: 1.5 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                data: [
                    { x: 1, low: -6, high: -3.2 },
                    { x: 1, low: -3.2, high: -2.5 },
                    { x: 1, low: -2.5, high: -.5 },
                    { x: 1, low: -.5, high: 1.5 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 2, low: -7, high: -2.5 },
                    { x: 2, low: -2.5, high: -.5 },
                    { x: 2, low: -.5, high: 1 },
                    { x: 2, low: 1, high: 3.5 }],
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
                    { x: 5, low: 9, high: 11.5 },
                    { x: 5, low: 11.5, high: 13 },
                    { x: 5, low: 13, high: 14.5 },
                    { x: 5, low: 14.5, high: 15.5 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                yAxis: 1,
                data: [
                    { x: 6, low: 8, high: 10.5 },
                    { x: 6, low: 10.5, high: 11.5 },
                    { x: 6, low: 11.5, high: 12.5 },
                    { x: 6, low: 12.5, high: 13.5 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                yAxis: 1,
                data: [
                    { x: 7, low: 6, high: 7 },
                    { x: 7, low: 7, high: 8.5 },
                    { x: 7, low: 8.5, high: 9 },
                    { x: 7, low: 9, high: 10 }],
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
                [0, .5],
                [1, .5],
                [2, 3],
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
                [5, 12],
                [6, 11],
                [7, 7.5]
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
                [0, 2],
                [1, 2],
                [2, 6.5],
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
                [5, 7],
                [6, 7.5],
                [7, 7.5]
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
                [0, .5],
                [1, .5],
                [2, -6.5],
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
                [5, 13.5],
                [6, 12],
                [7, 8]
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