import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Medication } from '../model/medication.model';

@Injectable({
  providedIn: 'root'
})
export class MedicationServiceService {

  constructor(private firebase: AngularFirestore) { }

  getMedicationDoc(id: any) {
    return this.firebase
    .collection('medication-collection')
    .doc(id)
    .valueChanges()
  }

  getMedicationList() { 
    return this.firebase
    .collection("medication-collection")
    .snapshotChanges();
  }

  createMedication(medication: Medication) {
    return new Promise<any>((resolve, reject) =>{
      this.firebase
        .collection("medication-collection")
        .add(medication)
        .then(response => { console.log(response) }, error => reject(error));
    });
  }

  deleteMedication(medication: Medication) {
    return this.firebase
      .collection("medication-collection")
      .doc(medication.id)
      .delete();
  }
  
  updateMedication(medication: Medication, id: any) {
    return this.firebase
      .collection("medication-collection")
      .doc(id)
      .update({
        status: medication.status,
        category: medication.category,
        medication: medication.medication,
        subject: medication.subject,
        actor: medication.actor,
        effective: medication.effective
      });
  }

  
}
