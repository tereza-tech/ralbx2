import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ElementRef,
} from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AddTutorial } from './ngrx/tutorial.action'

@Component({
  selector: 'ralbx2-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  name = new UntypedFormControl('', [Validators.required, Validators.minLength(5)]);
  imageUrl = new UntypedFormControl('', [
    Validators.required,
    Validators.minLength(13),
  ]);
  url = new UntypedFormControl('', [Validators.required, Validators.minLength(13)]);
  description = new UntypedFormControl('', [Validators.required, Validators.minLength(20)]);

  @Output()
  closeModalEvent = new EventEmitter();

  constructor(private elementRef: ElementRef, private store: Store) { }

  ngOnInit(): void { }
  ngOnDestroy() { }

  createTutorial() {
    this.store.dispatch(
      new AddTutorial({
        description: this.description.value,
        imageUrl: this.imageUrl.value,
        name: this.name.value,
        url: this.url.value,

      })
    );
    this.name.setValue('');
    this.imageUrl.setValue('');
    this.url.setValue('');
    this.description.setValue('');
    this.triggerCloseModalEvent();
  }
  triggerCloseModalEvent() {
    this.closeModalEvent.emit();
  }
}