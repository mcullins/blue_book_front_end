import { Component, OnInit } from '@angular/core';
import { PerfPeersTopService } from './mgr-perf-vs-peers-top.service';
import { PerfPeersBottomService } from './mgr-perf-vs-peers-bottom.service';

@Component({
  selector: 'app-mgr-perf-vs-peers',
  templateUrl: './mgr-perf-vs-peers.component.html',
    styleUrls: ['./mgr-perf-vs-peers.component.css'],
    providers: [PerfPeersTopService, PerfPeersBottomService]
})
export class MgrPerfVsPeersComponent implements OnInit {
    private perfPeersTops;
    private perfPeersBottoms;
    date: any = new Date();

    isNavyQtrTop(index): boolean {
        if (index == 0 || index == 5 || index == 7 || index == 8) {
            return true;
        } else {
            return false
        }
    };
    isNavy1yrTop(index): boolean {
        if (index == 2 || index == 6 || index == 9) {
            return true;
        } else {
            return false
        }
    };
    isNavy3yrTop(index): boolean {
        if (index == 3 || index == 5 || index == 6 || index == 9) {
            return true;
        } else {
            return false
        }
    };
    isNavy5yrTop(index): boolean {
        if (index == 6 || index == 9) {
            return true;
        } else {
            return false
        }
    };
    isRedQtrTop(index): boolean {
        if (index == 1 || index == 2 || index == 4 || index == 6 || index == 10) {
            return true;
        } else {
            return false
        }
    };
    isRed1yrTop(index): boolean {
        if (index == 1 || index == 5) {
            return true;
        } else {
            return false
        }
    };
    isRed3yrTop(index): boolean {
        if (index == 7) {
            return true;
        } else {
            return false
        }
    };
    isRed5yrTop(index): boolean {
        if (index == 5 || index == 7) {
            return true;
        } else {
            return false
        }
    };
    isGreyQtrTop(index): boolean {
        if (index == 3 || index == 9) {
            return true;
        } else {
            return false
        }
    };
    isGrey1yrTop(index): boolean {
        if (index == 0 || index == 3 || index == 4 || index == 7) {
            return true;
        } else {
            return false
        }
    };
    isGrey3yrTop(index): boolean {
        if (index == 0 || index == 1 || index == 2) {
            return true;
        } else {
            return false
        }
    };
    isGrey5yrTop(index): boolean {
        if (index == 0 || index == 1 || index == 3) {
            return true;
        } else {
            return false
        }
    };
    isNavy3yrBottom(index): boolean {
        if (index == 3 || index == 4) {
            return true;
        } else {
            return false
        }
    };
    isNavy5yrBottom(index): boolean {
        if (index == 0 || index == 1) {
            return true;
        } else {
            return false
        }
    };
    isRed1yrBottom(index): boolean {
        if (index == 0 || index == 1 || index == 2 || index == 3 || index == 4) {
            return true;
        } else {
            return false
        }
    };
    isRed3yrBottom(index): boolean {
        if (index == 0 || index == 2) {
            return true;
        } else {
            return false
        }
    };
    isRed5yrBottom(index): boolean {
        if (index == 2) {
            return true;
        } else {
            return false
        }
    };
    isGreyQtrBottom(index): boolean {
        if (index == 0 || index == 1 || index == 2 || index == 3 || index == 4) {
            return true;
        } else {
            return false
        }
    };
    isGrey3yrBottom(index): boolean {
        if (index == 1) {
            return true;
        } else {
            return false
        }
    };

    constructor(private perfPeersTop: PerfPeersTopService,
                private perfPeersBottom: PerfPeersBottomService) { }

    ngOnInit() {
        this.perfPeersTops = this.perfPeersTop.getPerfPeersTop();
        this.perfPeersBottoms = this.perfPeersBottom.getPerfPeersBottom();
    }
}