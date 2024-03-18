import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "about",
    loadChildren: () => import("./components/about/about.module")
  },
  {
    path: "mantenimiento-jardines",
    loadChildren: () => import("./components/garden/garden.module")
  },
  {
    path: "mantenimiento-piscinas",
    loadChildren: () => import("./components/pool/pool.module")
  },
  {
    path: "paisajismo-jardines",
    loadChildren: () => import("./components/desing-garden/design-garden.module")
  },
  {
    path: "mantenimiento-jardines/:city",
    loadChildren: () => import("./components/garden/garden.module")
  },
  {
    path: "mantenimiento-piscinas/:city",
    loadChildren: () => import("./components/pool/pool.module")
  },
  {
    path: "paisajismo-jardines/:city",
    loadChildren: () => import("./components/desing-garden/design-garden.module")
  },
  
  {
    path: "contact",
    loadChildren: () => import("./components/contact/contact.module")
  },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabledBlocking"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
