import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IAppState } from './ngrx/app.state';
import { Store } from '@ngrx/store';
import { IInitialTutorialsState } from './ngrx/tutorial.reducer';
import { Tutorial } from './ngrx/Tutorial';
import { RemoveTutorial } from './ngrx/tutorial.action';
@Component({
    selector: 'app-read',
    templateUrl: './read.component.html',
})
export class ReadComponent implements OnInit {

    tutorialsObservable: Observable<IInitialTutorialsState>;
    tutorials: Tutorial[] = [];

    constructor(private store: Store<IAppState>) {
        this.tutorialsObservable = store.select('tutorials');
        this.tutorialsObservable.subscribe((data) => {
            this.tutorials = data.data;
        });
    }
    removeTutorial(id: number) {
        this.store.dispatch(new RemoveTutorial(id))
    }

    ngOnInit(): void {
        console.log(this.tutorials);
    }

}