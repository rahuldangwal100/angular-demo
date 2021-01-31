import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdformsComponent } from './tdforms.component';

describe('TdformsComponent', () => {
  let component: TdformsComponent;
  let fixture: ComponentFixture<TdformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
