import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ContactDetailPage } from './contact-detail.page';

describe('ContactDetailPage', () => {
  let component: ContactDetailPage;
  let fixture: ComponentFixture<ContactDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactDetailPage],
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(ContactDetailPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
