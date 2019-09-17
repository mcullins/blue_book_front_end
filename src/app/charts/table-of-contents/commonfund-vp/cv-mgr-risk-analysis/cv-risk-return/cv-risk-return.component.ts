import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-cv-risk-return',
  templateUrl: './cv-risk-return.component.html',
  styleUrls: ['./cv-risk-return.component.css']
})
export class CvRiskReturnComponent implements OnInit {


    Highcharts = Highcharts;
    chartOptions = {
        chart: {
            type: 'scatter',
            zoomType: 'xy',
            marginBottom: 125,
            events: {
                load: function () {
                    var label = this.renderer.label("+ Big CF VP IX")
                        .add();

                    label.align(Highcharts.extend(label.getBBox(), {
                        align: 'center',
                        x: 0, // offset
                        verticalAlign: 'bottom',
                        y: 0 // offset
                    }), null, 'spacingBox');

                }
            }
        },
        title: {
            text: 'Five-Year Risk Return Comparison'
        },

        credits: {
            enabled: false
        },
        xAxis: {
            tickLength: 10,
            tickWidth: 1,
            lineWidth: 1,
            tickColor: 'black',
            lineColor: 'black',
            tickPosition: 'inside',
            min: 0,
            max: 25,
            plotLines: [{
                color: '#000000',
                width: 1,
                value: 8
            }],
            tickInterval: 5,
            title: {
                enabled: true,
                text: 'Risk (Standard Deviation) %'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true,
            offset: -75
        },
        yAxis: {
            tickLength: 10,
            tickWidth: 1,
            lineWidth: 1,
            tickColor: 'black',
            lineColor: 'black',
            tickPosition: 'inside',
            title: {
                text: 'Return (Annualized)%'
            },
            min: -5,
            max: 25,
            tickInterval: 5,
            plotLines: [{
                color: '#000000',
                width: 1,
                value: 7
            }],
            gridLineWidth: 0
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            backgroundColor: '#FFFFFF',
            borderWidth: 1,
            y: -25
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: '{point.x}%, {point.y}%'
                }
            }
        },
        series: [
            {
                name: 'Commonfund VP IX',
                color: '#0061ff',
                zIndex: 2,
                data: [[18, 23]],
                marker: {
                    radius: 10,
                    symbol: 'diamond'
                },
            },
            {
                name: 'Domestic Equity Composite',
                color: 'grey',
                data: [[14.5, 6], [14.6, 8.5], [14.7, 10], [14.8, 11.8], [14.9, 12.9],
                [15, 12], [15.1, 11], [15.2, 9.7], [15.3, 8.5], [15.4, 7.4],
                [15.5, 8.6], [15.6, 9.4], [15.7, 10.5], [15.8, 11.3], [15.9, 10.4],
                [16, 6.7], [16.1, 7.5], [16.2, 8.4], [16.3, 9.6], [16.4, 9.9],
                [13.5, 8.6], [13.6, 9.4], [13.7, 10.5], [13.8, 11.3], [13.9, 10.4],
                [14.5, 6], [14.6, 8.5], [14.7, 10], [14.8, 11.8], [14.9, 12.9],
                [15.5, 12.5], [15.9, 11.5], [15.7, 9.2], [15.8, 8], [15.9, 7.9],
                [15.0, 8.1], [15.1, 9.9], [15.2, 10], [15.3, 11.8], [15.4, 10.9],
                [16.5, 6.2], [16.9, 7], [16.7, 8.9], [16.8, 9.1], [16.9, 9.4],
                [13, 8.1], [13.1, 9.9], [13.2, 10], [13.3, 11.8], [13.4, 10.8]
                ]

            }]


    }
    constructor() { }

    ngOnInit() {

    }

}