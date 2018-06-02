'use strict';

import Cast from "../helpers/cast";

const Store = {
    time: {
        start: Cast.date(new Date().setHours(0, 0, 0, 0)),
        end: Cast.date(new Date().setHours(24, 0, 0, 0)),
        duration: function () {
            return this.end - this.start;
        },
        steps: 48,
        current: null,
        tick: function () {
            this.current = Cast.date(new Date());
        }
    }
};

// Start timer that ticks every second.
(function timer () {
    Store.time.tick();
    setTimeout(timer, 1000);
})();

// Return the instance.
export default Store;