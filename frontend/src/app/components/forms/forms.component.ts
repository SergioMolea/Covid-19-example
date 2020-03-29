import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
	form:FormGroup;
	ongSeleted:string= "";

  	constructor(private _formBuilder : FormBuilder) { }

  ngOnInit(): void {
  	this.form = this.getFormBuilder();
  }

  getFormBuilder(){
  	return this._formBuilder.group({
  		nombre: ["", [Validators.required]],
  		apellido: ["", [Validators.required]],
  		email: ["", [Validators.required]],
  		telefono: ["", [Validators.required, Validators.minLength(8)]],
  		donacion: ["", [Validators.required]],
  	});
  }

  get f() {
    return this.form.controls;
  }

  sendDonation(){
  	console.log(this.form.value)
  	let {nombre,apellido,email,telefono,donacion} = this.form.value;
  	if (this.form.invalid) {
  		Swal.fire(
		  'Registre correctamente sus datos',
		  'Revise los campos',
		  'warning'
		)
  	}else{
  		Swal.fire(
		  `Gracias por tu donación ${nombre} ${apellido}`,
		  `Has donado un monto de ${donacion}$ a la organizacion ${this.ongSeleted}`,
		  'success'
		)
  	}
  }

  selectONG(e){
  	let select = document.querySelector("select");
  	switch (e.target.getAttribute("name")) {
  		case "REMAR":
  			select.selectedIndex = 1;
  			this.ongSeleted = e.target.getAttribute("name");
  			break;
  		case "EMAUS":
  			select.selectedIndex = 2;
  			this.ongSeleted = e.target.getAttribute("name");
  			break;
  			case "MAIOR":
  			select.selectedIndex = 3;
  			this.ongSeleted = e.target.getAttribute("name");
  			break;
  	}
  }

}
