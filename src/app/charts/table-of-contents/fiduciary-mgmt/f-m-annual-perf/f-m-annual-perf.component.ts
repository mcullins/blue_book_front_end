import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';



@Component({
  selector: 'app-f-m-annual-perf',
  templateUrl: './f-m-annual-perf.component.html',
  styleUrls: ['./f-m-annual-perf.component.css']
})
export class FMAnnualPerfComponent implements OnInit {

  Highcharts = Highcharts;
    date: any = new Date();


    chartOptions = {
        chart: {
            marginBottom: 75,
            type: 'columnrange',
            plotBorderColor: 'black',
            plotBorderWidth: 2,
            events: {
                load: function () {
                    drawRect(this);
                    drawRect2(this);
                    drawRect3(this);
                    drawRect4(this);
                    var label = this.renderer.label("+ Above Relative Benchmark, - Below Relative Benchmark, 0 In Line with Relative Benchmark (+/- 50 basis points)")
                        .add();
                    label.align(Highcharts.extend(label.getBBox(), {
                        align: 'center',
                        x: 0, // offset
                        verticalAlign: 'bottom',
                        y: 0 // offset
                    }), null, 'spacingBox');

                },
                redraw: function () {
                    drawRect(this);
                    drawRect2(this);
                    drawRect3(this);
                    drawRect4(this);
                }
            }        

        },

        title: {
            text: 'Performance Relative to Manager Universe (Specialty Small Relative Value)'
        },

        legend: {
            enabled: false,
            y: -90
        },
        credits: {
            enabled: false
        },
        xAxis: {

            categories: ['', '', '', '', '',
                {
                    name: '-',
                    id: 2
                }, {
                    name: '-',
                    id: 3
                }, {
                    name: '+',
                    id: 4
                }, {
                    name: '+',
                    id: 5
                }, {
                    name: '+',
                    id: 6
                }],
            labels: {
                style: {
                    color: 'black',
                    fontWeight: 'bold',
                },
                formatter: function () {
                    if (this.value.id === 6) {
                        return '<span style="fill: white;">' + this.value.name + '</span>';
                    } else {
                        return this.value.name;
                    }
                }
            }
        },


        yAxis: {
            gridLineColor: 'transparent',
            min: -60,
            max: 80,
            tickInterval: 20,
            title: {
                text: 'Return %'
            }
        },

        series: [
        //    {
        //    name: 'Return %',
        //    data: [
        //        [-8, -1, 1, 9, 15],
        //        [-48, -40, -35, -29, -24],
        //        [19, 30, 36, 42, 63],
        //        [15, 21, 25, 31, 38],
        //        [-10, -5, -1, 0, 7],
        //        [9, 13, 16, 19, 24],
        //        [29, 35, 37, 41, 48],
        //        [0, 4, 7, 10, 15],
        //        [-12, -8, -4, 0, 3],
        //        [-2, 0, 2, 4, 6]
        //    ],
        //    color: 'black',
        //    showInLegend: false
        //},
            {
                data: [
                    { x: 0, low: -8, high: -1 },
                    { x: 0, low: -1, high: 1 },
                    { x: 0, low: 1, high: 9 },
                    { x: 0, low: 9, high: 15 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                data: [
                    { x: 1, low: -48, high: -40 },
                    { x: 1, low: -40, high: -35 },
                    { x: 1, low: -35, high: -29 },
                    { x: 1, low: -29, high: -24 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 2, low: 19, high: 30 },
                    { x: 2, low: 30, high: 36 },
                    { x: 2, low: 36, high: 42 },
                    { x: 2, low: 42, high: 63 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            },
            {
                data: [
                    { x: 3, low: 15, high: 21 },
                    { x: 3, low: 21, high: 25 },
                    { x: 3, low: 25, high: 31 },
                    { x: 3, low: 31, high: 38 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                data: [
                    { x: 4, low: -10, high: -5 },
                    { x: 4, low: -5, high: -1 },
                    { x: 4, low: -1, high: 0 },
                    { x: 4, low: 0, high: 7 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 5, low: 9, high: 13 },
                    { x: 5, low: 13, high: 16 },
                    { x: 5, low: 16, high: 19 },
                    { x: 5, low: 19, high: 24 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            },
            {
                data: [
                    { x: 6, low: 29, high: 35 },
                    { x: 6, low: 35, high: 37 },
                    { x: 6, low: 37, high: 41 },
                    { x: 6, low: 41, high: 48 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 7, low: 0, high: 4 },
                    { x: 7, low: 4, high: 7 },
                    { x: 7, low: 7, high: 10 },
                    { x: 7, low: 10, high: 15 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 8, low: -12, high: -8 },
                    { x: 8, low: -8, high: -4 },
                    { x: 8, low: -4, high: 0 },
                    { x: 8, low: 0, high: 3 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            }, {
                data: [
                    { x: 9, low: -2, high: 0 },
                    { x: 9, low: 0, high: 2 },
                    { x: 9, low: 2, high: 4 },
                    { x: 9, low: 4, high: 6 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },{
            name: 'Total Fund',
            type: 'scatter',
            data: [
                [],
                [],
                [],
                [],
                [],
                [4.8, 10],
                [5.8, 30],
                [6.8, 8],
                [7.8, -5],
                [8.8, 1]
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
            name: 'Relative Benchmark',
            type: 'scatter',
            data: [
                [0.2, -12],
                [1.2, -28],
                [2.2, 20],
                [3.2, 25],
                [4.2, -5],
                [5.2, 18],
                [6.2, 30],
                [7.2, 10],
                [8.2, -4],
                [9.2, 4]
            ],
            color: '#000000',
            marker: {
                fillColor: 'black',
                lineWidth: 1,
                lineColor: 'black'
            },
            tooltip: {
                pointFormat: '{point.y}'
            }
        }
        ],
    }



    constructor() { }

    ngOnInit() {

    }
}
var tickStart = 0;
var tickEnd = 1;


function drawRect(chart) {
    var rect = null;
    if (rect) {
        rect.element.remove();
    }
    var xAxis = chart.xAxis[0];
    var pixStart = xAxis.toPixels(xAxis.tickPositions[tickStart], false);
    var pixEnd = xAxis.toPixels(xAxis.tickPositions[tickEnd], false);
    rect = chart.renderer.rect(85, chart.chartHeight - xAxis.bottom, 490, 25, 0)
        .attr({
            'stroke-width': 0,
            stroke: '#ffffff',
            fill: '#ffffff',
            zIndex: 3
        })
        .add();
};


function drawRect2(chart) {
    var rect = null;
    if (rect) {
        rect.element.remove();
    }
    var xAxis = chart.xAxis[0];
    var pixStart = xAxis.toPixels(xAxis.tickPositions[tickStart], false);
    var pixEnd = xAxis.toPixels(xAxis.tickPositions[tickEnd], false);
    rect = chart.renderer.rect(575, chart.chartHeight - xAxis.bottom, 70, 25, 0)
        .attr({
            'stroke-width': 0,
            stroke: 'lawngreen',
            fill: 'lawngreen',
            zIndex: 3
        })
        .add();
};
function drawRect3(chart) {
    var rect = null;
    if (rect) {
        rect.element.remove();
    }
    var xAxis = chart.xAxis[0];
    var pixStart = xAxis.toPixels(xAxis.tickPositions[tickStart], false);
    var pixEnd = xAxis.toPixels(xAxis.tickPositions[tickEnd], false);
    rect = chart.renderer.rect(645, chart.chartHeight - xAxis.bottom, 70, 25, 0)
        .attr({
            'stroke-width': 0,
            stroke: '#f4f442',
            fill: '#f4f442',
            zIndex: 3
        })
        .add();
}
function drawRect4(chart) {
    var rect = null;
    if (rect) {
        rect.element.remove();
    }
    var xAxis = chart.xAxis[0];
    var pixStart = xAxis.toPixels(xAxis.tickPositions[tickStart], false);
    var pixEnd = xAxis.toPixels(xAxis.tickPositions[tickEnd], false);
    rect = chart.renderer.rect(715, chart.chartHeight - xAxis.bottom, 70, 25, 0)
        .attr({
            'stroke-width': 0,
            stroke: '#02007c',
            fill: '#02007c',
            zIndex: 3
        })
        .add();
}

