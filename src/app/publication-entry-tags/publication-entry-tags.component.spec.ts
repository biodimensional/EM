import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationEntryTagsComponent } from './publication-entry-tags.component';

describe('PublicationEntryTagsComponent', () => {
  let component: PublicationEntryTagsComponent;
  let fixture: ComponentFixture<PublicationEntryTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationEntryTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationEntryTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
