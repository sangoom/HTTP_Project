var _ = require('underscore');

var Timer = require('./Timer');

var INDEX_CONST = (function() {
	function _convertLeadingZero(number) {
	   	var zero = '';
        number = number.toString();
        if (number.length < 3) {
            for (var i = 0; i < 3 - number.length; i++) 
            	zero += '0';
        }
        return zero + number;
    }

	var _index = [];
	for (var idx=0; idx<100; idx++) {
		_index.push(_convertLeadingZero(idx));
	}
	return _index;
})();

var getImagesIndex = function(count) {
	var index = _.shuffle(INDEX_CONST);
	return index.slice(0, count);
};

var _Tester = (function() {

	function Tester(DOM, count) {
		this.DOM = DOM;
		this.count = count;

		this.loadedBox = this.DOM.find('[tester-attr=loaded-box]');
		this.startBtn = this.DOM.find('[tester-attr=start-btn]');
		this.resultShow = this.DOM.find('[tester-attr=result-show]');

		this.mockUp = this.DOM.find('label');

		this.timer = new Timer();
	}

	Tester.prototype.init = function() {
		var imgItemLoaded = function(imgLoad, img) {
			var $item = $(img.img).parent();
			$item.removeClass('is-loading');
		};

		var imgAllLoadedEnd = function() {
			this.timer.endTimer();
			var timeSpend = this.timer.calcTime();

			this.resultShow.text('시간(ms): ' + timeSpend);
			this.startBtn.removeClass('loading').addClass('end').text('종료');
		};

		this.startBtn.on('click', function() {
			this.mockUp.remove();
			this.timer.startTimer();
			this.startBtn.removeClass('shadow').addClass('loading').text('불러오는 중...');

			var imgsToLoad = (function(index) {
				return _.map(index, function(id) {
					return 'img' + id + '.jpg';
				});
			})(getImagesIndex(this.count));

			for (var idx=0; idx<this.count; idx++) {
				var item = '<span class="is-loading"><img src="'
							+ imgsToLoad[idx] + '" /></span>';
				this.loadedBox.prepend($(item));
			}

			this.loadedBox.imagesLoaded()
				.progress(imgItemLoaded)
				.always(imgAllLoadedEnd.bind(this));

			this.startBtn.off('click');
		}.bind(this));
	};

	return Tester;
})();

module.exports = _Tester;

