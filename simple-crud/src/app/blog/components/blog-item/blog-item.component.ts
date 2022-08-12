import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {

  @Input() blogItem: Blog | undefined
  @Output() actionEmetter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  cardAction = (id: any) => {
    this.actionEmetter.emit(id)
  }
}
