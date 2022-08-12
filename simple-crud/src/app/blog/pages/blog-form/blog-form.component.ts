import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../../models/blog';
import { BlogServiceService } from '../../services/blog-service.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {

  blogFormGroup: FormGroup
  commentsFormArray: FormArray
  paramId: any
  blogItems: Blog[] = []
  constructor(private fb: FormBuilder, private route: ActivatedRoute,  private blogService: BlogServiceService) { 
    this.paramId = this.route.snapshot.paramMap.get('id')
    if(this.paramId === 'false'){
      this.blogItems = [{id: 0, title: '', description: '', author: '', comments: ['']}]
    }else {
      this.blogItems = this.blogService.getBlog().filter(x => x.id === parseInt(this.paramId))
    }
    this.blogFormGroup = this.fb.group({
      id: [this.blogItems[0].id],
      title: [this.blogItems[0].title],
      description: [this.blogItems[0].description],
      author: [this.blogItems[0].author],
      comments: this.fb.array([])
    })
    this.commentsFormArray = this.blogFormGroup.get('comments') as FormArray

    for(let x of this.blogItems[0].comments){
      this.commentsFormArray.push(new FormControl(x))
    }
  }

  ngOnInit(): void {
  }

  addComments = () => {
    this.commentsFormArray.push(new FormControl(''));
  }
  save = () => {
    const blogData = this.blogFormGroup.getRawValue() as Blog
    if(this.paramId === 'false'){
      return this.blogService.setBook(blogData)
    }
    return this.blogService.editBook(blogData)
  }

  deleteComment = (i: number) => {
    this.commentsFormArray.removeAt(i)
  }

}
