import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularListsComponent } from './angular-lists.component';

describe('AngularListsComponent', () => {
  let component: AngularListsComponent;
  let fixture: ComponentFixture<AngularListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularListsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
