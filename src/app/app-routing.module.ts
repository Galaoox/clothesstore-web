import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListProductsComponent } from './pages/list-products/list-products.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'list',
        pathMatch: 'full',
        component: ListProductsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
