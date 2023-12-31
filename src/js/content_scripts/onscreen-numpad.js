/*
Copyright (c) 2023 The Gamepad Navigator Authors
See the AUTHORS.md file at the top-level directory of this distribution and at
https://github.com/fluid-lab/gamepad-navigator/raw/main/AUTHORS.md.

Licensed under the BSD 3-Clause License. You may not use this file except in
compliance with this License.

You may obtain a copy of the BSD 3-Clause License at
https://github.com/fluid-lab/gamepad-navigator/blob/main/LICENSE
*/
(function (fluid) {
    "use strict";

    fluid.defaults("gamepad.numpad.modal", {
        gradeNames: ["gamepad.osk.modal"],
        model: {
            label: "Gamepad Navigator: Number Pad",
            classNames: " gamepad-navigator-numpad"
        },
        components: {
            osk: {
                type: "gamepad.osk.keyboard.numpad"
            }
        }
    });

})(fluid);
