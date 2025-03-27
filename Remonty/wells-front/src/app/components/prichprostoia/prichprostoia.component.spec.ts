import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrichprostoiaComponent } from './prichprostoia.component';

describe('PrichprostoiaComponent', () => {
  let component: PrichprostoiaComponent;
  let fixture: ComponentFixture<PrichprostoiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrichprostoiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrichprostoiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
