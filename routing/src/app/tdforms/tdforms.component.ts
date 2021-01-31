import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-tdforms',
  templateUrl: './tdforms.component.html',
  styleUrls: ['./tdforms.component.css']
})
export class TdformsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    loginuser(signinform: NgForm)
     {
       console.log(signinform);
       console.log(signinform.value.emailAddressField);
     }
  

}
