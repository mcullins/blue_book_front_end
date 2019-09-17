import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-ccp-risk-return',
  templateUrl: './ccp-risk-return.component.html',
  styleUrls: ['./ccp-risk-return.component.css']
})
export class CcpRiskReturnComponent implements OnInit {

 

    Highcharts = Highcharts;
    chartOptions = {
        chart: {
            type: 'scatter',
            zoomType: 'xy',
            marginBottom: 125,
            events: {
                load: function () {
                    var label = this.renderer.label("+ Big CF CP V")
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
            text: 'Three-Year Risk Return Comparison'
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
            max: 20,
            plotLines: [{
                color: '#000000',
                width: 1,
                value: 9.2
            }],
            tickInterval: 2,
            title: {
                enabled: true,
                text: 'Risk (Standard Deviation) %',
                y: 89
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true,
            offset: -89
        },
        yAxis: {
            tickLength: 10,
            tickWidth: 1,
            lineWidth: 1,
            tickColor: 'black',
            lineColor: 'black',
            tickPosition: 'inside',
            title: {
                text: 'Return (Annualized) %'
            },
            min: -5,
            max: 20,
            tickInterval: 5,
            plotLines: [{
                color: '#000000',
                width: 1,
                value: 5.5
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
                name: 'Commonfund Capital Partners V',
                color: '#0061ff',
                zIndex: 2,
                data: [[9.2, 5.5]],
                marker: {
                    radius: 10,
                    symbol: 'diamond'
                },
            },
            {
                name: 'Domestic Equity Composite',
                color: 'grey',
                data: [[11.5, 6], [11.6, 8.5], [11.7, 10], [11.8, 11.8], [11.9, 12.9],
                [10, 12], [10.1, 11], [10.2, 9.7], [10.3, 8.5], [10.4, 7.4],
                [10.5, 8.6], [10.6, 9.4], [10.7, 10.5], [10.8, 11.3], [10.9, 10.4],
                [9, 6.7], [9.1, 7.5], [9.2, 8.4], [9.3, 9.6], [9.4, 9.9],
                [13.5, 8.6], [13.6, 9.4], [13.7, 10.5], [13.8, 11.3], [13.9, 10.4],
                [11.5, 6], [11.6, 8.5], [11.7, 10], [11.8, 11.8], [11.9, 12.9],
                [10.5, 12.5], [10.9, 11.5], [10.7, 9.2], [10.8, 8], [10.9, 7.9],
                [10.0, 8.1], [10.1, 9.9], [10.2, 10], [10.3, 11.8], [10.4, 10.9],
                [9.5, 6.2], [9.9, 7], [9.7, 8.9], [9.8, 9.1], [9.9, 9.4],
                [13, 8.1], [13.1, 9.9], [13.2, 10], [13.3, 11.8], [13.4, 10.8],
                [8, 8.1], [8.1, 9.9], [8.2, 10], [8.3, 11.8], [8.4, 10.8],
                [12, 5.1], [13.5, 4.9], [14.7, 5], [13.3, 4.8], [12.4, 5.8]
                ]

            }]


    }
    constructor() { }

    ngOnInit() {

    }

}