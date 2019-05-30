import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Habilitar formatação de moeda e data em português
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CabecComponent } from './ui/cabec/cabec.component';
import { MenuPrincipalComponent } from './ui/menu-principal/menu-principal.component';
import { RodapeComponent } from './ui/rodape/rodape.component';
import { HttpClientModule } from '@angular/common/http';
import { MarcaListComponent } from './marca/marca-list/marca-list.component';
import { MarcaFormComponent } from './marca/marca-form/marca-form.component';
import { VeiculoListComponent } from './veiculo/veiculo-list/veiculo-list.component';
import { VeiculoFormComponent } from './veiculo/veiculo-form/veiculo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecComponent,
    MenuPrincipalComponent,
    RodapeComponent,
    MarcaListComponent,
    MarcaFormComponent,
    VeiculoListComponent,
    VeiculoFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
