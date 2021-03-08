import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostItemComponent } from './post-item/post-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsListComponent } from './posts-list/posts-list.component';

import { HeaderComponent } from './header/header.component';
import { postService } from './services/post.servive';

import { RouterModule, Routes } from '@angular/router';
import { NewPostComponent } from './new-post/new-post.component';

const appRoutes : Routes =  [
  { path :'posts', component:PostsListComponent },
  { path :'new', component: NewPostComponent },
  { path: '', redirectTo:'posts', pathMatch:'full' },
  { path: '**', redirectTo: 'posts' }
 

]

@NgModule({
  declarations: [
    AppComponent,
    PostItemComponent,
    PostsListComponent,
    HeaderComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    postService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
