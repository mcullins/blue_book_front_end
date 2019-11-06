import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-ls-annual-perf',
  templateUrl: './ls-annual-perf.component.html',
  styleUrls: ['./ls-annual-perf.component.css']
})
export class LsAnnualPerfComponent implements OnInit {


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
                }
            }

        },

        title: {
            text: 'Performance Relative to Manager Universe (Core Extended)'
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
                    name: '-',
                    id: 2
                }, {
                    name: '+',
                    id: 3
                }, {
                    name: '+',
                    id: 4
                }, {
                    name: '0',
                    id: 5
                }, {
                    name: '+',
                    id: 6
                }, {
                    name: '+',
                    id: 7
                }, {
                    name: '+',
                    id: 8
                }, {
                    name: '-',
                    id: 9
                }, {
                    name: '+',
                    id: 10
                }],
            labels: {
                style: {
                    color: 'black',
                    fontWeight: 'bold',
                },
                formatter: function () {
                    if (this.value.id === 3 || this.value.id === 7 || this.value.id === 8 || this.value.id === 10) {
                        return '<span style="fill: white;">' + this.value.name + '</span>';
                    } else {
                        return this.value.name;
                    }
                }
            }
        },

        yAxis: {
            gridLineColor: 'transparent',
            min: -20,
            max: 35,
            tickInterval: 5,
            title: {
                text: 'Return %'
            }
        },

        series: [
         

            {
                data: [
                    { x: 0, low: 3.5, high: 5 },
                    { x: 0, low: 5, high: 5.5 },
                    { x: 0, low: 5.5, high: 6 },
                    { x: 0, low: 6, high: 7 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                data: [
                    { x: 1, low: -14, high: -9 },
                    { x: 1, low: -9, high: -3.5 },
                    { x: 1, low: -3.5, high: 1 },
                    { x: 1, low: 1, high: 6 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 2, low: 10, high: 13.5 },
                    { x: 2, low: 13.5, high: 16.5 },
                    { x: 2, low: 16.5, high: 20 },
                    { x: 2, low: 20, high: 29.5 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            },
            {
                data: [
                    { x: 3, low: 6.5, high: 7.5 },
                    { x: 3, low: 7.5, high: 8.5 },
                    { x: 3, low: 8.5, high: 10.5 },
                    { x: 3, low: 10.5, high: 12 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                data: [
                    { x: 4, low: 5, high: 7.2 },
                    { x: 4, low: 7.2, high: 8.5 },
                    { x: 4, low: 8.5, high: 9.8 },
                    { x: 4, low: 9.8, high: 14 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 5, low: 6, high: 7.2 },
                    { x: 5, low: 7.2, high: 8.5 },
                    { x: 5, low: 8.5, high: 9.8 },
                    { x: 5, low: 9.8, high: 14 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            },
            {
                data: [
                    { x: 6, low: -4, high: -2.5 },
                    { x: 6, low: -2.5, high: -1 },
                    { x: 6, low: -1, high: 0 },
                    { x: 6, low: 0, high: 4 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 7, low: 4, high: 5 },
                    { x: 7, low: 5, high: 6 },
                    { x: 7, low: 6, high: 7 },
                    { x: 7, low: 7, high: 8 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 8, low: -3.5, high: -.5 },
                    { x: 8, low: -.5, high: 0 },
                    { x: 8, low: 0, high: 1 },
                    { x: 8, low: 1, high: 2 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            }, {
                data: [
                    { x: 9, low: 3, high: 3.4 },
                    { x: 9, low: 3.4, high: 3.8 },
                    { x: 9, low: 3.8, high: 4.2 },
                    { x: 9, low: 4.2, high: 4.5 }],
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
                [-.2, 5.5],
                [.8, -12.7],
                [1.8, 22.7],
                [2.8, 9.9],
                [3.8, 7.6],
                [4.8, 8.5],
                [5.8, 0.1],
                [6.8, 7.0],
                [7.8, -2.5],
                [8.8, 4.1]
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
                [0.2, 7.0],
                [1.2, 5.2],
                [2.2, 5.9],
                [3.2, 6.5],
                [4.2, 7.8],
                [5.2, 4.2],
                [6.2, -2.0],
                [7.2, 6.0],
                [8.2, 0.5],
                [9.2, 3.0]
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
    rect = chart.renderer.rect(85, chart.chartHeight - xAxis.bottom, 140, 25, 0)
        .attr({
            'stroke-width': 0,
            stroke: 'white',
            fill: 'white',
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
    rect = chart.renderer.rect(225, chart.chartHeight - xAxis.bottom, 70, 25, 0)
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
    rect = chart.renderer.rect(295, chart.chartHeight - xAxis.bottom, 210, 25, 0)
        .attr({
            'stroke-width': 0,
            stroke: 'lawngreen',
            fill: 'lawngreen',
            zIndex: 3
        })
        .add();
};
function drawRect4(chart) {
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
            stroke: '#02007c',
            fill: '#02007c',
            zIndex: 3
        })
        .add();
};
function drawRect5(chart) {
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
            stroke: 'white',
            fill: 'white',
            zIndex: 3
        })
        .add();
};
function drawRect6(chart) {
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
};