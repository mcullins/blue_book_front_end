import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-ms-intl-five-yr-risk-return',
  templateUrl: './ms-intl-five-yr-risk-return.component.html',
  styleUrls: ['./ms-intl-five-yr-risk-return.component.css']
})
export class MsIntlFiveYrRiskReturnComponent implements OnInit {

    Highcharts = Highcharts;
    chartOptions = {
        chart: {
            type: 'scatter',
            zoomType: 'xy',
            marginBottom: 125,
            events: {
                load: function () {
                    var label = this.renderer.label("+ EAFE")
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
                value: 14.9
            }],
            tickInterval: 5,
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
            min: -2,
            max: 12,
            tickInterval: 2,
            plotLines: [{
                color: '#000000',
                width: 1,
                value: 2.2
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
                name: 'Morgan Stanley - International Equity',
                color: '#0061ff',
                zIndex: 2,
                data: [[14.5, 3]],
                marker: {
                    radius: 10,
                    symbol: 'diamond'
                },
            },
            {
                name: 'Intl Large Cap Relative Value',
                color: 'grey',
                data: [[10, 10.8], [9, 6.5], [14.9, 8.5], [15.3, 7.8], [16, 6.7],
                [14.5, 6.7], [14.7, 2], [14.8, 2.5], [14.9, 3], [14.8, 2.8], [14.5, 3.2],
                [15.2, 2.8], [15.4, 1.8], [15.5, 2.6], [15.4, 1.9], [15.1, 2.7],
                [13, 2.4], [13.5, 1.7], [14, 1.5], [15, 1.2], [16, 2], [15.5, 2.4],
                [14, 3.2], [14.5, 3.7], [17, 2.5], [16, 1.4], [16.5, 2], [16, 3],
                [14, 4], [14.5, 5.7], [17, 6.5], [16, 5.4], [16.5, 4.2], [16, 5.3],
                [14, 5.4], [14.5, 4.7], [17, 5.5], [16, 5.8], [16.5, 4.7], [16, 6.3],
                [14, .4], [14.5, 1.7], [17, 0.5], [16, 1.8], [16.5, 2.7], [16, .3],
                [14, -.4], [14.5, -.7], [17, -0.5], [16, -.8], [16.5, -.7], [16, -.3]]

            }]


    }
    constructor() { }

    ngOnInit() {

    }

}