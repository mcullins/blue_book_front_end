import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-five-lowest-price-change-graph',
  templateUrl: './five-lowest-price-change-graph.component.html',
  styleUrls: ['./five-lowest-price-change-graph.component.css']
})
export class FiveLowestPriceChangeGraphComponent implements OnInit {

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
            text: 'Five Lowest Price Change'
        },
        xAxis: {
            visible: false

        },

        yAxis: {
            title: undefined,
            allowDecimals: true,
            tickInterval: 0.2,
            max: -6.4,
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

        },
        legend: {
            align: 'center',
            itemWidth: 250

        },

        series: [
            {
                name: 'Abbott',
                data: [-8.2]

            },
            {
                name: 'Commonfund Intl PE VII',
                data: [-7.1]

            },
            {
                name: 'Commonfund VP IX',
                data: [-7.1]

            },
            {
                name: 'Commonfund Cap Part V',
                data: [-7.1]

            },
            {
                name: 'Commonfund PE VIII',
                data: [-7.1]

            }]

    }
    constructor() { }

    ngOnInit() {
    }

}
