import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'form02',
  templateUrl: './form02.component.html',
  styleUrls: ['./form02.component.css']
})
export class Form02Component implements OnInit {

  nameForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.nameForm = new FormGroup({
      firstname: new FormControl('', {
        validators: Validators.required,
        updateOn: 'change' // change/blur/submit
      }),
      lastname: new FormControl('', {
        validators: Validators.required,
        updateOn: 'change' //change/blur/submit
      })
    });
  }

}
