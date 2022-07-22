import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminComponent } from './components/admin/admin.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { GalleryComponent } from './components/gallery/gallery.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'testimonials',component:TestimonialsComponent},
  {path:'contact',component:ContactComponent},
  {path:'admin',component:AdminComponent},
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent},
  {path:'favorites',component:FavoritesComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
