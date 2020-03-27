import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { add } from '../../store/links.actions';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.css']
})
export class AddLinkComponent implements OnInit {
  checkoutForm: FormGroup;

  constructor(private store: Store) {}

  ngOnInit(): void {
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

    this.checkoutForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required
      ]),
      url: new FormControl(null, [
        Validators.required,
        Validators.pattern(reg)
      ]),
      description: new FormControl(null, [
        Validators.required
      ]),
    });
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.store.dispatch(add(form.value));
      this.checkoutForm.reset();
    } else {
      console.warn('form invalid');
    }
  }

}
