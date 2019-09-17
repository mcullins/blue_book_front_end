import { Injectable } from "@angular/core";

@Injectable()

export class SectorGrowthValueService {

    getSectorGrowthValue() {
        return [
            {
                "type": "High Growth",
                "june16mgr": 13.7,
                "june16inx": 0.0,
                "sept16mgr": 10.7,
                "sept16inx": 0.0,
                "dec16mgr": 22.2,
                "dec16inx": 0.0,
                "mar17mgr": 27.1,
                "mar17inx": 0.0
            },
            {
                "type": "Moderate Growth",
                "june16mgr": 18.5,
                "june16inx": 0.0,
                "sept16mgr": 24.8,
                "sept16inx": 0.0,
                "dec16mgr": 17.5,
                "dec16inx": 0.0,
                "mar17mgr": 15.0,
                "mar17inx": 0.0
            },
            {
                "type": "Neutral",
                "june16mgr": 26.6,
                "june16inx": 41.5,
                "sept16mgr": 31.5,
                "sept16inx": 37.0,
                "dec16mgr": 22.7,
                "dec16inx": 41.1,
                "mar17mgr": 22.2,
                "mar17inx": 39.0
            },
            {
                "type": "Moderate Value",
                "june16mgr": 28.8,
                "june16inx": 49.6,
                "sept16mgr": 26.2,
                "sept16inx": 51.1,
                "dec16mgr": 26.5,
                "dec16inx": 48.8,
                "mar17mgr": 27.7,
                "mar17inx": 49.5
            },
            {
                "type": "High Value",
                "june16mgr": 12.4,
                "june16inx": 8.9,
                "sept16mgr": 6.9,
                "sept16inx": 11.9,
                "dec16mgr": 11.1,
                "dec16inx": 10.2,
                "mar17mgr": 7.9,
                "mar17inx": 11.5
            },
            {
                "type": "Not Rated",
                "june16mgr": 0.0,
                "june16inx": 0.0,
                "sept16mgr": 0.0,
                "sept16inx": 0.0,
                "dec16mgr": 0.0,
                "dec16inx": 0.0,
                "mar17mgr": 0.0,
                "mar17inx": 0.0
            }
        ]
    }
}

