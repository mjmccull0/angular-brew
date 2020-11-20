import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedBeerComponent } from './related-beer.component';

describe('RelatedBeerComponent', () => {
  let component: RelatedBeerComponent;
  let fixture: ComponentFixture<RelatedBeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedBeerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
