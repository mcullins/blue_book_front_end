import { Injectable } from "@angular/core";

@Injectable()

export class SectorWeightingService {

    getSectorWeight() {
        return [
            {
                "type": "Very Aggressive",
                "june16mgr": 1.1,
                "june16inx": 6.3,
                "sept16mgr": 0.0,
                "sept16inx": 7.8,
                "dec16mgr": 0.0,
                "dec16inx": 7.5,
                "mar17mgr": 2.6,
                "mar17inx": 7.4
            },
            {
                "type": "Moderately Aggressive",
                "june16mgr": 17.0,
                "june16inx": 20.2,
                "sept16mgr": 17.3,
                "sept16inx": 18.1,
                "dec16mgr": 18.6,
                "dec16inx": 18.1,
                "mar17mgr": 21.3,
                "mar17inx": 25.9
            },
            {
                "type": "Neutral",
                "june16mgr": 28.8,
                "june16inx": 26.1,
                "sept16mgr": 30.1,
                "sept16inx": 25.0,
                "dec16mgr": 32.2,
                "dec16inx": 24.5,
                "mar17mgr": 33.5,
                "mar17inx": 24.5
            },
            {
                "type": "Moderately Defensive",
                "june16mgr": 30.5,
                "june16inx": 27.3,
                "sept16mgr": 27.4,
                "sept16inx": 24.8,
                "dec16mgr": 26.0,
                "dec16inx": 23.3,
                "mar17mgr": 20.7,
                "mar17inx": 25.7
            },
            {
                "type": "Very Defensive",
                "june16mgr": 22.6,
                "june16inx": 20.0,
                "sept16mgr": 25.1,
                "sept16inx": 24.3,
                "dec16mgr": 23.2,
                "dec16inx": 26.6,
                "mar17mgr": 21.9,
                "mar17inx": 16.6
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

