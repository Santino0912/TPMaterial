import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

//firebase
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat'; //importacion de firebase
import { AngularFireAuthModule } from '@angular/fire/compat/auth';//import de autentificacion
import { AngularFireStorageModule } from '@angular/fire/compat/storage';//import de storage

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    //imports de firebase
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
