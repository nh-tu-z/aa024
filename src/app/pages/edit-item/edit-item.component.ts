import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../../services/item-service/item.service';
import {FormBuilder} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-edit-item',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './edit-item.component.html',
  styleUrl: './edit-item.component.scss'
})
export class EditItemComponent implements OnInit {
  itemForm = this.formBuilder.group({
    name: ['']
  })

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {
    const itemId = this.route.snapshot.paramMap.get('id');
    this.itemService.getItem(itemId ?? "").subscribe({
      next: (item) => {
        this.itemForm.setValue({
          name: item.name
        })
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  onSubmit() {
    console.log("submit");
  }
}
