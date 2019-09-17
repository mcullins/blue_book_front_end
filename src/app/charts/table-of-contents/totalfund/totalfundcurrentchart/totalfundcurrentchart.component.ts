import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-totalfundcurrentchart',
  templateUrl: './totalfundcurrentchart.component.html',
  styleUrls: ['./totalfundcurrentchart.component.css']
})
export class TotalfundcurrentchartComponent implements OnInit {

    Highcharts = Highcharts;
    chartOptions = {
    

        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            
        },
        title: {
            text: 'Current Quarter'
        },
        tooltip: {
            pointFormat: '{point.percentage:.1f}%'
        },
        credits: {
            enabled: false
        },

        legend: {
            align: 'center',
            itemWidth: 250

        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                        distance: 15,
                        enabled: true,
                        format: '{point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    },
                      
                },
                showInLegend: true
            }
        },
        series: [{
         
            colorByPoint: true,
            data: [{
                name: 'Domestic Equity',
                y: 27.8,
            }, {
                name: 'International Equity',
                    y: 22.3,
                    
            }, {
                name: 'Domestic Fixed Income',
                y: 15.6
            }, {
                name: 'Domestic Real Estate',
                y: 8.6
            }, {
                name: 'Domestic Energy Infrastructure',
                y: 4.7
            }, {
                name: 'Domestic Commodities',
                y: 0.4
                }, {
                    name: 'Domestic Hedge Funds',
                    y: 8.0
                }, {
                    name: 'Domestic Private Equity',
                    y: 5.0
                }, {
                    name: 'Domestic Cash',
                    y: 0.9
                }
            ]
        }]
    };

    constructor() { }

    ngOnInit() {

    }

}
