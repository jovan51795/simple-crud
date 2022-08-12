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

  editBook = (blogData: Blog) => {
   for(let x in this.blog) {
    if(this.blog[x].id === blogData.id){
      this.blog[x] = blogData
    }
   }
  }

  delete(id: number){
    this.blog = this.blog.filter((x)=> x.id !== id)
  }
  deleteAll = () => {
    this.blog = [];
    console.log(this.blog)
  }
}
