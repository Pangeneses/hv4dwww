import { Component, ContentChild } from '@angular/core';
import { hv4dcolorcard } from '../hv4dcolorcard/hv4dcolorcard'

@Component({
  selector: 'hv4dgradstop',
  template: '',
  styles: '',
  standalone: false
})
export class hv4dgradstop {

  @ContentChild('AnchorPoint') AnchorPoint?: hv4dcolorcard;
  @ContentChild('LHControlPoint') LHControlPoint?: hv4dcolorcard;
  @ContentChild('RHControlPoint') RHControlPoint?: hv4dcolorcard; 

  constructor() { }

  ngOnInit() {

    if (typeof this.AnchorPoint === 'undefined') {

      this.AnchorPoint = new hv4dcolorcard;

      this.AnchorPoint.NewCard('white', '', '');

    }

    if (typeof this.LHControlPoint === 'undefined') {

      this.LHControlPoint = new hv4dcolorcard;

      this.LHControlPoint.NewCard('white', '', '');

    }

    if (typeof this.RHControlPoint === 'undefined') {

      this.RHControlPoint = new hv4dcolorcard;

      this.RHControlPoint.NewCard('white', '', '');

    }
  }
}
