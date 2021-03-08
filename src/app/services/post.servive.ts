import { Subject } from "rxjs"

export class postService {
    private posts = [
        {
            title : "premier post",
            content: "le contenu de mon post",
            loveIts : 0,
            created_at: new Date(),
            elementIndex : 0
          },
          {
            title : "deuxième post",
            content: "le contenu de mon post",
            loveIts : 0,
            created_at: new Date(),
            elementIndex : 0
          },
          {
            title : "troisième post",
            content: "le contenu de mon post",
            loveIts : 0,
            created_at: new Date(),
            elementIndex : 0
          }
    ]

    postSubject = new Subject<any[]>();

    emitPosts () {
        this.postSubject.next(this.posts);
    }

    ajouterPost (title :string , content: string ) {
        const newPost = {
            title : title,
            content : content,
            loveIts : 0,
            created_at: new Date(),
            elementIndex : 0
        }

        this.posts.push(newPost);
        this.emitPosts();
    }

    supprimerPost (index :number) {
        const indextElement = index;
        this.posts.splice(indextElement, 1);
        this.emitPosts();
    }

    dislikeIt (index : number) {
        for (let i = 0 ; i< this.posts.length; i++){
            if(this.posts[i].elementIndex === index){
                this.posts[i].loveIts--;
            }
        }
    }

    likeIt (index : number) {
        for (let i = 0 ; i< this.posts.length; i++){
            if(this.posts[i].elementIndex === index){
                this.posts[i].loveIts++;
            }
        }
    }
}