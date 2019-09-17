import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-eco-orientation-graph',
  templateUrl: './eco-orientation-graph.component.html',
  styleUrls: ['./eco-orientation-graph.component.css']
})
export class EcoOrientationGraphComponent implements OnInit {
    Highcharts = Highcharts;

    chartOptions = {
        chart: {
            type: 'column'
        },
 
        title: {
            text: 'Economic Orientation vs. Index - Current Period'
        },
        credits: {
            enabled: false
        },
        colors: [
            '#f6ff05',
            '#ff8860',
            '#a131c4',
            '#0b6d01',
            '#3700dd',
            '#00c3dd',
            '#dd0000'

        ],

        xAxis: {
            
            categories: ['3/31/2014','3/31/2015','3/31/2016','3/31/2017'],
            labels: {
                skew3d: true,
                y: 60,
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
                y: 20,
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

     series: [{
        name: 'Interest Rates',
        data: [35, 47, 48, 60],
        stack: 'Mgr'
    }, {
        name: 'Consumer Spending',
        data: [40, 30, 30, 17],
        stack: 'Mgr'
    }, 
    {
        name: 'Basic Industry',
        data: [15, 20, 15, 16],
        stack: 'Mgr'
    },     {
        name: 'Energy',
        data: [6, 2, 2, 1],
        stack: 'Mgr'
    },{
        name: 'Technology',
        data: [4, 1, 5, 6],
        stack: 'Mgr'
    }, 
    {name: 'Other',
        data: [0, 0, 0, 0],
        stack: 'Mgr'
         },
          
    {name: 'Not Rated',
        data: [0, 0, 0, 0],
        stack: 'Mgr'
         }, {
        showInLegend: false,
        name: 'Interest Rates',
        data: [28, 31, 32, 29],
        stack: 'Index'
         }, {
        showInLegend: false,
        name: 'Consumer Spending',
        data: [35, 40, 40, 40],
        stack: 'Index'
         }, {
        showInLegend: false,
        name: 'Basic Industry',
        data: [23, 16, 16, 20],
        stack: 'Index'
         }, {
        showInLegend: false,
        name: 'Energy',
        data: [4, 1, 2, 4],
        stack: 'Index'
         }, {
        showInLegend: false,
        name: 'Technology',
        data: [10, 12, 10, 7],
        stack: 'Index'
         }, {
        showInLegend: false,
        name: 'Other',
        data: [0, 0, 0, 0],
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
