import { Route } from '@angular/compiler/src/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { postService } from '../services/post.servive';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit , OnDestroy {

  posts : any[] = [];
  postSubscription :Subscription;
  constructor (private postService :postService, private router :Router){}

  title = 'projet-blog-angular';
  ngOnInit (){
    this.postSubscription = this.postService.postSubject.subscribe(
      (posts :any[]) =>{
        this.posts = posts;
      }
    );
    this.postService.emitPosts();
  }

  ngOnDestroy () {
    this.postSubscription.unsubscribe();
  }


}
