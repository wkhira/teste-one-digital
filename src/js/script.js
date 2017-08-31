$(function () {
	menuResponsivo();
});

function menuResponsivo() {
	var abrir = $(".menu-abrir");
	var fechar = $(".menu-fechar");
	var doc = $(document.documentElement);
	abrir.click(function () {
		doc.addClass("menu-ativo");
	});
	doc.click(function (event) {
		if (event.target === document.documentElement) {
			doc.removeClass("menu-ativo");
		}
	});
}

