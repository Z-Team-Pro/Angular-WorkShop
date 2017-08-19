import { Injectable } from '@angular/core';
@Injectable()

export class LoadPostsService{

constructor( ){


}

GetPosts(){

var data=[
{
    "title": "My Post",
    "Body": "this is demo ",
    "Likes": 10,
    "Time": {
    "date": "2017-08-19 17:15:41.614000",
    "timezone_type": 2,
    "timezone": "Z"
    }
    },
      {
    "title": "new post",
    "Body": "fkjdkfjdkjfd",
    "Likes": 20,
    "Time": {
    "date": "2017-08-19 17:27:52.141000",
    "timezone_type": 2,
    "timezone": "Z"
    }
    }
]
return  data;

}


}