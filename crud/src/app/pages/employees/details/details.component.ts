import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Employee } from 'src/app/shared/models/employee.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  navigationExtras: NavigationExtras = {

    employee: Employee = null;

    state: {
      value : null
    }
  };



  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.employee = navigation?.extras?.state?.value;
   }

  ngOnInit(): void {
    if (typeof this.employee === 'undefined'){
      this.router.navigate(['list']);
    }
  }

  onGoToEdit(): void{
    this.navigationExtras.state.value = this.employee;
    this.router.navigate(['edit'], this.navigationExtras);
  }

  onDelete():void{
    alert('Delete');
  }

  onGoBackToList():void{
    this.router.navigate(['list']);
  }

}
