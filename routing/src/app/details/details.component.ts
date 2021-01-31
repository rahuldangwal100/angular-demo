import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { interval, Subscription, timer } from 'rxjs';
import {tap, map,takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {



 


  constructor(private _design : ServiceService) { }
  
  ngOnInit(): void {
    const source=interval(1000);
    let cond1=timer(6000);

    const arr=[{id:1,name:'hardik pandya'},
    {id:2,name:'sachin tenduldar'},
    {id:3,name:'Rohit sharma'},
    {id:4,name:'polard'},
    {id:5,name:'malinga'},
    {id:6,name:'steve rogers'},]

    
    source.pipe(map(res=>arr[res].name),takeUntil(cond1))
    .subscribe(res=>
      {
        this._design.print(res,'elid')
      })
      

    }
  

    
  
    
  }


