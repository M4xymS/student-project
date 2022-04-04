import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryTreeSearchComponent } from './binary-tree-search.component';

describe('BinaryTreeSearchComponent', () => {
  let component: BinaryTreeSearchComponent;
  let fixture: ComponentFixture<BinaryTreeSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinaryTreeSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BinaryTreeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
