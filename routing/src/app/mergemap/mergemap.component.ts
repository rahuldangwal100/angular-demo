import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { of, from } from 'rxjs';
import { map, delay, mergeAll, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.css']
})
export class MergemapComponent implements OnInit {

  constructor(private _design : ServiceService) { }
  
  getdata(data)
  {
    return of(data +' videos uploaded').pipe(delay(2000))
  }
  

  ngOnInit(): void {
    const source=from(['sci-fi','comedey','horror','news']);


      // ex-1 map

    source.pipe(map(res=>this.getdata(res)))
    .subscribe(res=>res.subscribe(res2=>{
      this._design.print(res2,'elcontainer4')
    }))

      // ex-2 map+merga all
    source.pipe(map(res1=>this.getdata(res1)),mergeAll())
      
    .subscribe(res1=>{
      this._design.print(res1,'elcontainer8')

      })

      //ex -3

      source.pipe(mergeMap(res=>this.getdata(res)))
      .subscribe(res=>{
        this._design.print(res,'elcontainer2')
      })
      



  }

}
