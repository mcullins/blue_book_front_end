import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-rreef-annual-perf',
  templateUrl: './rreef-annual-perf.component.html',
  styleUrls: ['./rreef-annual-perf.component.css']
})
export class RreefAnnualPerfComponent implements OnInit {

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
            text: 'Performance Relative to Manager Universe (Real Estate Core/Core+)'
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
                   name: '0',
                   id: 1
                }, {
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
                }, {
                    name: '+',
                    id: 7
                }, {
                    name: '+',
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
                    if (this.value.id === 4 || this.value.id === 7 || this.value.id === 8 || this.value.id === 9) {
                        return '<span style="fill: white;">' + this.value.name + '</span>';
                    } else {
                        return this.value.name;
                    }
                }
            }
        },

        yAxis: {
            gridLineColor: 'transparent',
            min: -50,
            max: 30,
            tickInterval: 10,
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
        //    {
        //    name: 'Return %',
        //    data: [
        //        [9, 14, 15, 16, 19],
        //        [-29, -15, -10, -8, -5],
        //        [-41, -35, -30, -28, -23],
        //        [12, 14, 16, 18, 21],
        //        [10, 14, 15.5, 17, 19],
        //
        //        [8, 10, 13, 14, 15],
        //        [10, 12, 13, 15, 17],
        //        [10, 11, 12, 13, 15],
        //        [13, 14, 16, 17, 18],
        //        [1, 2, 3, 4, 5]
        //    ],
        //    color: 'black',
        //    showInLegend: false
        //},
            {
                data: [
                    { x: 0, low: 9, high: 14 },
                    { x: 0, low: 14, high: 15 },
                    { x: 0, low: 15, high: 16 },
                    { x: 0, low: 16, high: 19 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                data: [
                    { x: 1, low: -29, high: -15 },
                    { x: 1, low: -15, high: -10 },
                    { x: 1, low: -10, high: -8 },
                    { x: 1, low: -8, high: -5 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 2, low: -41, high: -35 },
                    { x: 2, low: -35, high: -30 },
                    { x: 2, low: -30, high: -28 },
                    { x: 2, low: -28, high: -23 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            },
            {
                data: [
                    { x: 3, low: 12, high: 14 },
                    { x: 3, low: 14, high: 16 },
                    { x: 3, low: 16, high: 18 },
                    { x: 3, low: 18, high: 21 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                data: [
                    { x: 4, low: 10, high: 14 },
                    { x: 4, low: 14, high: 15.5 },
                    { x: 4, low: 15.5, high: 17 },
                    { x: 4, low: 17, high: 19 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 5, low: 8, high: 10 },
                    { x: 5, low: 10, high: 13 },
                    { x: 5, low: 13, high: 14 },
                    { x: 5, low: 14, high: 15 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            },
            {
                data: [
                    { x: 6, low: 10, high: 12 },
                    { x: 6, low: 12, high: 13 },
                    { x: 6, low: 13, high: 15 },
                    { x: 6, low: 15, high: 17 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 7, low: 10, high: 11 },
                    { x: 7, low: 11, high: 12 },
                    { x: 7, low: 12, high: 13 },
                    { x: 7, low: 13, high: 15 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 8, low: 13, high: 14 },
                    { x: 8, low: 14, high: 16 },
                    { x: 8, low: 16, high: 17 },
                    { x: 8, low: 17, high: 18 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            }, {
                data: [
                    { x: 9, low: 1, high: 2 },
                    { x: 9, low: 2, high: 3 },
                    { x: 9, low: 3, high: 4 },
                    { x: 9, low: 4, high: 5 }],
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
                [-.2, 15.8],
                [.8, -19.8],
                [1.8, -33.9],
                [2.8, 20.6],
                [3.8, 16.7],
                [4.8, 13.4],
                [5.8, 15.2],
                [6.8, 14.1],
                [7.8, 16.6],
                [8.8, 1.9]
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
                [0.2, 15.8],
                [1.2, -6.5],
                [2.2, -16.9],
                [3.2, 13.1],
                [4.2, 14.3],
                [5.2, 10.5],
                [6.2, 11.0],
                [7.2, 11.8],
                [8.2, 13.3],
                [9.2, 2.2]
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
    rect = chart.renderer.rect(155, chart.chartHeight - xAxis.bottom, 70, 25, 0)
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
    rect = chart.renderer.rect(225, chart.chartHeight - xAxis.bottom, 70, 25, 0)
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
    rect = chart.renderer.rect(295, chart.chartHeight - xAxis.bottom, 70, 25, 0)
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
    rect = chart.renderer.rect(365, chart.chartHeight - xAxis.bottom, 140, 25, 0)
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
    rect = chart.renderer.rect(505, chart.chartHeight - xAxis.bottom, 210, 25, 0)
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
    rect = chart.renderer.rect(715, chart.chartHeight - xAxis.bottom, 70, 25, 0)
        .attr({
            'stroke-width': 0,
            stroke: 'white',
            fill: 'white',
            zIndex: 3
        })
        .add();
}
