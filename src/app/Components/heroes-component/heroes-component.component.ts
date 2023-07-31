import { Component } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HeroService } from 'src/app/hero.service';
import { MessageService } from 'src/app/message.service';
import { HEROES } from 'src/app/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes-component.component.html',
  styleUrls: ['./heroes-component.component.css']
})
export class HeroesComponentComponent {

  constructor(private HeroSerivice:HeroService,private messageService:MessageService){}

  hero:Hero={
    id:1,
    name:"sridhar"
  }

  heroArr: Hero[]=[];

  getHeroes():void{
    this.HeroSerivice.getHeroes().subscribe(heroes => this.heroArr = heroes);
  }

  ngOnInit():void{
    this.getHeroes();
  }

  addHero(name:string):void{

    const id = this.heroArr.length > 0 ? Math.max(...this.heroArr.map(hero => hero.id)) + 1 : 1;

    name = name.trim();

    if(!name) {return;}

    const newHero = {
      id:id,
      name:name
    }

    this.HeroSerivice.addHero(newHero).subscribe(hero => this.heroArr.push(hero));

  }

  deleteHero(hero:Hero){
    this.HeroSerivice.deleteHero(hero).subscribe();
    this.heroArr = this.heroArr.filter(h => h !== hero);
  }

}