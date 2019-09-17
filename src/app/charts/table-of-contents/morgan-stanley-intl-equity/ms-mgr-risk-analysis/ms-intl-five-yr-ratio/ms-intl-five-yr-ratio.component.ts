import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-ms-intl-five-yr-ratio',
  templateUrl: './ms-intl-five-yr-ratio.component.html',
  styleUrls: ['./ms-intl-five-yr-ratio.component.css']
})
export class MsIntlFiveYrRatioComponent implements OnInit {

    Highcharts = Highcharts;

    public chartOptions = {
        chart: {
            type: 'column',
            marginBottom: 125,
            events: {
                load: function () {
                    var label = this.renderer.label("Relative benchmark will always be 100% in up quarters and -100% in down quarters.")
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
            text: 'Five-Year Capture Ratio'
        },
        legend: {
            borderColor: 'grey',
            borderWidth: 1,
            y: -45
        },
        colors: [
            '#0061ff',
            'grey'
        ],
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.y}%'

                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: '{point.y}%'
                }
            }
        },

        yAxis: {
            title: {
                text: 'Ratio %'
            },

            labels: {
                enabled: false
            }
        },
        xAxis: {
            categories: ['Up Quarters', 'Down Quarters'],
            opposite: true,
            tickLength: 0,
            tickWidth: 0,

        },
        credits: {
            enabled: false
        },

        series: [{
            name: 'Morgan Stanley - International Equity',
            data: [99, -91]
        }, {
            name: 'EAFE',
            data: [100, -100]
        }]

    }
    constructor() { }

    ngOnInit() {
    }

}