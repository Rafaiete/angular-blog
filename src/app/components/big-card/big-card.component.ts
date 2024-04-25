import { Component, Input, input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  @Input()
  photoCover:string =""
  @Input()
  cardTitle:string =""
  @Input()
  cardDescription:string =""
  @Input()
  id:string="0"


  constructor(){}

  ngOnInit(): void {}

}
