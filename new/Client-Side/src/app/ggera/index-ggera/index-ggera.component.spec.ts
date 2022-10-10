import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexGgeraComponent } from './index-ggera.component';

describe('IndexGgeraComponent', () => {
  let component: IndexGgeraComponent;
  let fixture: ComponentFixture<IndexGgeraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexGgeraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexGgeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
