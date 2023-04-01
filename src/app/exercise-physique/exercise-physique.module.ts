import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { exercice_physiqueRouting } from './exercise-physique-routing.module';
import { BicepsComponent } from './biceps/biceps.component';
import { GetDataService } from '../services/get-data.service';
import { InterceptorProviders } from './InterceptorProviders';



@NgModule({
  declarations: [
    BicepsComponent
  ],
  imports: [
    CommonModule,
    exercice_physiqueRouting
  ],
  providers: [
    GetDataService,
    InterceptorProviders
  ]
})
export class ExercicePhysiqueModule { }