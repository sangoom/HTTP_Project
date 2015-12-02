'use strict';


var Tester = require('./modules/Tester');

var Testers = {
	'tester1': null,
	'tester2': null,
	'tester3': null,
	'tester4': null
};

$(document).ready(function() {
	for (var prop in Testers) {
		var $tester = $('#' + prop);

		Testers[prop] = new Tester($tester, $tester.attr('count'));
		Testers[prop].init();
	}
});