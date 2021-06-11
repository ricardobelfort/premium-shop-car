import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { CarListComponent } from './pages/home/car-list/car-list.component';
import { CarDetailComponent } from './pages/home/car-detail/car-detail.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CarFormComponent } from './pages/home/car-form/car-form.component';
import { RegisterComponent } from './pages/register/register.component';
import { CarService } from './services/car.service';
import { AuthService } from './services/auth.service';
import { TokenInterceptor } from './token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    HomeComponent,
    CarListComponent,
    CarDetailComponent,
    BreadcrumbComponent,
    CarFormComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CarService,
    AuthService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
