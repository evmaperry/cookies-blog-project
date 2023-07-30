var chrome = require('chrome-cookies-secure');

chrome.getCookies('https://theguardian.com', 'set-cookie', function (err, cookies) {

	if (err) {
		console.error(err);
		return;
	}

	console.log(cookies);

});