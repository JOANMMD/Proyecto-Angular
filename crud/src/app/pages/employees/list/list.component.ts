import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  navigationExtras: NavigationExtras = {
    state: {
      value : null
    }
  };

  fakeData =[
    {
      name: "Walter",
      lastName:"White",
      email:"walter@gmail.com",
      starDate:"25/02/2022"
    },
    {
      name: "Gustavo",
      lastName:"Fring",
      email:"gustavo@gmail.com",
      starDate:"25/02/2022"
    },
    {
      name: "Saul",
      lastName:"Goodman",
      email:"saul@gmail.com",
      starDate:"25/02/2022"
    },
    {
      name: "Skyler",
      lastName:"White",
      email:"skyler@gmail.com",
      starDate:"25/02/2022"
    }
  ]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onGoToEdit(item: any): void{
    this.navigationExtras.state.value = item;
    this.router.navigate(['edit'], this.navigationExtras);
  }
  onGoToSee(item:any): void{
    this.navigationExtras.state.value = item;
    this.router.navigate(['details',this.navigationExtras]);
  }

  onGoToDelete(item:any): void{
    alert('Deleted');
  }

}
