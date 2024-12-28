import { Component } from '@angular/core';

@Component({
  selector: 'hv4drwdu',
  template: '',
  styles: '',
  standalone: false
})
export class hv4drwdu {

  private RwduValue: number;
  private RwduUnits: string;
  private RwduValid: boolean;

  constructor() {
    this.RwduValue = 0;
    this.RwduUnits = 'px';
    this.RwduValid = false;
  }

  Value(): number { return this.RwduValue; }
  Units(): string { return this.RwduUnits; }
  Valid(): boolean { return this.RwduValid; }

  FromString(input: string = "null"): void {

    console.log("FromString: " + input);

    if (input == "") throw new SyntaxError("hv4drwdu FromString: isNull.");

    if (input.indexOf("px") !== -1 && input.length < 7) {

      this.RwduUnits = "px";

      const pos: number = input.indexOf("px");

      const temp: string = input.substring(0, pos);

      if (!isNaN(Number(temp))) {
        this.RwduValue = Number(temp);

        this.RwduValid = true;
      }
      else {
        this.RwduValue = 0;

        this.RwduValid = false;

        throw new SyntaxError("hv4drwdu FromString: isMalformed px.");
      }
    }
    else if (input.match("auto")) {

      this.RwduUnits = "auto";

      this.RwduValue = -1;

      this.RwduValid = true;
    }
    else if (input.indexOf("%") !== -1 && input.length < 5) {

      this.RwduUnits = "%";

      const pos: number = input.indexOf("%");

      const temp: string = input.substring(0, pos);

      if (!isNaN(Number(temp))) {
        this.RwduValue = Number(temp);

        this.RwduValid = true;
      }
      else {
        this.RwduValue = 0;

        this.RwduValid = false;

        throw new SyntaxError("hv4drwdu FromString: isMalformed %.");
      }
    }
    else {

      this.RwduUnits = "";

      if (!isNaN(Number(input))) {
        console.log(input);

        this.RwduValue = Number(input);

        this.RwduValid = true;
      }
      else {
        console.log("isMalformed");

        this.RwduValue = 0;

        this.RwduValid = false;

        throw new SyntaxError("hv4drwdu FromString: isMalformed numeric.");
      }
    }
  }

  ToString(): string {

    if (this.RwduValid == true) {
      return this.RwduValue.toString() + this.RwduUnits;
    }
    else {
      throw new SyntaxError("");
    }
  }
}
