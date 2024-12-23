import { Component } from '@angular/core';
import { ihv4dwebelement, WEB_ELEMENT_TOKEN } from '../../interface/ihv4dwebelement';

@Component({
  selector: 'hv4dbanner',
  templateUrl: './hv4dbanner.html',
  styleUrls: ['./hv4dbanner.css'],
  providers: [{ provide: WEB_ELEMENT_TOKEN, useExisting: hv4dbanner }]
})
export class hv4dbanner implements ihv4dwebelement {


}
