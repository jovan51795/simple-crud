import { TestBed } from '@angular/core/testing';

import { BlogRoutingResolver } from './blog-routing.resolver';

describe('BlogRoutingResolver', () => {
  let resolver: BlogRoutingResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(BlogRoutingResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
