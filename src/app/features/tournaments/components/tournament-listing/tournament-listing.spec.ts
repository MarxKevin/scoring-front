import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentListing } from './tournament-listing';

describe('TournamentListing', () => {
  let component: TournamentListing;
  let fixture: ComponentFixture<TournamentListing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TournamentListing],
    }).compileComponents();

    fixture = TestBed.createComponent(TournamentListing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
