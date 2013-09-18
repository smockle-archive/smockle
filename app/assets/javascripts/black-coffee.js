/*global HTMLElement: true */

/* CSS
 * Sets CSS properties using JSON.
 *
 * Usage: element.css({ property: value });
 */
if (!HTMLElement.prototype.css) {
	HTMLElement.prototype.css = function (properties) {
        "use strict";
        
        var p;
        
		for (p in properties) {
            if (properties.hasOwnProperty(p)) {
                this.style[p] = properties[p];
            }
		}
        
		return this;
	};
}