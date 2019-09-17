import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-ubs-long-term-perf',
  templateUrl: './ubs-long-term-perf.component.html',
  styleUrls: ['./ubs-long-term-perf.component.css']
})
export class UbsLongTermPerfComponent implements OnInit {

    Highcharts = Highcharts;
    date: any = new Date();
    chartOptions = {
        chart: {
            type: 'columnrange',
            marginBottom: 100,
            events: {
                load: function () {
                    var label = this.renderer.label("\xb9 Mo Libor +3% <br> \xb2 HFR Cns")
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
            text: 'Performance Relative To Manager Universe (Hedge Funds Absolute Return)'
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
            tickPositions: [-11, -9, -7, -5, -3, -1, 1, 3, 5],
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
            tickPositions: [-3, -1, 1, 3, 5, 7, 9, 11, 13],
            opposite: true,
            title: {
                text: ''
            }
        }],

        series: [
      
            //First three grouping 
            {
                data: [
                    { x: 0, low: -4.5, high: -3.2 },
                    { x: 0, low: -3.2, high: -2.5 },
                    { x: 0, low: -2.5, high: -.8 },
                    { x: 0, low: -.8, high: 1.5 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                data: [
                    { x: 1, low: -4.5, high: -3.2 },
                    { x: 1, low: -3.2, high: -2.5 },
                    { x: 1, low: -2.5, high: -.8 },
                    { x: 1, low: -.8, high: 1.5 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 2, low: -8.5, high: -6.5 },
                    { x: 2, low: -6.5, high: -4 },
                    { x: 2, low: -4, high: -.5 },
                    { x: 2, low: -.5, high: 3.5 }],
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
                    { x: 5, low: -.5, high: 1.3 },
                    { x: 5, low: 1.3, high: 2.5 },
                    { x: 5, low: 2.5, high: 4 },
                    { x: 5, low: 4, high: 10.3 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                yAxis: 1,
                data: [
                    { x: 6, low: .5, high: 1.3 },
                    { x: 6, low: 1.3, high: 3 },
                    { x: 6, low: 3, high: 4.5 },
                    { x: 6, low: 4.5, high: 9.5 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                yAxis: 1,
                data: [
                    { x: 7, low: 1.8, high: 3 },
                    { x: 7, low: 3, high: 4 },
                    { x: 7, low: 4, high: 4.5 },
                    { x: 7, low: 4.5, high: 7 }],
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
                [0, .7],
                [1, .7],
                [],
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
                [],
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
                [0, .9],
                [1, .9],
                [2, 3.2],
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
                [5, 3.3],
                [6, 3.3],
                [7, 4.8]
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
                [0, -2],
                [1, -2],
                [2, -3.3],
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
                [5, 2.6],
                [6, 2],
                [7, 1.6]
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