function StopWatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function() {
        if (running)
            throw new Error('StopWatch has already started.');
        running = true;
        startTime = new Date();
    };

    this.stop = function() {
        if (!running)
            throw new Error('Stop is not started.');
        running = false;
        endTime = new Date();

        const secconds = (endTime.getTime() - startTime.getTime()) / 100;
        duration += secconds;
    };

    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function() { return duration; }
    });
}

const sw = new StopWatch();