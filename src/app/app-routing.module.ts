import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'contact-list',
    loadChildren: () => import('./pages/contact-list/contact-list.module').then(m => m.ContactListPageModule)
  },
  {
    path: 'contact-detail/:id',
    loadChildren: () => import('./pages/contact-detail/contact-detail.module').then(m => m.ContactDetailPageModule)
  },
  {
    path: 'add-contact',
    loadChildren: () => import('./pages/add-contact/add-contact.module').then(m => m.AddContactPageModule)
  },
  {
    path: 'edit-contact/:id',
    loadChildren: () => import('./pages/edit-contact/edit-contact.module').then(m => m.EditContactPageModule)
  },
  {
    path: 'login',  // Nueva ruta para el LoginComponent
    component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: '',
    redirectTo: 'login',  // Cambié la redirección a 'login'
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
