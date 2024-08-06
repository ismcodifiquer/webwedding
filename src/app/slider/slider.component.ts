import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'

})
export class SliderComponent implements OnInit{



  constructor() { }

  ngOnInit(): void {

  }
}
