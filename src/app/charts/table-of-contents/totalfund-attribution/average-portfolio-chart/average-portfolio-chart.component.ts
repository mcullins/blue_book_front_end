import { Component, OnInit } from '@angular/core';
import { MRCvsROService } from '../mgrrelcont-vs-relobj.service';

@Component({
  selector: 'app-average-portfolio-chart',
  templateUrl: './average-portfolio-chart.component.html',
    styleUrls: ['./average-portfolio-chart.component.css'],
    providers: [MRCvsROService]
})
export class AveragePortfolioChartComponent implements OnInit {
    private mrcvsros;
    

    isNegative(val: number): boolean {
        if (val < 0) {
            return true;
        } else {
            return false
        }
    }

    constructor(private mrcvsro: MRCvsROService) { }

    ngOnInit() {
        this.mrcvsros = this.mrcvsro.getMRCvsRO();
  }

}
