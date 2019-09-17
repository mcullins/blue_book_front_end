import { Injectable } from "@angular/core";

@Injectable()

export class PerfPeersBottomService {

    getPerfPeersBottom() {
        return [
            {
                "typeBottom": "Abbot Capital Private Equity",
                "followTypeBottom": "\xa0\xa0\xa0\xa0 Domestic Equity Composite / Big Abbott PE VI",
                "quarterBottom": "-",
                "oneYrBottom": "+",
                "threeYrBottom": "-",
                "fiveYrBottom": "-"
            },
            {
                "typeBottom": "Commonfund Intl PE VII",
                "followTypeBottom": "\xa0\xa0\xa0\xa0 Domestic Equity Composite / Big CF Intl PE VII",
                "quarterBottom": "-",
                "oneYrBottom": "+",
                "threeYrBottom": "+",
                "fiveYrBottom": "+"
            },
            {
                "typeBottom": "Commonfund VP IX",
                "followTypeBottom": "\xa0\xa0\xa0\xa0 Domestic Equity Composite / Big CF PE VP IX",
                "quarterBottom": "-",
                "oneYrBottom": "+",
                "threeYrBottom": "+",
                "fiveYrBottom": "+"
            },
            {
                "typeBottom": "Commonfund PE VIII",
                "followTypeBottom": "\xa0\xa0\xa0\xa0 Domestic Equity Composite / Big CF PE VIII",
                "quarterBottom": "-",
                "oneYrBottom": "-",
                "threeYrBottom": "-",
                "fiveYrBottom": "n/a"
            },
            {
                "typeBottom": "Commonfund Capital Partners V",
                "followTypeBottom": "\xa0\xa0\xa0\xa0 Domestic Equity Composite / Big CF PE CP V",
                "quarterBottom": "0",
                "oneYrBottom": "0",
                "threeYrBottom": "0",
                "fiveYrBottom": "n/a"
            }
        ]
    }
}

