import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatablefilterComponent } from './datatablefilter.component';

describe('DatatablefilterComponent', () => {
  let component: DatatablefilterComponent;
  let fixture: ComponentFixture<DatatablefilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatablefilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatablefilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
