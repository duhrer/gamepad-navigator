/*
Copyright (c) 2023 The Gamepad Navigator Authors
See the AUTHORS.md file at the top-level directory of this distribution and at
https://github.com/fluid-lab/gamepad-navigator/raw/main/AUTHORS.md.

Licensed under the BSD 3-Clause License. You may not use this file except in
compliance with this License.

You may obtain a copy of the BSD 3-Clause License at
https://github.com/fluid-lab/gamepad-navigator/blob/main/LICENSE
*/
/* eslint-env node */
"use strict";
var fluid = require("infusion");

// Register our content so that it can be referenced in other packages using `fluid.module.resolvePath("%gamepad-navigator/path/to/content")`
fluid.module.register("gamepad-navigator", __dirname, require);
