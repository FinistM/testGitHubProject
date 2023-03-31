import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVidComponent } from './edit-vid.component';

describe('EditVidComponent', () => {
  let component: EditVidComponent;
  let fixture: ComponentFixture<EditVidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditVidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
