import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as Highcharts3d from 'highcharts/highcharts-3d';



@Component({
  selector: 'app-total-value-gainedlost-graph',
  templateUrl: './total-value-gainedlost-graph.component.html',
  styleUrls: ['./total-value-gainedlost-graph.component.css']
})
export class TotalValueGainedlostGraphComponent implements OnInit {

    Highcharts = Highcharts;

    chartOptions = {
        chart: {
            type: 'column',

        },

        colors: [
            '#730505',
            '#b2b4b7',
            '#484a4c'
        ],

        title: {
            text: 'Total Value Gained/(Lost)'
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
            title: {
                text: '% Return',
                skew3d: true,
                style: {
                    fontSize: '18px'
                },
            },
            labels: {
                format: '{value:.1f}',
                formatter: function () {
                    if (this.value < 0) {
                        return '(' + Highcharts.numberFormat(Math.abs(this.value), 1) + ')'
                    } else { return Highcharts.numberFormat(this.value, 1) };
                }
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
                name: 'Total Value Gained/(Lost)',
                data: [0.1, -0.2],

            },
            {
                name: 'Value Gained/(Lost) By Asset Allocation',
                data: [-0.7, -1.0],

            },
            {
                name: 'Value Gained/(Lost) By Active Management',
                data: [0.8, 0.8],

            }]

    }
  constructor() { }

  ngOnInit() {
  }

}
