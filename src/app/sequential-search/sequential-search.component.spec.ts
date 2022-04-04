import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SequentialSearchComponent } from './sequential-search.component';

describe('SequentialSearchComponent', () => {
  let component: SequentialSearchComponent;
  let fixture: ComponentFixture<SequentialSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SequentialSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SequentialSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
