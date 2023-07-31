import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/hero';
import { HeroService } from 'src/app/hero.service';
import { Location } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  @Input() selectedHero :Hero | undefined;

  constructor(
    private route:ActivatedRoute,
    private heroService:HeroService,
    private location:Location
  ){}

  ngOnInit(){
    this.getHeroById();
  }

  getHeroById(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHeroById(id).subscribe(h=> this.selectedHero= h);
  }

  goBack(){
    this.location.back();
  }

  updateHero(selectedHero:Hero){
    this.heroService.updateHero(selectedHero).subscribe(h=> this.selectedHero=h);
    this.goBack();
  }

}
