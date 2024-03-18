import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcompyyyComponent } from './newcompyyy.component';

describe('NewcompyyyComponent', () => {
  let component: NewcompyyyComponent;
  let fixture: ComponentFixture<NewcompyyyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewcompyyyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewcompyyyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
