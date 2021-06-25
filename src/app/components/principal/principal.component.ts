import { Component, OnInit } from '@angular/core';

// Service
import { JsonService } from 'src/app/services/json.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public listProducts:any = [];

  constructor(
    private _api: JsonService
  ) { }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData(){
    this._api.getAllProducts().subscribe(
      response => {
        this.listProducts = response;
      },
      err => {
        console.log(err);
      }
    )
  }

}
