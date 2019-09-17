import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-sit-five-yr-risk-return',
  templateUrl: './sit-five-yr-risk-return.component.html',
  styleUrls: ['./sit-five-yr-risk-return.component.css']
})
export class SitFiveYrRiskReturnComponent implements OnInit {
    Highcharts = Highcharts;
    chartOptions = {
        chart: {
            type: 'scatter',
            zoomType: 'xy',
            marginBottom: 125,
            events: {
                load: function () {
                    var label = this.renderer.label("+ R1000G")
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
            max: 20,
            plotLines: [{
                color: '#000000',
                width: 1,
                value: 12.8
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
                value: 12.2
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
                name: 'SIT Inv. Associates',
                color: '#0061ff',
                data: [[12.6, 11]],
                marker: {
                    radius: 10,
                    symbol: 'diamond'
                },
            },
            {
                name: 'Core Growth',
                color: 'grey',
                data: [[12, 13], [11.5, 12], [13, 9], [14, 10], [14.5, 11],
                [13, 11], [13.5, 12], [15, 11.75], [15.5, 9], [13.8, 8], [14.5, 12.5],
                [13.2, 8.8], [13.2, 12.8], [13.5, 10.6], [12.4, 11.9], [11.1, 12.8],
                    [12, 8.4], [13, 9.9], [11.5, 14.1], [14, 9.2], [14.4, 10.5], [12.5, 14],
                    [11, 14], [11, 9.3], [13, 13.5], [14, 9.4], [14.4, 9.5], [13.5, 10]]

            }]


    }
    constructor() { }

    ngOnInit() {

    }

}