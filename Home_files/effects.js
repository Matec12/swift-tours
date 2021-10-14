/*--------------------------------------------------------------
# Copyright (C) joomla-monster.com
# License: http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 only
# Website: http://www.joomla-monster.com
# Support: info@joomla-monster.com
---------------------------------------------------------------*/

//effects
function addEffect(e) {
	var moduleTarget = jQuery(e).hasClass("animate-ms");
	if (moduleTarget) {
		var ojectPosition = jQuery(e).offset().top;
		var scrollWindow = jQuery(window).scrollTop();
		var screenHeight = jQuery(window).height();
		if (ojectPosition < (scrollWindow + screenHeight)) {
			jQuery(e).addClass("jm-slideIn");
		}
	}
};

jQuery(window).load(function() {
  addEffect('.promo1-ms');
	addEffect('.promo2-ms');
	addEffect('.promo3-ms');
	addEffect('.promo4-ms');
});

jQuery(window).scroll(function() {
	addEffect('.promo1-ms');
	addEffect('.promo2-ms');
	addEffect('.promo3-ms');
	addEffect('.promo4-ms');
});