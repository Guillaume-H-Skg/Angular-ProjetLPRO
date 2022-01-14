import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumModifComponent } from './museum-modif.component';

describe('MuseumModifComponent', () => {
  let component: MuseumModifComponent;
  let fixture: ComponentFixture<MuseumModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuseumModifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
