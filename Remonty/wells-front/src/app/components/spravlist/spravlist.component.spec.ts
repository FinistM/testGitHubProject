import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpravListComponent } from './spravlist.component';

describe('SpravListComponent', () => {
  let component: SpravListComponent;
  let fixture: ComponentFixture<SpravListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpravListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpravListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
