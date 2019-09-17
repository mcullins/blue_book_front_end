import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-rel-objective-graph',
  templateUrl: './rel-objective-graph.component.html',
  styleUrls: ['./rel-objective-graph.component.css']
})
export class RelObjectiveGraphComponent implements OnInit {
    Highcharts = Highcharts;

    chartOptions = {
        chart: {
            type: 'column',
            marginBottom: 110,
            events: {
                load: function () {
                    var label = this.renderer.label("\xb222.8% SP 500, 5.7% R2000, 28.5% ACWI xUS, 15% BC Agg, 8% HFR Cns, 9% NCREIF ODCE, 5% SP MLP, 5% Bieglow Priv, <br> \xa0\xa0\xa0\xa0 1% Big CF PE Na - Objective has changed since inception <br> * Bigelow 2016")
                        .add();
                    label.align(Highcharts.extend(label.getBBox(), {
                        align: 'left',
                        x: 0, // offset
                        verticalAlign: 'bottom',
                        y: 10 // offset
                    }), null, 'spacingBox');
                }

                },
            options3d: {
                enabled: false,
                alpha: 10,
                beta: 25,
                viewDistance: 25,
                depth: 70
            }
        },

        colors: [
            '#730505',
            '#7f7c7e',
            '#050850'
        ],
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            y: -40
        },
        title: {
            text: 'Relative Objective'
        },

        xAxis: {
            categories: ['1 Year', '3 Years', '5 Years'],
            labels: {
                skew3d: true,
                style: {
                    fontSize: '16px'
                }
            }
        },

        yAxis: {
            allowDecimals: true,
            title: '',
            tickInterval: 1,
            labels: {
                format: '{value}%'
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
                name: 'Client Total Fund',
                data: [-1, 7, 7.3],

            },
            {
                name: 'Relative Objective\xb2',
                data: [-0.9, 7, 7.4],

            },
            {
                name: 'Total Fund Universe*',
                data: [-2, 6, 7],

            }]

    }
    constructor() { }

    ngOnInit() {
    }

}

