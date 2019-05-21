import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public homeLink: string = '/info';
  public guildWarLink: string = '/guildwar/';
  public accountLink: string = '/myaccount/';

  ngOnInit(){
    
  }
}
