import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LayoutComponent } from "libs/pages/src/lib/layout/layout.component";

const routes: Routes = [
    { path: 'login', component: LayoutComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule { }