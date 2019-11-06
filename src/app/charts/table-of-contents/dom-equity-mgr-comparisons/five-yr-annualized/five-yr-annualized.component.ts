import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-five-yr-annualized',
  templateUrl: './five-yr-annualized.component.html',
  styleUrls: ['./five-yr-annualized.component.css']
})
export class FiveYrAnnualizedComponent implements OnInit {
    Highcharts = Highcharts;

    chartOptions = {
        chart: {
            type: 'columnrange',
            plotBorderColor: 'black',
            plotBorderWidth: 2,
            marginBottom: 200,
            events: {
                load: function () {
                    var label = this.renderer.label("Notes: <br> 1.  Big Cap includes Large Cap, Core and Specialty Large Cap managers. <br> 2. Middle Cap includes Mid-Cap and Specialty Small Cap managers.<br>3. Smaller Cap includes Small and Micro Cap managers.")
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
            text: 'Five Years Annualized'
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
            categories: ['Growth', 'Rel Gro', 'Rel Val', 'Value', 'Growth', 'Rel Gro', 'Rel Val', 'Value', 'Growth', 'Rel Gro', 'Rel Val', 'Value']
        }, {
            offset: 0,
            linkedTo: 0,
            lineWidth: 0,
            title: {
                text: ''
            },
            tickPositions: [1.5, 5.5, 9.5],
            tickLength: 0,
            gridLineColor: 'transparent',
            "categories": {
                "1.5": "-------- Big Cap (1) --------",
                "5.5": "-------- Middle Cap (2) --------",
                "9.5": "-------- Smaller Cap (3) --------"
            }
        }],

        yAxis: {
            gridLineColor: 'transparent',
            min: 0,
            max: 16,
            tickPositions: [0, 2, 4, 6, 8, 10, 12, 14, 16],
            title: {
                text: 'Return %'
            }
        },

        series: [
            {
                data: [
                    { x: 0, low: 7, high: 9.5 },
                    { x: 0, low: 9.5, high: 11 },
                    { x: 0, low: 11, high: 12.5 },
                    { x: 0, low: 12.5, high: 13.5 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                data: [
                    { x: 1, low: 8.5, high: 10.5 },
                    { x: 1, low: 10.5, high: 11 },
                    { x: 1, low: 11, high: 12.5 },
                    { x: 1, low: 12.5, high: 14 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 2, low: 6.5, high: 9 },
                    { x: 2, low: 9, high: 10 },
                    { x: 2, low: 10, high: 11 },
                    { x: 2, low: 11, high: 13 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            },
            {
                data: [
                    { x: 3, low: 6.5, high: 9 },
                    { x: 3, low: 9, high: 10.5 },
                    { x: 3, low: 10.5, high: 11 },
                    { x: 3, low: 11, high: 13 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                data: [
                    { x: 4, low: 3.5, high: 3.5 },
                    { x: 4, low: 7, high: 7 },
                    { x: 4, low: 8.5, high: 9.5 },
                    { x: 4, low: 9.5, high: 11.5 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 5, low: 6.5, high: 8.5 },
                    { x: 5, low: 8.5, high: 10 },
                    { x: 5, low: 10, high: 11 },
                    { x: 5, low: 11, high: 13 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            },
            {
                data: [
                    { x: 6, low: 5.5, high: 8 },
                    { x: 6, low: 8, high: 9 },
                    { x: 6, low: 9, high: 10 },
                    { x: 6, low: 10, high: 13 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                data: [
                    { x: 7, low: 5.5, high: 9 },
                    { x: 7, low: 9, high: 9.75 },
                    { x: 7, low: 9.75, high: 10.5 },
                    { x: 7, low: 10.5, high: 12 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 8, low: 2.5, high: 6 },
                    { x: 8, low: 6, high: 8 },
                    { x: 8, low: 8, high: 9 },
                    { x: 8, low: 9, high: 11 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            }, {
                data: [
                    { x: 9, low: 4.5, high: 6.5 },
                    { x: 9, low: 6.5, high: 8.5 },
                    { x: 9, low: 8.5, high: 10 },
                    { x: 9, low: 10, high: 13 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            },
            {
                data: [
                    { x: 10, low: 6, high: 9 },
                    { x: 10, low: 9, high: 10 },
                    { x: 10, low: 10, high: 11 },
                    { x: 10, low: 11, high: 13 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                data: [
                    { x: 11, low: 1.5, high: 3.75 },
                    { x: 11, low: 3.75, high: 7.5 },
                    { x: 11, low: 7.5, high: 8.5 },
                    { x: 11, low: 8.5, high: 11.25 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, 
            {
            name: 'S&P 500 Index',
                color: '#000000',
            type: 'scatter',
            data: [
                [0, 11.5],
                [1, 11.5],
                [2, 11.5],
                [3, 11.5],
                [4, 11.5],
                [5, 11.5],
                [6, 11.5],
                [7, 11.5],
                [8, 11.5],
                [9, 11.5],
                [10, 11.5],
                [11, 11.5],
            ],
            marker: {
                fillColor: 'black',
                lineWidth: 1,
                lineColor: 'black'
            },
            tooltip: {
                pointFormat: '{point.y}'
            }
        },
        {
            name: 'SIT Inv. Associates',
            color: '#000000',
            type: 'scatter',
            data: [
                [-.1, 11]
            ],
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
            name: 'Dodge & Cox Equity',
            color: '#000000',
            type: 'scatter',
            data: [
                [1.85, 10.5]
            ],
            marker: {
                fillColor: 'white',
                lineWidth: 1,
                lineColor: 'black'
            },
            tooltip: {
                pointFormat: '{point.y}'
            }
        }
        ],
    }



    constructor() { }

    ngOnInit() {
    }

}
