import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoedasListagemComponent } from './moedas-listagem.component';

describe('MoedasListagemComponent', () => {
  let component: MoedasListagemComponent;
  let fixture: ComponentFixture<MoedasListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoedasListagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoedasListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
