import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumNewComponent } from './museum-new.component';

describe('MuseumNewComponent', () => {
  let component: MuseumNewComponent;
  let fixture: ComponentFixture<MuseumNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuseumNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
