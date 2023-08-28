import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from '../../../models/usuario'
import { FirestoreService } from 'src/app/shared/services/firestore.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true;

  usuarios: Usuario= {
    uid:'',
    nombre:'',
    contrasena:''
  }
  uid='';

  constructor(public servicioAuth:AuthService, public firestore: FirestoreService){

  }
  //tomamos nuevos registros y mostrar los resultados
  async registrarse(){
    const credenciales = {
      nombre: this.usuarios.nombre,
      contrasena: this.usuarios.contrasena,
    }
   const res = await this.servicioAuth.registrar(credenciales.nombre,credenciales.contrasena)
   .then(res =>{
    alert("Ha agregado un nuevo usuario con exito")
   })
  .catch(error=>alert("Hubo un error al cargar el usuario :( \n"+error)
   )

   const uid = await this.servicioAuth.getUid();

   this.usuarios.uid= uid

  }
}
