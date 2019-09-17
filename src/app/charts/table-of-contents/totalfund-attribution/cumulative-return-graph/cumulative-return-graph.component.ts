import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as Highcharts3d from 'highcharts/highcharts-3d';

Highcharts3d(Highcharts);

@Component({
  selector: 'app-cumulative-return-graph',
  templateUrl: './cumulative-return-graph.component.html',
  styleUrls: ['./cumulative-return-graph.component.css']
})
export class CumulativeReturnGraphComponent implements OnInit {

    Highcharts = Highcharts;

    chartOptions = {
        chart: {
            type: 'column',

        },

        colors: [
            '#050850',
            '#730505'
        ],

        title: {
            text: 'Cumulative Return'
        },

        xAxis: {
            categories: ['3 Years %', '5 Years %'],
            labels: {
                skew3d: true,
                style: {
                    fontSize: '16px'
                }
            }
        },

        yAxis: {
            allowDecimals: true,
            min: 0,
            title: {
                text: '% Return',
                skew3d: true,
                style: {
                    fontSize: '18px'
                },
            },
            labels: {
                format: '{value:.1f}'
            }
        },
        credits: {
            enabled: false
        },

  
            tooltip: {
                formatter: function () {
                    if (this.y < 0) {
                        return this.series.name + ': <b>' + '(' + Highcharts.numberFormat(Math.abs(this.y), 1) + ')'
                    } else {
                        return this.series.name + ': <b>' + Highcharts.numberFormat(this.y, 1)
                    };
                }
      
        },

        plotOptions: {
            colorByPoint: true,
            series: {
                pointPadding: 0,


            },

            column: {
               depth: 40
            }
        },

        series: [
            {
                name: 'Total Fund',
                data: [22.2, 41.2],

            },
            {
                name: 'Relative Objective \xb2 [Target Mix * Index Return]',
                data: [22.1, 41.5],
                
            }]

    }
  constructor() { }

  ngOnInit() {
  }

}
