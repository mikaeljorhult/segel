'use strict';

import Cast from "../helpers/cast";

const Store = {
    time: {
        current: '',
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