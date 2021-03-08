import { Component,Input, OnInit } from '@angular/core';
import { postService } from '../services/post.servive';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  constructor( private postService :postService) { }

  @Input() title : string;
  @Input() content : string ;
  @Input() created_at : Date;
  @Input() loveIts : number;
  @Input() elementIndex : number;

  dernierClick = 0;
  onLikeIts (){
    this.dernierClick = 1;
    this.postService.likeIt(this.elementIndex);
  }

  onDisLikeIts (){
    this.dernierClick = -1;
    this.postService.dislikeIt(this.elementIndex);
  }
  getColor(){
    if(this.dernierClick ===0){
      return 'black';
    }else if(this.dernierClick ===1){
      return "green";
    }else if (this.dernierClick === -1){
      return "red";
    }
  }

  onSupprimer() {
    this.postService.supprimerPost(this.elementIndex);
  }

  ngOnInit(): void {
  }

  

}
