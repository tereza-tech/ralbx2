import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../../../../libs/pages/src/lib/layout/layout.component'

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [{ path: '', loadChildren: '../../../../libs/pages/src/pages.module' }]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }