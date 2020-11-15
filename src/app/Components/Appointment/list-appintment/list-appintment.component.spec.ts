import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAppintmentComponent } from './list-appintment.component';

describe('ListAppintmentComponent', () => {
  let component: ListAppintmentComponent;
  let fixture: ComponentFixture<ListAppintmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAppintmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAppintmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
