import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-intl-equity-graph',
  templateUrl: './intl-equity-graph.component.html',
  styleUrls: ['./intl-equity-graph.component.css']
})
export class IntlEquityGraphComponent implements OnInit {
    Highcharts = Highcharts;

    chartOptions = {
        chart: {
            type: 'bubble',
            plotBorderWidth: 1,
            zoomType: 'xy'
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'International Equity Manager'
        },
        plotOptions: {
            marker: {
                lineColor: '#1e2530',
            }
        },
        alignTicks: false,
        xAxis: [{
            max: 1.5,
            min: -1.5,
            offset: -195,
            tickPositions: [-1.5, -.5, 0, .5, 1.5],
            plotLines: [{
                color: '#C0C0C0',
                width: 5,
                value: 0
            }]
        }, {
            offset: 0,
            linkedTo: 0,
            lineWidth: 0,
            title: {
                text: ''
            },
            tickPositions: [-1.5, 0, 1.5],
            gridLineColor: 'transparent',
            "tickWidth": 0,
            "categories": {
                "-1.5": "Large",
                "0": "Mid",
                "1.5": "Small"
            }
        }],

        yAxis: [{
            title: {
                text: '',
            },
            startOnTick: false,
            endOnTick: false,
            tickPositions: [-1.5, -.5, 0, .5, 1.5],
            offset: -350,
            max: 1.5,
            min: -1.5,
            gridLineColor: 'transparent',
            plotLines: [{
                color: '#C0C0C0',
                width: 5,
                value: 0
            }]
        }, {
            offset: -10,
            linkedTo: 0,
            lineWidth: 0,
            title: {
                text: ''
            },
            tickPositions: [-1.5, 0, 1.5],
            gridLineColor: 'transparent',
            "categories": {
                "-1.5": "Value",
                "0": "Blend",
                "1.5": "Growth"
            }


        }],



        series: [{

            data: [
                [-1.1, 1, .5],
                [-1.1, .7, .4]
            ],
            name: "Morgan Stanley - International Equity",
            color: '#990099',
            marker: {
                fillColor: {
                    radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                    stops: [
                        [0, 'rgba(255,255,255,0.5)'],
                        [1, '#990099']
                    ]
                }
            }
        }, {
            data: [
                [-1.1, .4, .5],
                [-1.1, .5, .45],
                [-1.1, .6, .45],
                [-1.1, .9, .4],
                [-1.1, .8, .3],
                [-1.1, .6, .3],
                [-1.1, .5, .275],
                [-1.1, .4, .25]
            ],
            name: "Lazard Asset Management",
                color: '#009999',
            marker: {
                fillColor: {
                    radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                    stops: [
                        [0, 'rgba(255,255,255,0.5)'],
                        [1, '#009999']
                    ]
                }
            }
        },
        
        {
            data: [
                [-1.3, -1.2, .2],
            ],
            name: "MSCI EAFE Large Cap Value",
            tooltip: {
                pointFormat: '{series.name}',
                headerFormat: '',
            },
            color: '#000000',
            showInLegend: false,
            marker: {
                fillColor: ' #ffffff'
            }
        },
        {
            data: [
                [1.3, -1.2, .2],
            ],
            name: "MSCI EAFE Small Cap Value",
            tooltip: {
                pointFormat: '{series.name}',
                headerFormat: '',
            },
            color: '#000000',
            showInLegend: false,
            marker: {
                fillColor: ' #ffffff'
            }
        },
        {
            data: [
                [-1.3, 1.2, .2],
            ],
            name: "MSCI EAFE Small Cap Growth",
            tooltip: {
                pointFormat: '{series.name}',
                headerFormat: '',
            },
            color: '#000000',
            showInLegend: false,
            marker: {
                fillColor: ' #ffffff'
            }
        },
        {
            data: [
                [1.3, 1.2, .2],
            ],
            name: "MSCI EAFE Large Cap Growth",
            tooltip: {
                pointFormat: '{series.name}',
                headerFormat: '',
            },
            color: '#000000',
            showInLegend: false,
            marker: {
                fillColor: ' #ffffff'
            }
        }
        ]
    }
    constructor() { }

    ngOnInit() {
    }

}
