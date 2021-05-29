import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMedicationComponent } from './shared/pages/create-medication/create-medication.component';
import { ListMedicationComponent } from './shared/pages/list-medication/list-medication.component';
import { UpdateMedicationComponent } from './shared/pages/update-medication/update-medication.component';

const routes: Routes = [
  { path: '', redirectTo: '/create', pathMatch: 'full' },
  {path: 'create', component: CreateMedicationComponent},
  {path: 'list', component: ListMedicationComponent},
  {path: 'update', component: UpdateMedicationComponent},
  {path: 'update/:id', component: UpdateMedicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
