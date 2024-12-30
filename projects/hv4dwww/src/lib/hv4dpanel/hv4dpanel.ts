import { hv4dpixels } from '../hv4dpixels/hv4dpixels'
import { Component } from '@angular/core';

@Component({
  selector: 'hv4dpanel',
  template: '',
  styles: '',
  standalone: false
})
export class hv4dpanel {

  private PanelUCoordx = new hv4dpixels;
  private PanelUCoordy = new hv4dpixels;
  private PanelVCoordx = new hv4dpixels;
  private PanelVCoordy = new hv4dpixels;

  UCoordx(): hv4dpixels { return this.PanelUCoordx; }
  UCoordy(): hv4dpixels { return this.PanelUCoordy; }
  VCoordx(): hv4dpixels { return this.PanelVCoordx; }
  VCoordy(): hv4dpixels { return this.PanelVCoordy; }

  constructor() {
    this.PanelUCoordx.FromString("0px");
    this.PanelUCoordy.FromString("0px");
    this.PanelVCoordx.FromString("0px");
    this.PanelVCoordy.FromString("0px");
  }

  SetPanel(
    ucoordx?: string,
    ucoordy?: string,
    vcoordx?: string,
    vcoordy?: string): void {

    if (typeof ucoordx !== 'undefined') {

      this.PanelUCoordx = new hv4dpixels();

      try {
        this.PanelUCoordx.FromString(ucoordx);
      }
      catch (error: any) {

        if (error instanceof SyntaxError) {

          this.PanelUCoordx.FromString("0px");
          this.PanelUCoordy.FromString("0px");
          this.PanelVCoordx.FromString("0px");
          this.PanelVCoordy.FromString("0px");

          console.log("ucoordx: " + ucoordx);
        }
      }

      if (!this.PanelUCoordx.Units().match("px") || !this.PanelUCoordx.Valid() || this.PanelUCoordx.Value() < 0) {
        throw new SyntaxError(this.PanelUCoordx.Units() + " " + this.PanelUCoordx.Value());
      }
    }

    if (typeof ucoordy !== 'undefined') {

      this.PanelUCoordy = new hv4dpixels();

      try {
        this.PanelUCoordy.FromString(ucoordy);
      }
      catch (error: any) {

        if (error instanceof SyntaxError) {

          this.PanelUCoordx.FromString("0px");
          this.PanelUCoordy.FromString("0px");
          this.PanelVCoordx.FromString("0px");
          this.PanelVCoordy.FromString("0px");

          console.log("ucoordy:" + ucoordy);
        }
      }

      if (!this.PanelUCoordy.Units().match("px") || !this.PanelUCoordy.Valid() || this.PanelUCoordy.Value() < 0) {
        throw new SyntaxError(this.PanelUCoordy.Units() + " " + this.PanelUCoordy.Value());
      }
    }

    if (typeof vcoordx !== 'undefined') {

      this.PanelVCoordx = new hv4dpixels();

      try {
        this.PanelVCoordx.FromString(vcoordx);
      }
      catch (error: any) {

        if (error instanceof SyntaxError) {

          this.PanelUCoordx.FromString("0px");
          this.PanelUCoordy.FromString("0px");
          this.PanelVCoordx.FromString("0px");
          this.PanelVCoordy.FromString("0px");

          console.log("vcoordx: " + vcoordx);
        }
      }

      if (!this.PanelVCoordx.Units().match("px") || !this.PanelVCoordx.Valid() || this.PanelVCoordx.Value() < 0) {
        throw new SyntaxError(this.PanelVCoordx.Units() + " " + this.PanelVCoordx.Value());
      }
    }

    if (typeof vcoordy !== 'undefined') {

      this.PanelVCoordy = new hv4dpixels();

      try {
        this.PanelVCoordy.FromString(vcoordy);
      }
      catch (error: any) {

        if (error instanceof SyntaxError) {

          this.PanelUCoordx.FromString("0px");
          this.PanelUCoordy.FromString("0px");
          this.PanelVCoordx.FromString("0px");
          this.PanelVCoordy.FromString("0px");

          console.log("vcoordy: " + vcoordy);
        }
      }

      if (!this.PanelVCoordy.Units().match("px") || !this.PanelVCoordy.Valid() || this.PanelVCoordy.Value() < 0) {
        throw new SyntaxError(this.PanelVCoordy.Units() + " " + this.PanelVCoordy.Value());
      }
    }

    if (this.PanelUCoordx.Value() > this.PanelVCoordx.Value()) throw new SyntaxError("hv4dpanel SetPanel: isMalformed panel.");

    if (this.PanelUCoordy.Value() > this.PanelVCoordy.Value()) throw new SyntaxError("hv4dpanel SetPanel: isMalformed panel.");
  }

  Reset(replace: hv4dpanel): void {

    if (!replace.PanelUCoordx.Units().match("px") || !replace.PanelUCoordx.Valid() || replace.PanelUCoordx.Value() < 0) {
      throw new SyntaxError("hv4dpanel Reset: isMalformed px.");
    }

    if (!replace.PanelUCoordy.Units().match("px") || !replace.PanelUCoordy.Valid() || replace.PanelUCoordy.Value() < 0) {
      throw new SyntaxError("hv4dpanel Reset: isMalformed px.");
    }

    if (!replace.PanelVCoordx.Units().match("px") || !replace.PanelVCoordx.Valid() || replace.PanelVCoordx.Value() < 0) {
      throw new SyntaxError("hv4dpanel Reset: isMalformed px.");
    }

    if (!replace.PanelVCoordy.Units().match("px") || !replace.PanelVCoordy.Valid() || replace.PanelVCoordy.Value() < 0) {
      throw new SyntaxError("hv4dpanel Reset: isMalformed px.");
    }

    if (replace.PanelVCoordx.Value() > replace.PanelUCoordx.Value()) throw console.log("hv4dpanel Reset: isMalformed panel.");

    if (replace.PanelVCoordy.Value() > replace.PanelUCoordy.Value()) throw console.log("hv4dpanel Reset: isMalformed panel.");
  }
}
