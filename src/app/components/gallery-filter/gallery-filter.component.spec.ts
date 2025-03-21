import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryFilterComponent } from './gallery-filter.component';

describe('GalleryFilterComponent', () => {
  let component: GalleryFilterComponent;
  let fixture: ComponentFixture<GalleryFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryFilterComponent]
    });
    fixture = TestBed.createComponent(GalleryFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
