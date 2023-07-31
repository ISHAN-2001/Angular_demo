import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponentComponent } from './heroes-component.component';

describe('HeroesComponentComponent', () => {
  let component: HeroesComponentComponent;
  let fixture: ComponentFixture<HeroesComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesComponentComponent]
    });
    fixture = TestBed.createComponent(HeroesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
