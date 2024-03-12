import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit{

  constructor() {
    
  }

  ngOnInit(): void {
    
  }

  onSubmit(formData: any){
    console.log(formData.value);

    let CategoryData = {
      category : formData.value.category
    }
    console.log(CategoryData);
    
    
  }

}
