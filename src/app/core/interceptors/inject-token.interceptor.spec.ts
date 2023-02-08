import { TestBed } from '@angular/core/testing';

import { InjectTokenInterceptor } from './inject-token.interceptor';

describe('InjectTokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InjectTokenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InjectTokenInterceptor = TestBed.inject(InjectTokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
