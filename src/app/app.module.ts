import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExercicePhysiqueModule } from './exercise-physique/exercise-physique.module';
import { ActivatedRoute } from '@angular/router';

import { NgxsModule } from '@ngxs/store';
import { dataState } from './store/data.state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ExercicePhysiqueModule,
    NgxsModule.forRoot([dataState]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private route: ActivatedRoute) {}
}
