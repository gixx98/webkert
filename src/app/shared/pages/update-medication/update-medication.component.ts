import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { actor } from '../../model/enums/_actor.enum';
import { category } from '../../model/enums/_category.enum';
import {status} from '../../model/enums/_status.enum';
import { MedicationServiceService } from '../../services/medication-service.service';

@Component({
  selector: 'app-update-medication',
  templateUrl: './update-medication.component.html',
  styleUrls: ['./update-medication.component.css']
})
export class UpdateMedicationComponent implements OnInit {

  public statusEnum = status;
  statuses = Object.values(this.statusEnum); 

  public categoryEnum = category;
  categories = Object.values(this.categoryEnum);

  public actorEnum = actor;
  actors = Object.values(this.actorEnum);

  public editForm!: FormGroup;

  medicationRef: any;

  constructor(public medicationService: MedicationServiceService,
    public formBuilder: FormBuilder,
    private activated: ActivatedRoute,
    private router: Router) {
      this.editForm = this.formBuilder.group({
        status: this.formBuilder.control(''),
        category: this.formBuilder.control(''),
        medication: this.formBuilder.control(''),
        subject: this.formBuilder.control(''),
        actor: this.formBuilder.control(''),
        effective: this.formBuilder.group({
          effectiveDateTime: this.formBuilder.control(''),
          effectivePeriod: this.formBuilder.group({
            start: this.formBuilder.control(''),
            end: this.formBuilder.control('')
          })
        })
      })
     }

  ngOnInit(): void {
    const id = this.activated.snapshot.paramMap.get('id');

    this.medicationService.getMedicationDoc(id).subscribe(res => {
      this.medicationRef = res;
      this.editForm = this.formBuilder.group({
        status: [this.medicationRef.status],
        category: [this.medicationRef.category],
        medication: [this.medicationRef.medication],
        subject: [this.medicationRef.subject],
        actor: [this.medicationRef.actor],
        effective: this.formBuilder.group({
          effectiveDateTime: [this.medicationRef.effective.effectiveDateTime],
          effectivePeriod: this.formBuilder.group({
            start: [this.medicationRef.effective.effectivePeriod.start],
            end: [this.medicationRef.effective.effectivePeriod.end]
          })
        })
      })      
    })
  }
  
  onSubmit(){
    const id = this.activated.snapshot.paramMap.get('id');

    this.medicationService.updateMedication(this.editForm.value, id);
    this.router.navigate(['list']);
  }

}
