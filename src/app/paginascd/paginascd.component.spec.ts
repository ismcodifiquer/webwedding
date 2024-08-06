import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginascdComponent } from './paginascd.component';

describe('PaginascdComponent', () => {
  let component: PaginascdComponent;
  let fixture: ComponentFixture<PaginascdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginascdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginascdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
