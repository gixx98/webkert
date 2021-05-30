import { Component, OnInit } from '@angular/core';
import { Medication } from '../../model/medication.model';
import { MedicationServiceService } from '../../services/medication-service.service';

@Component({
  selector: 'app-list-medication',
  templateUrl: './list-medication.component.html',
  styleUrls: ['./list-medication.component.css']
})
export class ListMedicationComponent implements OnInit {
  displayedColumns: string[] = ['status', 'category', 'medication', 'subject', 'actor', 'effectiveDateTime', 'start', 'end','edit', 'delete'];

  Medications!: Medication[];

  constructor(private medicationService: MedicationServiceService) { }

  ngOnInit(): void {
    this.medicationService.getMedicationList().subscribe(res =>{
      this.Medications = res.map( e =>{
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Medication
        } as Medication;
      })
    });
  }

  medication: undefined;


  removeMedication = (medication: Medication) => this.medicationService.deleteMedication(medication);

}
