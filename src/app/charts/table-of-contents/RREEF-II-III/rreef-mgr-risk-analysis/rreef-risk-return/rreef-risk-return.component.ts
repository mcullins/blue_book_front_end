import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-rreef-risk-return',
  templateUrl: './rreef-risk-return.component.html',
  styleUrls: ['./rreef-risk-return.component.css']
})
export class RreefRiskReturnComponent implements OnInit {

    Highcharts = Highcharts;
    chartOptions = {
        chart: {
            type: 'scatter',
            zoomType: 'xy',
            marginBottom: 125,
            events: {
                load: function () {
                    var label = this.renderer.label("+ NCREIF")
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
            max: 4,
            plotLines: [{
                color: '#000000',
                width: 1,
                value: 1.5
            }],
            tickInterval: 2,
            title: {
                enabled: true,
                text: 'Risk (Standard Deviation) %'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
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
            min: 0,
            max: 16,
            tickInterval: 2,
            plotLines: [{
                color: '#000000',
                width: 1,
                value: 12
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
                name: 'RREEF II & III',
                color: '#0061ff',
                zIndex: 2,
                data: [[2.1, 14.1]],
                marker: {
                    radius: 10,
                    symbol: 'diamond'
                },
            },
            {
                name: 'Real Estate Core/Core+',
                color: 'grey',
                data: [[1.6, 12.5], [1.7, 12.3], [1.8, 12.4], [1.9, 11.8], [2.8, 11.9],
                [3, 12.8], [1.8, 13], [1.85, 13.1], [1.9, 13], [2, 15.5], [2.5, 14]]

            }]


    }
    constructor() { }

    ngOnInit() {

    }

}