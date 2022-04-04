import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoyerSearchComponent } from './boyer-search.component';

describe('BoyerSearchComponent', () => {
  let component: BoyerSearchComponent;
  let fixture: ComponentFixture<BoyerSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoyerSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoyerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
