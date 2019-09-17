import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

require('highcharts/highcharts-more.js')(Highcharts);

@Component({
  selector: 'app-rel-to-totfunduniv',
  templateUrl: './rel-to-totfunduniv.component.html',
  styleUrls: ['./rel-to-totfunduniv.component.css']
})
export class RelToTotfundunivComponent implements OnInit {

    Highcharts = Highcharts;

    chartOptions = {
        chart: {
            type: 'columnrange',

            marginBottom: 110,
            events: {
                load: function () {
                    var label = this.renderer.label("\xb9GDP Deflator + 5%<br>\xb222.8% SP 500, 5.7% R2000, 28.5% ACWI xUS, 15% BC Agg, 8% HFR Cns, 9% NCREIF ODCE, 5% SP MLP, 5% Bieglow Priv, <br> \xa0\xa0\xa0\xa0 1% Big CF PE Na - Objective has changed since inception <br> * Bigelow 2016")
                        .add();
                    label.align(Highcharts.extend(label.getBBox(), {
                        align: 'left',
                        x: 0, // offset
                        verticalAlign: 'bottom',
                        y: 10 // offset
                    }), null, 'spacingBox');
                }
            },



        },

        legend: {
            enabled: true,
            y: -200,
            x:  0,
            floating: true,
            layout: 'vertical',
            borderWidth: 1
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'Relative to Total Fund Universe*'
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
            tickPositions: [2, 3, 4, 5, 6, 7, 8, 9, 10],
            opposite: true,
            title: {
                    text: ''
            }
        }],
       
        series: [
        //    {
        //    data: [
        //        [-1.8, -.8, 0, .3, 1.5],
        //        [-1.8, -.8, 0, .3, 1.5],
        //        [-5, -3.5, -2.5, -1.2, .8],
        //        [],
        //        [],
        //        [],
        //        [],
        //        []
        //    ],
        //    color: 'black',
        //    showInLegend: false,
        //    grouping: false
        //},


        //First three grouping
            { data: [
                { x: 0, low: -1.8, high: -.8 },
                { x: 0, low: -.8, high: 0 },
                { x: 0, low: 0, high: .3 },
                { x: 0, low: .3, high: 1.5 }],
            color: 'white',
            showInLegend: false,
            borderColor: '#303030',
            borderWidth: 1,
            grouping: false
            },
            {
                data: [
                    { x: 1, low: -1.8, high: -.8 },
                    { x: 1, low: -.8, high: 0 },
                    { x: 1, low: 0, high: .3 },
                    { x: 1, low: .3, high: 1.5 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                data: [
                    { x: 2, low: -5, high: -3.5 },
                    { x: 2, low: -3.5, high: -2.5 },
                    { x: 2, low: -2.5, high: -1.2 },
                    { x: 2, low: -1.2, high: .8 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
    //       {
    //            yAxis: 1,
    //            data: [
    //                [],
    //                [],
    //                [],
    //                [],
    //                [],
    //                [4.7, 5.9, 6.2, 6.9, 7.7],
    //                [5.5, 6.2, 7, 7.5, 8.5],
    //                [5.5, 5.8, 6.1, 6.5, 7.2]
    //            ],
    //            color: 'black',
    //            showInLegend: false,
    //            grouping: false
    //        },

            //Last three grouping
            //Last three grouping

            {
                yAxis: 1,
                data: [
                    { x: 5, low: 4.7, high: 5.9 },
                    { x: 5, low: 5.9, high: 6.2 },
                    { x: 5, low: 6.2, high: 6.9 },
                    { x: 5, low: 6.9, high: 7.2 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                yAxis: 1,
                data: [
                    { x: 6, low: 5.5, high: 6.2 },
                    { x: 6, low: 6.2, high: 7 },
                    { x: 6, low: 7, high: 7.5 },
                    { x: 6, low: 7.5, high: 8.5 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                yAxis: 1,
                data: [
                    { x: 7, low: 5.5, high: 5.8 },
                    { x: 7, low: 5.8, high: 6.1 },
                    { x: 7, low: 6.1, high: 6.5 },
                    { x: 7, low: 6.5, high: 7.2 }],
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
                [0, .8],
                [1, .8],
                [2, -1.1],
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
                    [5, 7],
                    [6, 7.3],
                    [7, 4.9]
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
                [0, 1.1],
                [1, 1.1],
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
                    [5, 6],
                    [6, 6.5],
                    [7, 6.8]
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
            name: 'Relative Objective\xb2',
            color: '#000000',
            type: 'scatter',
            data: [
                [0, .8],
                [1, .8],
                [2, -1.1],
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
                name: 'Relative Objective\xb2',
                type: 'scatter',
                yAxis: 1,
                data: [
                    [],
                    [],
                    [],
                    [],
                    [],
                    [5, 7],
                    [6, 7.3],
                    [7, 5.5]
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