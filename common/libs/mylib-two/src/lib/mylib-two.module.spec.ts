import { async, TestBed } from '@angular/core/testing';
import { MylibTwoModule } from './mylib-two.module';

describe('MylibTwoModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MylibTwoModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MylibTwoModule).toBeDefined();
  });
});
