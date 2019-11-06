import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-intl-three-year-graph',
  templateUrl: './intl-three-year-graph.component.html',
  styleUrls: ['./intl-three-year-graph.component.css']
})
export class IntlThreeYearGraphComponent implements OnInit {

    Highcharts = Highcharts;

    chartOptions = {
        chart: {
            type: 'columnrange',
            plotBorderColor: 'black',
            plotBorderWidth: 2,
            marginBottom: 200,
            events: {
                load: function () {
                    var label = this.renderer.label("Notes: <br> 1.  Small Cap Growth includes Relative Growth <br> 2.  Small Cap Value includes Relative Value")
                        .add();

                    label.align(Highcharts.extend(label.getBBox(), {
                        align: 'left',
                        x: 0, // offset
                        verticalAlign: 'bottom',
                        y: 0 // offset
                    }), null, 'spacingBox');

                }
            }
        },

        title: {
            text: 'Three Years Annualized'
        },

        legend: {
            enabled: true,
            y: -90
        },
        credits: {
            enabled: false
        },
        xAxis: [{
            offset: 20,
            lineWidth: 0,
            tickLength: 0,
            categories: ['Growth', 'Rel. Growth', 'Rel. Value', 'Value', 'Growth (1)', 'Value (2)', 'Emerging Mkts']
        }, {
            offset: 0,
            linkedTo: 0,
            lineWidth: 0,
            title: {
                text: ''
            },
            tickPositions: [1.5, 4.5],
            tickLength: 0,
            gridLineColor: 'transparent',
            "categories": {
                "1.5": "---------------- Large Cap ----------------",
                "4.5": "----- Small Cap -----",
                
            }
        }],

        yAxis: {
            gridLineColor: 'transparent',
            min: -10,
            max: 15,
            tickPositions: [-10, -5, 0, 5, 10, 15],
            title: {
                text: 'Return %'
            }
        },

        series: [

            {
                data: [
                    { x: 0, low: 1, high: 3 },
                    { x: 0, low: 3, high: 3.5 },
                    { x: 0, low: 3.5, high: 4 },
                    { x: 0, low: 4, high: 6 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                data: [
                    { x: 1, low: 1, high: 2.5 },
                    { x: 1, low: 2.5, high: 3.5 },
                    { x: 1, low: 3.5, high: 5 },
                    { x: 1, low: 5, high: 6 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 2, low: -1, high: 1 },
                    { x: 2, low: 1, high: 3 },
                    { x: 2, low: 3, high: 5 },
                    { x: 2, low: 5, high: 7 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            },
            {
                data: [
                    { x: 3, low: 0, high: 1 },
                    { x: 3, low: 1, high: 3 },
                    { x: 3, low: 3, high: 5 },
                    { x: 3, low: 5, high: 6 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                data: [
                    { x: 4, low: 1, high: 5.5 },
                    { x: 4, low: 5.5, high: 7 },
                    { x: 4, low: 7, high: 9.5 },
                    { x: 4, low: 9.5, high: 12 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 5, low: 4, high: 7 },
                    { x: 5, low: 7, high: 8 },
                    { x: 5, low: 8, high: 10 },
                    { x: 5, low: 10, high: 13 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            },
            {
                data: [
                    { x: 6, low: 0, high: -3 },
                    { x: 6, low: -3, high: -4 },
                    { x: 6, low: -4, high: -5.5 },
                    { x: 6, low: -5.5, high: -6.5 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, 
            {
            name: 'EAFE',
            type: 'scatter',
            data: [
                [0, 3],
                [1, 3],
                [2, 3],
                [3, 3],
                [4, 3],
                [5, 3]
            ],
            marker: {
                fillColor: 'black',
                lineWidth: 1,
                lineColor: 'black'
                },
            color: '#000000',
            tooltip: {
                pointFormat: '{point.y}'
            }
        },
        {
            name: 'Morgan Stanley - International Equity',
            type: 'scatter',
            data: [
                [2, 2.5]
            ],
            color: '#000000',
            marker: {
                fillColor: 'white',
                lineWidth: 1,
                lineColor: 'black'
            },
            tooltip: {
                pointFormat: '{point.y}'
            }
        },
        {
            name: 'Morgan Stanley - Emerging Markets Equity',
            color: '#000000',
            type: 'scatter',
            data: [
                [6, -4.75]
            ],
            marker: {
                fillColor: 'white',
                lineWidth: 1,
                lineColor: 'black'
            },
            tooltip: {
                pointFormat: '{point.y}',
            }
        }
        ],
    }



    constructor() { }

    ngOnInit() {
    }

}