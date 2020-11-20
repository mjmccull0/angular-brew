import { Component, Input } from '@angular/core';

@Component({
  selector: 'beer-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() title: string;
  @Input() description: string;
  @Input() imageAlt: string;
  @Input() imageSrc: string;
  @Input() href: string;

}
