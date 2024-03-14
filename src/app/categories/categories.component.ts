import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../models/category';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {

  categoryArray:any=[] // temporary solution but working 
  
  constructor(private categoryService : CategoriesService) {}

  ngOnInit(): void {
    this.categoryService.loadData().subscribe(val =>{
      console.log(val);
      // console.log(JSON.stringify(val));
      this.categoryArray = val;
      
      
    })
  }

  onSubmit(formData: any) {
    console.log(formData.value);

    let CategoryData : Category = {
      category: formData.value.category,
    };

    this.categoryService.saveData(CategoryData)

    // let subCategoryData = {
    //   subCategory: 'subCategory1',
    // };

  
    // this.firestore
    //   .collection('categories')
    //   .add(CategoryData)
    //   .then((docRef) => {
    //     console.log(docRef);

    //     // this.firestore
    //     //   .doc(`categories/${docRef.id}`)
    //     //   .collection('subcategories')
    //     //   .add(subCategoryData);

    //     this.firestore
    //       .collection('categories')
    //       .doc(docRef.id)
    //       .collection('subcategories')
    //       .add(subCategoryData)
    //       .then((docref1) => {
    //         console.log(docref1);

    //         // this.firestore
    //         //   .doc(`categories/${docRef.id}/${docref1.id}`)
    //         //   .collection('subsubcategories')
    //         //   .add(subCategoryData);

    //         this.firestore
    //           .collection('categories')
    //           .doc(docRef.id)
    //           .collection('subcategories')
    //           .doc(docref1.id)
    //           .collection('subsubcategories')
    //           .add(subCategoryData)
    //           .then((docRef2) => {
    //             console.log('Second level is saved succesfully');
    //           });
    //       });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    
  }
}
