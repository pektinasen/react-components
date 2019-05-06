/* eslint-disable no-console */
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import FieldProvider from '../fields/common/FieldProvider';
import useFieldContext from '../utils/useFieldContext';

describe('useFieldContext', () => {
  const FieldContextConsumer = () => {
    const context = useFieldContext();

    return <div>{context && 'it worked'}</div>;
  };

  it('throws if called outside of FieldProvider component', () => {
    const originalError = console.error;

    console.error = jest.fn();

    const Example = () => <FieldContextConsumer />;

    expect(() => {
      render(<Example />);
    }).toThrow();

    console.error = originalError;
  });

  it('does not throw if called within FieldProvider component', () => {
    const Example = () => (
      <FieldProvider>
        <FieldContextConsumer />
      </FieldProvider>
    );

    expect(() => {
      render(<Example />);
    }).not.toThrow();
  });
});
