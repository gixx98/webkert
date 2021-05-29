import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MedicationServiceService } from '../../services/medication-service.service';
import { status } from '../../model/enums/_status.enum';
import { category } from '../../model/enums/_category.enum';
import { actor } from '../../model/enums/_actor.enum';


@Component({
  selector: 'app-create-medication',
  templateUrl: './create-medication.component.html',
  styleUrls: ['./create-medication.component.css']
})
export class CreateMedicationComponent implements OnInit {
  medicationForm!: FormGroup;


  public statusEnum = status;
  statuses = Object.values(this.statusEnum); 

  public categoryEnum = category;
  categories = Object.values(this.categoryEnum);

  public actorEnum = actor;
  actors = Object.values(this.actorEnum);
  
  constructor(public medicationService: MedicationServiceService,
    public formBuilder: FormBuilder,
    public router: Router) {
      this.medicationForm = this.formBuilder.group({
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
  }

  onSubmit() {
    this.medicationService.createMedication(this.medicationForm.value);
    this.router.navigate(['list']); 
    //console.log(this.medicationForm.value);
   };
}
