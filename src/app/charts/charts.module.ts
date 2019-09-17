import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ChartsRoutingModule } from "./charts-routing.module";
import { TableOfContentsModule } from "./table-of-contents/table-of-contents.module";
import { ChartsComponent } from "./charts.component";

@NgModule({
  declarations: [ChartsComponent],
  imports: [
    TableOfContentsModule,
    CommonModule,
    ChartsRoutingModule
  ]
})
export class ChartsModule { }
