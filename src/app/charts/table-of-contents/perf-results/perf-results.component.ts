import { Component, OnInit } from '@angular/core';
import { PerfResultsService } from './perf-results.service';

@Component({
    selector: 'app-perf-results',
    templateUrl: './perf-results.component.html',
    styleUrls: ['./perf-results.component.css'],
    providers: [PerfResultsService]
})
export class PerfResultsComponent implements OnInit {

    date: any = new Date();
    private perfResults;


    isNegative(val: number): boolean {
        if (val < 0) {
            return true;
        } else {
            return false
        }
    }

    isLeader(index): boolean {
        if (index == 0 || index == 13 || index == 23 ||
            index == 29 || index == 34 || index == 38 ||
            index == 44 || index == 48 || index == 74) {
            return true;
        } else {
            return false
        }
    }

    isBold(index): boolean {
        if (index == 1 || index == 9 || index == 14 ||
            index == 19 || index == 24) {
            return true;
        } else {
            return false
        }
    }

    spaces1(index) {
        let spaces = '';
        if (index == 1 || index == 9 || index == 14 ||
            index == 19 || index == 24) {
            spaces += '\u00A0\u00A0\u00A0';
        }
        return spaces;
    }

    spaces2(index) {
        let spaces = '';
        if (index == 2 || index == 5 || index == 10 ||
            index == 15 || index == 17 || index == 20 ||
            index == 25 || index == 30 || index == 35 ||
            index == 39 || index == 45 || index == 49 ||
            index == 54 || index == 59 || index == 64 ||
            index == 69 || index == 75) {
            spaces += '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0';
        }
        return spaces;
    }
    spaces3(index) {
        let spaces = '';
        if (index == 3 || index == 4 || index == 6 ||
            index == 7 || index == 8 || index == 11 ||
            index == 12 || index == 16 || index == 18 ||
            index == 21 || index == 22 || index == 26 ||
            index == 27 || index == 28 || index == 31 ||
            index == 32 || index == 33 || index == 36 ||
            index == 37 || index == 40 || index == 41 ||
            index == 42 || index == 43 || index == 46 ||
            index == 47 || index == 50 || index == 51 ||
            index == 52 || index == 53 || index == 55 ||
            index == 56 || index == 57 || index == 58 ||
            index == 60 || index == 61 || index == 62 ||
            index == 63 || index == 65 || index == 66 ||
            index == 67 || index == 68 || index == 70 ||
            index == 71 || index == 72 || index == 73) {
            spaces += '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0';
        }
        return spaces;
    }



    constructor(private perfResult: PerfResultsService) { }

    ngOnInit() {
        this.perfResults = this.perfResult.getPerfResults();
       
    }

}

