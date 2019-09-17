import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-dom-three-yr-graph',
  templateUrl: './dom-three-yr-graph.component.html',
  styleUrls: ['./dom-three-yr-graph.component.css']
})
export class DomThreeYrGraphComponent implements OnInit {
    Highcharts = Highcharts;

    chartOptions = {
        chart: {
            type: 'columnrange',
            plotBorderColor: 'black',
            plotBorderWidth: 2,
            marginBottom: 190,
            events: {
                load: function () {
                    var label = this.renderer.label("(High Yield Only) Benchmarks")
                        .add();

                    label.align(Highcharts.extend(label.getBBox(), {
                        align: 'center',
                        x: 0, // offset
                        verticalAlign: 'bottom',
                        y: -20 // offset
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
            categories: ['Total Univ', 'Short', 'Gov/Cr Int', 'Gov/Cr', 'Aggregate', 'Core+', 'Core Ext', 'Long', 'TIPs', 'High Yield']
        }, {
            offset: 0,
            linkedTo: 0,
            lineWidth: 0,
            title: {
                text: ''
            },
            tickPositions: [4],
            tickLength: 0,
            gridLineColor: 'transparent',
            "categories": {
                "4": "-------------------- Intermediate --------------"

            }
        }],

        yAxis: {
            gridLineColor: 'transparent',
            min: -2,
            max: 6,
            tickInterval: 1,
            title: {
                text: 'Return %'
            }
        },

        series: [

            {
                data: [
                    { x: 0, low: .5, high: 1.7 },
                    { x: 0, low: 1.7, high: 2.4 },
                    { x: 0, low: 2.4, high: 3 },
                    { x: 0, low: 3, high: 5 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                data: [
                    { x: 1, low: .9, high: 1.1 },
                    { x: 1, low: 1.1, high: 1.2 },
                    { x: 1, low: 1.2, high: 1.5 },
                    { x: 1, low: 1.5, high: 1.9 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 2, low: 1.6, high: 1.8 },
                    { x: 2, low: 1.8, high: 2 },
                    { x: 2, low: 2, high: 2.2 },
                    { x: 2, low: 2.2, high: 2.8 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            },
            {
                data: [
                    { x: 3, low: 1.6, high: 1.8 },
                    { x: 3, low: 1.8, high: 2 },
                    { x: 3, low: 2, high: 2.2 },
                    { x: 3, low: 2.2, high: 2.8 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },
            {
                data: [
                    { x: 4, low: 2.1, high: 2.3 },
                    { x: 4, low: 2.3, high: 2.5 },
                    { x: 4, low: 2.5, high: 2.8 },
                    { x: 4, low: 2.8, high: 3.5 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 5, low: 1.9, high: 2.4 },
                    { x: 5, low: 2.4, high: 2.8 },
                    { x: 5, low: 2.8, high: 3 },
                    { x: 5, low: 3, high: 3.7 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            },
            {
                data: [
                    { x: 6, low: 1.9, high: 2.3 },
                    { x: 6, low: 2.3, high: 2.5 },
                    { x: 6, low: 2.5, high: 2.8 },
                    { x: 6, low: 2.8, high: 3.3 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 7, low: 3.8, high: 4.5 },
                    { x: 7, low: 4.5, high: 4.7 },
                    { x: 7, low: 4.7, high: 5 },
                    { x: 7, low: 5, high: 5.4 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            }, {
                data: [
                    { x: 8, low: -.5, high: -.6 },
                    { x: 8, low: -.6, high: -.7 },
                    { x: 8, low: -.7, high: -.9 },
                    { x: 8, low: -.9, high: -1.2 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false

            },
            {
                data: [
                    { x: 9, low: -.2, high: 1.5 },
                    { x: 9, low: 1.5, high: 2.2 },
                    { x: 9, low: 2.2, high: 2.9 },
                    { x: 9, low: 2.9, high: 3.7 }],
                color: 'white',
                showInLegend: false,
                borderColor: '#303030',
                borderWidth: 1,
                grouping: false
            },{
            name: 'DeMarche Bond Index',
            type: 'scatter',
            data: [
                [.8, 0],
                [0, 0],
                [.2, 0],
                [2, 0],
                [3, 0],
                [4, 0],
                [6.5, 0]
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
            name: 'Appropriate Barclays and Merrill Lynch',
            type: 'scatter',
            data: [
                [0, 2.3],
                [1.2, 1],
                [2.2, 1.8],
                [3.2, 2.4],
                [4.2, 2.4],
                [5.2, 2.4],
                [6.2, 2.3],
                [7.2, 4.6],
                [8.2, -.5],
                [9.2, 1.8]
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
            name: 'Loomis Sayles Co.',
            color: '#000000',
            type: 'scatter',
            data: [
                [-.2, 2.5],
                [.8, 0],
                [1.8, 0],
                [2.2, 0],
                [2.8, 0],
                [3.2, 0],
                [3.5, 0],
                [3.8, 0],
                [4.2, 0],
                [4.8, 0],
                [5, 0],
                [5.2, 0],
                [5.8, 2.4],
                [6, 0],
                [6.2, 0],
                [6.8, 0],
                [7, 0],
                [7.2, 0],
                [7.8, 0],
                [8, 0],
                [8.2, 0],
                [8.8, 0],
                [9, 0],
                [9.2, 0]
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