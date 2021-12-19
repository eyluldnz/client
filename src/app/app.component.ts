import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';
  products:any=[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://nonchalant-fang.glitch.me/listing").subscribe((response: any) => {
      this.products=response;
      console.log(response);
    }, error => console.log(error)
    )
  }
}
