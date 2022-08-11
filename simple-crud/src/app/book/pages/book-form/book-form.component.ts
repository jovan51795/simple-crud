import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  bookFormGroup: FormGroup;
  authorsFormArray: FormArray;
  constructor(private fb: FormBuilder) {
    this.bookFormGroup = this.fb.group({
      name: [''],
      authors: this.fb.array([
        new FormControl(''),
      ]),
      isbn: ['']
    })
    this.authorsFormArray = this.bookFormGroup.get("authors") as FormArray
   }

  ngOnInit(): void {
  }

  addAuthor = () => {
    this.authorsFormArray.push(new FormControl(''));
  }
  deleteAuthor = (i: number) => {
    this.authorsFormArray.removeAt(i)
  }

}
