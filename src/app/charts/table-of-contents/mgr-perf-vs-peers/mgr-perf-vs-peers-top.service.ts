import { Injectable } from "@angular/core";

@Injectable()

export class PerfPeersTopService {

    getPerfPeersTop() {
        return [
            {
                "type": "Dodge & Cox Equity",
                "followType": "\xa0\xa0\xa0\xa0 Core Relative Value / Russell 1000 Value",
                "quarter": "",
                "oneYr": "",
                "threeYr": "0",
                "fiveYr": "0"
            },
            {
                "type": "SIT Inv. Assocates",
                "followType": "\xa0\xa0\xa0\xa0 Core Growth / Russell 1000 Growth",
                "quarter": "0",
                "oneYr": "0",
                "threeYr": "-",
                "fiveYr": "-"
            },
            {
                "type": "Fiduciary Management",
                "followType": "\xa0\xa0\xa0\xa0 Specialty Small Relative Value / Russell 2000 Value",
                "quarter": "+",
                "oneYr": "+",
                "threeYr": "+",
                "fiveYr": "n/a"
            },
            {
                "type": "Morgan Stanley - International Equity",
                "followType": "\xa0\xa0\xa0\xa0 Intl Large Cap Relative Value / MSCI EAFE",
                "quarter": "0",
                "oneYr": "+",
                "threeYr": "-",
                "fiveYr": "+"
            },
            {
                "type": "Lazard Asset Management",
                "followType": "\xa0\xa0\xa0\xa0 Intl Large Cap Relative Growth / MSCI EAFE",
                "quarter": "+",
                "oneYr": "+",
                "threeYr": "n/a",
                "fiveYr": "n/a"
            },
            {
                "type": "Morgan Stanley - Emerging Markets Equity",
                "followType": "\xa0\xa0\xa0\xa0 Emerging Markets Equity / MSCI Emerging Markets",
                "quarter": "-",
                "oneYr": "+",
                "threeYr": "+",
                "fiveYr": "+"
            },
            {
                "type": "Loomis Sayles Co.",
                "followType": "\xa0\xa0\xa0\xa0 Core Extended / Barclays Aggregate",
                "quarter": "+",
                "oneYr": "-",
                "threeYr": "0",
                "fiveYr": "+"
            },
            {
                "type": "RREEF II & III",
                "followType": "\xa0\xa0\xa0\xa0 Real Estate Core/Core+ / NCREIF Property",
                "quarter": "0",
                "oneYr": "+",
                "threeYr": "+",
                "fiveYr": "+"
            },
            {
                "type": "Tortoise Capital Advisors",
                "followType": "\xa0\xa0\xa0\xa0 Energy Infrastructure / SP MLP",
                "quarter": "0",
                "oneYr": "n/a",
                "threeYr": "n/a",
                "fiveYr": "n/a"
            },
            {
                "type": "Natural Resources VIII",
                "followType": "\xa0\xa0\xa0\xa0 Domestic Equity Composite / Big CF PE NatRes VIII",
                "quarter": "0",
                "oneYr": "-",
                "threeYr": "-",
                "fiveYr": "-"
            },
            {
                "type": "UBS Neutral Alpha Strategies",
                "followType": "\xa0\xa0\xa0\xa0 Hedge Funds Absolute Return / HFR - FOF Conservative",
                "quarter": "+",
                "oneYr": "n/a",
                "threeYr": "n/a",
                "fiveYr": "n/a"
            },
        ]
    }
}

