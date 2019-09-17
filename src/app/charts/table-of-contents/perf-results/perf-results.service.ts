import { Injectable } from "@angular/core";

@Injectable()

export class PerfResultsService {

    getPerfResults() {
        return [
        //Domestic Equity Start
            {
                "type": "Domestic Equity",
                "inceptionDate": "",
                "quarter": NaN,
                "yearToDate": NaN,
                "oneYr": NaN,
                "threeYr": NaN,
                "fiveYr": NaN,
                "tenYr": NaN,
                "sinceInception": NaN
            },
            {
                "type": "Core",
                "inceptionDate": "",
                "quarter": NaN,
                "yearToDate": NaN,
                "oneYr": NaN,
                "threeYr": NaN,
                "fiveYr": NaN,
                "tenYr": NaN,
                "sinceInception": NaN
            },
            {
                "type": "Dodge & Cox Equity - Total Fund (Net)",
                "inceptionDate": "1Q 2002",
                "quarter": -1.0,
                "yearToDate": -1.0,
                "oneYr": -4.3,
                "threeYr": 9.5,
                "fiveYr": 10.1,
                "tenYr": 5.0,
                "sinceInception": 7.1
            },
            {
                "type": "Russell 1000 Value",
                "inceptionDate": "",
                "quarter": 1.6,
                "yearToDate": 1.6,
                "oneYr": -1.5,
                "threeYr": 9.4,
                "fiveYr": 10.2,
                "tenYr": 5.7,
                "sinceInception": 6.7
            },
            {
                "type": "S&P 500",
                "inceptionDate": "",
                "quarter": 1.3,
                "yearToDate": 1.3,
                "oneYr": 1.8,
                "threeYr": 11.8,
                "fiveYr": 11.6,
                "tenYr": 7.0,
                "sinceInception": 6.3
            },
            {
                "type": "SIT Inv. Associates - Total Fund",
                "inceptionDate": "2Q 2001",
                "quarter": 0.5,
                "yearToDate": 0.5,
                "oneYr": 2.4,
                "threeYr": 12.1,
                "fiveYr": 10.9,
                "tenYr": 7.5,
                "sinceInception": 5.4
            },
            {
                "type": "Net of Fees",
                "inceptionDate": "",
                "quarter": 0.2,
                "yearToDate": 0.2,
                "oneYr": 1.6,
                "threeYr": 11.3,
                "fiveYr": 10.2,
                "tenYr": NaN,
                "sinceInception": NaN
            },
            {
                "type": "Russell 1000 Growth",
                "inceptionDate": "",
                "quarter": 0.7,
                "yearToDate": 0.7,
                "oneYr": 2.5,
                "threeYr": 13.6,
                "fiveYr": 12.4,
                "tenYr": 8.3,
                "sinceInception": 6.0
            },
            {
                "type": "S&P 500",
                "inceptionDate": "",
                "quarter": 1.3,
                "yearToDate": 1.3,
                "oneYr": 1.8,
                "threeYr": 11.8,
                "fiveYr": 11.6,
                "tenYr": 7.0,
                "sinceInception": 6.0
            },
            {
                "type": "Specialty Small",
                "inceptionDate": "",
                "quarter": NaN,
                "yearToDate": NaN,
                "oneYr": NaN,
                "threeYr": NaN,
                "fiveYr": NaN,
                "tenYr": NaN,
                "sinceInception": NaN
                },
            {
                "type": "Fiduciary Managment - Total Fund",
                "inceptionDate": "4Q 2011",
                "quarter": 5.8,
                "yearToDate": 5.8,
                "oneYr": -2.8,
                "threeYr": 9.0,
                "fiveYr": NaN,
                "tenYr": NaN,
                "sinceInception": 14.5
            },
            {
                "type": "Net of Fees",
                "inceptionDate": "",
                "quarter": 5.5,
                "yearToDate": 5.5,
                "oneYr": -3.6,
                "threeYr": 8.0,
                "fiveYr": NaN,
                "tenYr": NaN,
                "sinceInception": 13.5
            },
            {
                "type": "Russell 2000 Value",
                "inceptionDate": "",
                "quarter": 1.7,
                "yearToDate": 1.7,
                "oneYr": -7.7,
                "threeYr": 5.7,
                "fiveYr": 6.7,
                "tenYr": 4.4,
                "sinceInception": 14.0
            },
            //International Equity Start
            {
                "type": "International Equity",
                "inceptionDate": "",
                "quarter": NaN,
                "yearToDate": NaN,
                "oneYr": NaN,
                "threeYr": NaN,
                "fiveYr": NaN,
                "tenYr": NaN,
                "sinceInception": NaN
            },
            {
                "type": "Large Cap",
                "inceptionDate": "",
                "quarter": NaN,
                "yearToDate": NaN,
                "oneYr": NaN,
                "threeYr": NaN,
                "fiveYr": NaN,
                "tenYr": NaN,
                "sinceInception": NaN
            },
            {
                "type": "Morgan Stanley - International Equity - Total Fund (Net)",
                "inceptionDate": "1Q 2001",
                "quarter": -2.5,
                "yearToDate": -2.5,
                "oneYr": -6.8,
                "threeYr": 1.5,
                "fiveYr": 3.4,
                "tenYr": 2.8,
                "sinceInception": 4.9
            },
            {
                "type": "MSCI EAFE",
                "inceptionDate": "",
                "quarter": -3.0,
                "yearToDate": -3.0,
                "oneYr": -8.3,
                "threeYr": 2.2,
                "fiveYr": 2.3,
                "tenYr": 1.8,
                "sinceInception": 3.3
            },
            {
                "type": "Lazard Asset Management - Total Fund (Net)",
                "inceptionDate": "3Q 2013",
                "quarter": -0.3,
                "yearToDate": -0.3,
                "oneYr": -6.6,
                "threeYr": NaN,
                "fiveYr": NaN,
                "tenYr": NaN,
                "sinceInception": 4.4
            },
            {
                "type": "MSCI EAFE",
                "inceptionDate": "",
                "quarter": -3.0,
                "yearToDate": -3.0,
                "oneYr": -8.3,
                "threeYr": 2.2,
                "fiveYr": 2.3,
                "tenYr": 1.8,
                "sinceInception": 2.8
            },
            {
                "type": "Emerging Markets",
                "inceptionDate": "",
                "quarter": NaN,
                "yearToDate": NaN,
                "oneYr": NaN,
                "threeYr": NaN,
                "fiveYr": NaN,
                "tenYr": NaN,
                "sinceInception": NaN
            },
            {
                "type": "Morgan Stanley - Emerging Markets Equity - Total Fund",
                "inceptionDate": "1Q 2001",
                "quarter": 4.9,
                "yearToDate": 4.9,
                "oneYr": -7.9,
                "threeYr": -3.1,
                "fiveYr": -1.9,
                "tenYr": 3.0,
                "sinceInception": 8.7
            },
            {
                "type": "Net of Fees",
                "inceptionDate": "",
                "quarter": 4.7,
                "yearToDate": 4.7,
                "oneYr": -8.7,
                "threeYr": -3.8,
                "fiveYr": -2.3,
                "tenYr": 2.8,
                "sinceInception": 8.6
            },
            {
                "type": "MSCI Emerging Markets",
                "inceptionDate": "",
                "quarter": 5.7,
                "yearToDate": 5.7,
                "oneYr": -12.0,
                "threeYr": -4.5,
                "fiveYr": -4.1,
                "tenYr": 3.0,
                "sinceInception": 8.8
            },
            // Domestic Fixed Income Start
            {
                "type": "Domestic Fixed Income",
                "inceptionDate": "",
                "quarter": NaN,
                "yearToDate": NaN,
                "oneYr": NaN,
                "threeYr": NaN,
                "fiveYr": NaN,
                "tenYr": NaN,
                "sinceInception": NaN
            },
            {
                "type": "Intermediate Term",
                "inceptionDate": "",
                "quarter": NaN,
                "yearToDate": NaN,
                "oneYr": NaN,
                "threeYr": NaN,
                "fiveYr": NaN,
                "tenYr": NaN,
                "sinceInception": NaN
            },
            {
                "type": "Loomis Sayles Co. - Total Fund",
                "inceptionDate": "2Q 1988",
                "quarter": 4.1,
                "yearToDate": 4.1,
                "oneYr": 0.1,
                "threeYr": 2.6,
                "fiveYr": 4.6,
                "tenYr": 5.3,
                "sinceInception": 8.2
            },
            {
                "type": "Net of Fees",
                "inceptionDate": "",
                "quarter": 4.1,
                "yearToDate": 4.1,
                "oneYr": -0.2,
                "threeYr": 2.2,
                "fiveYr": 4.2,
                "tenYr": NaN,
                "sinceInception": NaN
            },
            {
                "type": "Barclays Aggregate",
                "inceptionDate": "",
                "quarter": 3.0,
                "yearToDate": 3.0,
                "oneYr": 2.0,
                "threeYr": 2.5,
                "fiveYr": 3.8,
                "tenYr": 4.9,
                "sinceInception": 6.6
            },
            {
                "type": "Merrill Lynch US High Yield Cash Pay",
                "inceptionDate": "",
                "quarter": 3.2,
                "yearToDate": 3.2,
                "oneYr": -3.9,
                "threeYr": 1.8,
                "fiveYr": 4.7,
                "tenYr": 6.8,
                "sinceInception": 8.1
            },
            //Domestic Real Estate Start
            {
                "type": "Domestic Real Estate",
                "inceptionDate": "",
                "quarter": NaN,
                "yearToDate": NaN,
                "oneYr": NaN,
                "threeYr": NaN,
                "fiveYr": NaN,
                "tenYr": NaN,
                "sinceInception": NaN
            },
            {
                "type": "RREEF II & III",
                "inceptionDate": "4Q 1995",
                "quarter": 1.9,
                "yearToDate": 1.9,
                "oneYr": 14.1,
                "threeYr": 15.1,
                "fiveYr": 14.6,
                "tenYr": 5.5,
                "sinceInception": 9.9
            },
            {
                "type": "Net of Fees",
                "inceptionDate": "",
                "quarter": 1.6,
                "yearToDate": 1.6,
                "oneYr": 13.1,
                "threeYr": 14.1,
                "fiveYr": 13.8,
                "tenYr": NaN,
                "sinceInception": NaN
            },
            {
                "type": "NCREIF Property",
                "inceptionDate": "",
                "quarter": 2.2,
                "yearToDate": 2.2,
                "oneYr": 11.8,
                "threeYr": 11.9,
                "fiveYr": 11.9,
                "tenYr": 7.6,
                "sinceInception": 9.8
            },
            {
                "type": "NCREIF ODCE",
                "inceptionDate": "",
                "quarter": 2.2,
                "yearToDate": 2.2,
                "oneYr": 13.7,
                "threeYr": 13.6,
                "fiveYr": 13.3,
                "tenYr": 6.4,
                "sinceInception": 9.3
            },
            //Domestic Energy Infrastructure Start
            {
                "type": "Domestic Energy Infrastructure",
                "inceptionDate": "",
                "quarter": NaN,
                "yearToDate": NaN,
                "oneYr": NaN,
                "threeYr": NaN,
                "fiveYr": NaN,
                "tenYr": NaN,
                "sinceInception": NaN
            },
            {
                "type": "Tortoise Capital Advisors - Total Fund",
                "inceptionDate": "1Q 2016",
                "quarter": -6.4,
                "yearToDate": -6.4,
                "oneYr": NaN,
                "threeYr": NaN,
                "fiveYr": NaN,
                "tenYr": NaN,
                "sinceInception": -6.4
            },
            {
                "type": "Net of Fees",
                "inceptionDate": "",
                "quarter": -6.6,
                "yearToDate": -6.6,
                "oneYr": NaN,
                "threeYr": NaN,
                "fiveYr": NaN,
                "tenYr": NaN,
                "sinceInception": -6.6
            },
            {
                "type": "SP MLP",
                "inceptionDate": "",
                "quarter": -6.3,
                "yearToDate": -6.3,
                "oneYr": -37.2,
                "threeYr": -10.9,
                "fiveYr": -0.9,
                "tenYr": 7.2,
                "sinceInception": -6.3
            },
            //Domestic Commodities Start
            {
                "type": "Domestic Commodities",
                "inceptionDate": "",
                "quarter": NaN,
                "yearToDate": NaN,
                "oneYr": NaN,
                "threeYr": NaN,
                "fiveYr": NaN,
                "tenYr": NaN,
                "sinceInception": NaN
            },
            {
                "type": "Natural Resources VIII - Total Fund",
                "inceptionDate": "1Q 2009",
                "quarter": 0.0,
                "yearToDate": 0.0,
                "oneYr": -17.6,
                "threeYr": -3.7,
                "fiveYr": 0.5,
                "tenYr": NaN,
                "sinceInception": 2.0
            },
            {
                "type": "Net of Fees",
                "inceptionDate": "",
                "quarter": 0.0,
                "yearToDate": 0.0,
                "oneYr": -17.6,
                "threeYr": -3.7,
                "fiveYr": -0.5,
                "tenYr": NaN,
                "sinceInception": 2.0
            },
            {
                "type": "Big CF Natl Res VIII",
                "inceptionDate": "",
                "quarter": 0.0,
                "yearToDate": 0.0,
                "oneYr": -5.3,
                "threeYr": 12.5,
                "fiveYr": 10.3,
                "tenYr": NaN,
                "sinceInception": 8.7
            },
            {
                "type": "S&P 500 Lagged",
                "inceptionDate": "",
                "quarter": 7.0,
                "yearToDate": 7.0,
                "oneYr": 1.4,
                "threeYr": 15.1,
                "fiveYr": 12.6,
                "tenYr": 7.3,
                "sinceInception": 10.4
            },
            {
                "type": "S&P 500 Lagged + 4%",
                "inceptionDate": "",
                "quarter": 8.1,
                "yearToDate": 8.1,
                "oneYr": 5.4,
                "threeYr": 19.7,
                "fiveYr": 17.0,
                "tenYr": 11.6,
                "sinceInception": 14.8
            },
            //Domestic Hedge Funds Start
            {
                "type": "Domestic Hedge Funds",
                "inceptionDate": "",
                "quarter": NaN,
                "yearToDate": NaN,
                "oneYr": NaN,
                "threeYr": NaN,
                "fiveYr": NaN,
                "tenYr": NaN,
                "sinceInception": NaN
            },
            {
                "type": "UBS Neutral Alpha Strategies - Total Fund",
                "inceptionDate": "4Q 2009",
                "quarter": 0.3,
                "yearToDate": 0.3,
                "oneYr": NaN,
                "threeYr": NaN,
                "fiveYr": NaN,
                "tenYr": NaN,
                "sinceInception": 0.6
            },
            {
                "type": "Net of Fees",
                "inceptionDate": "",
                "quarter": 0.3,
                "yearToDate": 0.3,
                "oneYr": NaN,
                "threeYr": NaN,
                "fiveYr": NaN,
                "tenYr": NaN,
                "sinceInception": 0.6
            },
            {
                "type": "HFR FOF Conservative",
                "inceptionDate": "",
                "quarter": -2.0,
                "yearToDate": -2.0,
                "oneYr": -3.5,
                "threeYr": 2.0,
                "fiveYr": 1.7,
                "tenYr": 1.4,
                "sinceInception": -2.0
            },
            //Domestic Private Equity Start
            {
                "type": "Domestic Private Equity",
                "inceptionDate": "",
                "quarter": NaN,
                "yearToDate": NaN,
                "oneYr": NaN,
                "threeYr": NaN,
                "fiveYr": NaN,
                "tenYr": NaN,
                "sinceInception": NaN
            },
            {
                "type": "Abbott Capital Private Equity - Total Fund",
                "inceptionDate": "1Q 2009",
                "quarter": -1.1,
                "yearToDate": -1.1,
                "oneYr": 11.1,
                "threeYr": 12.3,
                "fiveYr": 8.2,
                "tenYr": NaN,
                "sinceInception": -1.4
            },
            {
                "type": "Net of Fees",
                "inceptionDate": "",
                "quarter": -1.1,
                "yearToDate": -1.1,
                "oneYr": 11.1,
                "threeYr": 12.3,
                "fiveYr": 8.2,
                "tenYr": NaN,
                "sinceInception": -1.4
            },
            {
                "type": "Big Abbott PE VI",
                "inceptionDate": "",
                "quarter": 8.0,
                "yearToDate": 8.0,
                "oneYr": 2.3,
                "threeYr": 15.5,
                "fiveYr": 10.0,
                "tenYr": NaN,
                "sinceInception": -0.3
            },
            {
                "type": "S&P 500 Lagged",
                "inceptionDate": "",
                "quarter": 7.0,
                "yearToDate": 7.0,
                "oneYr": 1.4,
                "threeYr": 15.1,
                "fiveYr": 12.6,
                "tenYr": 7.3,
                "sinceInception": 10.4
            },
            {
                "type": "S&P 500 Lagged + 4%",
                "inceptionDate": "",
                "quarter": 8.1,
                "yearToDate": 8.1,
                "oneYr": 5.4,
                "threeYr": 19.7,
                "fiveYr": 17.0,
                "tenYr": 11.6,
                "sinceInception": 14.8
            },
            {
                "type": "Commonfund Intl PE VII - Total Fund",
                "inceptionDate": "2Q 2010",
                "quarter": 0.0,
                "yearToDate": 0.0,
                "oneYr": 17.1,
                "threeYr": 9.9,
                "fiveYr": 2.1,
                "tenYr": NaN,
                "sinceInception": -6.8
            },
            {
                "type": "Net of Fees",
                "inceptionDate": "",
                "quarter": 0.0,
                "yearToDate": 0.0,
                "oneYr": 17.1,
                "threeYr": 9.9,
                "fiveYr": 2.1,
                "tenYr": NaN,
                "sinceInception": -6.8
            },
            {
                "type": "Big CF Intl PE VII",
                "inceptionDate": "",
                "quarter": 7.0,
                "yearToDate": 7.0,
                "oneYr": 1.4,
                "threeYr": 4.5,
                "fiveYr": -0.9,
                "tenYr": NaN,
                "sinceInception": -9.1
            },
            {
                "type": "S&P 500 Lagged",
                "inceptionDate": "",
                "quarter": 7.0,
                "yearToDate": 7.0,
                "oneYr": 1.4,
                "threeYr": 15.1,
                "fiveYr": 12.6,
                "tenYr": 7.3,
                "sinceInception": 13.0
            },
            {
                "type": "S&P 500 Lagged + 4%",
                "inceptionDate": "",
                "quarter": 8.1,
                "yearToDate": 8.1,
                "oneYr": 5.4,
                "threeYr": 19.7,
                "fiveYr": 17.0,
                "tenYr": 11.6,
                "sinceInception": 17.5
            },
            {
                "type": "Commonfund VP IX - Total Fund",
                "inceptionDate": "2Q 2010",
                "quarter": -0.0,
                "yearToDate": -0.0,
                "oneYr": 44.3,
                "threeYr": 37.6,
                "fiveYr": 22.2,
                "tenYr": NaN,
                "sinceInception": 14.2
            },
            {
                "type": "Net of Fees",
                "inceptionDate": "",
                "quarter": -0.0,
                "yearToDate": -0.0,
                "oneYr": 44.3,
                "threeYr": 37.6,
                "fiveYr": 22.2,
                "tenYr": NaN,
                "sinceInception": 14.2
            },
            {
                "type": "Big CF VP IX",
                "inceptionDate": "",
                "quarter": 7.0,
                "yearToDate": 7.0,
                "oneYr": 1.4,
                "threeYr": 10.3,
                "fiveYr": 7.0,
                "tenYr": NaN,
                "sinceInception": 2.2
            },
            {
                "type": "S&P 500 Lagged",
                "inceptionDate": "",
                "quarter": 7.0,
                "yearToDate": 7.0,
                "oneYr": 1.4,
                "threeYr": 15.1,
                "fiveYr": 12.6,
                "tenYr": 7.3,
                "sinceInception": 13.0
            },
            {
                "type": "S&P 500 Lagged + 4%",
                "inceptionDate": "",
                "quarter": 8.1,
                "yearToDate": 8.1,
                "oneYr": 5.4,
                "threeYr": 19.7,
                "fiveYr": 17.0,
                "tenYr": 11.6,
                "sinceInception": 17.5
            },
            {
                "type": "Commonfund PE VIII - Total Fund",
                "inceptionDate": "1Q 2012",
                "quarter": -0.0,
                "yearToDate": -0.0,
                "oneYr": 15.0,
                "threeYr": 4.3,
                "fiveYr": NaN,
                "tenYr": NaN,
                "sinceInception": 6.5
            },
            {
                "type": "Net of Fees",
                "inceptionDate": "",
                "quarter": -0.0,
                "yearToDate": -0.0,
                "oneYr": 15.0,
                "threeYr": 4.3,
                "fiveYr": NaN,
                "tenYr": NaN,
                "sinceInception": 6.5
            },
            {
                "type": "Big CF PE VIII",
                "inceptionDate": "",
                "quarter": 7.0,
                "yearToDate": 7.0,
                "oneYr": 23.1,
                "threeYr": 6.7,
                "fiveYr": NaN,
                "tenYr": NaN,
                "sinceInception": 8.2
            },
            {
                "type": "S&P 500 Lagged",
                "inceptionDate": "",
                "quarter": 7.0,
                "yearToDate": 7.0,
                "oneYr": 1.4,
                "threeYr": 15.1,
                "fiveYr": 12.6,
                "tenYr": 7.3,
                "sinceInception": 17.4
            },
            {
                "type": "S&P 500 Lagged + 4%",
                "inceptionDate": "",
                "quarter": 8.1,
                "yearToDate": 8.1,
                "oneYr": 5.4,
                "threeYr": 19.7,
                "fiveYr": 17.0,
                "tenYr": 11.6,
                "sinceInception": 22.1
            },
            {
                "type": "Commonfund Capital Partners V - Total Fund",
                "inceptionDate": "1Q 2013",
                "quarter": 0.0,
                "yearToDate": 0.0,
                "oneYr": 16.2,
                "threeYr": 5.6,
                "fiveYr": NaN,
                "tenYr": NaN,
                "sinceInception": 5.2
            },
            {
                "type": "Net of Fees",
                "inceptionDate": "",
                "quarter": 0.0,
                "yearToDate": 0.0,
                "oneYr": 16.2,
                "threeYr": 5.6,
                "fiveYr": NaN,
                "tenYr": NaN,
                "sinceInception": 5.2
            },
            {
                "type": "Big CF CP V",
                "inceptionDate": "",
                "quarter": 0.0,
                "yearToDate": 0.0,
                "oneYr": 16.2,
                "threeYr": 5.6,
                "fiveYr": NaN,
                "tenYr": NaN,
                "sinceInception": 5.2
            },
            {
                "type": "S&P 500 Lagged",
                "inceptionDate": "",
                "quarter": 7.0,
                "yearToDate": 7.0,
                "oneYr": 1.4,
                "threeYr": 15.1,
                "fiveYr": 12.6,
                "tenYr": 7.3,
                "sinceInception": 13.8
            },
            {
                "type": "S&P 500 Lagged + 4%",
                "inceptionDate": "",
                "quarter": 8.1,
                "yearToDate": 8.1,
                "oneYr": 5.4,
                "threeYr": 19.7,
                "fiveYr": 17.0,
                "tenYr": 11.6,
                "sinceInception": 18.3
            },
            // Domestic Cash
            {
                "type": "Domestic Cash",
                "inceptionDate": "",
                "quarter": NaN,
                "yearToDate": NaN,
                "oneYr": NaN,
                "threeYr": NaN,
                "fiveYr": NaN,
                "tenYr": NaN,
                "sinceInception": NaN
            },
            {
                "type": "Cash Account - Total Fund (Net)",
                "inceptionDate": "3Q 2005",
                "quarter": 0.0,
                "yearToDate": 0.0,
                "oneYr": 0.0,
                "threeYr": 0.0,
                "fiveYr": 0.0,
                "tenYr": 1.2,
                "sinceInception": 1.3
            }
        ]
    }
}

