import { Component } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';
import { Select, Store } from '@ngxs/store';
import { getDataAction } from 'src/app/store/data.actions';
import { dataState } from 'src/app/store/data.state';
import { Observable } from 'rxjs';
import { dataInterface } from 'src/app/models/data.model';

@Component({
  selector: 'app-biceps',
  templateUrl: './biceps.component.html',
  styleUrls: ['./biceps.component.scss']
})
export class BicepsComponent {

  data: dataInterface[] = [];

  isLoading: boolean = false;

  constructor(private dataService: GetDataService,
              private store: Store) {}

  ngOnInit() {
    this.getAction();
  }

  @Select(dataState.getDataSelector) dataObj$!: Observable<dataInterface[]> | undefined
  getAction(){
    this.dataObj$?.subscribe((data: any) => {
      this.data = data;
      this.isLoading = false;
    })
    if(this.data.length === 0)
    {
      this.isLoading = true;
      this.store.dispatch(new getDataAction);
    }

  }

}
