import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-totalfundtarget',
  templateUrl: './totalfundtarget.component.html',
  styleUrls: ['./totalfundtarget.component.css']
})
export class TotalfundtargetComponent implements OnInit {

    Highcharts = Highcharts;
    chartOptions = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Policy Target'
        },
        tooltip: {
            pointFormat: '{point.percentage:.1f}%'
        },
        credits: {
            enabled: false
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
                    }
                },
                showInLegend: true
            }
        },
        legend: {
            align: 'center',
            itemWidth: 250
            
        },
        series: [{

            colorByPoint: true,
            data: [{
                name: 'Domestic Equity',
                y: 28.5
            }, {
                name: 'International Equity',
                y: 28.5
            }, {
                name: 'Domestic Fixed Income',
                y: 15.0
            }, {
                name: 'Domestic Real Estate',
                y: 9.0
            }, {
                name: 'Domestic Energy Infrastructure',
                y: 5.0
            }, {
                name: 'Domestic Commodities',
                y: 1.0
            }, {
                name: 'Domestic Hedge Funds',
                y: 8.0
            }, {
                name: 'Domestic Private Equity',
                y: 5.0
            }, {
                name: 'Domestic Cash',
                y: 0.0
            }
            ]
        }]
    };

    constructor() { }

    ngOnInit() {

    }

}
