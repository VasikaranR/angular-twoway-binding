import { Component } from '@angular/core';
import { NameComponent } from './name/name.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vasi';
   value:string='alpha'
}
