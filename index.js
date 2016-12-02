'use strict';

var templateReg = /(template\t*\:[\s]*)\`([\s\S]*?)\`/g;
var templateUrlReg = /(templateUrl\t*\:\s*)[\"\'\`]{1}([\s\S]*?)[\"\'\`]{1}/g;
var stringRegex = /(['"])((?:[^\\]\\\1|.)*?)\1/g;
var lastReg = /\`([\s\S]*?)\`/g;

var fs = require('fs');

function getConent(string) {
	var url = string.replace(stringRegex, function (match, quote, url) {
	    if (url.charAt(0) !== ".") {
	      url = "../.." + url;
	    }
	   	return url;
  	});
  	url =  string;
  	try{
  		var content = fs.readFileSync(url);
  		return content;
  	} catch(e) {
  		console.log(e);
  	}
  	return "";
}

module.exports = function(source) {
	var newSource = source.replace(templateReg, function(a,b,c) {
		return `${b} function() \{ return ${c} \}`;
	}).replace(templateUrlReg, function(a,b,c) {
		return "template: " + getConent(c);
	}).replace(lastReg, function(a,b) {
		return b;
	});

	return newSource;
}