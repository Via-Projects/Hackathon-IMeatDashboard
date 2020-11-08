import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPrefferedDataComponent } from './user-preffered-data.component';

describe('UserPrefferedDataComponent', () => {
  let component: UserPrefferedDataComponent;
  let fixture: ComponentFixture<UserPrefferedDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPrefferedDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPrefferedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
