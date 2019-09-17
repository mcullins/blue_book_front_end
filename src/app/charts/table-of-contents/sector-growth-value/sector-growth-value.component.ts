import { Component, OnInit } from '@angular/core';
import { SectorGrowthValueService } from './sector-growth-value.service';

@Component({
  selector: 'app-sector-growth-value',
  templateUrl: './sector-growth-value.component.html',
    styleUrls: ['./sector-growth-value.component.css'],
    providers: [SectorGrowthValueService]
})
export class SectorGrowthValueComponent implements OnInit {
    private sectorGrowthValues;
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
    constructor(private sectorGrowthValue: SectorGrowthValueService) { }

    ngOnInit() {
        this.sectorGrowthValues = this.sectorGrowthValue.getSectorGrowthValue();
    }
}