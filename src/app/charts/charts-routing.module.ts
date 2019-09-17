import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsComponent } from './charts.component';
// import { TableOfContentsComponent } from './table-of-contents/table-of-contents.component'
import { TableOfContentsModule } from './table-of-contents/table-of-contents.module'

const routes: Routes = [{
  path: '',
  component: ChartsComponent,
  // component: TableOfContentsComponent,
  // component: ChartsModule,
  data: {
    pageTitle: 'Charts'
  },
  children: [
    {
      path: "tableofcontents",
      // loadChildren: "app/charts/charts.module#ChartsModule", data: { pageTitle: "Charts" } }
      loadChildren: "app/charts/table-of-contents/table-of-contents.module#TableOfContentsModule",
      data: { pageTitle: "Table of Contents" } }
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
