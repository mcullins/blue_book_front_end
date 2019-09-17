import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-lam-long-term-perf',
  templateUrl: './lam-long-term-perf.component.html',
  styleUrls: ['./lam-long-term-perf.component.css']
})
export class LamLongTermPerfComponent implements OnInit {


    Highcharts = Highcharts;
    date: any = new Date();
    chartOptions = {
        chart: {
            type: 'columnrange',
            marginBottom: 100,
            events: {
                load: function () {
                    var label = this.renderer.label("\xb9 GDP Deflator +6% <br> \xb2 EAFE")
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
            text: 'Performance Relative To Manager Universe (Intl Large Cap Relative Growth)'
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
            tickPositions: [-14, -11, -8, -5, -2, 1, 4, 7, 10],
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
  
            //First three grouping 
            {
                data: [
                    { x: 0, low: -4.5, high: -2.2 },
                    { x: 0, low: -2.2, high: 0 },
                    { x: 0, low: 0, high: 0.5 },
                    { x: 0, low: 0.5, high: 1.4 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                data: [
                    { x: 1, low: -4.5, high: -2.2 },
                    { x: 1, low: -2.2, high: 0 },
                    { x: 1, low: 0, high: 0.5 },
                    { x: 1, low: 0.5, high: 1.4 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 2, low: -11, high: -8 },
                    { x: 2, low: -8, high: -5.5 },
                    { x: 2, low: -5.5, high: -4.5 },
                    { x: 2, low: -4.5, high: 0 }],
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
                    { x: 5, low: 1, high: 2.5 },
                    { x: 5, low: 2.5, high: 3.5 },
                    { x: 5, low: 3.5, high: 5 },
                    { x: 5, low: 5, high: 6.5 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                yAxis: 1,
                data: [
                    { x: 6, low: 1.5, high: 2.5 },
                    { x: 6, low: 2.5, high: 3.5 },
                    { x: 6, low: 3.5, high: 4.8 },
                    { x: 6, low: 4.8, high: 5.8 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                yAxis: 1,
                data: [
                    { x: 7, low: 2, high: 2.8 },
                    { x: 7, low: 2.8, high: 3.5 },
                    { x: 7, low: 3.5, high: 4.5 },
                    { x: 7, low: 4.5, high: 5.8 }],
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
                [2, -7],
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
            name: 'Absolute Objective\xb9',
            type: 'scatter',
            data: [
                [0, 1.5],
                [1, 1.5],
                [2, 7],
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
                [5, 7.6],
                [6, 7.7],
                [7, 7.8]
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
                [0, -2.5],
                [1, -2.5],
                [2, -8.1],
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
                [5, 2.1],
                [6, 2.2],
                [7, 1.9]
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