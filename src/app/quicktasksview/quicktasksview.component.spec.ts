import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuicktasksviewComponent } from './quicktasksview.component';

describe('QuicktasksviewComponent', () => {
  let component: QuicktasksviewComponent;
  let fixture: ComponentFixture<QuicktasksviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuicktasksviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuicktasksviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
