var _Timer = (function() {
	function Timer() {
		this.now = undefined;
		this.end = undefined;
	}

	Timer.prototype.startTimer = function() {
		this.now = new Date();
	};

	Timer.prototype.endTimer = function() {
		this.end = new Date();
	};

	Timer.prototype.calcTime = function() {
		if (this.now == undefined) {
			console.log("You have to start Timer!");
			return;
		}
		if (this.end == undefined) {
			console.log("You have to end Timer!");
			return;
		}

		return (this.end - this.now);
	};

	return Timer;
})();

module.exports = _Timer;