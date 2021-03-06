import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { TestData } from "./testdata";

@Injectable()

export class TotalFundService {

    constructor(private http: HttpClient){}

    getAPIData(): Observable<TestData[]>{
        return this.http.get<TestData[]>('https://api.demarche.com/api/values')
    }
    

    getTotalFundData() {
        return [
            {
                "Type": "Domestic Equity",
                "PrevQtr": 32.6,
                "CurrentQtr": 27.8,
                "Target": 28.5,
                "Variance": -0.7,
                "Minmax": "20.0 - 40.0",
                "PrevQtrMil": 48.9,
                "CurrentQtrMil": 41.7,
            },
            {
                "Type": "\u00A0 \u00A0 Core",
                "PrevQtr": 27.4,
                "CurrentQtr": 22.3,
                "Target": 22.8,
                "Variance": -0.5,
                "Minmax": "",
                "PrevQtrMil": 41.1,
                "CurrentQtrMil": 33.5,
            },
            {
                "Type": "\u00A0 \u00A0 Specialty Small",
                "PrevQtr": 5.2,
                "CurrentQtr": 5.5,
                "Target": 5.7,
                "Variance": -0.2,
                "Minmax": "",
                "PrevQtrMil": 7.8,
                "CurrentQtrMil": 8.3,
            },
            {
                "Type": "International Equity",
                "PrevQtr": 28.9,
                "CurrentQtr": 28.9,
                "Target": 28.5,
                "Variance": 0.4,
                "Minmax": "20.0 - 30.0",
                "PrevQtrMil": 43.3,
                "CurrentQtrMil": 43.3,
            },
            {
                "Type": "\u00A0 \u00A0 Large Cap",
                "PrevQtr": 23.1,
                "CurrentQtr": 22.8,
                "Target": 22.8,
                "Variance": 0.0,
                "Minmax": "",
                "PrevQtrMil": 34.7,
                "CurrentQtrMil": 34.3,
            },
            {
                "Type": "\u00A0 \u00A0 Emerging Markets",
                "PrevQtr": 5.8,
                "CurrentQtr": 6.0,
                "Target": 5.7,
                "Variance": 0.3,
                "Minmax": "",
                "PrevQtrMil": 8.6,
                "CurrentQtrMil": 9.0,
            },
            {
                "Type": "Domestic Fixed Income",
                "PrevQtr": 15.0,
                "CurrentQtr": 15.6,
                "Target": 15.0,
                "Variance": 0.6,
                "Minmax": "5.0 - 25.0",
                "PrevQtrMil": 22.6,
                "CurrentQtrMil": 23.5,
            },
            {
                "Type": "\u00A0 \u00A0 Intermediate Term",
                "PrevQtr": 15.0,
                "CurrentQtr": 15.6,
                "Target": 15.0,
                "Variance": 0.6,
                "Minmax": "5.0 - 25.0",
                "PrevQtrMil": 22.6,
                "CurrentQtrMil": 23.5,
            },
            {
                "Type": "Domestic Real Estate",
                "PrevQtr": 8.6,
                "CurrentQtr": 8.6,
                "Target": 9.0,
                "Variance": -0.4,
                "Minmax": "",
                "PrevQtrMil": 12.9,
                "CurrentQtrMil": 13.0,
            },
            {
                "Type": "Domestic Energy Infrastructure",
                "PrevQtr": 0.0,
                "CurrentQtr": 4.7,
                "Target": 5.0,
                "Variance": -0.3,
                "Minmax": "",
                "PrevQtrMil": 0.0,
                "CurrentQtrMil": 7.1,
            },
            {
                "Type": "Domestic Commodities",
                "PrevQtr": 0.4,
                "CurrentQtr": 0.4,
                "Target": 1.0,
                "Variance": -0.6,
                "Minmax": "",
                "PrevQtrMil": 0.6,
                "CurrentQtrMil": 0.6,
            },
            {
                "Type": "Domestic Hedge Funds",
                "PrevQtr": 8.0,
                "CurrentQtr": 8.0,
                "Target": 8.0,
                "Variance": 0.0,
                "Minmax": "4.0 - 12.0",
                "PrevQtrMil": 12.0,
                "CurrentQtrMil": 12.1,
            },
            {
                "Type": "Domestic Private Equity",
                "PrevQtr": 5.0,
                "CurrentQtr": 5.0,
                "Target": 5.0,
                "Variance": 0.0,
                "Minmax": "3.0 - 17.0",
                "PrevQtrMil": 7.5,
                "CurrentQtrMil": 7.5,
            },
            {
                "Type": "Domestic Cash",
                "PrevQtr": 1.5,
                "CurrentQtr": 0.9,
                "Target": 0.0,
                "Variance": 0.5,
                "Minmax": "",
                "PrevQtrMil": 2.2,
                "CurrentQtrMil": 1.4,
            }

        ]
    }
}