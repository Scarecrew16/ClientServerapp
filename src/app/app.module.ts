import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { LoginComponentComponent } from './auth/login-component/login-component.component';
import { RegisterComponentComponent } from './auth/register-component/register-component.component';
import { HeaderComponentComponent } from './shared/header-component/header-component.component';
import { FooterComponentComponent } from './shared/footer-component/footer-component.component';
import { NavigationComponentComponent } from './shared/navigation-component/navigation-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    NotfoundComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    NavigationComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
