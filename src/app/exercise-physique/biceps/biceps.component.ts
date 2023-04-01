import { Component } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-biceps',
  templateUrl: './biceps.component.html',
  styleUrls: ['./biceps.component.scss']
})
export class BicepsComponent {
  data: any;
  url: string = 'https://api.api-ninjas.com/v1/exercises?muscle=biceps';

  constructor(private dataService: GetDataService) {}
  index: number = 1;

  getData() {
    this.dataService.getConfig(this.url).subscribe((data) => {
      this.data = data;
      console.log(data);
    });
  }

  ngOnInit() {
    this.getData();
  }
}
