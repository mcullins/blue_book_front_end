import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-lam-annual-perf',
  templateUrl: './lam-annual-perf.component.html',
  styleUrls: ['./lam-annual-perf.component.css']
})
export class LamAnnualPerfComponent implements OnInit {


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
                    
                }
            }

        },

        title: {
            text: 'Performance Relative to Manager Universe (Intl Large Cap Relative Growth)'
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
                    name: '',
                    id: 1
                }, {
                    name: '',
                    id: 2
                }, {
                    name: '',
                    id: 3
                }, {
                    name: '',
                    id: 4
                }, {
                    name: '',
                    id: 5
                }, {
                    name: '',
                    id: 6
                }, {
                    name: '',
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
                    if (this.value.id === 8 || this.value.id === 10) {
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
          
            {
                data: [
                    { x: 0, low: 3, high: 7 },
                    { x: 0, low: 7, high: 10 },
                    { x: 0, low: 10, high: 17 },
                    { x: 0, low: 17, high: 23 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                data: [
                    { x: 1, low: -50, high: -45 },
                    { x: 1, low: -45, high: -43 },
                    { x: 1, low: -43, high: -40 },
                    { x: 1, low: -40, high: -38 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 2, low: 23, high: 26 },
                    { x: 2, low: 26, high: 30 },
                    { x: 2, low: 30, high: 41 },
                    { x: 2, low: 41, high: 55 }],
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
                    { x: 3, low: 11, high: 15 },
                    { x: 3, low: 15, high: 19 }],
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
                    { x: 4, low: -10, high: -8 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 5, low: 17, high: 19 },
                    { x: 5, low: 19, high: 21 },
                    { x: 5, low: 21, high: 23 },
                    { x: 5, low: 23, high: 25 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            },
            {
                data: [
                    { x: 6, low: 17, high: 21 },
                    { x: 6, low: 21, high: 24 },
                    { x: 6, low: 24, high: 25 },
                    { x: 6, low: 25, high: 28 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 7, low: -6, high: -4 },
                    { x: 7, low: -4, high: -2 },
                    { x: 7, low: -2, high: -1 },
                    { x: 7, low: -1, high: 0 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 8, low: -5, high: 0 },
                    { x: 8, low: 0, high:  2 },
                    { x: 8, low: 2, high: 3 },
                    { x: 8, low: 3, high: 5 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            }, {
                data: [
                    { x: 9, low: -3, high: -2 },
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
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [6.8, -1.5],
                [7.8, -1.7],
                [8.8, -0.3]
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
                [0.2, 11.2],
                [1.2, -43.4],
                [2.2, 31.8],
                [3.2, 7.7],
                [4.2, -12.1],
                [5.2, 17.3],
                [6.2, 22.8],
                [7.2, -4.9],
                [8.2, -0.8],
                [9.2, -3.0]
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
    rect = chart.renderer.rect(560, chart.chartHeight - xAxis.bottom, 75, 25, 0)
        .attr({
            'stroke-width': 0,
            stroke: '#02007c',
            fill: '#02007c',
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
    rect = chart.renderer.rect(645, chart.chartHeight - xAxis.bottom, 70, 25, 0)
        .attr({
            'stroke-width': 0,
            stroke: 'white',
            fill: 'white',
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
    rect = chart.renderer.rect(715, chart.chartHeight - xAxis.bottom, 70, 25, 0)
        .attr({
            'stroke-width': 0,
            stroke: '#02007c',
            fill: '#02007c',
            zIndex: 3
        })
        .add();
}