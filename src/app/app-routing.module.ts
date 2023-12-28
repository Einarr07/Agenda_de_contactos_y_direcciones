import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'contact-list',
    loadChildren: () => import('./pages/contact-list/contact-list.module').then( m => m.ContactListPageModule)
  },
  {
    path: 'contact-detail/:id', // Cambié la ruta para incluir el ID del contacto
    loadChildren: () => import('./pages/contact-detail/contact-detail.module').then( m => m.ContactDetailPageModule)
  },
  {
    path: 'add-contact',
    loadChildren: () => import('./pages/add-contact/add-contact.module').then( m => m.AddContactPageModule)
  },
  {
    path: 'edit-contact/:id', // Cambié la ruta para incluir el ID del contacto
    loadChildren: () => import('./pages/edit-contact/edit-contact.module').then(m => m.EditContactPageModule)
  },  
  {
    path: '',
    redirectTo: 'home',
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
