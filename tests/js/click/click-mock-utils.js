/*
Copyright (c) 2023 The Gamepad Navigator Authors
See the AUTHORS.md file at the top-level directory of this distribution and at
https://github.com/fluid-lab/gamepad-navigator/raw/master/AUTHORS.md.

Licensed under the BSD 3-Clause License. You may not use this file except in
compliance with this License.

You may obtain a copy of the BSD 3-Clause License at
https://github.com/fluid-lab/gamepad-navigator/blob/master/LICENSE
*/

(function (fluid) {
    "use strict";

    // Custom gamepad navigator component grade for simple click tests.
    fluid.defaults("gamepad.tests.click.inputMapper", {
        gradeNames: ["gamepad.inputMapper.base"],
        windowObject: window,
        model: {
            bindings: {
                buttons: {
                    0: { action: "click" }
                }
            }
        }
    });
})(fluid);
