import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-ms-emerging-risk-return',
  templateUrl: './ms-emerging-risk-return.component.html',
  styleUrls: ['./ms-emerging-risk-return.component.css']
})
export class MsEmergingRiskReturnComponent implements OnInit {
    Highcharts = Highcharts;
    chartOptions = {
        chart: {
            type: 'scatter',
            zoomType: 'xy',
            marginBottom: 125,
            events: {
                load: function () {
                    var label = this.renderer.label("+ EM")
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
                value: 17.5
            }],
            tickInterval: 5,
            title: {
                enabled: true,
                text: 'Risk (Standard Deviation) %'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true,
            offset: -268
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
            min: -6,
            minRange: 0,
            max: 4,
            tickInterval: 2,
            plotLines: [{
                color: '#000000',
                width: 1,
                value: -4.5
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
                name: 'Morgan Stanley - Emerging Markets Equity',
                color: '#0061ff',
                zIndex: 2,
                data: [[15, -2]],
                marker: {
                    radius: 10,
                    symbol: 'diamond'
                },
            },
            {
                name: 'Emerging Markets Equity',
                color: 'grey',
                data: [[17, -1.8], [17, -1.5], [17.9, -1.5], [17.3, -1.8], [17, -1.7],
                [18.5, -2.7], [18.7, -2], [18.8, -2.5], [18.9, -3], [18.8, -2.8], [18.5, -3.2],
                [19.2, -2.8], [19.4, -1.8], [19.5, -2.6], [19.4, -1.9], [19.1, -2.7],
                [17.1, -2.4], [17.5, -1.7], [17.2, -1.5], [17.3, -1.2], [17.4, -2], [17.5, -2.4],
                [17, -3.2], [17.5, -3.7], [17, -3.5], [16, -3.4], [16.5, -3], [16.6, -3.8],
                [17, -4], [17.5, -5.7], [17, -4.5], [16.8, -5.4], [16.5, -4.2], [16.7, -5.3],
                [17, -5.4], [17.5, -4.7], [17, -5.5], [16.9, -5.8], [16.5, -4.7], [16, -3.3],
                [18, -.4], [18.5, -1.7], [17, -0.5], [16.8, -1.8], [16.5, -2.7], [16, -.3],
                [15.5, 1], [16.5, .7], [17.5, 1.5], [12, 2.4], [17.5, -2.7], [17.5, -.3],
                [18, -4.4], [18.5, -4.7], [18, -4.5], [18, -4.8], [18.5, -4.7], [16, -4.3]]

            }]


    }
    constructor() { }

    ngOnInit() {

    }

}