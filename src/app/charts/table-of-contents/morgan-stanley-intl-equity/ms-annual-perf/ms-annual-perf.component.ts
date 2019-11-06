import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-ms-annual-perf',
  templateUrl: './ms-annual-perf.component.html',
  styleUrls: ['./ms-annual-perf.component.css']
})
export class MsAnnualPerfComponent implements OnInit {

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
                    drawRect5(this);
                    drawRect6(this);
                    drawRect7(this);
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
                    drawRect5(this);
                    drawRect6(this);
                    drawRect7(this);
                }
            }

        },

        title: {
            text: 'Performance Relative to Manager Universe (Core Relative Value)'
        },

        legend: {
            enabled: false,
            y: -90
        },
        credits: {
            enabled: false
        },
        xAxis: {

            categories: [
                {
                   name: '-',
                   id: 1
                }, {
                    name: '+',
                    id: 2
                }, {
                    name: '-',
                    id: 3
                }, {
                    name: '-',
                    id: 4
                }, {
                    name: '+',
                    id: 5
                }, {
                    name: '+',
                    id: 6
                }, {
                    name: '-',
                    id: 7
                }, {
                    name: '-',
                    id: 8
                }, {
                    name: '+',
                    id: 9
                }, {
                    name: '0',
                    id: 10
                }],
            labels: {
                style: {
                    color: 'black',
                    fontWeight: 'bold',
                },
                formatter: function () {
                    if (this.value.id === 2 || this.value.id === 5 || this.value.id === 6) {
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
            max: 60,
            tickInterval: 20,
            title: {
                text: 'Return %'
            }
        },

        series: [
        //    {
        //    name: 'Return %',
        //    data: [
        //        [1, 7, 10, 15, 19],
        //        [-50, -45, -40, -35, -30],
        //        [19, 25, 29, 35, 48],
        //        [7, 9, 11, 13, 18],
        //        [-17, -14, -12, -10, 0],
        //        [12, 14, 16, 17, 21],
        //        [12, 16, 20, 24, 26],
        //        [-10, -8, -3, -1, 1],
        //        [-5, -3.5, 0, 2, 5],
        //        [-4, -2, -1, 0, 2]
        //    ],
        //    color: 'black',
        //    showInLegend: false
        //},
            {
                data: [
                    { x: 0, low: 1, high: 7 },
                    { x: 0, low: 7, high: 10 },
                    { x: 0, low: 10, high: 15 },
                    { x: 0, low: 15, high: 19 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                data: [
                    { x: 1, low: -50, high: -45 },
                    { x: 1, low: -45, high: -40 },
                    { x: 1, low: -40, high: -35 },
                    { x: 1, low: -35, high: -30 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 2, low: 19, high: 25 },
                    { x: 2, low: 25, high: 29 },
                    { x: 2, low: 29, high: 35 },
                    { x: 2, low: 35, high: 48 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            },
            {
                data: [
                    { x: 3, low: 7, high: 9 },
                    { x: 3, low: 9, high: 11 },
                    { x: 3, low: 11, high: 13 },
                    { x: 3, low: 13, high: 18 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                data: [
                    { x: 4, low: -17, high: -14 },
                    { x: 4, low: -14, high: -12 },
                    { x: 4, low: -12, high: -10 },
                    { x: 4, low: -10, high: 0 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 5, low: 12, high: 14 },
                    { x: 5, low: 14, high: 16 },
                    { x: 5, low: 16, high: 17 },
                    { x: 5, low: 17, high: 21 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            },
            {
                data: [
                    { x: 6, low: 12, high: 16 },
                    { x: 6, low: 16, high: 20 },
                    { x: 6, low: 20, high: 24 },
                    { x: 6, low: 24, high: 26 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 7, low: -10, high: -8 },
                    { x: 7, low: -8, high: -3 },
                    { x: 7, low: -3, high: -1 },
                    { x: 7, low: -1, high: 1 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 8, low: -5, high: -3.5 },
                    { x: 8, low: -3.5, high: 0 },
                    { x: 8, low: 0, high: 2 },
                    { x: 8, low: 2, high: 5 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            }, {
                data: [
                    { x: 9, low: -4, high: -2 },
                    { x: 9, low: -2, high: -1 },
                    { x: 9, low: -1, high: 0 },
                    { x: 9, low: 0, high: 2 }],
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
                [-.2, 8],
                [.8, -36],
                [1.8, 34.9],
                [2.8, 5],
                [3.8, -9],
                [4.8, 18],
                [5.8, 18],
                [6.8, -4],
                [7.8, 0],
                [8.8, -2]
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
                [0.2, 12],
                [1.2, -43],
                [2.2, 30],
                [3.2, 7],
                [4.2, -13],
                [5.2, 16],
                [6.2, 21],
                [7.2, -8],
                [8.2, -1],
                [9.2, -3]
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
    rect = chart.renderer.rect(85, chart.chartHeight - xAxis.bottom, 70, 25, 0)
        .attr({
            'stroke-width': 0,
            stroke: '#f4f442',
            fill: '#f4f442',
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
    rect = chart.renderer.rect(155, chart.chartHeight - xAxis.bottom, 70, 25, 0)
        .attr({
            'stroke-width': 0,
            stroke: '#02007c',
            fill: '#02007c',
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
    rect = chart.renderer.rect(225, chart.chartHeight - xAxis.bottom, 140, 25, 0)
        .attr({
            'stroke-width': 0,
            stroke: 'white',
            fill: 'white',
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
    rect = chart.renderer.rect(365, chart.chartHeight - xAxis.bottom, 140, 25, 0)
        .attr({
            'stroke-width': 0,
            stroke: '#02007c',
            fill: '#02007c',
            zIndex: 3
        })
        .add();
}
function drawRect5(chart) {
    var rect = null;
    if (rect) {
        rect.element.remove();
    }
    var xAxis = chart.xAxis[0];
    var pixStart = xAxis.toPixels(xAxis.tickPositions[tickStart], false);
    var pixEnd = xAxis.toPixels(xAxis.tickPositions[tickEnd], false);
    rect = chart.renderer.rect(505, chart.chartHeight - xAxis.bottom, 140, 25, 0)
        .attr({
            'stroke-width': 0,
            stroke: '#f4f442',
            fill: '#f4f442',
            zIndex: 3
        })
        .add();
}
function drawRect6(chart) {
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
            stroke: 'lawngreen',
            fill: 'lawngreen',
            zIndex: 3
        })
        .add();
}
function drawRect7(chart) {
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
            stroke: '#f4f442',
            fill: '#f4f442',
            zIndex: 3
        })
        .add();
}

