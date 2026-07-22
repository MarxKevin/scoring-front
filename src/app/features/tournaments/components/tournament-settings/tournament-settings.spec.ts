import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentSettings } from './tournament-settings';

describe('TournamentSettings', () => {
  let component: TournamentSettings;
  let fixture: ComponentFixture<TournamentSettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TournamentSettings],
    }).compileComponents();

    fixture = TestBed.createComponent(TournamentSettings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
