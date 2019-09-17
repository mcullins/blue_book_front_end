import { Component, OnInit } from '@angular/core';
import { CumulativeReturnService } from './cumulative-return.service';
import { MRCvsROService } from './mgrrelcont-vs-relobj.service';

@Component({
    selector: 'app-totalfund-attribution',
    templateUrl: './totalfund-attribution.component.html',
    styleUrls: ['./totalfund-attribution.component.css'],
    providers: [CumulativeReturnService, MRCvsROService]
})
export class TotalfundAttributionComponent implements OnInit {
    date: any = new Date();
    private cumulatives;
    private mrcvsros;

    isNegative(val: number): boolean {
        if (val < 0) {
            return true;
        } else {
            return false
        }
    }

    isBoldCumulatives(index): boolean {
        if (index == 2 || index == 5 || index == 8) {
            return true;
        } else {
            return false
        }
    }


    isBorder(index): boolean {
        if (index == 2 || index == 5) {
            return true;
        } else {
            return false;
        }
    }
    isBorder2(index): boolean {
        if (index == 0 || index == 2 || index == 5 || index == 8) {
            return true;
        } else {
            return false;
        }
    }


    constructor(private cumulativeReturn: CumulativeReturnService, private mrcvsro: MRCvsROService) { }

    ngOnInit() {
        this.cumulatives = this.cumulativeReturn.getReturn(); 
        this.mrcvsros = this.mrcvsro.getMRCvsRO();
    }

}

