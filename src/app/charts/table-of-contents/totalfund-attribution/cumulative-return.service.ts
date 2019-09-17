import { Injectable } from "@angular/core";

@Injectable()

export class CumulativeReturnService {

    getReturn() {
        return [
            {
                "type": "Total Fund",
                "oneYear": -1.3,
                "threeYears": 22.2,
                "fiveYears": 41.2
            },
            {
                "type": "Relative Objective \xb2 [Target Mix * Index Return]",
                "oneYear": -1.3,
                "threeYears": 22.1,
                "fiveYears": 41.5
            },
            {
                "type": "\xa0\xa0\xa0\xa0 Total Value Gained/(Lost)",
                "oneYear": -0.1,
                "threeYears": 0.1,
                "fiveYears": -0.2
            },
            {
                "type": "Asset Allocation [Actual Mix * Index Return]",
                "oneYear": -1.7,
                "threeYears": 21.4,
                "fiveYears": 40.5
            },
            {
                "type": "Relative Objective \xb2 [Target Mix * Index Return]",
                "oneYear": -1.3,
                "threeYears": 22.1,
                "fiveYears": 41.5
            },
            {
                "type": "\xa0\xa0\xa0\xa0 Value Gained/(Lost) By Asset Allocation",
                "oneYear": 0.4,
                "threeYears": -0.7,
                "fiveYears": -1.0
            },
            {
                "type": "Total Fund",
                "oneYear": -1.3,
                "threeYears": 22.2,
                "fiveYears": 41.2
            },
            {
                "type": "Asset Allocation [Actual Mix * Index Return]",
                "oneYear": -1.7,
                "threeYears": 21.4,
                "fiveYears": 40.5
            },
            {
                "type": "\xa0\xa0\xa0\xa0 Value Gained/(Lost) By Active Management",
                "oneYear": 0.3,
                "threeYears": 0.8,
                "fiveYears": 0.8
            }
        ]
    }
}

