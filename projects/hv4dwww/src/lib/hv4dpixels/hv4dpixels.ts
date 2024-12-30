import { Component } from '@angular/core';

@Component({
  selector: 'hv4dpixels',
  template: '',
  styles: '',
  standalone: false
})
export class hv4dpixels {

  private PixelsValue: number;
  private PixelsUnits: string;
  private PixelsValid: boolean;

  constructor() {
    this.PixelsValue = 0;
    this.PixelsUnits = 'px';
    this.PixelsValid = false;
  }

  Value(): number { return this.PixelsValue; }
  Units(): string { return this.PixelsUnits; }
  Valid(): boolean { return this.PixelsValid; }

  private buffer: string = "";

  FromString(input: string = "null"): void {

    console.log("FromString: " + input);

    if (input == "") throw new SyntaxError("hv4dpixels FromString: isEmpty.");

    if (input == "null") throw new SyntaxError("hv4dpixels FromString: isNull.");

    this.buffer = input;

    if (input.indexOf("px") !== -1 && input.length < 7) this.SwitchPX();

    else if (input.match("auto")) this.SwitchAuto();

    else if (input.indexOf("*") !== -1 && input.length < 4) this.SwitchStar();

    else if (input.indexOf("%") !== -1 && input.length < 5) this.SwitchPercent();

    else if (!isNaN(Number(input)) && input.length < 5) this.SwitchNumeric();

    else throw new SyntaxError("hv4dpixels FromString: isMalformed.");
  }

  private SwitchPX(): void {

    this.PixelsUnits = "px";

    const pos: number = this.buffer.indexOf("px");

    if ((this.buffer.length - 2) > pos) throw new SyntaxError("hv4dpixels FromString: isMalformed px.");

    const temp: string = this.buffer.substring(0, pos);

    if (!isNaN(Number(temp))) {

      this.PixelsValue = Number(temp);

      this.PixelsValid = true;
    }
    else {

      this.PixelsValue = 0;

      this.PixelsValid = false;

      throw new SyntaxError("hv4dpixels FromString: isMalformed px.");
    }
  }

  private SwitchAuto(): void {
    this.PixelsUnits = "auto";

    this.PixelsValue = -1;

    this.PixelsValid = true;
  }

  private SwitchStar(): void {

    this.PixelsUnits = "*";

    const pos: number = this.buffer.indexOf("*");

    if ((this.buffer.length - 1) > pos) throw new SyntaxError("hv4dpixels FromString: isMalformed *.");

    const temp: string = this.buffer.substring(0, pos);

    if (!isNaN(Number(temp))) {

      this.PixelsValue = Number(temp);

      this.PixelsValid = true;
    }
    else {

      this.PixelsValue = 0;

      this.PixelsValid = false;

      throw new SyntaxError("hv4dpixels FromString: isMalformed *.");
    }
  }

  SwitchPercent(): void {

    this.PixelsUnits = "%";

    const pos: number = this.buffer.indexOf("%");

    if ((this.buffer.length - 1) > pos) throw new SyntaxError("hv4dpixels FromString: isMalformed %.");

    const temp: string = this.buffer.substring(0, pos);

    if (!isNaN(Number(temp))) {

      this.PixelsValue = Number(temp);

      this.PixelsValid = true;
    }
    else {

      this.PixelsValue = 0;

      this.PixelsValid = false;

      throw new SyntaxError("hv4dpixels FromString: isMalformed %.");
    }
  }

  SwitchNumeric(): void {

    this.PixelsUnits = "";

    this.PixelsValue = Number(this.buffer);

    this.PixelsValid = true;
  }

  ToString(): string {

    if (this.PixelsValid == true) return this.PixelsValue.toString() + this.PixelsUnits;
    
    else throw new SyntaxError("hv4dpixels ToString: is not valid.");    
  }
}
