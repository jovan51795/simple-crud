import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, map, Subscription } from 'rxjs';
import { Book } from '../../models/book';
import {BookServiceService} from '../../services/book-service.service'



@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {
  sub: Subscription | undefined
  books: Book[] = [];
  constructor(private bookService: BookServiceService, private router: Router) { 
    this.sub = this.bookService.getBooks().subscribe(x => {
      this.books = x
    });
  }

  ngOnInit(): void {
  }
  
  action(id: number){
    forkJoin([this.bookService.delete(id), this.bookService.getBooks()]).pipe(
      map(([f , s]) => {
        this.books = s
      })).subscribe()
  }
 
  deleteAll = () => {
    for(let x of this.books) {
      this.action(x.id)
    }
  }
  ngOnDestroy(): void {
      this.sub?.unsubscribe()
  }

}
