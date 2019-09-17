import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-abs-objective-graph',
  templateUrl: './abs-objective-graph.component.html',
  styleUrls: ['./abs-objective-graph.component.css']
})
export class AbsObjectiveGraphComponent implements OnInit {
    Highcharts = Highcharts;
    chartOptions = {
        chart: {
          
            type: 'spline',
            marginBottom: 100,
            events: {
                load: function () {
                    var label = this.renderer.label("\xb9GDP Deflator + 5%")
                        .add();
                    label.align(Highcharts.extend(label.getBBox(), {
                        align: 'left',
                        x: 0, // offset
                        verticalAlign: 'bottom',
                        y: 10 // offset
                    }), null, 'spacingBox');
                }

                },
        },
        colors: [
            '#01168c',
            '#006314'
        ],
        title: {
            text: 'Absolute Objective'
        },

        xAxis: {
            categories: ['6/88', '6/89', '6/90', '6/91', '6/92', '6/93', '6/94', '6/95', '6/96',
                '6/97', '6/98', '6/99', '6/00', '6/01', '6/02', '6/03', '6/04', '6/05', '6/06',
                '6/07', '6/08', '6/09', '6/10', '6/11', '6/12', '6/13', '6/14', '6/15']
        },
        yAxis: {
            title: {
                text: ''
            },
            labels: {
                format: '{value}%'
            }
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            y: -10
        },
        credits: {
            enabled:false
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                marker: {
                    enabled: false
                }
            }
        },

        series: [{
            name: 'Client Total Fund',
            data: [0,50,50,110,150,160,160,170,190,200,300,310,400,370,360,300,420,500,600,775,700,400,600,700,600,800,1020,1000]
        }, {
                name: 'Absolute Objective\xb9',
                data: [0,14,28,42,56,70,84,98,112,126,140,154,168,170, 180, 190, 200,229,258,287,315,345,374,403,453,503,553,600],
                dashStyle: 'ShortDash'
        }],
        
        
    }
    constructor() { }

    ngOnInit() {

    }

}
