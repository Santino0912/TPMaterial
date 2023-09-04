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
    nombre:'',
    uid:'',
    email:'',
    contrasena:'',
    rol:''
  }
  uid='';
  coleccionUsuario:Usuario[]=[]

  constructor(public servicioAuth:AuthService, public servicioFirestore: FirestoreService){

  }
  //tomamos nuevos registros y mostrar los resultados
  async registrarse(){
    const credenciales = {
      email: this.usuarios.email,
      contrasena: this.usuarios.contrasena,
    }
   const res = await this.servicioAuth.registrar(credenciales.email,credenciales.contrasena)
   .then(res =>{
    alert("Ha agregado un nuevo usuario con exito")
   })
  .catch(error=>alert("Hubo un error al cargar el usuario :( \n"+error)
   )

   const uid = await this.servicioAuth.getUid();

   this.usuarios.uid= uid
   this.guardarUser()
  }

  async guardarUser(){
    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
    .then(res=>{
      console.log(this.usuarios)
    })
    .catch(error=>{
      console.log('Error =>',error)
    })
  }

  async ngOnInit(){
    const uid = await this.servicioAuth.getUid()
    console.log(uid)
  }
}
