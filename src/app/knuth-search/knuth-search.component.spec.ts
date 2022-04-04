import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnuthSearchComponent } from './knuth-search.component';

describe('KnuthSearchComponent', () => {
  let component: KnuthSearchComponent;
  let fixture: ComponentFixture<KnuthSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnuthSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnuthSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
