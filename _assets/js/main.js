// require jquery
//= require bootstrap.min


(function () {
	var primaryMenu = document.getElementById('primary-menu');
	var setMenuKind = function  () {
		if (window.innerWidth < 768) {
			primaryMenu.classList.remove('primary-menu');
		} else {
			primaryMenu.classList.add('primary-menu');
		}
	};

	setMenuKind();
	window.addEventListener("resize", setMenuKind);
})();