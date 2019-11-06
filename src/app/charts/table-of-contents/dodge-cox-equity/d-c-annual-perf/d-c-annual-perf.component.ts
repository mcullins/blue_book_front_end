import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';




@Component({
    selector: 'app-d-c-annual-perf',
    templateUrl: './d-c-annual-perf.component.html',
    styleUrls: ['./d-c-annual-perf.component.css']
})


export class DCAnnualPerfComponent implements OnInit {
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

            categories: ['0', '-', '+', '-', '-', '+', '+', '-', '-', '-'],
            labels: {
                style: {
                    color: 'black',
                    fontWeight: 'bold',
                },
                formatter: function () {
                    if ('+' === this.value) {
                        return '<span style="fill: white;">' + this.value + '</span>';
                    } else {
                        return this.value;
                    }
                }
            }
        },

        yAxis: {
            gridLineColor: 'transparent',
            min: -50,
            max: 50,
            tickInterval: 10,
            title: {
                text: 'Return %'
            }
        },

        series: [
         
            {
                data: [
                    { x: 0, low: -8, high: 0 },
                    { x: 0, low: 0, high: 2.8 },
                    { x: 0, low: 2.8, high: 5.5 },
                    { x: 0, low: 5.5, high: 10 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                data: [
                    { x: 1, low: -41, high: -37.9 },
                    { x: 1, low: -37.9, high: -35.4 },
                    { x: 1, low: -35.4, high: -33.4 },
                    { x: 1, low: -33.4, high: -28 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 2, low: 15, high: 20 },
                    { x: 2, low: 20, high: 24.7 },
                    { x: 2, low: 24.7, high: 28.5 },
                    { x: 2, low: 28.5, high: 35 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            },
            {
                data: [
                    { x: 3, low: 10, high: 12.7 },
                    { x: 3, low: 12.7, high: 14 },
                    { x: 3, low: 14, high: 16.3 },
                    { x: 3, low: 16.3, high: 18.5 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                data: [
                    { x: 4, low: -6.1, high: -3.9 },
                    { x: 4, low: -3.9, high: -0.9 },
                    { x: 4, low: -0.9, high: 2.1 },
                    { x: 4, low: 2.1, high: 7.5 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 5, low: 12, high: 14.3 },
                    { x: 5, low: 14.3, high: 15.8 },
                    { x: 5, low: 15.8, high: 17.8 },
                    { x: 5, low: 17.8, high: 20 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            },
            {
                data: [
                    { x: 6, low: 29, high: 31.4 },
                    { x: 6, low: 31.4, high: 34.8 },
                    { x: 6, low: 34.8, high: 36.9 },
                    { x: 6, low: 36.9, high: 40 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 7, low: 5.8, high: 10.9 },
                    { x: 7, low: 10.9, high: 12.2 },
                    { x: 7, low: 12.2, high: 13.8 },
                    { x: 7, low: 13.8, high: 15 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 8, low: -5, high: -3.9 },
                    { x: 8, low: -3.9, high: -2.2 },
                    { x: 8, low: -2.2, high: 0.1 },
                    { x: 8, low: 0.1, high: 3 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            }, {
                data: [
                    { x: 9, low: -1.5, high: -0.8 },
                    { x: 9, low: -0.8, high: 0.2 },
                    { x: 9, low: 0.2, high: 1.7 },
                    { x: 9, low: 1.7, high: 3 }],
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
                [-.2, 0.1],
                [.8, -43.3],
                [1.8, 31.3],
                [2.8, 13.3],
                [3.8, -4.1],
                [4.8, 21.9],
                [5.8, 40.5],
                [6.8, 10.3],
                [7.8, -4.5],
                [8.8, -1.0]
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
                [0.2, -0.2],
                [1.2, -36.9],
                [2.2, 19.7],
                [3.2, 15.5],
                [4.2, 0.4],
                [5.2, 17.5],
                [6.2, 32.5],
                [7.2, 13.5],
                [8.2, -3.8],
                [9.2, 1.6]
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
    rect = chart.renderer.rect(225, chart.chartHeight - xAxis.bottom, 70, 25, 0)
        .attr({
            'stroke-width': 0,
            stroke: '#02007c',
            fill: '#02007c',
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
    rect = chart.renderer.rect(295, chart.chartHeight - xAxis.bottom, 70, 25, 0)
        .attr({
            'stroke-width': 0,
            stroke: '#f4f442',
            fill: '#f4f442',
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
    rect = chart.renderer.rect(365, chart.chartHeight - xAxis.bottom, 70, 25, 0)
        .attr({
            'stroke-width': 0,
            stroke: '#ffffff',
            fill: '#ffffff',
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
    rect = chart.renderer.rect(435, chart.chartHeight - xAxis.bottom, 140, 25, 0)
        .attr({
            'stroke-width': 0,
            stroke: '#02007c',
            fill: '#02007c',
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
    rect = chart.renderer.rect(575, chart.chartHeight - xAxis.bottom, 210, 25, 0)
        .attr({
            'stroke-width': 0,
            stroke: '#ffffff',
            fill: '#ffffff',
            zIndex: 3
        })
        .add();
}

