import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dom-fixed-income-comp',
  templateUrl: './dom-fixed-income-comp.component.html',
  styleUrls: ['./dom-fixed-income-comp.component.css']
})
export class DomFixedIncomeCompComponent implements OnInit {
    date: any = new Date();
  constructor() { }

  ngOnInit() {
  }

}
