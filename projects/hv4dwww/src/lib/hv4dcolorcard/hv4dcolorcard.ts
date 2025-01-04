import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hv4dcolorcard',
  template: '',
  styles: '',
  standalone: false
})
export class hv4dcolorcard implements OnInit {

  @Input('Color') Color?: string;

  id: string = "";
  hex: string = "";
  dec: string = "";
  alpha: string = "";

  constructor() { this.PixelColorsInit(); }

  ngOnInit() {

    if (typeof this.Color !== 'undefined') {

      if (this.ColorCard(this.Color) == -1) {

        this.NewCard(this.Color);
      }
    }
  }

  public NewCard(idIn: string = "", hexIn: string = "", decIn: string = ""): void {

    console.log("FromString: " + idIn + " " + hexIn + " " + decIn);

    if (hexIn == "" && decIn == "") throw new SyntaxError("hv4dcolor FromString: isEmpty.");

    if (hexIn !== "" && decIn !== "") throw new SyntaxError("hv4dcolor FromString: supply one.");

    if (idIn !== "") {

      this.id = idIn;

    }
    else {

      /* set id to random uuid */

    }

    if (hexIn !== "") {

      let index = this.ColorCard(hexIn);

      if (index !== -1) {

        this.id = hv4dcolorcard.PixelColors[index].id;
        this.hex = hv4dcolorcard.PixelColors[index].hex;
        this.dec = hv4dcolorcard.PixelColors[index].dec;
        this.alpha = hv4dcolorcard.PixelColors[index].alpha;

        return;
      }

      if (!this.isAlphaNumeric(hexIn.substring(1, hexIn.length - 1))) throw new SyntaxError("hv4dcolor FromString: isMalformed.");

      if (hexIn.length == 7) {

        this.alpha = "#FF";

        this.hex = hexIn;

      }
      else if (hexIn.length == 9) {

        this.alpha = hexIn.substring(8, 2);

        this.hex = hexIn.substring(0, 7);

      }

      this.dec = "(";

      let decimal!: string;

      decimal = parseInt(hexIn.substring(1, 2), 16)?.valueOf().toString();
      this.dec += decimal;

      decimal = parseInt(hexIn.substring(3, 2), 16)?.valueOf().toString();
      this.dec += decimal;

      decimal = parseInt(hexIn.substring(5, 2), 16)?.valueOf().toString();
      this.dec += decimal;

      if (hexIn.length == 9) {

        decimal = parseInt(hexIn.substring(7, 2), 16)?.valueOf().toString();
        this.dec += decimal;
      }

      this.dec = ")";
    }

    if (decIn !== "") {

      let index = this.ColorCard(hexIn);

      if (index !== -1) {

        this.id = hv4dcolorcard.PixelColors[index].id;
        this.hex = hv4dcolorcard.PixelColors[index].hex;
        this.dec = hv4dcolorcard.PixelColors[index].dec;
        this.alpha = hv4dcolorcard.PixelColors[index].alpha;

        return; 
      }

      this.hex = "#";

      const validate = /^\((\d{1,3},){2,3}\d{1,3}\)$/;

      if (!validate.test(decIn)) throw new SyntaxError("hv4dcolor FromString: isMalformed.");

      const regex = /\d+/g;

      const matches = decIn?.match(regex);

      if (matches) {

        for (let i = 0; i < matches.length; i++) {

          let colorcomp = "";

          if (i < 3) {

            colorcomp = Number(matches[i]).toString(16);

            if (colorcomp.length > 2) throw new SyntaxError("hv4dcolor FromString: isMalformed.");

            this.hex += colorcomp;

          }
          else if (i == 3) {

            colorcomp = Number(matches[i]).toString(16);

            if (colorcomp.length > 2) throw new SyntaxError("hv4dcolor FromString: isMalformed.");

            this.alpha += "#" + colorcomp;
          }
          else {

            throw new SyntaxError("hv4dcolor FromString: isMalformed.");

          }
        }
      }
    }

    hv4dcolorcard.PixelColors.push(this);
  }

  private isAlphaNumeric(buffer: string = ""): boolean {

    if (buffer == "") return false;

    var code, i, len;

    for (i = 0, len = buffer.length; i < len; i++) {

      code = buffer.charCodeAt(i);

      // numeric (0-9); upper alpha (A-Z); lower alpha (a-z)
      if (!(code > 47 && code < 58) && !(code > 64 && code < 91) && !(code > 96 && code < 123)) {

        return false;
      }

    }

    return true;
  }

  public ColorCard(input: string = ""): number {

    if (input == "") return -1;

    if (input.at(0) == "(") {

      for (let i: number = 0; i < hv4dcolorcard.PixelColors.length; i++) {

        if (hv4dcolorcard.PixelColors[i].dec.at(1) == input.at(1)) {

          if (hv4dcolorcard.PixelColors[i].dec.match(input)) return i;

        }
      }
    }

    if (input.at(0) == "#") {

      if (input.length == 9) {

        input = input.substring(0, 7);
      }

      if (!this.isAlphaNumeric(input.substring(1, input.length - 1))) throw new SyntaxError("hv4dcolorcard ColorCard: isMalformed.")

      for (let i: number = 0; i < hv4dcolorcard.PixelColors.length; i++) {

        if (hv4dcolorcard.PixelColors[i].hex.at(1) == input.at(1)) {

          if (hv4dcolorcard.PixelColors[i].hex.match(input)) return i;

        }
      }
    }

    for (let i: number = 0; i < hv4dcolorcard.PixelColors.length; i++) {

      if (hv4dcolorcard.PixelColors[i].id.at(0) == input.at(0)) {

        if (hv4dcolorcard.PixelColors[i].id.match(input)) return i;

      }
    }

    return -1;
  }

  toDecimal(): string {

    if (this.alpha !== "") {

      return this.dec.substring(0, this.dec.length - 1) + "," + parseInt(this.alpha.substring(1, 2), 16)?.valueOf().toString() + ")";
    }
    else {

      return this.dec;
    }

  }

  toHexA(): string {

    if (this.alpha !== "") {

      return this.hex + this.alpha.substring(1, 2);
    }
    else {

      return this.hex;
    }

  }

  public static PixelColors: hv4dcolorcard[] = [];

  public PixelColorsInit(): void {

    if (this.ColorCard("#800000") !== -1) return;

    for (let i = 0; i < 144; i++) hv4dcolorcard.PixelColors.push(new hv4dcolorcard);

    hv4dcolorcard.PixelColors[0].NewCard("maroon", "#800000");
    hv4dcolorcard.PixelColors[1].NewCard("dark red", "#8B0000");
    hv4dcolorcard.PixelColors[2].NewCard("brown", "#A52A2A");
    hv4dcolorcard.PixelColors[3].NewCard("firebrick", "#B22222");
    hv4dcolorcard.PixelColors[4].NewCard("crimson", "#DC143C");
    hv4dcolorcard.PixelColors[5].NewCard("red", "#FF0000");
    hv4dcolorcard.PixelColors[6].NewCard("tomato", "#FF6347");
    hv4dcolorcard.PixelColors[7].NewCard("coral", "#FF7F50");
    hv4dcolorcard.PixelColors[8].NewCard("indian red", "#CD5C5C");
    hv4dcolorcard.PixelColors[9].NewCard("light coral", "#F08080");
    hv4dcolorcard.PixelColors[10].NewCard("dark salmon", "#E9967A");
    hv4dcolorcard.PixelColors[11].NewCard("salmon", "#FA8072");
    hv4dcolorcard.PixelColors[12].NewCard("light salmon", "#FFA07A");
    hv4dcolorcard.PixelColors[13].NewCard("orange red", "#FF4500");
    hv4dcolorcard.PixelColors[14].NewCard("dark orange", "#FF8C00");
    hv4dcolorcard.PixelColors[15].NewCard("orange", "#FFA500");
    hv4dcolorcard.PixelColors[16].NewCard("gold", "#FFD700");
    hv4dcolorcard.PixelColors[17].NewCard("dark golden rod", "#B8860B");
    hv4dcolorcard.PixelColors[18].NewCard("golden rod", "#DAA520");
    hv4dcolorcard.PixelColors[19].NewCard("pale golden rod", "#EEE8AA");
    hv4dcolorcard.PixelColors[20].NewCard("dark khaki", "#BDB76B");
    hv4dcolorcard.PixelColors[21].NewCard("khaki", "#F0E68C");
    hv4dcolorcard.PixelColors[22].NewCard("olive", "#808000");
    hv4dcolorcard.PixelColors[23].NewCard("yellow", "#FFFF00");
    hv4dcolorcard.PixelColors[24].NewCard("yellow green", "#9ACD32");
    hv4dcolorcard.PixelColors[25].NewCard("dark olive green", "#556B2F");
    hv4dcolorcard.PixelColors[26].NewCard("olive drab", "#6B8E23");
    hv4dcolorcard.PixelColors[27].NewCard("lawn green", "#7CFC00");
    hv4dcolorcard.PixelColors[28].NewCard("chartreuse", "#7FFF00");
    hv4dcolorcard.PixelColors[29].NewCard("green yellow", "#ADFF2F");
    hv4dcolorcard.PixelColors[30].NewCard("dark green", "#006400");
    hv4dcolorcard.PixelColors[31].NewCard("green", "#008000");
    hv4dcolorcard.PixelColors[32].NewCard("forest green", "#228B22");
    hv4dcolorcard.PixelColors[33].NewCard("lime", "#00FF00");
    hv4dcolorcard.PixelColors[34].NewCard("lime green", "#32CD32");
    hv4dcolorcard.PixelColors[35].NewCard("light green", "#90EE90");
    hv4dcolorcard.PixelColors[36].NewCard("pale green", "#98FB98");
    hv4dcolorcard.PixelColors[37].NewCard("dark sea green", "#8FBC8F");
    hv4dcolorcard.PixelColors[38].NewCard("medium spring green	", "#00FA9A");
    hv4dcolorcard.PixelColors[39].NewCard("spring green", "#00FF7F");
    hv4dcolorcard.PixelColors[40].NewCard("sea green", "#2E8B57");
    hv4dcolorcard.PixelColors[41].NewCard("medium aqua marine", "#66CDAA");
    hv4dcolorcard.PixelColors[42].NewCard("medium sea green", "#3CB371");
    hv4dcolorcard.PixelColors[43].NewCard("light sea green", "#20B2AA");
    hv4dcolorcard.PixelColors[44].NewCard("dark slate gray", "#2F4F4F");
    hv4dcolorcard.PixelColors[45].NewCard("teal", "#008080");
    hv4dcolorcard.PixelColors[46].NewCard("dark cyan", "#008B8B");
    hv4dcolorcard.PixelColors[47].NewCard("aqua", "#00FFFF");
    hv4dcolorcard.PixelColors[48].NewCard("cyan", "#00FFFF");
    hv4dcolorcard.PixelColors[49].NewCard("light cyan", "#E0FFFF");
    hv4dcolorcard.PixelColors[50].NewCard("dark turquoise", "#00CED1");
    hv4dcolorcard.PixelColors[51].NewCard("turquoise", "#40E0D0");
    hv4dcolorcard.PixelColors[52].NewCard("medium turquoise", "#48D1CC");
    hv4dcolorcard.PixelColors[53].NewCard("pale turquoise", "#AFEEEE");
    hv4dcolorcard.PixelColors[54].NewCard("aqua marine", "#7FFFD4");
    hv4dcolorcard.PixelColors[55].NewCard("powder blue", "#B0E0E6");
    hv4dcolorcard.PixelColors[56].NewCard("cadet blue", "#5F9EA0");
    hv4dcolorcard.PixelColors[57].NewCard("steel blue", "#4682B4");
    hv4dcolorcard.PixelColors[58].NewCard("corn flower blue", "#6495ED");
    hv4dcolorcard.PixelColors[59].NewCard("deep sky blue", "#00BFFF");
    hv4dcolorcard.PixelColors[60].NewCard("dodger blue", "#1E90FF");
    hv4dcolorcard.PixelColors[61].NewCard("light blue", "#ADD8E6");
    hv4dcolorcard.PixelColors[62].NewCard("sky blue", "#87CEEB");
    hv4dcolorcard.PixelColors[63].NewCard("light sky blue", "#87CEFA");
    hv4dcolorcard.PixelColors[64].NewCard("midnight blue", "#191970");
    hv4dcolorcard.PixelColors[65].NewCard("navy", "#000080");
    hv4dcolorcard.PixelColors[66].NewCard("dark blue", "#00008B");
    hv4dcolorcard.PixelColors[67].NewCard("medium blue", "#0000CD");
    hv4dcolorcard.PixelColors[68].NewCard("blue", "#0000FF");
    hv4dcolorcard.PixelColors[69].NewCard("royal blue", "#4169E1");
    hv4dcolorcard.PixelColors[70].NewCard("blue violet", "#8A2BE2");
    hv4dcolorcard.PixelColors[71].NewCard("indigo", "#4B0082");
    hv4dcolorcard.PixelColors[72].NewCard("dark slate blue", "#483D8B");
    hv4dcolorcard.PixelColors[73].NewCard("slate blue", "#6A5ACD");
    hv4dcolorcard.PixelColors[74].NewCard("medium slate blue", "#7B68EE");
    hv4dcolorcard.PixelColors[75].NewCard("medium purple", "#9370DB");
    hv4dcolorcard.PixelColors[76].NewCard("dark magenta", "#8B008B");
    hv4dcolorcard.PixelColors[77].NewCard("dark violet", "#9400D3");
    hv4dcolorcard.PixelColors[78].NewCard("dark orchid", "#9932CC");
    hv4dcolorcard.PixelColors[79].NewCard("medium orchid", "#BA55D3");
    hv4dcolorcard.PixelColors[80].NewCard("purple", "#800080");
    hv4dcolorcard.PixelColors[81].NewCard("thistle", "#D8BFD8");
    hv4dcolorcard.PixelColors[82].NewCard("plum", "#DDA0DD");
    hv4dcolorcard.PixelColors[83].NewCard("violet", "#EE82EE");
    hv4dcolorcard.PixelColors[84].NewCard("magenta", "#FF00FF");
    hv4dcolorcard.PixelColors[85].NewCard("fuchsia", "#FF00FF");
    hv4dcolorcard.PixelColors[86].NewCard("orchid", "#DA70D6");
    hv4dcolorcard.PixelColors[87].NewCard("medium violet red", "#C71585");
    hv4dcolorcard.PixelColors[88].NewCard("pale violet red", "#DB7093");
    hv4dcolorcard.PixelColors[89].NewCard("deep pink", "#FF1493");
    hv4dcolorcard.PixelColors[90].NewCard("hot pink", "#FF69B4");
    hv4dcolorcard.PixelColors[91].NewCard("light pink", "#FFB6C1");
    hv4dcolorcard.PixelColors[92].NewCard("pink", "#FFC0CB");
    hv4dcolorcard.PixelColors[93].NewCard("antique white", "#FAEBD7");
    hv4dcolorcard.PixelColors[94].NewCard("beige", "#F5F5DC");
    hv4dcolorcard.PixelColors[95].NewCard("bisque", "#FFE4C4");
    hv4dcolorcard.PixelColors[96].NewCard("blanched almond", "#FFEBCD");
    hv4dcolorcard.PixelColors[97].NewCard("wheat", "#F5DEB3");
    hv4dcolorcard.PixelColors[98].NewCard("corn silk", "#FFF8DC");
    hv4dcolorcard.PixelColors[99].NewCard("lemon chiffon", "#FFFACD");
    hv4dcolorcard.PixelColors[100].NewCard("light golden rod yellow", "#FAFAD2");
    hv4dcolorcard.PixelColors[101].NewCard("light yellow", "#FFFFE0");
    hv4dcolorcard.PixelColors[102].NewCard("saddle brown", "#8B4513");
    hv4dcolorcard.PixelColors[103].NewCard("sienna", "#A0522D");
    hv4dcolorcard.PixelColors[104].NewCard("chocolate", "#D2691E");
    hv4dcolorcard.PixelColors[105].NewCard("peru", "#CD853F");
    hv4dcolorcard.PixelColors[106].NewCard("sandy brown", "#F4A460");
    hv4dcolorcard.PixelColors[107].NewCard("burly wood", "#DEB887");
    hv4dcolorcard.PixelColors[108].NewCard("tan", "#D2B48C");
    hv4dcolorcard.PixelColors[109].NewCard("rosy brown", "#BC8F8F");
    hv4dcolorcard.PixelColors[110].NewCard("moccasin", "#FFE4B5");
    hv4dcolorcard.PixelColors[111].NewCard("navajo white", "#FFDEAD");
    hv4dcolorcard.PixelColors[112].NewCard("peach puff", "#FFDAB9");
    hv4dcolorcard.PixelColors[113].NewCard("misty rose", "#FFE4E1");
    hv4dcolorcard.PixelColors[114].NewCard("lavender blush", "#FFF0F5");
    hv4dcolorcard.PixelColors[115].NewCard("linen", "#FAF0E6");
    hv4dcolorcard.PixelColors[116].NewCard("old lace", "#FDF5E6");
    hv4dcolorcard.PixelColors[117].NewCard("papaya whip", "#FFEFD5");
    hv4dcolorcard.PixelColors[118].NewCard("sea shell", "#FFF5EE");
    hv4dcolorcard.PixelColors[119].NewCard("mint cream", "#F5FFFA");
    hv4dcolorcard.PixelColors[120].NewCard("slate gray", "#708090");
    hv4dcolorcard.PixelColors[121].NewCard("light slate gray", "#778899");
    hv4dcolorcard.PixelColors[122].NewCard("light steel blue", "#B0C4DE");
    hv4dcolorcard.PixelColors[123].NewCard("lavender", "#E6E6FA");
    hv4dcolorcard.PixelColors[124].NewCard("floral white", "#FFFAF0");
    hv4dcolorcard.PixelColors[125].NewCard("alice blue", "#F0F8FF");
    hv4dcolorcard.PixelColors[126].NewCard("ghost white", "#F8F8FF");
    hv4dcolorcard.PixelColors[127].NewCard("honeydew", "#F0FFF0");
    hv4dcolorcard.PixelColors[128].NewCard("ivory", "#FFFFF0");
    hv4dcolorcard.PixelColors[129].NewCard("azure", "#F0FFFF");
    hv4dcolorcard.PixelColors[130].NewCard("snow", "#FFFAFA");
    hv4dcolorcard.PixelColors[131].NewCard("black", "#000000");
    hv4dcolorcard.PixelColors[132].NewCard("dim gray", "#696969");
    hv4dcolorcard.PixelColors[133].NewCard("dim grey", "#696969");
    hv4dcolorcard.PixelColors[134].NewCard("gray ", "#808080");
    hv4dcolorcard.PixelColors[135].NewCard("grey", "#808080");
    hv4dcolorcard.PixelColors[136].NewCard("dark gray", "#A9A9A9");
    hv4dcolorcard.PixelColors[137].NewCard("dark grey", "#A9A9A9");
    hv4dcolorcard.PixelColors[138].NewCard("silver", "#C0C0C0");
    hv4dcolorcard.PixelColors[139].NewCard("light gray", "#D3D3D3");
    hv4dcolorcard.PixelColors[140].NewCard("light grey", "#D3D3D3");
    hv4dcolorcard.PixelColors[141].NewCard("gainsboro", "#DCDCDC");
    hv4dcolorcard.PixelColors[142].NewCard("white smoke", "#F5F5F5");
    hv4dcolorcard.PixelColors[143].NewCard("white", "#FFFFFF");
  }
}

