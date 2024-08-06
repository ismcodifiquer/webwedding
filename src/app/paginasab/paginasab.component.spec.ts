import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginasabComponent } from './paginasab.component';

describe('PaginasabComponent', () => {
  let component: PaginasabComponent;
  let fixture: ComponentFixture<PaginasabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginasabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginasabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
