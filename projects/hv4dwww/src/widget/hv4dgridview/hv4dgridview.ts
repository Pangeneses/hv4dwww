import {
  Component,
  Input,
  ContentChild,
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

  constructor() { }

  ngOnInit() {

    console.log("GridCol: ngOnInit");

    var rwdu = new hv4drwdu;

    try {
      rwdu.FromString(this.MinWidth);
    }
    catch (error: any) {

      if (error instanceof SyntaxError) {

        this.MinWidth = "0px";
        this.MaxWidth = "1920px";
        this.Width = "auto";

        console.log("GridCol: MinWidth: Defaulted");
      }
    }

    try {
      rwdu.FromString(this.MaxWidth);
    }
    catch (error: any) {

      if (error instanceof SyntaxError) {

        this.MinWidth = "0px";
        this.MaxWidth = "1920px";
        this.Width = "auto";

        console.log("GridCol: MaxWidth: Defaulted");
      }
    }

    try {
      rwdu.FromString(this.Width);
    }
    catch (error: any) {

      if (error instanceof SyntaxError) {

        this.MinWidth = "0px";
        this.MaxWidth = "1920px";
        this.Width = "auto";

        console.log("GridCol: Width: Defaulted");
      }
    }
  }

  Override(
    minwidth: string = this.MinWidth,
    maxwidth: string = this.MaxWidth,
    width: string = this.Width): void {

    console.log("GridCol: Override");

    this.MinWidth = minwidth;
    this.MaxWidth = maxwidth;
    this.Width = width;

    var rwdu = new hv4drwdu;

    try {
      rwdu.FromString(this.MinWidth);
    }
    catch (error: any) {

      if (error instanceof SyntaxError) {

        this.MinWidth = "0px";
        this.MaxWidth = "1920px";
        this.Width = "auto";

        console.log("GridCol: MinWidth: Defaulted");
      }
    }

    try {
      rwdu.FromString(this.MaxWidth);
    }
    catch (error: any) {

      if (error instanceof SyntaxError) {

        this.MinWidth = "0px";
        this.MaxWidth = "1920px";
        this.Width = "auto";

        console.log("GridCol: MaxWidth: Defaulted");
      }
    }

    try {
      rwdu.FromString(this.Width);
    }
    catch (error: any) {

      if (error instanceof SyntaxError) {

        this.MinWidth = "0px";
        this.MaxWidth = "1920px";
        this.Width = "auto";

        console.log("GridCol: Width: Defaulted");
      }
    }
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

  Columns!: hv4dgridcolumn[];
  constructor() { }

  ngAfterContentInit() {

    console.log("GridCols: ngAfterContentInit");

    if (typeof this.items !== 'undefined') {

      if (this.items.length > 0) {

        this.Columns = this.items.toArray();

      }
      else {

        this.Columns.push(new hv4dgridcolumn());

        this.Columns[0].Override("0px", "1920px", "auto");

      }
    }
    else {

      console.log("GridCols: No Children.")
    }
  }

  AddColumn(column: hv4dgridcolumn): void {

    console.log("GridCols: AddColumn");

    this.Columns.push(column);

  }

  RemoveColumn(index: number) {

    console.log("GridCols: RemoveColumn");

    if (index < 1) {

      console.log("GridCols: Index less than 1.");

      return;

    }

    this.Columns.splice(index, 1);
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

  constructor() { }

  ngOnInit() {

    console.log("GridRow: ngOnInit.");

    var rwdu = new hv4drwdu;

    try {
      rwdu.FromString(this.MinHeight);
    }
    catch (error: any) {

      if (error instanceof SyntaxError) {

        this.MinHeight = "0px";
        this.MaxHeight = "1080px";
        this.Height = "auto";

        console.log("GridRow: MinHeight: Defaulted");
      }
    }

    try {
      rwdu.FromString(this.MaxHeight);
    }
    catch (error: any) {

      if (error instanceof SyntaxError) {

        this.MinHeight = "0px";
        this.MaxHeight = "1080px";
        this.Height = "auto";

        console.log("GridRow: MaxHeight: Defaulted");
      }
    }

    try {
      rwdu.FromString(this.Height);
    }
    catch (error: any) {

      if (error instanceof SyntaxError) {

        this.MinHeight = "0px";
        this.MaxHeight = "1080px";
        this.Height = "auto";

        console.log("GridRow: Height: Defaulted");
      }
    }
  }

  Override(
    minheight: string = "0px",
    maxheight: string = "1080px",
    height: string = "auto"): void {

    console.log("GridRow: Override");

    this.MinHeight = minheight;
    this.MaxHeight = maxheight;
    this.Height = height;

    var rwdu = new hv4drwdu;

    try {
      rwdu.FromString(this.MinHeight);
    }
    catch (error: any) {

      if (error instanceof SyntaxError) {

        this.MinHeight = "0px";
        this.MaxHeight = "1080px";
        this.Height = "auto";

        console.log("GridRow: MinHeight: Defaulted");
      }
    }

    try {
      rwdu.FromString(this.MaxHeight);
    }
    catch (error: any) {

      if (error instanceof SyntaxError) {

        this.MinHeight = "0px";
        this.MaxHeight = "1080px";
        this.Height = "auto";

        console.log("GridRow: MaxHeight: Defaulted");
      }
    }

    try {
      rwdu.FromString(this.Height);
    }
    catch (error: any) {

      if (error instanceof SyntaxError) {

        this.MinHeight = "0px";
        this.MaxHeight = "1080px";
        this.Height = "auto";

        console.log("GridRow: Height: Defaulted");
      }
    }
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

  Rows!: hv4dgridrow[];
  constructor() { }

  ngAfterContentInit() {

    console.log("GridRows: ngAfterContentInit.");

    if (typeof this.items !== 'undefined') {

      if (this.items.length > 0) {

        this.Rows = this.items.toArray();

      }
      else {

        this.Rows.push(new hv4dgridrow());

        this.Rows[0].Override("0px", "1920px", "auto");

      }
    }
  }

  AddRow(row: hv4dgridrow): void {

    console.log("GridRows: AddRow.");

    this.Rows.push(row);

  }

  RemoveRow(index: number) {

    console.log("GridRows: RemoveRow");

    if (index < 1) {

      console.log("GridRows: index less than 1");

      return;

    }

    this.Rows.splice(index, 1);
  }
}

@Component({
  selector: 'hv4dgridview',
  templateUrl: './hv4dgridview.html',
  styleUrls: ['./hv4dgridview.css'],
  standalone: false
})
export class hv4dgridview implements ihv4dwebelement, OnInit, AfterContentInit {
  @Input('GridColumn') GridColumn?: string;
  @Input('GridRow') GridRow?: string;
  @Input('GridColumnSpan') GridColumnSpan?: string;
  @Input('GridRowSpan') GridRowSpan?: string;
  @ContentChild(hv4dgridcolumns) GridColDefinitions?: hv4dgridcolumns;
  @ContentChild(hv4dgridrows) GridRowDefinitions?: hv4dgridrows;
  @ContentChildren(WEB_ELEMENT_TOKEN as any) items!: QueryList<ihv4dwebelement>;

  public Position = 'absolute';

  public Width = '0px';
  public Height = '0px';
  public TopLeftX = '0px';
  public TopLeftY = '0px';

  private ColDefinitions!: hv4dgridcolumns;
  private RowDefinitions!: hv4dgridrows;

  private GridItems: ihv4dwebelement[] = [];

  private ColsX: number[] = [];
  private RowsY: number[] = [];

  constructor() { }

  DefaultContainer() {

    this.Position = 'absolute';

    this.Width = "0px";
    this.Height = "0px";
    this.TopLeftX = "0px";
    this.TopLeftY = "0px";

    this.GridColumn = "1";
    this.GridRow = "1";
    this.GridColumnSpan = "1";
    this.GridRowSpan = "1";

    this.GridColDefinitions = new hv4dgridcolumns;
    this.GridRowDefinitions = new hv4dgridrows;

    this.items.destroy();
  }

  ngOnInit() {

    console.log("GridView: onInit");

    if (typeof this.GridColumn == 'undefined') this.GridColumn = this.GridColumn ?? "1";
    if (typeof this.GridRow == 'undefined') this.GridRow = this.GridRow ?? "1";
    if (typeof this.GridColumnSpan == 'undefined') this.GridColumnSpan = this.GridColumnSpan ?? "1";
    if (typeof this.GridRowSpan == 'undefined') this.GridRowSpan = this.GridRowSpan ?? "1";

  }

  ngAfterContentInit() {

    console.log("GridView: ngAfterContentInit")

    if (typeof this.GridColDefinitions == 'undefined') console.log("undefined");

    else console.log("defined");

    this.ColDefinitions = this.GridColDefinitions ?? new hv4dgridcolumns;

    this.RowDefinitions = this.GridRowDefinitions ?? new hv4dgridrows;

    if (typeof this.items !== 'undefined' && this.items.length > 0) this.GridItems = this.items.toArray();

    else this.GridItems = [];
  }

  public PropagateView() {

    console.log("GridView: AfterInit");

    try {
      this.AutoDefineColumns();
    }
    catch (error: any) {

      if (error instanceof SyntaxError) {

        console.log("AutoDefineColumns");
      }
    }

    try {
      this.AutoDefineRows();
    }
    catch (error: any) {

      if (error instanceof SyntaxError) {

        console.log("AutoDefineRows");
      }
    }

    try {
      this.PlaceChildren();
    }
    catch (error: any) {

      if (error instanceof SyntaxError) {

        console.log("PlaceChildren");
      }
    }
  }

  private AutoDefineColumns(): void {

    console.log("GridView: AutoCol");

    var test = new hv4drwdu;

    try {
      test.FromString(this.TopLeftX);
    }
    catch (error: any) {

      if (error instanceof SyntaxError) {

        this.DefaultContainer();

        throw new SyntaxError("GridView: AutoDefineColumns: TopLeftX: " + this.TopLeftX);
      }
    }

    this.ColsX.push(test.Value());

    var numauto: number = 0;

    var nonautowidth: number = 0;

    for (let index: number = 0; index < this.ColDefinitions.Columns.length; index++) {

      try {
        test.FromString(this.ColDefinitions.Columns[index].Width);
      }
      catch (error: any) {

        if (error instanceof SyntaxError) {

          this.DefaultContainer();

          throw new SyntaxError("GridView: AutoDefineColumns: GridItem: " + test.Value());
        }
      }

      if (test.Units().match("auto")) numauto += 1;

      else if (test.Units().match("px")) nonautowidth += test.Value();

      else console.log("GridView: AutoDefineColumns: loop");
    }

    try {
      test.FromString(this.Width);
    }
    catch (error: any) {

      if (error instanceof SyntaxError) {

        this.DefaultContainer();

        throw new SyntaxError("GridView: AutoDefineColumns: Width: " + this.Width);
      }
    }

    var diffpanelwidth: number = test.Value() - nonautowidth;

    var autocellsz: number = diffpanelwidth / numauto;

    for (let index: number = 0; index < this.ColDefinitions.Columns.length; index++) {

      try {
        test.FromString(this.ColDefinitions.Columns[index].Width);
      }
      catch (error: any) {

        if (error instanceof SyntaxError) {

          this.DefaultContainer();

          throw new SyntaxError("GridView: AutoDefineColumns: Column Width: " + this.ColDefinitions.Columns[index].Width);
        }
      }

      if (test.Units().match("auto")) this.ColDefinitions.Columns[index].Width = autocellsz.toString() + "px";

      test.FromString(this.ColDefinitions.Columns[index].Width);

      this.ColsX.push(test.Value() + this.ColsX[index]);
    }

    test.FromString(this.Width);

    this.ColsX.push(test.Value());
  }

  private AutoDefineRows(): void {

    console.log("GridView: AutoRow");

    var test = new hv4drwdu;

    try {
      test.FromString(this.TopLeftY);
    }
    catch (error: any) {

      if (error instanceof SyntaxError) {

        this.DefaultContainer();

        throw new SyntaxError("GridView: AutoDefineRows: TopLeftY: " + this.TopLeftY);
      }
    }

    this.RowsY.push(test.Value());

    var numauto: number = 0;

    var nonautoheight: number = 0;

    for (let index: number = 0; index < this.RowDefinitions.Rows.length; index++) {

      try {
        test.FromString(this.RowDefinitions.Rows[index].Height);
      }
      catch (error: any) {

        if (error instanceof SyntaxError) {

          this.DefaultContainer();

          throw new SyntaxError("GridView: AutoDefineRows: GridItem: " + test.Value());
        }
      }

      if (test.Units().match("auto")) numauto += 1;

      else if (test.Units().match("px")) nonautoheight += test.Value();

      else console.log("GridView: AutoDefineRows: loop");
    }

    try {
      test.FromString(this.Height);
    }
    catch (error: any) {

      if (error instanceof SyntaxError) {

        this.DefaultContainer();

        throw new SyntaxError("GridView: AutoDefineRows: Height: " + this.Height);
      }
    }

    var diffpanelheight: number = test.Value() - nonautoheight;

    var autocellsz: number = diffpanelheight / numauto;

    for (let index: number = 0; index < this.RowDefinitions.Rows.length; index++) {

      try {
        test.FromString(this.RowDefinitions.Rows[index].Height);
      }
      catch (error: any) {

        if (error instanceof SyntaxError) {

          this.DefaultContainer();

          throw new SyntaxError("GridView: AutoDefineRows: Rowumn Height: " + this.RowDefinitions.Rows[index].Height);
        }
      }

      if (test.Units().match("auto")) this.RowDefinitions.Rows[index].Height = autocellsz.toString() + "px";

      test.FromString(this.RowDefinitions.Rows[index].Height);

      this.RowsY.push(test.Value() + this.RowsY[index]);
    }

    test.FromString(this.Height);

    this.RowsY.push(test.Value());
  }

  private PlaceChildren(): void {

    console.log("GridView: PlaceChildren");

    if (this.GridItems.length < 1) {

      console.log("GridView: PlaceChildren: noChildren");

      return;
    }

    for (let index: number = 0; index < this.GridItems.length; index++) {

      var gridcol = new hv4drwdu;
      var gridrow = new hv4drwdu;
      var gridcolspan = new hv4drwdu;
      var gridrowspan = new hv4drwdu;

      var temp = "null";

      if (typeof this.GridItems[index].GridColumn !== 'undefined') {

        try {

          gridcol.FromString(this.GridItems[index].GridColumn ?? "1");
        }
        catch (error: any) {

          if (error instanceof SyntaxError) {

            console.log("GridView: PlaceChildren: isMalformed.");
          }
        }
      }
      else {

        console.log("GridView: PlaceChildren: GridColumn Undefined.");
      }

      if (typeof this.GridItems[index].GridRow !== 'undefined') {
        
        try {

          gridrow.FromString(this.GridItems[index].GridRow ?? "1");
        }
        catch (error: any) {

          if (error instanceof SyntaxError) {

            console.log("GridView: PlaceChildren: isMalformed.");
          }
        }
      }
      else {

        console.log("GridView: PlaceChildren: GridRow Undefined.");
      }

      if (typeof this.GridItems[index].GridColumnSpan !== 'undefined') {
        try {

          gridcolspan.FromString(this.GridItems[index].GridColumnSpan ?? "1");
        }
        catch (error: any) {

          if (error instanceof SyntaxError) {

            console.log("GridView: PlaceChildren: isMalformed.");
          }
        }
      }
      else {

        console.log("GridView: PlaceChildren: GridColumnSpan Undefined.");
      }

      if (typeof this.GridItems[index].GridRowSpan !== 'undefined') {
        try {

          gridrowspan.FromString(this.GridItems[index].GridRowSpan ?? "1");
        }
        catch (error: any) {

          if (error instanceof SyntaxError) {

            console.log("GridView: PlaceChildren: isMalformed.");
          }
        }
      }
      else {

        console.log("GridView: PlaceChildren: GridRowSpan Undefined.");
      }

      let ucoordx: number = this.ColsX[gridcol.Value() - 1];
      let vcoordx: number = this.ColsX[gridcol.Value() - 1 + gridcolspan.Value()];
      let ucoordy: number = this.RowsY[gridrow.Value() - 1];
      let vcoordy: number = this.RowsY[gridrow.Value() - 1 + gridrowspan.Value()];

      let panel: hv4dpanel = new hv4dpanel;

      try {
        panel.SetPanel(
          ucoordx.toString() + "px",
          ucoordy.toString() + "px",
          vcoordx.toString() + "px",
          vcoordy.toString() + "px");
      }
      catch (error: any) {

        if (error instanceof SyntaxError) {

          console.log("GridView: PlaceChildren: Panel");
        }
      }

      var ux = panel.UCoordx().ToString();
      var uy = panel.UCoordy().ToString();
      var vx = panel.VCoordx().ToString();
      var vy = panel.VCoordy().ToString();

      console.log(ux, uy, vx, vy);

      this.GridItems[index].FromPanel(panel);
    }
  }

  SetPlacement(
    gridcol?: number,
    gridrow?: number,
    gridcolspan?: number,
    gridrowspan?: number): void {

    console.log("GridView: SetPlacement");

    var column = gridcol ?? Number(this.GridColumn);
    var row = gridrow ?? Number(this.GridRow);
    var columnspan = gridcolspan ?? Number(this.GridColumnSpan);
    var rowspan = gridrowspan ?? Number(this.GridRowSpan);

    this.GridColumn = column.toString();
    this.GridRow = row.toString();
    this.GridColumnSpan = columnspan.toString();
    this.GridRowSpan = rowspan.toString();
  }

  FromPanel(input: hv4dpanel): void {

    console.log("GridView: FromPanel");

    this.TopLeftX = input.UCoordx().ToString();
    this.TopLeftY = input.UCoordy().ToString();

    let width: number = input.VCoordx().Value() - input.UCoordx().Value();
    let height: number = input.VCoordy().Value() - input.UCoordy().Value();

    this.Width = width.toString() + "px";
    this.Height = height.toString() + "px";

    console.log(this.TopLeftX + " " + this.TopLeftY + " " + this.Width + " " + this.Height);
  }
}


