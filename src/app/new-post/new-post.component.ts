import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { postService } from '../services/post.servive';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  postForm : FormGroup;
  constructor(private postService : postService, private router :Router, private formBuilder :FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.postForm =this.formBuilder.group({
      title : ['',Validators.required],
      content : ['', Validators.required]
    });

  }

  onSavePost() {
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;

    this.postService.ajouterPost(title,content);
    this.postService.emitPosts();
    this.router.navigate(['/posts']);

  }

}
