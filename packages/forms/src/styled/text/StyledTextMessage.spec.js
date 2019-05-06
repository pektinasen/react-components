/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import StyledTextMessage from './StyledTextMessage';

describe('StyledTextMessage', () => {
  it('renders default styling correctly', () => {
    const { container } = render(<StyledTextMessage />);

    expect(container.firstChild).toHaveClass('c-txt__message');
  });

  ['success', 'warning', 'error'].forEach(validation => {
    it(`renders ${validation} validation styling correctly`, () => {
      const { container } = render(<StyledTextMessage validation={validation} />);

      expect(container.firstChild).toHaveClass(`c-txt__message--${validation}`);
    });
  });

  it('renders RTL styling correctly', () => {
    const { container } = renderRtl(<StyledTextMessage />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });
});
