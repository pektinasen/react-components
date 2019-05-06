/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import StyledTextHint from './StyledTextHint';

describe('StyledTextHint', () => {
  it('renders default styling correctly', () => {
    const { container } = render(<StyledTextHint />);

    expect(container.firstChild).toHaveClass('c-txt__hint');
  });

  it('renders small styling correctly', () => {
    const { container } = render(<StyledTextHint small />);

    expect(container.firstChild).toHaveClass('c-txt__hint--sm');
  });

  it('renders RTL styling correctly', () => {
    const { container } = renderRtl(<StyledTextHint />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });
});
