var request = require('request');
var fs = require('fs');


var counting = (function() {
	var count = 0;
	
	function convertLeadingZero(number) {
	   var zero = '';
        number = number.toString();

        if (number.length < 3) {
            for (var i = 0; i < 3 - number.length; i++)
                zero += '0';
        }
        return zero + number;
    }

    return({
        getLeadingCount: function() {
            return convertLeadingZero(count++);
        },
        getCount: function() { return count; }
    });
})();


for (var idx=0; idx<100; idx++) {
    var write = fs.createWriteStream('img' + counting.getLeadingCount() + '.jpg');
          write
            .on('error', function(e) { console.log(e); })
            .on('pipe', function() { console.log(counting.getCount() + 'th Image Loaded!'); });

    request('http://lorempixel.com/600/480').pipe(write);
} 