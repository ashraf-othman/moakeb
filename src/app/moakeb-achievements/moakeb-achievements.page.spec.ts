import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoakebAchievementsPage } from './moakeb-achievements.page';

describe('MoakebAchievementsPage', () => {
  let component: MoakebAchievementsPage;
  let fixture: ComponentFixture<MoakebAchievementsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoakebAchievementsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoakebAchievementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
