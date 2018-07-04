import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ResponsabilidadComponent } from './responsabilidad/responsabilidad.component';
import { TiposComponent } from './tipos/tipos.component';
import { TipsComponent } from './tips/tips.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ResponsabilidadComponent,
    TiposComponent,
    TipsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
