import {
  Component,
  Input,
  ContentChildren,
  QueryList,
  Inject,
  forwardRef,
  OnInit,
  AfterContentInit,
  AfterViewInit
} from '@angular/core';
import { hv4drwdu } from '../../lib/hv4drwdu/hv4drwdu'
import { hv4dpanel } from '../../lib/hv4dpanel/hv4dpanel'
import { ihv4dwebelement, WEB_ELEMENT_TOKEN } from '../../interface/ihv4dwebelement';

@Component({
  selector: 'hv4dgridcolumn',
  templateUrl: './hv4dgridcolumn.html',
  styleUrls: ['./hv4dgridcolumn.css'],
  standalone: false
})
export class hv4dgridcolumn implements OnInit {
  @Input('MinWidth') MinWidth: string = "0px";
  @Input('MaxWidth') MaxWidth: string = "1920px";
  @Input('Width') Width: string = "auto";

  private MinWidthSz: string;
  private MaxWidthSz: string;
  private WidthSz: string;
  constructor() {
    console.log("constructor col");

    this.MinWidthSz = "0px";
    this.MaxWidthSz = "1920px";
    this.WidthSz = "auto";
  }

  ngOnInit() {
    console.log("ngOnInit col");

    this.MinWidthSz = this.MinWidth;
    this.MaxWidthSz = this.MaxWidth;
    this.WidthSz = this.Width;
  }

  Override(
    minwidth: string = "0px",
    maxwidth: string = "1920px",
    width: string = "auto"): void {
    console.log("Override col");

    this.MinWidthSz = minwidth;
    this.MaxWidthSz = maxwidth;
    this.WidthSz = width;
  }

  public ActualWidthSz: string = '';
}
@Component({
  selector: 'hv4dgridcolumns',
  templateUrl: './hv4dgridcolumns.html',
  styleUrls: ['./hv4dgridcolumns.css'],
  standalone: false
})
export class hv4dgridcolumns implements AfterContentInit {
  @ContentChildren(hv4dgridcolumn) items!: QueryList<hv4dgridcolumn>;

  ColDefinitions: hv4dgridcolumn[];
  constructor() {
    console.log("constructor cols");

    this.ColDefinitions = [];

    this.ColDefinitions.push(new hv4dgridcolumn);

    this.ColDefinitions[0].Override("0px", "1920px", "auto");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit cols");

    if (this.items.length > 0) this.ColDefinitions = this.items.toArray();

  }

  AddColumn(column: hv4dgridcolumn): void {
    console.log("AddColumn cols");

    this.ColDefinitions.push(column);

  }

  RemoveColumn(index: number) {
    console.log("RemoveColumn cols");

    if (index < 1) console.log("index less than 1");

    this.ColDefinitions.splice(index, 1);
  }
}
@Component({
  selector: 'hv4dgridrow',
  templateUrl: './hv4dgridrow.html',
  styleUrls: ['./hv4dgridrow.css'],
  standalone: false
})
export class hv4dgridrow implements OnInit {
  @Input('MinHeight') MinHeight: string = "0px";
  @Input('MaxHeight') MaxHeight: string = "1080px";
  @Input('Height') Height: string = "auto";

  private MinHeightSz: string;
  private MaxHeightSz: string;
  private HeightSz: string;
  constructor() {
    console.log("constructor row");

    this.MinHeightSz = "0px";
    this.MaxHeightSz = "1080px";
    this.HeightSz = "auto";
  }

  ngOnInit() {
    console.log("ngOnInit row");

    this.MinHeightSz = this.MinHeight;
    this.MaxHeightSz = this.MaxHeight;
    this.HeightSz = this.Height;
  }

  Override(
    minwidth: string = "0px",
    maxwidth: string = "1080px",
    width: string = "auto"): void {
    console.log("Override row");

    this.MinHeightSz = minwidth;
    this.MaxHeightSz = maxwidth;
    this.HeightSz = width;
  }

  public ActualHeightSz: string = '';
}
@Component({
  selector: 'hv4dgridrows',
  templateUrl: './hv4dgridrows.html',
  styleUrls: ['./hv4dgridrows.css'],
  standalone: false
})
export class hv4dgridrows implements AfterContentInit {
  @ContentChildren(hv4dgridrow) items!: QueryList<hv4dgridrow>;

  RowDefinitions: hv4dgridrow[];
  constructor() {
    console.log("constructor rows");

    this.RowDefinitions = [];

    this.RowDefinitions.push(new hv4dgridrow);

    this.RowDefinitions[0].Override("0px", "1080px", "auto");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit rows");

    if (this.items.length > 0) this.RowDefinitions = this.items.toArray();

  }

  AddRow(row: hv4dgridrow): void {
    console.log("AddRow rows");

    this.RowDefinitions.push(row);

  }

  RemoveRow(index: number) {
    console.log("RemoveRow rows");

    if (index < 1) console.log("index less than 1");

    this.RowDefinitions.splice(index, 1);
  }
}
@Component({
  selector: 'hv4dgridview',
  templateUrl: './hv4dgridview.html',
  styleUrls: ['./hv4dgridview.css'],
  standalone: false
})
export class hv4dgridview implements OnInit, AfterContentInit, AfterViewInit, ihv4dwebelement {
  @Input('GridColumn') GridColumn?: string;
  @Input('GridRow') GridRow?: string;
  @Input('GridColumnSpan') GridColumnSpan?: string;
  @Input('GridRowSpan') GridRowSpan?: string;
  @Input('GridColumnDefinitions') GridColDefinitions?: hv4dgridcolumns;
  @Input('GridRowDefinitions') GridRowDefinitions?: hv4dgridrows;
  @ContentChildren(WEB_ELEMENT_TOKEN as any) items!: QueryList<ihv4dwebelement>;

  private PanelGridColumn: hv4drwdu;
  private PanelGridRow: hv4drwdu;
  private PanelGridColumnSpan: hv4drwdu;
  private PanelGridRowSpan: hv4drwdu;

  public Width: string = "";
  public Height: string = "";
  public TopLeftX: string = "";
  public TopLeftY: string = "";

  public Position: string = 'absolute';

  private ColDefinitions = new hv4dgridcolumns;
  private RowDefinitions = new hv4dgridrows;

  constructor() {
    console.log("constructor grid");

    this.PanelGridColumn = new hv4drwdu;
    try {
      this.PanelGridColumn.FromString("1");
    }
    catch (SyntaxError) {
      console.log("GridView Constructor");
    }

    this.PanelGridRow = new hv4drwdu;
    try {
      this.PanelGridRow.FromString("1");
    }
    catch (SyntaxError) {
      console.log("GridView Constructor");
    }

    this.PanelGridColumnSpan = new hv4drwdu;
    try {
      this.PanelGridColumnSpan.FromString("1");
    }
    catch (SyntaxError) {
      console.log("GridView Constructor");
    }

    this.PanelGridRowSpan = new hv4drwdu;
    try {
      this.PanelGridRowSpan.FromString("1");
    }
    catch (SyntaxError) {
      console.log("GridView Constructor");
    }
  }

  ngOnInit() {
    console.log("onInit");

    this.PanelGridColumn = new hv4drwdu;
    this.PanelGridRow = new hv4drwdu;
    this.PanelGridColumnSpan = new hv4drwdu;
    this.PanelGridRowSpan = new hv4drwdu;

    if (typeof this.GridColumn != 'undefined') {
      try {
        this.PanelGridColumn.FromString(this.GridColumn);
      }
      catch (SyntaxError) {
        console.log("ngOnInit");
      }
    }
    else this.PanelGridColumn.FromString("1");

    if (typeof this.GridRow != 'undefined') {
      try {
        this.PanelGridRow.FromString(this.GridRow);
      }
      catch (SyntaxError) {
        console.log("ngOnInit");
      }
    }
    else this.PanelGridColumn.FromString("1");

    if (typeof this.GridColumnSpan != 'undefined') {
      try {
        this.PanelGridColumnSpan.FromString(this.GridColumnSpan);
      }
      catch (SyntaxError) {
        console.log("ngOnInit");
      }
    }
    else this.PanelGridColumnSpan.FromString("1");

    if (typeof this.GridRowSpan != 'undefined') {
      try {
        this.PanelGridRowSpan.FromString(this.GridRowSpan);
      }
      catch (SyntaxError) {
        console.log("ngOnInit");
      }
    }
    else this.PanelGridRowSpan.FromString("1");

    if (typeof this.GridColDefinitions != 'undefined') this.ColDefinitions = this.GridColDefinitions;
    if (typeof this.GridRowDefinitions != 'undefined') this.RowDefinitions = this.GridRowDefinitions;
  }

  GridItems: ihv4dwebelement[] = [];

  ngAfterContentInit() {
    console.log("ngAfterContentInit grid")

    if (this.items.length > 0) this.GridItems = this.items.toArray();
  }

  private ColsX: hv4drwdu[] = [];
  private RowsY: hv4drwdu[] = [];

  ngAfterViewInit() {
    console.log("AfterInit");

    try {
      this.AutoDefineColumns();
    }
    catch (SyntaxError) {
      console.log("AutoDefineColumns");
    }

    try {
      this.AutoDefineRows();
    }
    catch (SyntaxError) {
      console.log("AutoDefineRows");
    }

    try {
      this.PlaceChildren();
    }
    catch (SyntaxError) {
      console.log("PlaceChildren");
    }
  }

  private AutoDefineColumns(): void {
    console.log("AutoCol");

    this.ColsX.push(new hv4drwdu());

    try {
      this.ColsX[this.ColsX.length - 1].FromString(this.TopLeftX);
    }
    catch (SyntaxError) {
      console.log("AutoDefineColumns: TopLeftX:" + this.TopLeftX);
    }

    var numauto: number = 0;

    var nonautowidth: number = 0;

    for (let index: number = 0; index < this.GridItems.length; index++) {

      let width = new hv4drwdu();

      try {
        width.FromString(this.ColDefinitions.ColDefinitions[index].Width);
      }
      catch (SyntaxError) {
        console.log("AutoDefineColumns: loop");
      }

      if (width.Units().match("auto")) numauto += 1;

      else if (width.Units().match("px")) nonautowidth += width.Value();

      else console.log("AutoDefineColumns: loop");;
    }

    var pnaelwidth: hv4drwdu = new hv4drwdu;

    try {
      pnaelwidth.FromString(this.Width);
    }
    catch (SyntaxError) {
      console.log("AutoDefineColumns: Width");
    }

    var diffpanelwidth: number = pnaelwidth.Value() - nonautowidth;

    var autocellsz: number = diffpanelwidth / numauto;

    for (let index: number = 0; index < this.GridItems.length; index++) {

      let width = new hv4drwdu();

      try {
        width.FromString(this.ColDefinitions.ColDefinitions[index].Width);
      }
      catch (SyntaxError) {
        console.log("AutoDefineColumns: ColDefs");
      }

      if (width.Units().match("auto")) this.ColDefinitions.ColDefinitions[index].Width = autocellsz.toString();

      var gridpoint: number = width.Value() + this.ColsX[index].Value();

      this.ColsX.push(new hv4drwdu);

      try {
        this.ColsX[this.ColsX.length - 1].FromString(gridpoint.toString + "px");
      }
      catch (SyntaxError) {
        console.log("AutoDefineColumns: push");
      }
    }

    this.ColsX.push(new hv4drwdu);

    try {
      this.ColsX[this.ColsX.length - 1].FromString(this.Width);
    }
    catch (SyntaxError) {
      console.log("AutoDefineColumns: push");
    }

    try {
      this.ColsX[this.ColsX.length - 1].FromString((this.ColsX[this.ColsX.length - 1].Value() - this.ColsX[this.ColsX.length - 2].Value()).toString() + "px");
    }
    catch (SyntaxError) {
      console.log("AutoDefineColumns: push");
    }
  }

  private AutoDefineRows(): void {
    console.log("AutoRow");

    this.RowsY.push(new hv4drwdu());

    try {
      this.RowsY[this.RowsY.length - 1].FromString(this.TopLeftY);
    }
    catch (SyntaxError) {
      console.log("AutoDefineRows: TopLeftY");
    }

    var numauto: number = 0;

    var nonautoheight: number = 0;

    for (let index: number = 0; index < this.GridItems.length; index++) {

      let height = new hv4drwdu();

      try {
        height.FromString(this.RowDefinitions.RowDefinitions[index].Height);
      }
      catch (SyntaxError) {
        console.log("AutoDefineRows: Height");
      }

      if (height.Units().match("auto")) numauto += 1;

      else if (height.Units().match("px")) nonautoheight += height.Value();

      else console.log("AutoDefineRows: units");
    }

    var pnaelheight: hv4drwdu = new hv4drwdu;

    try {
      pnaelheight.FromString(this.Height);
    }
    catch (SyntaxError) {
      console.log("AutoDefineRows: Height");
    }

    var diffpanelheight: number = pnaelheight.Value() - nonautoheight;

    var autocellsz: number = diffpanelheight / numauto;

    for (let index: number = 0; index < this.GridItems.length; index++) {

      let height = new hv4drwdu();

      try {
        height.FromString(this.RowDefinitions.RowDefinitions[index].Height);
      }
      catch (SyntaxError) {
        console.log("AutoDefineRows: Height")
      }

      if (height.Units().match("auto")) this.RowDefinitions.RowDefinitions[index].Height = autocellsz.toString();

      var gridpoint: number = height.Value() + this.RowsY[index].Value();

      this.RowsY.push(new hv4drwdu);

      this.RowsY[this.RowsY.length - 1].FromString(gridpoint.toString + "px");
    }

    this.RowsY.push(new hv4drwdu);

    try {
      this.RowsY[this.RowsY.length - 1].FromString(this.Height);
    }
    catch (SyntaxError) {
      console.log("AutoDefineRows: push")
    }

    try {
      this.RowsY[this.RowsY.length - 1].FromString((this.RowsY[this.RowsY.length - 1].Value() - this.RowsY[this.RowsY.length - 2].Value()).toString() + "px");
    }
    catch (SyntaxError) {
      console.log("AutoDefineRows: update push")
    }
  }

  private PlaceChildren(): void {
    console.log("PlaceChildren");

    for (let index: number = 0; index < this.GridItems.length; index++) {

      if (this.GridItems[index].GetGridColumn().Value() > 0 &&
        this.GridItems[index].GetGridRow().Value() > 0 &&
        this.GridItems[index].GetGridColumnSpan().Value() > 0 &&
        this.GridItems[index].GetGridRowSpan().Value() > 0) {

        let gridcol: number = this.GridItems[index].GetGridColumn().Value();
        let gridcolspan: number = this.GridItems[index].GetGridRow().Value();
        let gridrow: number = this.GridItems[index].GetGridColumnSpan().Value();
        let gridrowspan: number = this.GridItems[index].GetGridRowSpan().Value();

        let ucoordx: hv4drwdu = this.ColsX[gridcol - 1];
        let ucoordy: hv4drwdu = this.ColsX[gridcol - 1 + gridcolspan];
        let vcoordx: hv4drwdu = this.RowsY[gridrow - 1];
        let vcoordy: hv4drwdu = this.RowsY[gridrow - 1 + gridrowspan];

        let panel: hv4dpanel = new hv4dpanel;

        try {
          panel.SetPanel(
            ucoordx.ToString(),
            ucoordy.ToString(),
            vcoordx.ToString(),
            vcoordy.ToString());
        }
        catch (SyntaxError) {
          console.log("PlaceChildren: Panel")
        }

        this.GridItems[index].FromPanel(panel);
      }
      else {
        throw SyntaxError;
      }
    }
  }

  SetPlacement(
    gridcol?: string,
    gridrow?: string,
    gridcolspan?: string,
    gridrowspan?: string): void {
    console.log("SetPlacement");

    this.PanelGridColumn = new hv4drwdu;
    this.PanelGridRow = new hv4drwdu;
    this.PanelGridColumnSpan = new hv4drwdu;
    this.PanelGridRowSpan = new hv4drwdu;

    if (typeof gridcol != 'undefined') {
      try {
        this.PanelGridColumn.FromString(gridcol);
      }
      catch (SyntaxError) {
        console.log("SetPlacement: gridcol")
      }
    }
    else this.PanelGridColumn.FromString("1");

    if (typeof gridrow != 'undefined') {
      try {
        this.PanelGridRow.FromString(gridrow);
      }
      catch (SyntaxError) {
        console.log("SetPlacement: gridcol")
      }
    }
    else this.PanelGridRow.FromString("1");

    if (typeof gridcolspan != 'undefined') {
      try {
        this.PanelGridColumnSpan.FromString(gridcolspan);
      }
      catch (SyntaxError) {
        console.log("SetPlacement: gridcol")
      }
    }
    else this.PanelGridColumnSpan.FromString("1");

    if (typeof gridrowspan != 'undefined') {
      try {
        this.PanelGridRowSpan.FromString(gridrowspan);
      }
      catch (SyntaxError) {
        console.log("SetPlacement: gridcol")
      }
    }
    else this.PanelGridRowSpan.FromString("1");
  }

  GetGridColumn(): hv4drwdu { return this.PanelGridColumn; };
  GetGridRow(): hv4drwdu { return this.PanelGridRow; };
  GetGridColumnSpan(): hv4drwdu { return this.PanelGridColumnSpan; };
  GetGridRowSpan(): hv4drwdu { return this.PanelGridRowSpan; };

  FromPanel(input: hv4dpanel): void {
    console.log("FromPanel");

    this.TopLeftX = input.UCoordx().ToString();
    this.TopLeftY = input.UCoordx().ToString();

    let width: number = input.UCoordx().Value() - input.UCoordx().Value();
    let height: number = input.UCoordy().Value() - input.UCoordy().Value();

    this.Width = width.toString() + "px";
    this.Height = height.toString() + "px";

    console.log(this.TopLeftX + " " + this.TopLeftY + " " + this.Width + " " + this.Height);
  }
}


