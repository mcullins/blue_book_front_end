import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-cv-annual-perf',
  templateUrl: './cv-annual-perf.component.html',
  styleUrls: ['./cv-annual-perf.component.css']
})
export class CvAnnualPerfComponent implements OnInit {

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
            text: 'Performance Relative to Manager Universe (Domestic Equity Composite)'
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
                    name: '0',
                    id: 5
                }, {
                    name: '0',
                    id: 6
                }, {
                    name: '0',
                    id: 7
                }, {
                    name: '+',
                    id: 8
                }, {
                    name: '+',
                    id: 9
                }, {
                    name: '-',
                    id: 10
                }],
            labels: {
                style: {
                    color: 'black',
                    fontWeight: 'bold',
                },
                formatter: function () {
                    if (this.value.id === 5 ||this.value.id === 8 || this.value.id === 9) {
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
            },
            plotLines: [{
                width: 2,
                value: 0,
                dashStyle: 'LongDashDotDot',
                color: 'black'
            }]
        },

        series: [
           
            {
                data: [
                    { x: 0, low: -10, high: 0 },
                    { x: 0, low: 0, high: 7 },
                    { x: 0, low: 7, high: 12 },
                    { x: 0, low: 12, high: 25 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                data: [
                    { x: 1, low: -48, high: -42 },
                    { x: 1, low: -42, high: -38 },
                    { x: 1, low: -38, high: -32 },
                    { x: 1, low: -32, high: -25 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 2, low: 18, high: 27 },
                    { x: 2, low: 27, high: 32 },
                    { x: 2, low: 32, high: 39 },
                    { x: 2, low: 39, high: 55 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            },
            {
                data: [
                    { x: 3, low: 10, high: 15 },
                    { x: 3, low: 15, high: 20 },
                    { x: 3, low: 20, high: 27 },
                    { x: 3, low: 27, high: 34 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                data: [
                    { x: 4, low: -10, high: -4 },
                    { x: 4, low: -4, high: -1 },
                    { x: 4, low: -1, high: 2 },
                    { x: 4, low: 2, high: 5 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 5, low: 10, high: 12 },
                    { x: 5, low: 12, high: 15 },
                    { x: 5, low: 15, high: 18 },
                    { x: 5, low: 18, high: 23 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            },
            {
                data: [
                    { x: 6, low: 30, high: 34 },
                    { x: 6, low: 34, high: 36 },
                    { x: 6, low: 36, high: 40 },
                    { x: 6, low: 40, high: 50 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 7, low: 0, high: 8 },
                    { x: 7, low: 8, high: 12 },
                    { x: 7, low: 12, high: 16 },
                    { x: 7, low: 16, high: 18 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 8, low: -8, high: -2 },
                    { x: 8, low: -2, high: 0 },
                    { x: 8, low: 0, high: 2 },
                    { x: 8, low: 2, high: 8 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            }, {
                data: [
                    { x: 9, low: -4, high: -1 },
                    { x: 9, low: -1, high: 0 },
                    { x: 9, low: 0, high: 1 },
                    { x: 9, low: 1, high: 4 }],
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
                [3.8, 9.9],
                [4.8, -5.1],
                [5.8, 16.4],
                [6.8, 55.2],
                [7.8, 44.3],
                [8.8, 0.0]
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
                [],
                [],
                [],
                [],
                [4.2, 9.9],
                [5.2, -5.1],
                [6.2, 16.4],
                [7.2, 8.3],
                [8.2, -0.6],
                [9.2, 7.0]
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

function drawRect(chart) {
    var rect = null;
    if (rect) {
        rect.element.remove();
    }
    var xAxis = chart.xAxis[0];
    rect = chart.renderer.rect(365, chart.chartHeight - xAxis.bottom, 70, 25, 0)
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
    rect = chart.renderer.rect(435, chart.chartHeight - xAxis.bottom, 140, 25, 0)
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
    rect = chart.renderer.rect(575, chart.chartHeight - xAxis.bottom, 140, 25, 0)
        .attr({
            'stroke-width': 0,
            stroke: '#02007c',
            fill: '#02007c',
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
    rect = chart.renderer.rect(715, chart.chartHeight - xAxis.bottom, 70, 25, 0)
        .attr({
            'stroke-width': 0,
            stroke: '#f4f442',
            fill: '#f4f442',
            zIndex: 3
        })
        .add();
};