import { Injectable } from "@angular/core";

@Injectable()

export class RiskAnalysisBottomService {

    getRiskAnalysisBottom() {
        return [

            {
                "portfolioBottom": "Abbott Capital Private Equity",
                "benchmarkBottom": "Bigelow Private Equity",
                "alphaBottom": 7.10,
                "betaBottom": .11,
                "corrCoBottom": .14,
                "infoRatioBottom": -.01,
                "sharpeRatioBottom": "1.59 / 1.31",
            },
            {
                "portfolioBottom": "",
                "benchmarkBottom": "Big Abbott PE VI",
                "alphaBottom": 7.68,
                "betaBottom": .03,
                "corrCoBottom": .06,
                "infoRatioBottom": -.19,
                "sharpeRatioBottom": "1.59 / 1.18",
            },
            {
                "portfolioBottom": "Commonfund Intl PE VII",
                "benchmarkBottom": "Bigelow Private Equity",
                "alphaBottom": 1.75,
                "betaBottom": .11,
                "corrCoBottom": .06,
                "infoRatioBottom": -.49,
                "sharpeRatioBottom": ".24 / 1.31",
            },
            {
                "portfolioBottom": "",
                "benchmarkBottom": "Big CF Intl PE VII",
                "alphaBottom": 3.06,
                "betaBottom": .80,
                "corrCoBottom": .69,
                "infoRatioBottom": .37,
                "sharpeRatioBottom": ".24 / -.05",
            },
            {
                "portfolioBottom": "Commonfund VP IX",
                "benchmarkBottom": "Bigelow Private Equity",
                "alphaBottom": 19.60,
                "betaBottom": .27,
                "corrCoBottom": .09,
                "infoRatioBottom": .77,
                "sharpeRatioBottom": "1.23 / 1.31",
            },
            {
                "portfolioBottom": "",
                "benchmarkBottom": "Big CF VP IX",
                "alphaBottom": 18.32,
                "betaBottom": .49,
                "corrCoBottom": .23,
                "infoRatioBottom": .86,
                "sharpeRatioBottom": "1.23 / .86",
            },
            {
                "portfolioBottom": "Commonfund PE VIII",
                "benchmarkBottom": "Bigelow Private Equity",
                "alphaBottom": "n/a",
                "betaBottom": "n/a",
                "corrCoBottom": "n/a",
                "infoRatioBottom": "n/a",
                "sharpeRatioBottom": "n/a",
            },
            {
                "portfolioBottom": "",
                "benchmarkBottom": "Big CF PE VIII",
                "alphaBottom": "n/a",
                "betaBottom": "n/a",
                "corrCoBottom": "n/a",
                "infoRatioBottom": "n/a",
                "sharpeRatioBottom": "n/a",
            },
            {
                "portfolioBottom": "Commonfund Capital Partners V",
                "benchmarkBottom": "Bigelow Private Equity",
                "alphaBottom": "n/a",
                "betaBottom": "n/a",
                "corrCoBottom": "n/a",
                "infoRatioBottom": "n/a",
                "sharpeRatioBottom": "n/a",
            },
            {
                "portfolioBottom": "",
                "benchmarkBottom": "Big CF CP V",
                "alphaBottom": "n/a",
                "betaBottom": "n/a",
                "corrCoBottom": "n/a",
                "infoRatioBottom": "n/a",
                "sharpeRatioBottom": "n/a",
            }
        ]
    }
}
