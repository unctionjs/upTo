/* eslint-disable no-magic-numbers */
import {test} from "tap"

import upTo from "./index"

test(({same, end}) => {
  same(upTo(5), [1, 2, 3, 4, 5])
  end()
})
