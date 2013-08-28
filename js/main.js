var gatunek, wys, pier, obw;
function wczytaj_dane() {
	gatunek = $("#gat").val();
	wys = $("#wys").val();
	pier = $("#pier").val();
	obw = $("#obw").val();
}

function sprawdz_dane() {
	if (pier == "" && obw == "") {
		$("#bez_piersnicy").fadeIn();
		return false
	}
	if (wys < 1.3 && wys != "") {
		$("#mala_wysokosc").fadeIn();
		return false;
	}
	if (gatunek == "") {
		$("#bez_gatunku").fadeIn();
		return false;
	}
	/* mała piersnica? */

}

function licz() {
	wczytaj_dane();
	if (sprawdz_dane() == false)
		return;

	if (pier == "" && obw != "")
		pier = obw / Math.PI;
	if (typeof drzewa[gatunek] === 'object')
		tree = drzewa[gatunek];
	else {
		$("#nie_ma_takiego_gatunku").fadeIn();
		return;
	}
	if (wys == "" && tree.lukaszkiewicz != null) {
		$("#bez_wysokosci").fadeIn();
	}
	$("#wiek_luk").fadeOut(300, function() {
		if (pier != "" && wys != "") {
			if(tree.lukaszkiewicz != null){
				wiek_luk = tree.lukaszkiewicz(pier, wys);
				$("#wiek_luk .wynik").text(wiek_luk + " lat");
				$("#wiek_luk").fadeIn();
			}
		}
	});
	$("#wiek_majd").fadeOut(
			300,
			function() {
				$("#zakres_majd").fadeOut(
						300,
						function() {
							if (tree.majdecki != null) {
								wiek_majdecki = tree.majdecki(pier);
								if (wiek_majdecki.wiek != null) {
									$("#wiek_majd .wynik").text(
											wiek_majdecki.wiek + " lat")
									$("#wiek_majd").fadeIn();
								}
								$("#zakres_majd .wynik").text(
										"zakres: " + wiek_majdecki.zakres_dol
												+ " - "
												+ wiek_majdecki.zakres_gora);
								$("#zakres_majd").fadeIn();
							}
						})
			});
}

$(document).ready(function() {
    equalHeight($(".thumbnail"));
    $('a[rel="lightbox"]').lightBox({
		imageLoading : 'img/loading.gif',
		imageBtnClose : 'img/close.gif',
		imageBtnPrev : 'img/prev.gif',
		imageBtnNext : 'img/next.gif',
		txtImage : 'Zdjęcie',
		txtOf : 'z',
		maxHeight : 600,
		maxWidth : 800
	});
	$("#gat").typeahead({
		source : Object.keys(drzewa),
		items: 100
	})
	$("#obw").tooltip({
		title : "Na wysokości 1,3 m"
	})
	$("#gat").tooltip({
		title : "Zacznij pisać. Spacja aby zobaczyć wszystkie"
	})

	$('input').keypress(function(e) {
		if (e.which == 13 && e.shiftKey) {
			$('#licz').click();
		}
	});

})