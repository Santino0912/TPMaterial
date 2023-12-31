import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) { 
    }
    inicarsesion(email:string, contrasena:string){
      this.auth.signInWithEmailAndPassword(email,contrasena)
    }
    registrar(nombre:string,contrasena:string){
     return this.auth.createUserWithEmailAndPassword(nombre,contrasena)
   }


   async getUid(){
    // nos genera una promesa, y cons user la captura
    const user = await this.auth.currentUser;

    if(user==null){
      return null
    }else{
      return user.uid
    }


   }
}
