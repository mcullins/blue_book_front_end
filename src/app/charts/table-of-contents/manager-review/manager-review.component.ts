import { Component, OnInit } from '@angular/core';
import { ManagerReviewService } from '@app/charts/table-of-contents/manager-review/manager-review.service';





@Component({
  selector: 'app-manager-review',
  templateUrl: './manager-review.component.html',
    styleUrls: ['./manager-review.component.css'],
    providers: [ManagerReviewService]
})
export class ManagerReviewComponent implements OnInit {
    date: any = new Date();

    private datas;


    isLeader(index): boolean {
        if (index == 0 || index == 6 || index == 12 
            || index == 15 || index == 17 || index == 19
            || index == 21 || index == 23 || index == 29) {
            return true;
        } else {
            return false
        }
    }

    isBold(index): boolean {
        if (index == 0 || index == 1 || index == 4 
            || index == 6 || index == 7 || index == 10
            || index == 12 || index == 13 || index == 15
            || index == 17 || index == 19 || index == 21
            || index == 23 || index == 29) {
            return true;
        } else {
            return false
        }
    }


    constructor(private managerReviewService: ManagerReviewService) {

    }
    ngOnInit() {
        this.datas = this.managerReviewService.getData();
    }   

}




