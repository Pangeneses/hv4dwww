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

  FromString(input: string): void {

    console.log("FromString: " + input);

    if (input == "") console.log("hv4drwdu FromString: isNull.");

    if (input.indexOf("px") != -1 && input.length < 7) {
      console.log("px");

      this.RwduUnits = "px";

      const pos: number = input.indexOf("px");

      console.log(pos.toString());

      const temp: string = input.substring(0, pos);

      console.log(temp);

      if (!isNaN(Number(temp))) {
        this.RwduValue = Number(temp);

        this.RwduValid = true;
      }
      else {
        this.RwduValue = 0;

        this.RwduValid = false;

        console.log("hv4drwdu FromString: isMalformed px.");
      }
    }
    else if (input.match("auto")) {
      console.log("auto");

      this.RwduUnits = "auto";

      this.RwduValue = -1;

      this.RwduValid = true;
    }
    else if (input.indexOf("%") != -1 && input.length < 5) {
      console.log("%");

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

        console.log("hv4drwdu FromString: isMalformed %.");
      }
    }
    else {
      console.log("else");

      this.RwduUnits = "";

      if (!isNaN(Number(input))) {
        this.RwduValue = Number(input);

        this.RwduValid = true;
      }
      else {
        this.RwduValue = 0;

        this.RwduValid = false;

        console.log("hv4drwdu FromString: isMalformed numeric.");
      }
    }
  }

  ToString(): string {

    return this.Value.toString() + this.Units

  }
}
