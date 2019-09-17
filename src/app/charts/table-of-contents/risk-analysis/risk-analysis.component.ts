import { Component, OnInit } from '@angular/core';
import { RiskAnalysisService } from './risk-analysis-top.service';
import { RiskAnalysisBottomService } from './risk-analysis-bottom.service';

@Component({
  selector: 'app-risk-analysis',
  templateUrl: './risk-analysis.component.html',
    styleUrls: ['./risk-analysis.component.css'],
    providers: [RiskAnalysisService, RiskAnalysisBottomService]
})
export class RiskAnalysisComponent implements OnInit {

    date: any = new Date();
    private riskAnalyses;
    private riskAnalysesBottom;

    isNegative(val: number): boolean {
        if (val < 0) {
            return true;
        } else {
            return false
        }
    }
    isBlankTop(index): boolean {
        if (index == 2 || index == 4 || index == 6 ||
            index == 8 || index == 10 || index == 12 ||
            index == 15) {
            return true;
        } else {
            return false
        }
    }

    isBlankBottom(index): boolean {
        if (index == 1 || index == 3 || index == 5 ||
            index == 7 || index == 9) {
            return true;
        } else {
            return false
        }
    }

    isShadedTop(index): boolean {
        if (index == 0 || index == 1 || index == 2 ||
            index == 3 || index == 4 || index == 11 ||
            index == 13 || index == 14 || index == 15 ||
            index == 17) {
            return true;
        } else {
            return false
        }
    }
    isShadedBottom(index): boolean {
        if (index == 2 || index == 4) {
            return true;
        } else {
            return false
        }
    }

    constructor(private riskAnalysis: RiskAnalysisService,
        private riskAnalysisBottom: RiskAnalysisBottomService) { }

    ngOnInit() {
        this.riskAnalyses = this.riskAnalysis.getRiskAnalysis();
        this.riskAnalysesBottom = this.riskAnalysisBottom.getRiskAnalysisBottom();

    }

}

