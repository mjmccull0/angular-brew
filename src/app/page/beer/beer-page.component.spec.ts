import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerPage } from './beer-page.component';

describe('BeerPage', () => {
  let component: BeerPage;
  let fixture: ComponentFixture<BeerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
