import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  surveyFormGroup = this.fb.group({
    gender: [''],
    name: ['', [Validators.required, Validators.pattern('[a-z,A-Z]*')]],
    age: ['', Validators.required],
    studyduration: [''],
    averagegrade: ['']
  });

  constructor(private fb: FormBuilder) { }

  //returns a FormControl
  //this is called a getter function and allows you to call a function without the (), almost like calling a var
  get nameformcontrol() {
    return this.surveyFormGroup.get('name');
  }

  onSubmit() {
    console.log(this.surveyFormGroup.value);
  }

}
