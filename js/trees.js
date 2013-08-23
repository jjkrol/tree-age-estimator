function Drzewo(){
}
Drzewo.prototype.lukaszkiewicz = function(piersnica, wysokosc){
	e = Math.E;
	exponent = this.b + this.c * piersnica/100 + this.d * wysokosc;
	wiek = -this.a + Math.pow(e, exponent);
	return Math.round(wiek);
}

Drzewo.prototype.majdecki = function(piersnica){
	for(i=0;i<this.klucze_tabeli_wiekowej.length;i++){
		klucz = this.klucze_tabeli_wiekowej[i];
		wartosc = this.tabela_wiekowa[klucz];
		if(this.tabela_wiekowa[klucz] == null){
			return {wiek: null, zakres_dol:this.klucze_tabeli_wiekowej[i-1], zakres_gora: "?"};
		}
		if (piersnica < wartosc){
			if(i == 0){
				poprzedni_klucz = 5; //lat
				poprzednia_wartosc = 1; //m
			}
			else{
				poprzedni_klucz = this.klucze_tabeli_wiekowej[i-1];
				poprzednia_wartosc = this.tabela_wiekowa[poprzedni_klucz];
					
			}
			proporcja = (klucz-poprzedni_klucz)/(wartosc-poprzednia_wartosc);
			odleglosc_od_ost_punktu = piersnica - poprzednia_wartosc;
			wynik = poprzedni_klucz + odleglosc_od_ost_punktu * proporcja;
			wynik = Math.round(wynik);
			return {wiek: wynik, zakres_dol: poprzedni_klucz, zakres_gora: klucz};
		}
	}
	return {wiek: null, zakres_dol: this.klucze_tabeli_wiekowej[this.klucze_tabeli_wiekowej.length-1],zakres_gora: "?"}
}
Drzewo.prototype.tabela_wiekowa = {};
Drzewo.prototype.klucze_tabeli_wiekowej = [20,40,70,100,120];
function Tiliacordata(){
	Drzewo.call(this);
}
Tiliacordata.prototype = new Drzewo();
Tiliacordata.prototype.constructor = Tiliacordata;
Tiliacordata.prototype.a = 264.073;
Tiliacordata.prototype.b = 5.5834;
Tiliacordata.prototype.c = 0.3397;
Tiliacordata.prototype.d = 0.0026;
Tiliacordata.prototype.tabela_wiekowa = {};
Tiliacordata.prototype.tabela_wiekowa[20] = 17;
Tiliacordata.prototype.tabela_wiekowa[40] = 35;
Tiliacordata.prototype.tabela_wiekowa[70] = 57;
Tiliacordata.prototype.tabela_wiekowa[100] = 78;
Tiliacordata.prototype.tabela_wiekowa[120] = 92;


function Fraxinusexcelsior(){
	Drzewo.call(this);
}
Fraxinusexcelsior.prototype = new Drzewo();
Fraxinusexcelsior.prototype.constructor = Fraxinusexcelsior;
Fraxinusexcelsior.prototype.a = 210.115;
Fraxinusexcelsior.prototype.b = 5.3523;
Fraxinusexcelsior.prototype.c = 0.2655;
Fraxinusexcelsior.prototype.d = 0.0064;
Fraxinusexcelsior.prototype.tabela_wiekowa = {};
Fraxinusexcelsior.prototype.tabela_wiekowa[20] = 12;
Fraxinusexcelsior.prototype.tabela_wiekowa[40] = 26;
Fraxinusexcelsior.prototype.tabela_wiekowa[70] = 45;
Fraxinusexcelsior.prototype.tabela_wiekowa[100] = 60;
Fraxinusexcelsior.prototype.tabela_wiekowa[120] = 72;

function Aesculushipocastanum(){
	Drzewo.call(this);
}
Aesculushipocastanum.prototype = new Drzewo();
Aesculushipocastanum.prototype.constructor = Aesculushipocastanum;
Aesculushipocastanum.prototype.a = 54.2714;
Aesculushipocastanum.prototype.b = 4.0709;
Aesculushipocastanum.prototype.c = 0.7988;
Aesculushipocastanum.prototype.d = 0.0209;
Aesculushipocastanum.prototype.tabela_wiekowa = {};
Aesculushipocastanum.prototype.tabela_wiekowa[20] = 20;
Aesculushipocastanum.prototype.tabela_wiekowa[40] = 38;
Aesculushipocastanum.prototype.tabela_wiekowa[70] = 65;
Aesculushipocastanum.prototype.tabela_wiekowa[100] = 87;
Aesculushipocastanum.prototype.tabela_wiekowa[120] = 105;

function Populusalba(){
	Drzewo.call(this);
}
Populusalba.prototype = new Drzewo();
Populusalba.prototype.constructor = Populusalba;
Populusalba.prototype.lukaszkiewicz = null;
Populusalba.prototype.tabela_wiekowa = {};
Populusalba.prototype.tabela_wiekowa[20] = 35;
Populusalba.prototype.tabela_wiekowa[40] = 70;
Populusalba.prototype.tabela_wiekowa[70] = 100;
Populusalba.prototype.tabela_wiekowa[100] = 125;
Populusalba.prototype.tabela_wiekowa[120] = 145;

function Carpinusbetulus(){
	Drzewo.call(this);
}
Carpinusbetulus.prototype = new Drzewo();
Carpinusbetulus.prototype.constructor = Carpinusbetulus;
Carpinusbetulus.prototype.lukaszkiewicz = function(){return null};
Carpinusbetulus.prototype.tabela_wiekowa = {};
Carpinusbetulus.prototype.tabela_wiekowa[20] = 7;
Carpinusbetulus.prototype.tabela_wiekowa[40] = 15;
Carpinusbetulus.prototype.tabela_wiekowa[70] = 35;
Carpinusbetulus.prototype.tabela_wiekowa[100] = 50;
Carpinusbetulus.prototype.tabela_wiekowa[120] = 60;

function Robiniapseudoacacia(){
	Drzewo.call(this);
}
Robiniapseudoacacia.prototype = new Drzewo();
Robiniapseudoacacia.prototype.constructor = Robiniapseudoacacia;
Robiniapseudoacacia.prototype.lukaszkiewicz = function(){return null};
Robiniapseudoacacia.prototype.tabela_wiekowa = {};
Robiniapseudoacacia.prototype.tabela_wiekowa[20] = 13;
Robiniapseudoacacia.prototype.tabela_wiekowa[40] = 26;
Robiniapseudoacacia.prototype.tabela_wiekowa[70] = 45;
Robiniapseudoacacia.prototype.tabela_wiekowa[100] = 62;
Robiniapseudoacacia.prototype.tabela_wiekowa[120] = 75;

function Pinussilvestris(){
	Drzewo.call(this);
}
Pinussilvestris.prototype = new Drzewo();
Pinussilvestris.prototype.constructor = Pinussilvestris;
Pinussilvestris.prototype.lukaszkiewicz = function(){return null};
Pinussilvestris.prototype.tabela_wiekowa = {};
Pinussilvestris.prototype.tabela_wiekowa[20] = 12;
Pinussilvestris.prototype.tabela_wiekowa[40] = 25;
Pinussilvestris.prototype.tabela_wiekowa[70] = 50;
Pinussilvestris.prototype.tabela_wiekowa[100] = 68;
Pinussilvestris.prototype.tabela_wiekowa[120] = 80;

function Acerplatanoides(){
	Drzewo.call(this);
}
Acerplatanoides.prototype = new Drzewo();
Acerplatanoides.prototype.constructor = Acerplatanoides;
Acerplatanoides.prototype.lukaszkiewicz = function(){return null};
Acerplatanoides.prototype.tabela_wiekowa = {};
Acerplatanoides.prototype.tabela_wiekowa[20] = 12;
Acerplatanoides.prototype.tabela_wiekowa[40] = 25;
Acerplatanoides.prototype.tabela_wiekowa[70] = 40;
Acerplatanoides.prototype.tabela_wiekowa[100] = 55;
Acerplatanoides.prototype.tabela_wiekowa[120] = 67;

function Quercuspetraea(){
	Drzewo.call(this);
}
Quercuspetraea.prototype = new Drzewo();
Quercuspetraea.prototype.constructor = Quercuspetraea;
Quercuspetraea.prototype.lukaszkiewicz = function(){return null};
Quercuspetraea.prototype.tabela_wiekowa = {};
Quercuspetraea.prototype.tabela_wiekowa[20] = 9;
Quercuspetraea.prototype.tabela_wiekowa[40] = 18;
Quercuspetraea.prototype.tabela_wiekowa[70] = 35;
Quercuspetraea.prototype.tabela_wiekowa[100] = 47;
Quercuspetraea.prototype.tabela_wiekowa[120] = 55;

function Piceaexcelsa(){
	Drzewo.call(this);
}
Piceaexcelsa.prototype = new Drzewo();
Piceaexcelsa.prototype.constructor = Piceaexcelsa;
Piceaexcelsa.prototype.lukaszkiewicz = function(){return null};
Piceaexcelsa.prototype.tabela_wiekowa = {};
Piceaexcelsa.prototype.tabela_wiekowa[20] = 12;
Piceaexcelsa.prototype.tabela_wiekowa[40] = 25;
Piceaexcelsa.prototype.tabela_wiekowa[70] = 50;
Piceaexcelsa.prototype.tabela_wiekowa[100] = 70;
Piceaexcelsa.prototype.tabela_wiekowa[120] = 82;

function Larixdecidua(){
	Drzewo.call(this);
}
Larixdecidua.prototype = new Drzewo();
Larixdecidua.prototype.constructor = Larixdecidua;
Larixdecidua.prototype.lukaszkiewicz = function(){return null};
Larixdecidua.prototype.tabela_wiekowa = {};
Larixdecidua.prototype.tabela_wiekowa[20] = 17;
Larixdecidua.prototype.tabela_wiekowa[40] = 35;
Larixdecidua.prototype.tabela_wiekowa[70] = 52;
Larixdecidua.prototype.tabela_wiekowa[100] = 67;
Larixdecidua.prototype.tabela_wiekowa[120] = 79;

function Ulmuslaevis(){
	Drzewo.call(this);
}
Ulmuslaevis.prototype = new Drzewo();
Ulmuslaevis.prototype.constructor = Ulmuslaevis;
Ulmuslaevis.prototype.lukaszkiewicz = function(){return null};
Ulmuslaevis.prototype.tabela_wiekowa = {};
Ulmuslaevis.prototype.tabela_wiekowa[20] = 15;
Ulmuslaevis.prototype.tabela_wiekowa[40] = 30;
Ulmuslaevis.prototype.tabela_wiekowa[70] = 51;
Ulmuslaevis.prototype.tabela_wiekowa[100] = 73;
Ulmuslaevis.prototype.tabela_wiekowa[120] = 90;

function Acernegundo(){
	Drzewo.call(this);
}
Acernegundo.prototype = new Drzewo();
Acernegundo.prototype.constructor = Acernegundo;
Acernegundo.prototype.lukaszkiewicz = function(){return null};
Acernegundo.prototype.tabela_wiekowa = {};
Acernegundo.prototype.tabela_wiekowa[20] = 27;
Acernegundo.prototype.tabela_wiekowa[40] = 54;
Acernegundo.prototype.tabela_wiekowa[70] = 85;

function Betulaverrucosa(){
	Drzewo.call(this);
}
Betulaverrucosa.prototype = new Drzewo();
Betulaverrucosa.prototype.constructor = Betulaverrucosa;
Betulaverrucosa.prototype.lukaszkiewicz = function(){return null};
Betulaverrucosa.prototype.tabela_wiekowa = {};
Betulaverrucosa.prototype.tabela_wiekowa[20] = 22;
Betulaverrucosa.prototype.tabela_wiekowa[40] = 34;
Betulaverrucosa.prototype.tabela_wiekowa[70] = 57;
Betulaverrucosa.prototype.tabela_wiekowa[100] = 79;

function Thujaoccidentalis(){
	Drzewo.call(this);
}
Thujaoccidentalis.prototype = new Drzewo();
Thujaoccidentalis.prototype.constructor = Thujaoccidentalis;
Thujaoccidentalis.prototype.lukaszkiewicz = function(){return null};
Thujaoccidentalis.prototype.tabela_wiekowa = {};
Thujaoccidentalis.prototype.tabela_wiekowa[20] = 5;
Thujaoccidentalis.prototype.tabela_wiekowa[40] = 10;
Thujaoccidentalis.prototype.tabela_wiekowa[70] = 20;
Thujaoccidentalis.prototype.tabela_wiekowa[100] = 35;

function Alnusglutinosa(){
	Drzewo.call(this);
}
Alnusglutinosa.prototype = new Drzewo();
Alnusglutinosa.prototype.constructor = Alnusglutinosa;
Alnusglutinosa.prototype.lukaszkiewicz = function(){return null};
Alnusglutinosa.prototype.tabela_wiekowa = {};
Alnusglutinosa.prototype.tabela_wiekowa[20] = 17;
Alnusglutinosa.prototype.tabela_wiekowa[40] = 30;
Alnusglutinosa.prototype.tabela_wiekowa[70] = 50;
Alnusglutinosa.prototype.tabela_wiekowa[100] = 70;