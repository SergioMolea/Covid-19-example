 import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
	imagenes:any[] = []; 
  constructor() { }

  ngOnInit(): void {
  	this.getPhotos();
  	setTimeout(this.changeImage, 1000);
  }

  getPhotos(){
  	fetch('https://jsonplaceholder.typicode.com/photos')
	  .then(response => response.json())
	  .then(json => {
	  		for (var i = 0; i < 20; i++) {
	  			this.imagenes.push(json[i]);
	  		}
	  });
  }

  changeImage(){
  	let images:any;
  	images = document.querySelectorAll(".card-group img");
  	images.forEach( (img,index) => {
  		if (index % 3 == 0) {
  			img.src ="../../../assets/images/Coronavirus19.jpg"
  			img.parentNode.classList.add("cursor-pointer");
  		}else if(index % 2 == 0){
  			img.src = "../../../assets/images/corona1.jpg";
  			img.parentNode.classList.add("cursor-pointer");
  		}else{
  			img.src = "../../../assets/images/map.jpg";
  			img.parentNode.classList.add("cursor-pointer");
  		}
  	});
  	console.log(images);
  }


}
