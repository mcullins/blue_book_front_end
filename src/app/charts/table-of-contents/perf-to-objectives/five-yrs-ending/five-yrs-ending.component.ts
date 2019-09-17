import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-five-yrs-ending',
  templateUrl: './five-yrs-ending.component.html',
  styleUrls: ['./five-yrs-ending.component.css']
})
export class FiveYrsEndingComponent implements OnInit {
    Highcharts = Highcharts;
    chartOptions = {
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Five Years Ending 3/31/2016'
        },

        credits: {
            enabled: false
        },
        xAxis: {
            min: 0,
            title: {
                enabled: true,
                text: 'Risk (Standard Deviation) %'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Return (Annualized)%'
            },
            min: 0
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            borderWidth: 1
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
                    pointFormat: '{point.x} cm, {point.y} kg'
                }
            }
        },
        series: [

            {
            name: 'Manager in Total Fund Universe',
                color: '#7cacf9',
            data: [[8, 7], [8, 8], [8, 9], [9, 6], [9, 7],
                [9, 8], [9, 9], [7, 8], [7, 9], [7, 10], [11, 6],
                [8.4, 7.9], [8.2, 8.8], [8.5, 9.6], [9.4, 6.9], [9.1, 7.8],
                [9.9, 8.4], [9.5, 9.9], [7.1, 8.2], [7.8, 9.2], [7.7, 10.5], [11.1, 6.8]]

            },
            {
                name: 'Total Fund',
                color: '#00000',
                data: [[9.6, 7.5]]
            }]


    }
    constructor() { }

    ngOnInit() {

    }

}
