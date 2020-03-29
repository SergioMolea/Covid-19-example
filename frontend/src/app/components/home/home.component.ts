import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openWindow(op){
  	switch (op) {
  		case 1:
  			window.open("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.milenio.com%2Fciencia-y-salud%2Fsintomas-del-coronavirus-segun-la-oms&psig=AOvVaw3V170zMYeKTfTWSj6_1LX6&ust=1585532191353000&source=images&cd=vfe&ved=0CA0QjhxqFwoTCLip4OrFvugCFQAAAAAdAAAAABAD",'_blank');
  			break;
  		case 2:
  			window.open("https://www.minsalud.gov.co/salud/publica/PET/Paginas/Covid-19_copia.aspx",'_blank');
  			break;
  		case 3:
  			window.open("https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6",'_blank');
  			break;
  	}
  }
}
