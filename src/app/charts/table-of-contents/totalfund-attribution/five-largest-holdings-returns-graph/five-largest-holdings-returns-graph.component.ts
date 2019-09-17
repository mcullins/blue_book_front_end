import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-five-largest-holdings-returns-graph',
  templateUrl: './five-largest-holdings-returns-graph.component.html',
  styleUrls: ['./five-largest-holdings-returns-graph.component.css']
})
export class FiveLargestHoldingsReturnsGraphComponent implements OnInit {
    Highcharts = Highcharts;

    public chartOptions = {
        chart: {
            type: 'column',
        },

        colors: [
            '#730505',
            '#7f7c7e',
            '#474546',
            '#7f7c7e',
            '#730505'
        ],

        title: {
            text: 'Five Largest Holdings <br> Returns'
        },
        xAxis: {
             visible: false
            
        },

        yAxis: {
            allowDecimals: true,
            title: {
                text: undefined
            },          
            tickInterval: 1,
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
                    return this.series.name + ': <b>' +'(' + Highcharts.numberFormat(Math.abs(this.y), 1) + ')'
                } else {
                    return this.series.name + ': <b>' + Highcharts.numberFormat(this.y, 1) };
            }
        },

        plotOptions: {
            colorByPoint: true,
            series: {
                pointPadding: .2,
                groupPadding: 0


            },

            column: {
                depth: 40
            }
        },

        series: [
            {
                name: 'Loomis',
                data: [4.1]

            },
            {
                name: 'Lazard',
                data: [-0.3]

            },
            {
                name: 'SIT',
                data: [0.5]

            },
            {
                name: 'Dodge',
                data: [-1.0]

            },
            {
                name: 'M.S. Intl.',
                data: [-2.5]

            }]

    }
  constructor() { }

  ngOnInit() {
  }

}
