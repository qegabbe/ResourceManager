import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Sorter } from '../core/services/sorter';
import { TrackByService } from '../core/services/trackby.service';

@Component({ 
  //moduleId: module.id,
  selector: 'employees-grid', 
  template: require('./employees-grid.component.html'),
  styles: [require('./employees.component.css')]
  //When using OnPush detectors, then the framework will check an OnPush 
  //component when any of its input properties changes, when it fires 
  //an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
  //changeDetection: ChangeDetectionStrategy.OnPush 
})
export class EmployeesGridComponent implements OnInit {

  @Input() employees: any[] = [];

  constructor(private sorter: Sorter, public trackby: TrackByService) { }
   
  ngOnInit() {

  }

  sort(prop: string) {
      this.sorter.sort(this.employees, prop);
  }

}
