import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditorProductoPage } from './editor-producto.page';

describe('EditorProductoPage', () => {
  let component: EditorProductoPage;
  let fixture: ComponentFixture<EditorProductoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorProductoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditorProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
