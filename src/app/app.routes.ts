import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
];
