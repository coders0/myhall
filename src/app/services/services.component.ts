import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map'
@Injectable()
@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private _http :Http) { }

  GetPosts(){
    return this._http.get('assets/image/con.json').map(res=>res.json());
  }
  ngOnInit() {
  }


}
