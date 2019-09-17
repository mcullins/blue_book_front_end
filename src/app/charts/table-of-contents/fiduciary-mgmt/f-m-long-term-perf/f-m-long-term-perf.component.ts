import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-f-m-long-term-perf',
  templateUrl: './f-m-long-term-perf.component.html',
  styleUrls: ['./f-m-long-term-perf.component.css']
})
export class FMLongTermPerfComponent implements OnInit {


    Highcharts = Highcharts;
    date: any = new Date();
    chartOptions = {
        chart: {
            type: 'columnrange',
            marginBottom: 100,
            events: {
                load: function () {
                    var label = this.renderer.label("\xb9 GDP Deflator +8% <br> \xb2 R2000V")
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
            text: 'Performance Relative To Manager Universe (Specialty Small Relative Value)'
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
            min: -7,
            max: 9,
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
            tickPositions: [0, 2, 4, 6, 8, 10, 12, 14, 16],
            opposite: true,
            title: {
                text: ''
            }
        }],

        series: [
        //    {
        //    data: [
        //        [-1, 0, 2.5, 3.5, 7],
        //        [-1, 0, 2.5, 3.5, 7],
        //        [-13, -9, -5, -1, 0],
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
        //        [4, 7, 9, 10.5, 13],
        //        [6, 8, 9, 10.5, 12.5],
        //        [5, 7, 8, 8.5, 11]
        //    ],
            //color: 'black',
            //showInLegend: false,
            //grouping: false
            //},
            {
                data: [
                    { x: 0, low: -1, high: 0 },
                    { x: 0, low: 0, high: 2.5 },
                    { x: 0, low: 2.5, high: 3.5 },
                    { x: 0, low: 3.5, high: 7 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                data: [
                    { x: 1, low: -1, high: 0 },
                    { x: 1, low: 0, high: 2.5 },
                    { x: 1, low: 2.5, high: 3.5 },
                    { x: 1, low: 3.5, high: 7 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 2, low: -13, high: -9 },
                    { x: 2, low: -9, high: -5 },
                    { x: 2, low: -5, high: -1 },
                    { x: 2, low: -1, high: 0 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            },

            {
                yAxis: 1,
                data: [
                    { x: 5, low: 4, high: 7 },
                    { x: 5, low: 7, high: 9 },
                    { x: 5, low: 9, high: 10.5 },
                    { x: 5, low: 10.5, high: 13 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                yAxis: 1,
                data: [
                    { x: 6, low: 6, high: 8 },
                    { x: 6, low: 8, high: 9 },
                    { x: 6, low: 9, high: 10.5 },
                    { x: 6, low: 10.5, high: 12.5 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                yAxis: 1,
                data: [
                    { x: 7, low: 5, high: 7 },
                    { x: 7, low: 7, high: 8 },
                    { x: 7, low: 8, high: 8.5 },
                    { x: 7, low: 8.5, high: 11 }],
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
                [0, 6],
                [1, 6],
                [2, -3],
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
                [5, 9],
                [],
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
                [0, 2],
                [1, 2],
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
                [6, 9.8],
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
                [0, 1.5],
                [1, 1.5],
                [2, -8],
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
                [5, 5.5],
                [6, 6.5],
                [7, 4.3]
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