import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Book } from '../../models/book';
import { ActivatedRoute } from '@angular/router';
import { BookServiceService } from '../../services/book-service.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookItems: Book[] = [];
  bookFormGroup: FormGroup;
  authorsFormArray: FormArray;
  paramId: any;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private books: BookServiceService) {
    this.paramId = this.route.snapshot.paramMap.get('id')
    
   
    if(this.paramId === 'false') {
      this.bookItems = [{id: 0,name: '',isbn: 0,authors: ['']}]
    }else {
      this.bookItems = this.books.getBooks().filter(x => x.id === parseInt(this.paramId));
    }


    this.bookFormGroup = this.fb.group({
      id: [this.bookItems[0].id],
      name: [this.bookItems[0].name],
      authors: this.fb.array([]),
      isbn: [this.bookItems[0].isbn]
    })
    this.authorsFormArray = this.bookFormGroup.get("authors") as FormArray

    

    for(let x of this.bookItems[0].authors) {
      this.authorsFormArray.push(new FormControl(x))
    }
   }

  ngOnInit(): void {
  }

  addAuthor = () => {
    this.authorsFormArray.push(new FormControl(''));
  }
  deleteAuthor = (i: number) => {
    this.authorsFormArray.removeAt(i)
  }

  submit = () => {
    const bookData = this.bookFormGroup.getRawValue() as Book
    if(this.paramId === 'false'){
      return this.books.setBook(bookData)
    }
    return this.books.editBook(bookData)
  }

}
