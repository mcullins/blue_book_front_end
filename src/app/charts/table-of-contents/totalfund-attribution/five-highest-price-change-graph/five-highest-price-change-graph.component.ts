import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-five-highest-price-change-graph',
  templateUrl: './five-highest-price-change-graph.component.html',
  styleUrls: ['./five-highest-price-change-graph.component.css']
})
export class FiveHighestPriceChangeGraphComponent implements OnInit {
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
            text: 'Five Higest Price Change'
        },
        xAxis: {
            visible: false

        },

        yAxis: {
            title: {
                text: '%Change'
            },
            allowDecimals: true,
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
                    return this.series.name + ': <b>' + '(' + Highcharts.numberFormat(Math.abs(this.y), 1) + ')'
                } else {
                    return this.series.name + ': <b>' + Highcharts.numberFormat(this.y, 1)
                };
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
                data: [1.1]

            },
            {
                name: 'Lazard',
                data: [0.1]

            },
            {
                name: 'UBS',
                data: [2.4]

            },
            {
                name: 'M.S.EM',
                data: [5.2]

            },
            {
                name: 'Fiduciary',
                data: [7.3]

            }]

    }
    constructor() { }

    ngOnInit() {
    }

}