import { Component, OnInit, Input, ContentChildren, QueryList } from '@angular/core';
import { hv4dcolorcard } from '../hv4dcolorcard/hv4dcolorcard'
import { hv4dgradstop } from '../hv4dgradstop/hv4dgradstop'

@Component({
  selector: 'hv4dlineargrad',
  template: '',
  styles: '',
  standalone: false
})
export class hv4dlineargrad implements OnInit  {

  @ContentChildren(hv4dgradstop) GradientStops?: QueryList<hv4dgradstop>;
  @Input("GradWidth") GradWidth: string = "*";

  Stops: hv4dgradstop[] = []; 

  constructor() { }

  ngOnInit() {

    if (typeof this.GradientStops != 'undefined') {

      this.Stops = this.GradientStops.toArray();

    }

    else {

      this.Stops.push(new hv4dgradstop());

      this.Stops[0].AnchorPoint?.NewCard("white");
      this.Stops[0].LHControlPoint?.NewCard("white");
      this.Stops[0].RHControlPoint?.NewCard("white");

    }
  }
}
