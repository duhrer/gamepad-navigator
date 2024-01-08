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
var gamepad  = fluid.registerNamespace("gamepad");

require("../");
require("fluid-testem");

fluid.defaults("gamepad.tests.testem", {
    gradeNames: ["fluid.testem"],

    cwd: "%gamepad-navigator",
    coverageDir: "%gamepad-navigator/coverage",
    reportsDir: "%gamepad-navigator/reports",
    instrumentedSourceDir: "%gamepad-navigator/instrumented",

    sourceDirs: {
        src: "%gamepad-navigator/src"
    },
    contentDirs: {
        tests:   "%gamepad-navigator/tests",
        node_modules: "%gamepad-navigator/node_modules"
    },
    testPages:  [
        "../tests/all-tests.html"
    ],
    testemOptions: {
        launch: "Chrome"
    }
});

module.exports = gamepad.tests.testem().getTestemOptions();
