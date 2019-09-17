import { Injectable } from "@angular/core";

@Injectable()

export class BenchmarkService {

    getBenchmark() {
        return [
            {
                "type": "Benchmarks",
                "quarter": 0.0,
                "yearToDate": 0.0,
                "oneYear": 0.0,
                "threeYears": 0.0,
                "fiveYears": 0.0,
                "tenYears": 0.0,
                "sinceInception": 0.0
            },
            {
                "type": "\xa0\xa0\xa0\xa0 Merrill Lynch US High Yield Cash Pay",
                "quarter": 3.2,
                "yearToDate": 3.2,
                "oneYear": -3.9,
                "threeYears": 1.8,
                "fiveYears": 4.7,
                "tenYears": 6.8,
                "sinceInception": 8.1
            },
            {
                "type": "\xa0\xa0\xa0\xa0 60%S&P500,40%BGG/C",
                "quarter": 2.3,
                "yearToDate": 2.3,
                "oneYear": 2.0,
                "threeYears": 8.1,
                "fiveYears": 8.7,
                "tenYears": 6.5,
                "sinceInception": 9.0
            },
            {
                "type": "\xa0\xa0\xa0\xa0 MSCI AC World (Gross)",
                "quarter": 0.4,
                "yearToDate": 0.4,
                "oneYear": -3.8,
                "threeYears": 6.1,
                "fiveYears": 5.8,
                "tenYears": 4.6,
                "sinceInception": 7.1
            },
            {
                "type": "\xa0\xa0\xa0\xa0 70% MSCI AC World 30% Bar Agg",
                "quarter": 1.2,
                "yearToDate": 1.2,
                "oneYear": -2.2,
                "threeYears": 4.8,
                "fiveYears": 5.0,
                "tenYears": 4.6,
                "sinceInception": 0.0
            },
            {
                "type": "\xa0\xa0\xa0\xa0 S&P 500 Lagged +3%",
                "quarter": 7.8,
                "yearToDate": 7.8,
                "oneYear": 4.4,
                "threeYears": 18.5,
                "fiveYears": 15.9,
                "tenYears": 10.5,
                "sinceInception": 13.6
            }
        ]
    }
}