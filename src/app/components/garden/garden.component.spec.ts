import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GardenComponent } from "./garden.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TranslocoRootModule } from "src/app/transloco-root.module";

describe("GardenComponent", () => {
  let component: GardenComponent;
  let fixture: ComponentFixture<GardenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GardenComponent],
      imports: [HttpClientTestingModule, TranslocoRootModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
