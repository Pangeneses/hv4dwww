import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
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

  FromString(input: string): void {

    if (input == "") throw SyntaxError;

    if (input.indexOf("px") != -1 && input.length < 5) {
      this.RwduUnits = "px";

      let pos: number = input.indexOf("px");

      let temp: string = input.substring(0, pos);

      if (!isNaN(Number(temp))) {
        this.RwduValue = Number(temp);

        this.RwduValid = true;
      }
      else {
        this.RwduValue = 0;

        this.RwduValid = false;

        throw SyntaxError;
      }
    }
    else if (input.match("auto")) {
      this.RwduUnits = "auto";

      this.RwduValue = -1;

      this.RwduValid = true;
    }
    else if (input.indexOf("%") != -1 && input.length < 5) {
      this.RwduUnits = "%";

      let pos: number = input.indexOf("%");

      let temp: string = input.substring(0, pos);

      if (!isNaN(Number(temp))) {
        this.RwduValue = Number(temp);

        this.RwduValid = true;
      }
      else {
        this.RwduValue = 0;

        this.RwduValid = false;

        throw SyntaxError;
      }
    }
    else {
      this.RwduUnits = "";

      if (!isNaN(Number(input))) {
        this.RwduValue = Number(input);

        this.RwduValid = true;
      }
      else {
        this.RwduValue = 0;

        this.RwduValid = false;

        throw SyntaxError;
      }
    }
  }

  ToString(): string {

    return this.Value.toString() + this.Units

  }
}
