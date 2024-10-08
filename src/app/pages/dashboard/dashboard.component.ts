import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item-service/item.service';
import { Item } from '../../models/item';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  items: Item[] = [];
  item: Item | undefined;
  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe({
      next: (items) => {
        this.items = items;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }
}
