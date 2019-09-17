import { Component, OnInit } from '@angular/core';
import { SectorWeightingService } from './sector-weighting.service';
import { WeightingGrowthValueService } from './weighting-growth-value.service';

@Component({
    selector: 'app-sector-weighting',
    templateUrl: './sector-weighting.component.html',
    styleUrls: ['./sector-weighting.component.css'],
    providers: [SectorWeightingService, WeightingGrowthValueService]
})
export class SectorWeightingComponent implements OnInit {
    private sectorWeights;
    private weightingGrowthValues;

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
    constructor(private sectorWeight: SectorWeightingService,
        private weightingGrowthValue: WeightingGrowthValueService) { }

    ngOnInit() {
        this.sectorWeights = this.sectorWeight.getSectorWeight();
        this.weightingGrowthValues = this.weightingGrowthValue.getWeightingGrowthValue();
    }
}