/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import useCheckboxContext from '../../utils/useCheckboxContext';
import useRadioContext from '../../utils/useRadioContext';
import useToggleContext from '../../utils/useToggleContext';
import {
  StyledTextMessage,
  StyledCheckMessage,
  StyledRadioMessage,
  StyledToggleMessage
} from '../../styled';

const VALIDATION = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error'
};

/**
 * Accepts all native `<div />` props
 */
function Message(props) {
  const checkboxCtx = useCheckboxContext();
  const radioCtx = useRadioContext();
  const toggleCtx = useToggleContext();

  let MessageComponent = StyledTextMessage;
  const sharedProps = {
    'data-garden-version': PACKAGE_VERSION
  };

  if (checkboxCtx) {
    MessageComponent = StyledCheckMessage;
    sharedProps['data-garden-id'] = 'forms.checkbox_message';
  } else if (radioCtx) {
    MessageComponent = StyledRadioMessage;
    sharedProps['data-garden-id'] = 'forms.radio_message';
  } else if (toggleCtx) {
    MessageComponent = StyledToggleMessage;
    sharedProps['data-garden-id'] = 'forms.toggle_message';
  } else {
    sharedProps['data-garden-id'] = 'forms.text_message';
  }

  return React.createElement(MessageComponent, {
    ...sharedProps,
    ...props
  });
}

Message.propTypes = {
  validation: PropTypes.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR])
};

export default Message;
