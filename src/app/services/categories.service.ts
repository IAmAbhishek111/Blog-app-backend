import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(
    private firestore: AngularFirestore,
    private toastr: ToastrService
  ) {}

  saveData(data: any) {
    this.firestore
      .collection('categories')
      .add(data)
      .then((docRef) => {
        console.log(docRef);
        this.toastr.success('Data inserted Successfully!');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  loadData() {
    return this.firestore
      .collection('categories')
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((a) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;

            return { id, data };
          });
        })
      );
  }

  updateData(id, EditData) {
    this.firestore
      .doc(`categories/${id}`)
      .update(EditData)
      .then((docRef) => {
        this.toastr.success('Data Updated Successfully!');
      });
  }

  deleteData(id) {
    this.firestore
      .doc(`categories/${id}`)
      .delete()
      .then((docref) => {
        // console.log(docref);
        this.toastr.success('Data Deleted Successfully!');
      });
  }
}
