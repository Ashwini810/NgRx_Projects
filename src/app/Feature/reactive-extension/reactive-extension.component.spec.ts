import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveExtensionComponent } from './reactive-extension.component';

describe('ReactiveExtensionComponent', () => {
  let component: ReactiveExtensionComponent;
  let fixture: ComponentFixture<ReactiveExtensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveExtensionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveExtensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
