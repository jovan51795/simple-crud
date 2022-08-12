import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  constructor() { }

  blog: Blog[] = [
    {
      id: 1,
      title: "The WOrld War III",
      description: "Test Description",
      author: "jovanie",
      comments: [
        "Good",
        "Bad"
      ]
    },
    {
      id: 2,
      title: "The WOrld War III",
      description: "Test Description",
      author: "jovanie",
      comments: [
        "Good",
        "Bad"
      ]
    }
  ]

  getBlog = () => {
    return this.blog;
  }

  setBook = (bookData: Blog) => {
    this.blog.push(bookData)
  }

  editBlog = (blogData: Blog) => {
   for(let x of this.blog) {
    if(x.id === blogData.id){
      x.title = blogData.title
      x.author = blogData.author
      x.description = blogData.description
      x.comments = blogData.comments
    }
   }

   console.log(this.blog)
   
   
  }

  delete(id: number){
    this.blog = this.blog.filter((x)=> x.id !== id)
  }
  deleteAll = () => {
    this.blog = [];
    console.log(this.blog)
  }
}
