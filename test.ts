/* eslint-disable no-magic-numbers */
import upTo from "./index.ts";

test(() => {
  expect(upTo(5)).toEqual([1, 2, 3, 4, 5]);
});
