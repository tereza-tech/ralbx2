import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: '',
                    children: [
                        { path: '', redirectTo: 'home', pathMatch: 'full' },
                        {
                            path: 'home',
                            loadChildren: () =>
                                import('../../../../libs/pages/src/lib/pages.module').then(
                                    ({ PagesModule }) => PagesModule
                                ),
                        },
                    ],
                },
            ],
            {
                initialNavigation: 'enabledBlocking',

                anchorScrolling: 'enabled',
                paramsInheritanceStrategy: 'always',
                // scrollPositionRestoration: 'top',
                // elativeLinkResolution: 'legacy',
                scrollPositionRestoration: 'disabled',
                //paramsInheritanceStrategy: 'always',
                //onSameUrlNavigation: 'reload'
                relativeLinkResolution: 'corrected',
            }
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }
