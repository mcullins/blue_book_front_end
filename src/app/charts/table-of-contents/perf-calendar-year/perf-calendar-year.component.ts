import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-perf-calendar-year',
  templateUrl: './perf-calendar-year.component.html',
  styleUrls: ['./perf-calendar-year.component.css']
})
export class PerfCalendarYearComponent implements OnInit {
    Highcharts = Highcharts;

    date: any = new Date();

    public chartOptions = {
        chart: {
            type: 'column'
        },
        title: {
            text: undefined
        },
        colors: [
            '#730505',
            '#7f7c7e',
            '#050850'
        ],
        yAxis: {
            title: {
                text: 'Percent Return (Annualized)'
            }
        },
        xAxis: {
            categories: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', 'YTD-2016']
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'F.R. Bigelow Foundation',
            data: [10.1, -32.1, 18.9, 13.2, -0.2, 14.1, 20.3, 6.9, 0.0, 0.7]
        }, {
            name: 'Relative Objective\xb2',
            data: [6.5, -27.1, 19.3, 13.3, 0.6, 13.2, 19.3, 7.4, 0.3, 0.7]
        }, {
            name: 'Return Minus Relative Objective',
            data: [3.6, -5.0, -0.4, -0.1, -0.8, 1.0, 1.0, -0.5, -0.2, 0.0 ]
        }]

    }
    constructor() { }

    ngOnInit() {
    }

}