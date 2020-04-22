import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OreTableComponent } from './ore-table.component';

describe('OreTableComponent', () => {
  let component: OreTableComponent;
  let fixture: ComponentFixture<OreTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OreTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OreTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
