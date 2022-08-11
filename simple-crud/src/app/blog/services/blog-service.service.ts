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
}
