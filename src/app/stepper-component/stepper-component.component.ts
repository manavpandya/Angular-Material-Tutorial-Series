import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper-component',
  templateUrl: './stepper-component.component.html',
  styleUrls: ['./stepper-component.component.css']
})
export class StepperComponentComponent implements OnInit {

  firstGroup: FormGroup;
  secondGroup: FormGroup;
  thirdGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
    this.secondGroup = this.formBuilder.group({
      email: ['', Validators.required],
      phone: ['', Validators.required]
    });
    this.thirdGroup = this.formBuilder.group({
      gender: [''],
    });
  }

}
