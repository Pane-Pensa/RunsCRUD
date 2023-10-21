import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RunesPage } from './runes.page';

describe('RunesPage', () => {
  let component: RunesPage;
  let fixture: ComponentFixture<RunesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RunesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
