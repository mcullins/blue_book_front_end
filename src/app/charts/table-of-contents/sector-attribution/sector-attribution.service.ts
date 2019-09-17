import { Injectable } from "@angular/core";

@Injectable()

export class SectorAttributionService {

    getSectorAtt() {
        return [
            {
                "gics": "Energy",
                "allocMgr": 29.4,
                "allocInx": 26.2,
                "returnMgr": 45.4,
                "returnInx": 30.9,
                "mgrVarWeight": 3.2,
                "mgrVarReturn": 14.5,
                "contribution": 0.5
            },
            {
                "gics": "Materials",
                "allocMgr": 30.2,
                "allocInx": 36.3,
                "returnMgr": 26.2,
                "returnInx": 34.8,
                "mgrVarWeight": -6.1,
                "mgrVarReturn": -8.6,
                "contribution": 0.5
            },
            {
                "gics": "Industrials",
                "allocMgr": 17.5,
                "allocInx": 23.0,
                "returnMgr": 21.5,
                "returnInx": 20.0,
                "mgrVarWeight": -5.5,
                "mgrVarReturn": 1.5,
                "contribution": -0.1
            },
            {
                "gics": "Consumer Discretionary",
                "allocMgr": 1.2,
                "allocInx": 3.1,
                "returnMgr": 1.5,
                "returnInx": 1.9,
                "mgrVarWeight": -1.9,
                "mgrVarReturn": -0.5,
                "contribution": 0.0
            },
            {
                "gics": "Consumer Staples",
                "allocMgr": 2.3,
                "allocInx": 11.4,
                "returnMgr": 5.4,
                "returnInx": 12.4,
                "mgrVarWeight": -9.0,
                "mgrVarReturn": -7.0,
                "contribution": 0.6
            },
            {
                "gics": "Health Care",
                "allocMgr": 1.5,
                "allocInx": 2.1,
                "returnMgr": 0.0,
                "returnInx": 0.0,
                "mgrVarWeight": -0.6,
                "mgrVarReturn": 0.0,
                "contribution": 0.0
            },
            {
                "gics": "Financials",
                "allocMgr": 5.5,
                "allocInx": 2.1,
                "returnMgr": 0.0,
                "returnInx": 0.0,
                "mgrVarWeight": 3.4,
                "mgrVarReturn": 0.0,
                "contribution": 0.0
            },
            {
                "gics": "Information Technology",
                "allocMgr": 7.5,
                "allocInx": 2.1,
                "returnMgr": 0.0,
                "returnInx": 0.0,
                "mgrVarWeight": 5.4,
                "mgrVarReturn": 0.0,
                "contribution": 0.0
            },
            {
                "gics": "Telecommunication Services",
                "allocMgr": 5.0,
                "allocInx": 2.1,
                "returnMgr": 0.0,
                "returnInx": 0.0,
                "mgrVarWeight": 2.9,
                "mgrVarReturn": 0.0,
                "contribution": 0.0
            },
            {
                "gics": "Utilities",
                "allocMgr": 4.3,
                "allocInx": 2.1,
                "returnMgr": 0.0,
                "returnInx": 0.0,
                "mgrVarWeight": -0.8,
                "mgrVarReturn": 0.0,
                "contribution": 0.0
            },
            {
                "gics": "Real Estate",
                "allocMgr": 1.3,
                "allocInx": 2.1,
                "returnMgr": 0.0,
                "returnInx": 0.0,
                "mgrVarWeight": -0.8,
                "mgrVarReturn": 0.0,
                "contribution": 0.0
            },
            {
                "gics": "Other",
                "allocMgr": 0.0,
                "allocInx": 2.1,
                "returnMgr": 0.0,
                "returnInx": 0.0,
                "mgrVarWeight": -2.1,
                "mgrVarReturn": 0.0,
                "contribution": 0.0
            }
        ]
    }
}

