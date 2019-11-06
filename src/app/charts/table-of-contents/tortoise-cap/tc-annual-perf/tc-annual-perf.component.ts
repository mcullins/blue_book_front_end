import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-tc-annual-perf',
  templateUrl: './tc-annual-perf.component.html',
  styleUrls: ['./tc-annual-perf.component.css']
})
export class TcAnnualPerfComponent implements OnInit {


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
                }
            }

        },

        title: {
            text: 'Performance Relative to Manager Universe (Energy Infrastructure)'
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
                    name: '',
                    id: 8
                }, {
                    name: '',
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
                    if (this.value.id === 1) {
                        return '<span style="fill: white;">' + this.value.name + '</span>';
                    } else {
                        return this.value.name;
                    }
                }
            }
        },

        yAxis: {
            gridLineColor: 'transparent',
            min: -80,
            max: 120,
            tickInterval: 20,
            title: {
                text: 'Return %'
            }
        },

        series: [
       
            {
                data: [
                    { x: 0, low: 8, high: 10 },
                    { x: 0, low: 10, high: 15 },
                    { x: 0, low: 15, high: 20 },
                    { x: 0, low: 20, high: 25 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                data: [
                    { x: 1, low: -57, high: -47 },
                    { x: 1, low: -47, high: -42 },
                    { x: 1, low: -42, high: -38 },
                    { x: 1, low: -38, high: -35 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 2, low: 56, high: 78 },
                    { x: 2, low: 78, high: 82 },
                    { x: 2, low: 82, high: 87 },
                    { x: 2, low: 87, high: 100 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            },
            {
                data: [
                    { x: 3, low: 28, high: 36 },
                    { x: 3, low: 36, high: 38 },
                    { x: 3, low: 38, high: 40 },
                    { x: 3, low: 40, high: 50 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                data: [
                    { x: 4, low: 8, high: 12 },
                    { x: 4, low: 12, high: 17 },
                    { x: 4, low: 17, high: 18 },
                    { x: 4, low: 18, high: 20 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 5, low: 0, high: 8 },
                    { x: 5, low: 8, high: 10 },
                    { x: 5, low: 10, high: 13 },
                    { x: 5, low: 13, high: 16 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            },
            {
                data: [
                    { x: 6, low: 20, high: 30 },
                    { x: 6, low: 30, high: 35 },
                    { x: 6, low: 35, high: 40 },
                    { x: 6, low: 40, high: 45 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 7, low: 5, high: 9 },
                    { x: 7, low: 9, high: 12 },
                    { x: 7, low: 12, high: 18 },
                    { x: 7, low: 18, high: 20 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 8, low: -38, high: -36 },
                    { x: 8, low: -36, high: -34 },
                    { x: 8, low: -34, high: -30 },
                    { x: 8, low: -30, high: -19 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            }, {
                data: [
                    { x: 9, low: -6, high: -4 },
                    { x: 9, low: -4, high: -2 },
                    { x: 9, low: -2, high: 0 },
                    { x: 9, low: 0, high: 10 }],
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
                [8.8, -6.4]
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
                [0.2, 9.4],
                [1.2, -37.5],
                [2.2, 78.8],
                [3.2, 35.2],
                [4.2, 14.5],
                [5.2, 5.0],
                [6.2, 29.7],
                [7.2, 7.7],
                [8.2, -35.1],
                [9.2, -6.3]
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
    rect = chart.renderer.rect(715, chart.chartHeight - xAxis.bottom, 70, 25, 0)
        .attr({
            'stroke-width': 0,
            stroke: 'white',
            fill: 'white',
            zIndex: 3
        })
        .add();
};


