import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-ls-risk-return',
  templateUrl: './ls-risk-return.component.html',
  styleUrls: ['./ls-risk-return.component.css']
})
export class LsRiskReturnComponent implements OnInit {
    Highcharts = Highcharts;
    chartOptions = {
        chart: {
            type: 'scatter',
            zoomType: 'xy',
            marginBottom: 125,
            events: {
                load: function () {
                    var label = this.renderer.label("+ BC Agg - Benchmark has changed since inception")
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
            max: 6,
            plotLines: [{
                color: '#000000',
                width: 1,
                value: 3
            }],
            tickInterval: 2,
            title: {
                enabled: true,
                text: 'Risk (Standard Deviation) %'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true,
            
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
            max: 6,
            tickInterval: 2,
            plotLines: [{
                color: '#000000',
                width: 1,
                value: 3.9
            }],
            gridLineWidth: 0
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
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
                name: 'Loomis Sayles Co.',
                color: '#0061ff',
                zIndex: 2,
                data: [[3.6, 4.4]],
                marker: {
                    radius: 10,
                    symbol: 'diamond'
                },
            },
            {
                name: 'Core Extended',
                color: 'grey',
                data: [[3, 4.8], [3.7, 4.5], [3.2, 4.2], [3.3, 4.3], [3, 4.4],
                [2.5, 4], [2.7, 4.1], [2.8, 4.2], [2.9, 4.3], [2.8, 4.4], [2.5, 4.5],
                    [2.8, 2.2], [5.6, 5], [5.5, 4.7], [4.8, 5], [4, 5],
                    [2.9, 4], [3, 4.1], [3, 4.2], [3.1, 4.3], [2.9, 4.4], [3, 4.5]]

            }]


    }
    constructor() { }

    ngOnInit() {

    }

}