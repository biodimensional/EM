import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsUniverseComponent } from './authors-universe.component';

describe('AuthorsUniverseComponent', () => {
  let component: AuthorsUniverseComponent;
  let fixture: ComponentFixture<AuthorsUniverseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsUniverseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
