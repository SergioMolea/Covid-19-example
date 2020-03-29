import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openSocials(e){
  	if (e.target.getAttribute("alt") == "instagram") {
		window.open("https://www.instagram.com/sergio_molea/",'_blank');
  	}else{
  		window.open("https://www.linkedin.com/in/sergio-molea-779229121/",'_blank');
  	}
  }
}
