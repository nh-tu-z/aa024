import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import FullScreen from 'ol/control/FullScreen';
import olms from 'ol-mapbox-style';
import {transform} from 'ol/proj';

@Component({
  selector: 'app-my-map',
  standalone: true,
  templateUrl: './my-map.component.html',
  styleUrls: ['./my-map.component.scss']
})
export class MyMapComponent implements OnInit {
  map: Map = {} as Map;


  constructor() {
    // this.map = new Map({
    //   view: new View({
    //     center: [0, 0],
    //     zoom: 1,
    //   }),
    //   layers: [
    //     new TileLayer({
    //       source: new OSM(),
    //     }),
    //   ],
    //   target: 'ol-map'
    // });
  }

  ngOnInit(): void {
    this.map = new Map({
      view: new View({
        center: [0, 0],
        zoom: 1,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'ol-map'
    });
  }
}
