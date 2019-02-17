import * as constonts from './constonts';

export const inputFocusAction = () => {
  return ({
    type: constonts.SEARCH_FOCUS
  })
};

export const inputBlurAction = () => {
  return ({
    type: constonts.SEARCH_BLUR
  })
};