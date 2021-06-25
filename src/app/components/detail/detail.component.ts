import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';
import { map, filter } from 'rxjs/operators';
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public id:any;
  public product:any;
  public showAlert:boolean = false;

  constructor(
    private _api: JsonService,
    private _activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this._activeRoute.snapshot.paramMap.get('id');
    this._api.getProduct(this.id).subscribe(
      response => {
        this.product = response.find( (item:any) =>  item.ProductID == this.id )
      },
      err => {
        console.log(err);
      }
    )
  }

  showAlertBtn(){
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 3000)
  }

}
