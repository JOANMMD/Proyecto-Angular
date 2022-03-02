import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Employee } from '../../models/employee.interface';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  employee: Employee = null;
  employeeForm: FormGroup;
  private isEmail ='/\s+@\s+\.\s+/';

  constructor(private router: Router, private fb: FormBuilder) {
    const navigation = this.router.getCurrentNavigation();
    this.employee = navigation?.extras?.state?.value;
    this.initForm();
   }

  ngOnInit(): void {

    if(typeof this.employee === 'undefined'){
      this.router.navigate(['new']);
    } else {
      this.employeeForm.patchValue(this.employee);
    }
  }

  onSave():void{
    console.log('saved', this.employeeForm.value);
  }

  onGoBackToList():void {
   this.router.navigate(['list']);
  }

  private initForm():void{
    this.employeeForm = this.fb.group({
      name: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.pattern(this.isEmail)]],
      starDate: ['',[Validators.required]],
    })
  }

}
