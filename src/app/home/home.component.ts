import { LoadPostsService } from './../Services/LoadPosts.service';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})
export class HomeComponent {
List:any;
constructor( private posts : LoadPostsService){


}
 
ngOnInit(){
this.List=this.posts.GetPosts();
}


}
