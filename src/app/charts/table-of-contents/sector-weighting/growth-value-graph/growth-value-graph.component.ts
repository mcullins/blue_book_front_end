import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-growth-value-graph',
  templateUrl: './growth-value-graph.component.html',
  styleUrls: ['./growth-value-graph.component.css']
})
export class GrowthValueGraphComponent implements OnInit {

    Highcharts = Highcharts;

    chartOptions = {
        chart: {
            type: 'column'
        },

        title: {
            text: 'Growth/Value vs. Index - Last Four Years'
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
                y:40,
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
            width: 550,
            align: 'right'
        },

        series: [{
            name: 'High Growth',
            data: [16, 13, 5, 39],
            stack: 'Mgr'
        }, {
            name: 'Moderate Growth',
            data: [21, 31, 19, 15],
            stack: 'Mgr'
        },
        {
            name: 'Neutral',
            data: [22, 16, 20, 20],
            stack: 'Mgr'
        }, {
            name: 'Moderate Value',
            data: [32, 33, 40, 18],
            stack: 'Mgr'
        }, {
            name: 'High Value',
            data: [9, 17, 16, 8],
            stack: 'Mgr'
        },
        {
            name: 'Not Rated',
            data: [0, 1, 0, 0],
            stack: 'Mgr'
        },
        {
            showInLegend: false,
            name: 'High Growth',
            data: [0, 0, 0, 0],
            stack: 'Index'
        }, {
            showInLegend: false,
            name: 'Moderate Growth',
            data: [0, 0, 0, 0],
            stack: 'Index'
        }, {
            showInLegend: false,
            name: 'Neutral',
            data: [45, 45, 45, 44],
            stack: 'Index'
        }, {
            showInLegend: false,
            name: 'Moderate Value',
            data: [46, 48, 46, 46],
            stack: 'Index'
        }, {
            showInLegend: false,
            name: 'High Value',
            data: [9, 7, 9, 10,],
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
