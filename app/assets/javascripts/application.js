// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

/* Add Class
 * Implements Add Class for HTMLElements.
 */
if (!HTMLElement.prototype.addClass) {
	HTMLElement.prototype.addClass = function(className) {
		this.className = this.className + " " + className;
		return this;
	};
}

/* Remove Class
 * Implements Remove Class for HTMLElements.
 */
if (!HTMLElement.prototype.removeClass) {
	HTMLElement.prototype.removeClass = function(className) {
		this.className = this.className.replace(new RegExp("(\\s|^)" + className + "(\\s|$)"), "");
		return this;
	};
}

/* Add Class
 * Implements Add Class for NodeLists.
 */
if (!NodeList.prototype.addClass) {
	NodeList.prototype.addClass = function(className) {
		for (var i = 0; i < this.length; i++) {
			this[i].addClass(className);
		}
		return this;
	};
}

/* Remove Class
 * Implements Remove Class for NodeLists.
 */
if (!NodeList.prototype.removeClass) {
	NodeList.prototype.removeClass = function(className) {
		for (var i = 0; i < this.length; i++) {
			this[i].removeClass(className);
		}
		return this;
	};
}

/* Add Event Listener
 * Implements Add Event Listner for NodeLists.
 */
if (!NodeList.prototype.addEventListener) {
	NodeList.prototype.addEventListener = function(event, callback) {
		for (var i = 0; i < this.length; i++) {
			this[i].addEventListener(event, callback);
		}
		return this;
	};
}

function nav(e) {
	e.preventDefault();
	var foo = document.querySelectorAll("nav a");
	foo.removeClass("active");
	e.target.addClass("active");
	var selector = e.target.href.substring(e.target.href.indexOf("#"));
	var section = document.querySelector(selector).offsetTop;
	var header = document.querySelector("header").scrollHeight;
	var offset = section - header > 0 ? section - header : 0

    var start = self.pageYOffset;
    var stop = offset;
    var distance = stop > start ? stop - start : start - stop;
	
	// Jump
    if (distance < 100) {
        scrollTo(0, stop); return;
    }
	
    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
	speed *= 2;
    var step = Math.round(distance / 25);
    var leap = stop > start ? start + step : start - step;
    var timer = 0;
	
	// Scroll Down
    if (stop > start) {
        for (var i = start; i < stop; i += step) {
            setTimeout("window.scrollTo(0, " + leap + ")", timer * speed);
            leap += step; if (leap > stop) leap = stop; timer++;
        } return;
    }
	
	// Scroll Up
    for (var i = start; i > stop; i -= step) {
        setTimeout("window.scrollTo(0, " + leap + ")", timer * speed);
        leap -= step; if (leap < stop) leap = stop; timer++;
    }
}

function ready(event) {
	document.querySelectorAll("nav a").addEventListener("click", nav);
	document.querySelector("footer .year").innerHTML = new Date().getFullYear();
    window.removeEventListener("DOMContentLoaded", ready);
}

window.addEventListener("DOMContentLoaded", ready);
