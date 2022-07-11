import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  mainMenu: { 
    defaultOptions: Array<any>,
    accessLink : Array<any>
   } = {
    defaultOptions:[],
    accessLink:[]
  }

  customOptions: Array<any> = []

  constructor() { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name : "Home",
        icon: "uil uil-estate",
        router: ["/"]
      },
      {
        name : "Buscar",
        icon: "uil uil-search",
        router: ["/","history"]
      },
      {
        name : "Tu Biblioteca",
        icon: "uil uil-chart",
        router: ["/","favorites"]
      }
    ]
    this.mainMenu.accessLink = [
      {
        name: "Crear Lista",
        icon: "uil uil-plus-square"
      },
      {
        name: "Canciones que te gustan",
        icon: "uil uil-heart-medical"
      }
    ]
    this.customOptions = [
      {
        name: "Mi Lista n°1",
        router: ["/"]
      },
      {
        name: "Mi Lista n°2",
        router: ["/"]
      },
      {
        name: "Mi Lista n°3",
        router: ["/"]
      },
      {
        name: "Mi Lista n°4",
        router: ["/"]
      },
    ]
  }

}
