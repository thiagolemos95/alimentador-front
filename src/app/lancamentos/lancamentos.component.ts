import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Component({
  selector: "app-lancamentos",
  templateUrl: "./lancamentos.component.html",
  styleUrls: ["./lancamentos.component.css"]
})
export class LancamentosComponent implements OnInit {
  lancamentos: any;
  url: string = "https://alimentador01.herokuapp.com/api/lancamentos";
  constructor(private http: Http) {}

  getLancamentos() {
    this.http
      .get(this.url)
      .map(response => response.json())
      .subscribe(r =>  this.lancamentos = r);

  }

  ngOnInit() {
    this.getLancamentos();
  }
}
