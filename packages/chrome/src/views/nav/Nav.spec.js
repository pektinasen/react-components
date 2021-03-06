/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import Nav from './Nav';

describe('Nav', () => {
  it('renders default styling', () => {
    const { container } = render(<Nav />);

    expect(container.firstChild).toHaveClass('c-chrome__nav');
  });

  it('renders expanded styling if provided', () => {
    const { container } = render(<Nav expanded />);

    expect(container.firstChild).toHaveClass('c-chrome__nav--expanded');
  });

  it('renders dark styling if provided', () => {
    const { container } = render(<Nav dark />);

    expect(container.firstChild).toHaveClass('c-chrome__nav--dark');
  });

  it('renders light styling if provided', () => {
    const { container } = render(<Nav light />);

    expect(container.firstChild).toHaveClass('c-chrome__nav--light');
  });
});
