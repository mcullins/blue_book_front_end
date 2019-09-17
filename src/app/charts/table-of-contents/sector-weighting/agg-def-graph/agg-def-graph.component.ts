import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-agg-def-graph',
  templateUrl: './agg-def-graph.component.html',
  styleUrls: ['./agg-def-graph.component.css']
})
export class AggDefGraphComponent implements OnInit {
    Highcharts = Highcharts;

    chartOptions = {
        chart: {
            type: 'column',
        },

        title: {
            text: 'Aggressive/Defensive vs. Index - Last Four Years'
        },
        credits: {
            enabled: false
        },
        colors: [
            '#f4427d',
            '#663889',
            '#898037',
            '#274293',
            '#01894e',
            '#891500'

        ],

        xAxis: {

            categories: ['3/31/2014', '3/31/2015', '3/31/2016', '3/31/2017'],
            labels: {
                skew3d: true,
                y: 40,
                crop: false,
                overflow: true,
                style: {
                    fontSize: '16px'
                }
            }
        },

        yAxis: {
            allowDecimals: false,
            min: 0,
            max: 100,
            labels: {
                format: '{value}' + '%'
            },
            title: {
                text: ''
            },
            stackLabels: {
                enabled: true,
                y: 10,
                verticalAlign: 'bottom',
                crop: false,
                overflow: true,
                formatter: function () {
                    return this.stack;
                },
                style: {
                    fontSize: '9px',
                    color: '#706f6f'
                }
            }
        },

        tooltip: {
            headerFormat: '<b>{point.key}</b><br>',
            pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
        },

        plotOptions: {
            column: {
                stacking: 'normal',
                depth: 40
            },
            series: {
                'pointPadding': .25
            }
        },
        legend: {
            width: 625,
            align: 'right'
        },

        series: [{
            name: 'Very Aggressive',
            data: [1, 5, 1, 2],
            stack: 'Mgr'
        }, {
            name: 'Moderately Aggressive',
            data: [23, 10, 21, 22],
            stack: 'Mgr'
        },
        {
            name: 'Neutral',
            data: [22, 16, 20, 36],
            stack: 'Mgr'
        }, {
            name: 'Moderately Defensive',
            data: [35, 43, 38, 21],
            stack: 'Mgr'
        }, {
            name: 'Very Defensive',
            data: [19, 25, 20, 19],
            stack: 'Mgr'
        },
        {
            name: 'Not Rated',
            data: [0, 1, 0, 0],
            stack: 'Mgr'
        },
         {
            showInLegend: false,
            name: 'Very Aggressive',
            data: [13, 4, 8, 12],
            stack: 'Index'
        }, {
            showInLegend: false,
            name: 'Moderately Aggressive',
            data: [10, 18, 20, 26],
            stack: 'Index'
        }, {
            showInLegend: false,
            name: 'Neutral',
            data: [45, 30, 17, 22],
            stack: 'Index'
        }, {
            showInLegend: false,
            name: 'Moderately Defensive',
            data: [22, 30, 35, 23],
            stack: 'Index'
        }, {
            showInLegend: false,
            name: 'Very Defensive',
            data: [10, 18, 20, 17],
            stack: 'Index'
        }, {
            showInLegend: false,
            name: 'Not Rated',
            data: [0, 0, 0, 0],
            stack: 'Index'
        }]

    }



    constructor() { }

    ngOnInit() {


    }
}
