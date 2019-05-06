/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import Textarea from './Textarea';
import FieldProvider from './common/FieldProvider';
import Label from './common/Label';

describe('Textarea', () => {
  it('is rendered as a textarea', () => {
    const { getByTestId } = render(
      <FieldProvider>
        <Textarea data-test-id="textarea" />
      </FieldProvider>
    );

    expect(getByTestId('textarea').nodeName).toBe('TEXTAREA');
  });

  it('receives correct accessibility attributes', () => {
    const { getByTestId } = render(
      <FieldProvider>
        <Label data-test-id="label">Label</Label>
        <Textarea data-test-id="textarea" />
      </FieldProvider>
    );

    const labelNode = getByTestId('label');
    const labelId = labelNode.getAttribute('id');
    const labelFor = labelNode.getAttribute('for');

    const textareaNode = getByTestId('textarea');
    const textareaId = textareaNode.getAttribute('id');
    const textareaLabeledBy = textareaNode.getAttribute('aria-labelledby');

    expect(labelId).toBe(textareaLabeledBy);
    expect(labelFor).toBe(textareaId);
  });
});
