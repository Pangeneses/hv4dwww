import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hv4dwwwComponent } from '../hv4dgridview';

describe('Hv4dwwwComponent', () => {
  let component: Hv4dwwwComponent;
  let fixture: ComponentFixture<Hv4dwwwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hv4dwwwComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hv4dwwwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
