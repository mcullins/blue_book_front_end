import { Component, OnInit } from '@angular/core';
import { TotalPerfObjectiveService } from './totalperfobjective.service';
import { TotalPerfService } from './totalperf.service';
import { BenchmarkService } from './benchmark.service';

@Component({
  selector: 'app-totalperfbenchmark',
  templateUrl: './totalperfbenchmark.component.html',
    styleUrls: ['./totalperfbenchmark.component.css'],
    providers: [TotalPerfObjectiveService, TotalPerfService, BenchmarkService]
})
export class TotalperfbenchmarkComponent implements OnInit {
    date: any = new Date();
    private objectives;
    private perfs;
    private benchmarks;

    isNegative(val: number): boolean {
        if (val < 0) {
            return true;
        } else {
            return false
        }
    }

    isBoldObjectives(index): boolean {
        if (index == 0 || index == 2) {
            return true;
        } else {
            return false
        }
    }
    isBoldPerfs(index): boolean {
        if (index == 0 || index == 3 || index == 6
            || index == 8 || index == 9 || index == 10
            || index == 11 || index == 12 || index == 13) {
            return true;
        } else {
            return false
        }
    }
    isBoldBenchmarks(index): boolean {
        if (index == 0) {
            return true;
        } else {
            return false
        }
    }
    

    constructor(private totalPerfObjective: TotalPerfObjectiveService,
        private totalPerf: TotalPerfService,
        private benchmark: BenchmarkService,
         ) { }

    ngOnInit() {
       
        this.objectives = this.totalPerfObjective.getObjective();
        this.perfs = this.totalPerf.getPerf();
        this.benchmarks = this.benchmark.getBenchmark();
        
        
        
    }

}
