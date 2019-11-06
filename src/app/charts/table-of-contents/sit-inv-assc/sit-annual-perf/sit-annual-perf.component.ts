import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-sit-annual-perf',
  templateUrl: './sit-annual-perf.component.html',
  styleUrls: ['./sit-annual-perf.component.css']
})
export class SitAnnualPerfComponent implements OnInit {

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

            categories: ['+', '+', '-', '-', '-', '-', '-', '-', '-', '0'],
            labels: {
                style: {
                    color: 'black',
                    fontWeight: 'bold',
                },
                formatter: function () {
                    if ('0' === this.value) {
                        return '<span style="fill: white;">' + this.value + '</span>';
                    } else {
                        return this.value;
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
        //        [4, 7, 15, 20, 27],
        //        [-45, -41, -40, -38.7, -37],
        //        [23, 26, 34, 40, 48],
        //        [10, 13, 18, 20, 28],
        //        [-7, -4, 0, 2.1, 5],
        //        [16, 18, 20, 22, 25],
        //        [30, 33, 35, 37, 40],
        //        [8, 11, 14, 17, 20],
        //        [0, 4, 8, 11, 15],
        //        [-5, -3.5, -2, 0, 1]
        //    ],
        //    color: 'black',
        //    showInLegend: false
        //}
            {
                data: [
                    { x: 0, low: 4, high: 7 },
                    { x: 0, low: 7, high: 15 },
                    { x: 0, low: 15, high: 20 },
                    { x: 0, low: 20, high: 27 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                data: [
                    { x: 1, low: -45, high: -41 },
                    { x: 1, low: -41, high: -40 },
                    { x: 1, low: -40, high: -38.7 },
                    { x: 1, low: -38.7, high: -37 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 2, low: 23, high: 26 },
                    { x: 2, low: 26, high: 34 },
                    { x: 2, low: 34, high: 40 },
                    { x: 2, low: 40, high: 48 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            },
            {
                data: [
                    { x: 3, low: 10, high: 13 },
                    { x: 3, low: 13, high: 18 },
                    { x: 3, low: 18, high: 20 },
                    { x: 3, low: 20, high: 28 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                data: [
                    { x: 4, low: -7, high: -4 },
                    { x: 4, low: -4, high: 0 },
                    { x: 4, low: 0, high: 2.1 },
                    { x: 4, low: 2.1, high: 5 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 5, low: 16, high: 18 },
                    { x: 5, low: 18, high: 20 },
                    { x: 5, low: 20, high: 22 },
                    { x: 5, low: 22, high: 25 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            },
            {
                data: [
                    { x: 6, low: 30, high: 33 },
                    { x: 6, low: 33, high: 35 },
                    { x: 6, low: 35, high: 37 },
                    { x: 6, low: 37, high: 40 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 7, low: 8, high: 11 },
                    { x: 7, low: 11, high: 14 },
                    { x: 7, low: 14, high: 17 },
                    { x: 7, low: 17, high: 20 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 8, low: 0, high: 4 },
                    { x: 8, low: 4, high: 8 },
                    { x: 8, low: 8, high: 11 },
                    { x: 8, low: 11, high: 15 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            }, {
                data: [
                    { x: 9, low: -5, high: -3.5 },
                    { x: 9, low: -3.5, high: -2 },
                    { x: 9, low: -2, high: 0 },
                    { x: 9, low: 0, high: 1 }],
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
                [-.2, 15.7],
                [.8, -36.6],
                [1.8, 34.9],
                [2.8, 12.3],
                [3.8, 0.3],
                [4.8, 13.5],
                [5.8, 30.7],
                [6.8, 12.1],
                [7.8, 4.9],
                [8.8, 0.5]
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
                [0.2, 11.8],
                [1.2, -38.4],
                [2.2, 37.2],
                [3.2, 16.7],
                [4.2, 2.6],
                [5.2, 15.3],
                [6.2, 33.5],
                [7.2, 13.0],
                [8.2, 5.7],
                [9.2, 0.7]
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
    rect = chart.renderer.rect(85, chart.chartHeight - xAxis.bottom, 210, 25, 0)
        .attr({
            'stroke-width': 0,
            stroke: 'lawngreen',
            fill: 'lawngreen',
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
    rect = chart.renderer.rect(295, chart.chartHeight - xAxis.bottom, 70, 25, 0)
        .attr({
            'stroke-width': 0,
            stroke: '#ffffff',
            fill: '#ffffff',
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
    rect = chart.renderer.rect(365, chart.chartHeight - xAxis.bottom, 70, 25, 0)
        .attr({
            'stroke-width': 0,
            stroke: 'lawngreen',
            fill: 'lawngreen',
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
    rect = chart.renderer.rect(435, chart.chartHeight - xAxis.bottom, 140, 25, 0)
        .attr({
            'stroke-width': 0,
            stroke: '#ffffff',
            fill: '#ffffff',
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
    rect = chart.renderer.rect(575, chart.chartHeight - xAxis.bottom, 70, 25, 0)
        .attr({
            'stroke-width': 0,
            stroke: 'lawngreen',
            fill: 'lawngreen',
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
            stroke: '#f4f442',
            fill: '#f4f442',
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
            stroke: '#02007c',
            fill: '#02007c',
            zIndex: 3
        })
        .add();
}

