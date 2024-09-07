import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import { RouterLink } from '@angular/router';

// add item page will be reactive form
@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.scss'
})
export class AddItemComponent {
  itemForm = this.formBuilder.group({
    name: ['']
  })

  constructor(private formBuilder: FormBuilder) {
  }

  onSubmit() {
    // TODO: call api to add new item
    console.log(this.itemForm.value);
  }
}
