import { Component } from '@angular/core';

@Component({
  selector: 'hv4dhvid',
  template: '',
  styles: '',
  standalone: false
})
export class hv4dhvid {
  private HVID = "";
  constructor() {

    this.HVID = "{00000000-0000-0000-0000-000000000000}";
        
  }

  SetUUID(uid: string = "{00000000-0000-0000-0000-000000000000}"): void {

    this.HVID = uid; 

  }
}
