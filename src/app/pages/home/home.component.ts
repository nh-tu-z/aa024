import { Component } from '@angular/core';
import { MyMapComponent } from '../../components/my-map/my-map.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MyMapComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
