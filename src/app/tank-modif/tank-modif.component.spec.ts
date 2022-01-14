import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TankModifComponent } from './tank-modif.component';

describe('TankModifComponent', () => {
  let component: TankModifComponent;
  let fixture: ComponentFixture<TankModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TankModifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TankModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
