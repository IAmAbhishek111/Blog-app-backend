import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css',
})
export class NewPostComponent implements OnInit {
  permalink: string = '';
  imgSrc: any = './assets/placeholder-image.png';
  selectedImg : any
   

  categories : any = [];
  constructor(private categoryService : CategoriesService) {}

  ngOnInit(): void {
    this.categoryService.loadData().subscribe(val =>{
        this.categories = val;

    })
  }
  onTitleChange($event) {
    // console.log($event.target.value);
    const title = $event.target.value;
    this.permalink = title.replace(/\s/g, '-');
    // console.log(this.permalink);
  }

  showPreview($event) {
    const reader = new FileReader();

    reader.onload = (e) => {
      this.imgSrc = e.target?.result;
    };

    reader.readAsDataURL($event?.target.files[0]);
    this.selectedImg = $event.target.files[0];
  }
}
