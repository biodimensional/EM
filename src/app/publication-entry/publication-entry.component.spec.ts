import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationEntryComponent } from './publication-entry.component';

describe('PublicationEntryComponent', () => {
  let component: PublicationEntryComponent;
  let fixture: ComponentFixture<PublicationEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
