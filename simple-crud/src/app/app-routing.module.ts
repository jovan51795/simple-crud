import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "profile",
    pathMatch: "full"
  },
  {
    path: "book",
    loadChildren: () => import('./book/book.module').then( b => b.BookModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then( m => m.BlogModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./user/user.module').then(u => u.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
