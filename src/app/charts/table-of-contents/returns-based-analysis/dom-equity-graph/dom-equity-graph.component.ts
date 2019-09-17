import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dom-equity-graph',
  templateUrl: './dom-equity-graph.component.html',
  styleUrls: ['./dom-equity-graph.component.css']
})



export class DomEquityGraphComponent implements OnInit {
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
            text: 'Domestic Equity Manager'
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
                [-1.1, 1, .47],
                [-1.1, 1, .44],
                [-1.1, 1, .42],
                [-1.1, 1.03, .4],
                [-1.1, 1.03, .31],
                [-1.1, 1.03, .29]
            ],
            name: "SIT Inv. Associates",
            color: '#05b50b',
            marker: {
                fillColor: {
                    radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                    stops: [
                        [0, 'rgba(255,255,255,0.5)'],
                        [1, '#05b50b']
                    ]
                }
            }
        }, {
            data: [
                [-.5, -.7, .5],
                [-.7, -.3, .48],
                [-.8, -.4, .46],
                [-.9, -.5, .44],
                [-1, -.6, .42],
                [-1, -.6, .4],
                [-.9, -.7, .39],
                [-.8, -.7, .32],
                [-.76, -.69, .3]
                ],
            name: "Dodge & Cox Equity",
            color: '#db0000',          
            marker: {
                fillColor: {
                    radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                    stops: [
                        [0, 'rgba(255,255,255,0.5)'],
                        [1, '#db0000']
                    ]
                }
            }
            },
            {
                data: [
                    [.3, -.6, .5],
                    [.25, -.55, .48],
                    [.14, -.5, .43],
                    [.12, -.4, .4],
                    [.13, -.3, .38],
                    [.14, -.1, .35],
                    [.15, -.17, .33],
                    [.15, -.17, .325]
                ],
                name: 'Fiduciary Management',
                color: '#1b03b5',
                marker: {
                    fillColor: {
                        radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                        stops: [
                            [0, 'rgba(255,255,255,0.5)'],
                            [1, '#1b03b5']
                        ]
                    }   
                }
            },
            {
                data: [
                    [-1.3, -1.2, .2],
                ],
                name: "Russell 1000 Value",
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
                name: "Russell 2000 Value",
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
                name: "Russell 1000 Growth",
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
                name: "Russell 2000 Growth",
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
