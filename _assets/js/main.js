//= require vendor/jquery.min.js
//= require vendor/bootstrap.min.js


(function () {
	const primaryMenu = document.getElementById('primary-menu');

	function setMenuKind() {
		if (window.innerWidth < 768) {
			primaryMenu.classList.remove('primary-menu');
		} else {
			primaryMenu.classList.add('primary-menu');
		}
	}

	setMenuKind();
	window.addEventListener("resize", setMenuKind);

	(function () {
		const yearCounter = document.getElementById('year-counter');
		const yearHolder = document.getElementById('year-holder');
		// Hacky, but we'll deal for now
		if (yearCounter === null) {
			return;
		}
		const yearsOnTeam = new Date().getFullYear() - Number.parseInt(yearCounter.dataset.years);
		yearCounter.innerText = `${yearsOnTeam}`;
		yearHolder.innerText =  `Year${yearsOnTeam === 1 ? '' : 's'} on WUMT`;
	})()
})();