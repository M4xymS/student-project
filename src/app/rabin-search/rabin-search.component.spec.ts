import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RabinSearchComponent } from './rabin-search.component';

describe('RabinSearchComponent', () => {
  let component: RabinSearchComponent;
  let fixture: ComponentFixture<RabinSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RabinSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RabinSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
