import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-rreef-capture-ratio',
  templateUrl: './rreef-capture-ratio.component.html',
  styleUrls: ['./rreef-capture-ratio.component.css']
})
export class RreefCaptureRatioComponent implements OnInit {

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

                    var label2 = this.renderer.label("No Down Quarters")
                        .add();

                    label2.align(Highcharts.extend(label.getBBox(), {
                        align: 'right',
                        x: 80, // offset
                        verticalAlign: 'bottom',
                        y: -250 // offset
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
                    formatter: function () {
                        if (this.y != 0) {
                            return this.y + '%';
                        }
                    }

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
            name: 'RREEF II & III',
            data: [130, 0]
        }, {
            name: 'NCREIF',
            data: [100, 0]
        }]

    }
    constructor() { }

    ngOnInit() {
    }

}