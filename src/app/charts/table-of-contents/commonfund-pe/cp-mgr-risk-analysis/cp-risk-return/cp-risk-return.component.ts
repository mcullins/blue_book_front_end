import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-cp-risk-return',
  templateUrl: './cp-risk-return.component.html',
  styleUrls: ['./cp-risk-return.component.css']
})
export class CpRiskReturnComponent implements OnInit {


    Highcharts = Highcharts;
    chartOptions = {
        chart: {
            type: 'scatter',
            zoomType: 'xy',
            marginBottom: 125,
            events: {
                load: function () {
                    var label = this.renderer.label("+ BigCFPEVIII")
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
                value: 11.8
            }],
            tickInterval: 2,
            title: {
                enabled: true,
                text: 'Risk (Standard Deviation) %',
                y: 90
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true,
            offset: -89,
            
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
                value: 6.5
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
                name: 'Commonfund PE VIII',
                color: '#0061ff',
                zIndex: 2,
                data: [[11.6, 4]],
                marker: {
                    radius: 10,
                    symbol: 'diamond'
                },
            },
            {
                name: 'Domestic Equity Composite',
                color: 'grey',
                data: [[12.5, 6], [12.6, 8.5], [12.7, 10], [12.8, 11.8], [12.9, 12.9],
                [11, 12], [11.1, 11], [11.2, 9.7], [11.3, 8.5], [11.4, 7.4],
                [12.5, 8.6], [12.6, 9.4], [12.7, 10.5], [12.8, 11.3], [12.9, 10.4],
                [10, 6.7], [10.1, 7.5], [10.2, 8.4], [10.3, 9.6], [10.4, 9.9],
                [13.5, 8.6], [13.6, 9.4], [13.7, 10.5], [13.8, 11.3], [13.9, 10.4],
                [12.5, 6], [12.6, 8.5], [12.7, 10], [12.8, 11.8], [12.9, 12.9],
                [11.5, 12.5], [11.9, 11.5], [11.7, 9.2], [11.8, 8], [11.9, 7.9],
                [11.0, 8.1], [11.1, 9.9], [11.2, 10], [11.3, 11.8], [11.4, 10.9],
                [10.5, 6.2], [10.9, 7], [10.7, 8.9], [10.8, 9.1], [10.9, 9.4],
                [13, 8.1], [13.1, 9.9], [13.2, 10], [13.3, 11.8], [13.4, 10.8]
                ]

            }]


    }
    constructor() { }

    ngOnInit() {

    }

}