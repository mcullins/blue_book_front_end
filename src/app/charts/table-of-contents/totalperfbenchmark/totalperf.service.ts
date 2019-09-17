import { Injectable } from "@angular/core";

@Injectable()

export class TotalPerfService {

    getPerf() {
        return [
            {
                "type": "Domestic Equity",
                "quarter": 0.9,
                "yearToDate": 0.9,
                "oneYear": -0.7,
                "threeYears": 10.8,
                "fiveYears": 10.3,
                "tenYears": 6.3,
                "sinceInception": 0.0
            },
            {
                "type": "\xa0\xa0\xa0\xa0 Core",
                "quarter": -0.3,
                "yearToDate": -0.3,
                "oneYear": -0.8,
                "threeYears": 10.9,
                "fiveYears": 10.6,
                "tenYears": 6.4,
                "sinceInception": NaN
            },
            {
                "type": "\xa0\xa0\xa0\xa0 Specialty Small",
                "quarter": 5.8,
                "yearToDate": 5.8,
                "oneYear": -2.8,
                "threeYears": 9.3,
                "fiveYears": 8.6,
                "tenYears": 5.6,
                "sinceInception": NaN
            },
            {
                "type": "International Equity",
                "quarter": 0.0,
                "yearToDate": 0.0,
                "oneYear": -6.8,
                "threeYears": 1.0,
                "fiveYears": 0.6,
                "tenYears": 1.5,
                "sinceInception": NaN
            },
            {
                "type": "\xa0\xa0\xa0\xa0 Large Cap",
                "quarter": -1.2,
                "yearToDate": -1.2,
                "oneYear": -6.6,
                "threeYears": 2.2,
                "fiveYears": 2.0,
                "tenYears": 1.7,
                "sinceInception": NaN
            },
            {
                "type": "\xa0\xa0\xa0\xa0 Emerging Markets",
                "quarter": 4.9,
                "yearToDate": 4.9,
                "oneYear": -7.9,
                "threeYears": 3.1,
                "fiveYears": 1.9,
                "tenYears": 3.0,
                "sinceInception": NaN
            },
            {
                "type": "Domestic Fixed Income",
                "quarter": 4.1,
                "yearToDate": 4.1,
                "oneYear": 0.1,
                "threeYears": 2.6,
                "fiveYears": 4.6,
                "tenYears": 5.3,
                "sinceInception": NaN
            },
            {
                "type": "\xa0\xa0\xa0\xa0 Intermediate Term",
                "quarter": 4.1,
                "yearToDate": 4.1,
                "oneYear": 0.1,
                "threeYears": 2.6,
                "fiveYears": 4.6,
                "tenYears": 5.3,
                "sinceInception": NaN
            },
            {
                "type": "Domestic Real Estate",
                "quarter": 1.9,
                "yearToDate": 1.9,
                "oneYear": 14.1,
                "threeYears": 15.1,
                "fiveYears": 14.6,
                "tenYears": 5.5,
                "sinceInception": NaN
            },
            {
                "type": "Domestic Energy Infrastructure",
                "quarter": -6.4,
                "yearToDate": -6.4,
                "oneYear": NaN,
                "threeYears": NaN,
                "fiveYears": NaN,
                "tenYears": NaN,
                "sinceInception": NaN
            },
            {
                "type": "Domestic Commodities",
                "quarter": 0.0,
                "yearToDate": 0.0,
                "oneYear": -17.6,
                "threeYears": 3.7,
                "fiveYears": 0.5,
                "tenYears": NaN,
                "sinceInception": NaN
            },
            {
                "type": "Domestic Hedge Funds",
                "quarter": 0.3,
                "yearToDate": 0.3,
                "oneYear": NaN,
                "threeYears": NaN,
                "fiveYears": NaN,
                "tenYears": NaN,
                "sinceInception": NaN
            },
            {
                "type": "Domestic Private Equity",
                "quarter": -0.7,
                "yearToDate": -0.7,
                "oneYear": 15.9,
                "threeYears": 14.1,
                "fiveYears": 8.9,
                "tenYears": NaN,
                "sinceInception": NaN
            }, {
                "type": "Domestic Cash",
                "quarter": 0.0,
                "yearToDate": 0.0,
                "oneYear": 0.0,
                "threeYears": 0.0,
                "fiveYears": 0.0,
                "tenYears": 1.2,
                "sinceInception": NaN
            }
        ]
    }
}