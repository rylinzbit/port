# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
var setSkrollr = function($el, data) {
		    for (var i = 0, l = data.length; i < l; i++) {
		        var d = data[i],
		            p = d[0];
		            css = d[1];
		            // requestAnimationFrame(loop);
		        $el.attr('data-' + p, css);
		    }
		}
		jQuery(function($) {
		    // setSkrollr($('#left_side'), [[0, 'transform:translateX(0%)'], [500, 'transform:translateX(-75%)']]);
		    // setSkrollr($('#right_side'), [[0, 'transform:translateX(0%)'], [500, 'transform:translateX(100%)']]);
		    // setSkrollr($('#about'), [[170, 'transform:translate(-100%)'], [520, 'transform:translate(370%)']]);
		    // setSkrollr($('#projects'), [[190, 'transform:translateX(-100%)'], [540, 'transform:translateX(370%)']]);
    		// setSkrollr($('#contact'), [[210, 'transform:translateX(-100%)'], [560, 'transform:translateX(370%)']]);
    		// setSkrollr($('#greeting'), [[140, 'transform:translateX(300%)'], [500, 'transform:translateX(65%)']]);
    		// setSkrollr($('#photo_me'), [[140, 'transform:translateY(370%)'], [400, 'transform:translateY(355%)']]);

			// skrollr.init({
		 //        smoothScrolling: false
		 //    });
		});