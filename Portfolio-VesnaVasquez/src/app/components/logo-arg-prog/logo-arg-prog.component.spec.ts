import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoArgProgComponent } from './logo-arg-prog.component';

describe('LogoArgProgComponent', () => {
  let component: LogoArgProgComponent;
  let fixture: ComponentFixture<LogoArgProgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoArgProgComponent]
    });
    fixture = TestBed.createComponent(LogoArgProgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
