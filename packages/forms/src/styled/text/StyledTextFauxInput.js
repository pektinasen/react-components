/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import VALIDATION from '../../utils/validation';
import StyledTextInput from './StyledTextInput';

const StyledTextFauxInput = StyledTextInput.withComponent('div');

StyledTextFauxInput.displayName = 'StyledTextFauxInput';

StyledTextFauxInput.propTypes = {
  /** Allows flush spacing of Tab elements */
  tagLayout: PropTypes.bool,
  /** Applies flex layout to support MediaFigure components */
  mediaLayout: PropTypes.bool,
  small: PropTypes.bool,
  /** Applies select styling */
  select: PropTypes.bool,
  /** Removes all borders and styling */
  bare: PropTypes.bool,
  disabled: PropTypes.bool,
  focused: PropTypes.bool,
  /** Applies inset `box-shadow` styling on focus */
  focusInset: PropTypes.bool,
  hovered: PropTypes.bool,
  /** Displays select open state */
  open: PropTypes.bool,
  validation: PropTypes.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR])
};

export default StyledTextFauxInput;
