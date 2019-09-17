import { Component, OnInit } from '@angular/core';
import { SectorAttributionService } from './sector-attribution.service';

@Component({
  selector: 'app-sector-attribution',
  templateUrl: './sector-attribution.component.html',
    styleUrls: ['./sector-attribution.component.css'],
    providers: [SectorAttributionService]
})
export class SectorAttributionComponent implements OnInit {
    private sectorAtts;
    date: any = new Date();

    isNegative(val: number): boolean {
        if (val < 0) {
            return true;
        } else {
            return false
        }
    }
    isHigher(val1: number, val2: number): boolean {
        if (val1 > val2) {
            return true;
        } else {
            return false
        }
    }
    constructor(private sectorAtt: SectorAttributionService) { }

    ngOnInit() {
        this.sectorAtts = this.sectorAtt.getSectorAtt();
  }

}
