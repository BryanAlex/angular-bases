import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public supername: string = 'Ironman';
  public name     : string = 'Tony Stark';
  public age      : number = 45;

  get capitalizedName():string {
    return this.supername.toUpperCase();
  }

  getHeroDescription():string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero():void {
    this.supername = 'Spiderman';
    this.name = 'Peter Parker';
  }

  changeAge():number {
    return this.age = 25;
  }

  resetForm():void {
    this.supername = 'Ironman';
    this.age = 45;
  }

}
