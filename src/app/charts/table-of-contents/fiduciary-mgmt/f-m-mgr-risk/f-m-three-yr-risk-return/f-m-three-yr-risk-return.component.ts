import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-f-m-three-yr-risk-return',
  templateUrl: './f-m-three-yr-risk-return.component.html',
  styleUrls: ['./f-m-three-yr-risk-return.component.css']
})
export class FMThreeYrRiskReturnComponent implements OnInit {
    Highcharts = Highcharts;
    chartOptions = {
        chart: {
            type: 'scatter',
            zoomType: 'xy',
            marginBottom: 125,
            events: {
                load: function () {
                    var label = this.renderer.label("+ R2000V")
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
            max: 18,
            plotLines: [{
                color: '#000000',
                width: 1,
                value: 12.3
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
            max: 14,
            tickInterval: 2,
            plotLines: [{
                color: '#000000',
                width: 1,
                value: 5.7
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
                name: 'Fiduciary Management',
                color: '#0061ff',
                data: [[11, 9]],
                marker: {
                    radius: 10,
                    symbol: 'diamond'
                },
            },
            {
                name: 'Specialty Small Relative Value',
                color: 'grey',
                data: [[12, 7], [11.5, 12], [13.5, 9], [12.7, 10], [12.3, 11],
                [13, 11], [13.5, 12], [15, 11.75], [15.5, 9], [13.8, 8], [13.5, 12.5],
                [13.2, 8.8], [13.2, 12.8], [13.5, 10.6], [12.4, 11.9], [11.1, 12.8],
                [12, 8.4], [13, 9.9], [11.5, 7.1], [14, 9.2], [14.4, 10.5], [12.5, 6.8],
                [11, 7.7], [11, 9.3], [13, 13.5], [14, 9.4], [14.4, 9.5], [13.5, 10],
                [10, 5.6], [10.5, 5.6], [11.5, 4.5], [11.7, .5], [12, 4], [12.3, 3.7],
                [12.6, 3.7], [12.8, 3.9], [14, 2], [15.5, 0.9], [16.4, 2.5], [15.8, 5.3]]

            }]


    }
    constructor() { }

    ngOnInit() {

    }

}