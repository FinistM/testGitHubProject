import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVidComponent } from './add-vid.component';

describe('AddVidComponent', () => {
  let component: AddVidComponent;
  let fixture: ComponentFixture<AddVidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
