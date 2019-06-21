import * as constonts from "./constonts";

export const scrollToTop = (show) => ({
  type: constonts.SCROLL_TO_TOP,
  show
})