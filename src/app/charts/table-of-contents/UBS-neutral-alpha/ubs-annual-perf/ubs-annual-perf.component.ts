import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-ubs-annual-perf',
  templateUrl: './ubs-annual-perf.component.html',
  styleUrls: ['./ubs-annual-perf.component.css']
})
export class UbsAnnualPerfComponent implements OnInit {

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
            text: 'Performance Relative to Manager Universe (Hedge Funds Absolute Return)'
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
                    name: '+',
                    id: 10
                }],
            labels: {
                style: {
                    color: 'black',
                    fontWeight: 'bold',
                },
                formatter: function () {
                    if (this.value.id === 10) {
                        return '<span style="fill: white;">' + this.value.name + '</span>';
                    } else {
                        return this.value.name;
                    }
                }
            }
        },

        yAxis: {
            gridLineColor: 'transparent',
            min: -40,
            max: 40,
            tickInterval: 10,
            title: {
                text: 'Return %'
            }
        },

        series: [
        
            {
                data: [
                    { x: 0, low: -1, high: 2 },
                    { x: 0, low: 2, high: 7 },
                    { x: 0, low: 7, high: 10 },
                    { x: 0, low: 10, high: 16 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                data: [
                    { x: 1, low: -35, high: -22 },
                    { x: 1, low: -22, high: -20 },
                    { x: 1, low: -20, high: -15 },
                    { x: 1, low: -15, high: -3 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 2, low: 2, high: 9.5 },
                    { x: 2, low: 9.5, high: 15 },
                    { x: 2, low: 15, high: 21 },
                    { x: 2, low: 21, high: 35 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            },
            {
                data: [
                    { x: 3, low: 2, high: 4 },
                    { x: 3, low: 4, high: 6 },
                    { x: 3, low: 6, high: 8 },
                    { x: 3, low: 8, high: 23 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                data: [
                    { x: 4, low: -11, high: -5 },
                    { x: 4, low: -5, high: -3 },
                    { x: 4, low: -3, high: -1 },
                    { x: 4, low: -1, high: 1 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 5, low: 0, high: 4 },
                    { x: 5, low: 4, high: 5 },
                    { x: 5, low: 5, high: 6 },
                    { x: 5, low: 6, high: 10 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            },
            {
                data: [
                    { x: 6, low: 0, high: 6 },
                    { x: 6, low: 6, high: 7 },
                    { x: 6, low: 7, high: 10 },
                    { x: 6, low: 10, high: 13 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 7, low: 0, high: 1 },
                    { x: 7, low: 1, high: 2 },
                    { x: 7, low: 2, high: 6 },
                    { x: 7, low: 6, high: 12 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 8, low: -5, high: -3 },
                    { x: 8, low: -3, high: 0 },
                    { x: 8, low: 0, high: 3 },
                    { x: 8, low: 3, high: 8 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            }, {
                data: [
                    { x: 9, low: -4, high: -3 },
                    { x: 9, low: -3, high: -2 },
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
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [8.8, 0.3]
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
                [0.2, 7.7],
                [1.2, -19.9],
                [2.2, 9.7],
                [3.2, 5.1],
                [4.2, -3.6],
                [5.2, 4.2],
                [6.2, 7.7],
                [7.2, 3.1],
                [8.2, 0.4],
                [9.2, -2.0]
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
    rect = chart.renderer.rect(705, chart.chartHeight - xAxis.bottom, 70, 25, 0)
        .attr({
            'stroke-width': 0,
            stroke: '#02007c',
            fill: '#02007c',
            zIndex: 3
        })
        .add();
};

