import { hv4drwdu } from '../../lib/hv4drwdu/hv4drwdu'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class hv4dpanel {

  private PanelUCoordx = new hv4drwdu;
  private PanelUCoordy = new hv4drwdu;
  private PanelVCoordx = new hv4drwdu;
  private PanelVCoordy = new hv4drwdu;

  UCoordx(): hv4drwdu { return this.PanelUCoordx; }
  UCoordy(): hv4drwdu { return this.PanelUCoordy; }
  VCoordx(): hv4drwdu { return this.PanelVCoordx; }
  VCoordy(): hv4drwdu { return this.PanelVCoordy; }

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

    if (typeof ucoordx != 'undefined') {
      this.PanelUCoordx = new hv4drwdu();

      try {
        this.PanelUCoordx.FromString(ucoordx);
      }
      catch (SyntaxError) {
        throw SyntaxError;
      }

      if (!this.PanelUCoordx.Units().match("px") || !this.PanelUCoordx.Valid() || this.PanelUCoordx.Value() < 0) {
        throw SyntaxError;
      }
    }

    if (typeof ucoordx != 'undefined') {
      try {
        this.PanelUCoordy = new hv4drwdu();
      }
      catch (SyntaxError) {
        throw SyntaxError;
      }

      if (!this.PanelUCoordy.Units().match("px") || !this.PanelUCoordy.Valid() || this.PanelUCoordy.Value() < 0) {
        throw SyntaxError;
      }
    }

    if (typeof ucoordx != 'undefined') {
      try {
        this.PanelVCoordx = new hv4drwdu();
      }
      catch (SyntaxError) {
        throw SyntaxError;
      }

      if (!this.PanelVCoordx.Units().match("px") || !this.PanelVCoordx.Valid() || this.PanelVCoordx.Value() < 0) {
        throw SyntaxError;
      }
    }

    if (typeof ucoordx != 'undefined') {
      try {
        this.PanelVCoordy = new hv4drwdu();
      }
      catch (SyntaxError) {
        throw SyntaxError;
      }

      if (!this.PanelVCoordy.Units().match("px") || !this.PanelVCoordy.Valid() || this.PanelVCoordy.Value() < 0) {
        throw SyntaxError;
      }
    }

    if (this.PanelVCoordx.Value() > this.PanelUCoordx.Value()) throw SyntaxError;

    if (this.PanelVCoordy.Value() > this.PanelUCoordy.Value()) throw SyntaxError;
  }

  Reset(replace: hv4dpanel): void {

    if (!replace.PanelUCoordx.Units().match("px") || !replace.PanelUCoordx.Valid() || replace.PanelUCoordx.Value() < 0) {
      throw SyntaxError;
    }

    if (!replace.PanelUCoordy.Units().match("px") || !replace.PanelUCoordy.Valid() || replace.PanelUCoordy.Value() < 0) {
      throw SyntaxError;
    }

    if (!replace.PanelVCoordx.Units().match("px") || !replace.PanelVCoordx.Valid() || replace.PanelVCoordx.Value() < 0) {
      throw SyntaxError;
    }

    if (!replace.PanelVCoordy.Units().match("px") || !replace.PanelVCoordy.Valid() || replace.PanelVCoordy.Value() < 0) {
      throw SyntaxError;
    }

    if (replace.PanelVCoordx.Value() > replace.PanelUCoordx.Value()) throw SyntaxError;

    if (replace.PanelVCoordy.Value() > replace.PanelUCoordy.Value()) throw SyntaxError;
  }
}
