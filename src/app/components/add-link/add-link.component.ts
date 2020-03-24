import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { add } from '../../store/links.actions';
import { FormBuilder } from '@angular/forms';
import { Link } from 'src/app/store/links.reducer';

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.scss']
})
export class AddLinkComponent {
  checkoutForm;

  emptyForm: Link = {
    name: '',
    url: '',
    description: ''
  };

  constructor(private store: Store, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group(this.emptyForm);
  }

  onSubmit(data: Link) {
    this.checkoutForm.reset();

    this.store.dispatch(add(data));
  }

}
