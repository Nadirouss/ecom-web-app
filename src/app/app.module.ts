import { APP_INITIALIZER,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import {HttpClientModule} from "@angular/common/http";
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent} from "./orders/orders.component";
import { OrderDetailsComponent } from './order-details/order-details.component';
import {KeycloakAngularModule,KeycloakService} from "keycloak-angular";

/*function initializedKeycloak(keycloak: KeycloakService){
  return () =>
    keycloak.init({
      config: {
        url:'http://localhost:8080/auth',
        realm:'my-ecom-realm',
        clientId:'ecom-web',
      },
      initOptions:{
        onLoad:'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + ''
      },
    });
}
*/

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CustomersComponent,
    OrdersComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    KeycloakAngularModule
  ],
  providers: [
   /* {
      provide: APP_INITIALIZER,
      useFactory: initializedKeycloak,
      multi:true,
      deps: [KeycloakService]
    }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
