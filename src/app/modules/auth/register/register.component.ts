import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from '../../../models/usuario'


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

  constructor(public servicioAuth:AuthService){

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
   console.log(res)
  }
}
