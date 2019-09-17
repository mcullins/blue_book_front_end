import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainLayoutComponent } from "./shared/layout/app-layouts/main-layout.component";
import { AuthLayoutComponent } from "./shared/layout/app-layouts/auth-layout.component";

const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path: "home",
        loadChildren: "./features/home/home.module#HomeModule"
      },
      { path: "charts", loadChildren: "app/charts/charts.module#ChartsModule", data: { pageTitle: "Charts" } }
      // { path: "charts", loadChildren: "app/charts/table-of-contents/table-of-contents.module#TableOfContentsModule", data: { pageTitle: "Charts" } }
      // { path: "charts", component: ChartsModule, data: { pageTitle: "Charts" } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
