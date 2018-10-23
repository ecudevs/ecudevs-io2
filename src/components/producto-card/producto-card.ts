import { Component } from '@angular/core';

/**
 * Generated class for the ProductoCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'producto-card',
  templateUrl: 'producto-card.html'
})
export class ProductoCardComponent {

  text: string;

  constructor() {
    console.log('Hello ProductoCardComponent Component');
    this.text = 'Hello World';
  }

}
