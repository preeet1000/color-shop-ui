
import { Component, ViewEncapsulation } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'ui';
  constructor(private appService:AppService){}
  ngOnInit(){
    this.appService.getEmployees().subscribe(employee=>{
      console.log(employee);
    });
  }
}
