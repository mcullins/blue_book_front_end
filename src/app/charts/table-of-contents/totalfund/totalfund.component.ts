import { Component, OnInit } from '@angular/core';
import { TotalFundService } from './totalfund.service';
import { TestData } from './testdata';




@Component({
    selector: 'app-totalfund',
    templateUrl: './totalfund.component.html',
    styleUrls: ['./totalfund.component.css'],
    providers: [TotalFundService]
})
export class TotalfundComponent implements OnInit {
    private totalFundDatas;
    public testDatas: TestData[];

    date: any = new Date();
        
    isNegative(val: number): boolean {
        if (val < 0) {
            return true;
        } else {
            return false
        }
    }
    isBold(index): boolean {
        if (index == 0 || index == 3 || index == 6
            || index == 8 || index == 9 || index == 10
            || index == 11 || index == 12 || index == 13) {
            return true;
        } else {
            return false
        }
    }

    constructor(private totalFund: TotalFundService) {

    }

    ngOnInit() {
        this.totalFundDatas = this.totalFund.getTotalFundData();
        this.totalFund.getAPIData()
            .subscribe(
                (testdata: TestData[]) => this.testDatas = testdata,
                (err: any) => console.log(err),
                () => console.log("Loaded data complete")
            );
        
    }

}

