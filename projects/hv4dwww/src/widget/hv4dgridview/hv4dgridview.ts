import
{
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
  imports: [],
  templateUrl: './hv4dgridview.html',
  styleUrls: ['./hv4dgridview.css'],
  standalone: true
})
export class hv4dgridcolumn implements OnInit {
  @Input('MinWidth') MinWidth: string = '0px';
  @Input('MaxWidth') MaxWidth: string = '1920px';
  @Input('Width') Width: string = 'auto';

  private MinWidthSz: string;
  private MaxWidthSz: string;
  private WidthSz: string;
  constructor() {
    this.MinWidthSz = '0px';
    this.MaxWidthSz = '1920px';
    this.WidthSz = 'auto';
  }

  ngOnInit() {
    this.MinWidth = this.MinWidth;
    this.MaxWidthSz = this.MaxWidth;
    this.WidthSz = this.Width;
  }

  Override(
    minwidth: string = '0px',
    maxwidth: string = '1920px',
    width: string = 'auto'): void {

    this.MinWidth = minwidth;
    this.MaxWidthSz = maxwidth;
    this.WidthSz = width;
  }

  public ActualWidthSz: string = '';
}
@Component({
  selector: 'hv4dgridcolumns',
  imports: [],
  templateUrl: './hv4dgridview.html',
  styleUrls: ['./hv4dgridview.css'],
  standalone: true
})
export class hv4dgridcolumns implements AfterContentInit {
  @ContentChildren(hv4dgridcolumn) items!: QueryList<hv4dgridcolumn>;

  ColDefinitions: hv4dgridcolumn[];
  constructor() {
    this.ColDefinitions = [];

    this.ColDefinitions.push(new hv4dgridcolumn);

    this.ColDefinitions[0].Override('0px', '1920px', 'auto');
  }

  ngAfterContentInit() {

    if (this.items.length > 0) this.ColDefinitions = this.items.toArray();

  }

  AddColumn(column: hv4dgridcolumn): void {

    this.ColDefinitions.push(column);
    
  }

  RemoveColumn(index: number) {

    if (index < 1) throw SyntaxError;

    this.ColDefinitions.splice(index, 1);    
  }
}
@Component({
  selector: 'hv4dgridrow',
  imports: [],
  templateUrl: './hv4dgridview.html',
  styleUrls: ['./hv4dgridview.css'],
  standalone: true
})
export class hv4dgridrow implements OnInit {
  @Input('MinHeight') MinHeight: string = '0px';
  @Input('MaxHeight') MaxHeight: string = '1080px';
  @Input('Height') Height: string = 'auto';

  private MinHeightSz: string;
  private MaxHeightSz: string;
  private HeightSz: string;
  constructor() {
    this.MinHeightSz = '0px';
    this.MaxHeightSz = '1080px';
    this.HeightSz = 'auto';
  }

  ngOnInit() {
    this.MinHeight = this.MinHeight;
    this.MaxHeightSz = this.MaxHeight;
    this.HeightSz = this.Height;
  }

  Override(
    minwidth: string = '0px',
    maxwidth: string = '1080px',
    width: string = 'auto'): void {

    this.MinHeight = minwidth;
    this.MaxHeightSz = maxwidth;
    this.HeightSz = width;
  }

  public ActualHeightSz: string = '';
}
@Component({
  selector: 'hv4dgridrows',
  imports: [],
  templateUrl: './hv4dgridview.html',
  styleUrls: ['./hv4dgridview.css'],
  standalone: true
})
export class hv4dgridrows implements AfterContentInit {
  @ContentChildren(hv4dgridrow) items!: QueryList<hv4dgridrow>;

  RowDefinitions: hv4dgridrow[];
  constructor() {
    this.RowDefinitions = [];

    this.RowDefinitions.push(new hv4dgridrow);

    this.RowDefinitions[0].Override('0px', '1080px', 'auto');
  }

  ngAfterContentInit() {

    if (this.items.length > 0) this.RowDefinitions = this.items.toArray();

  }

  AddRow(row: hv4dgridrow): void {

    this.RowDefinitions.push(row);

  }

  RemoveRow(index: number) {

    if (index < 1) throw SyntaxError;

    this.RowDefinitions.splice(index, 1);
  }
}
@Component({
  selector: 'hv4dgridview',
  imports: [],
  templateUrl: './hv4dgridview.html',
  styleUrls: ['./hv4dgridview.css'],
  standalone: true
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

  Panel: hv4dpanel;

  private ColDefinitions = new hv4dgridcolumns;
  private RowDefinitions = new hv4dgridrows;
  constructor() {
    this.PanelGridColumn = new hv4drwdu;
    this.PanelGridColumn.FromString("1");

    this.PanelGridRow = new hv4drwdu;
    this.PanelGridRow.FromString("1");

    this.PanelGridColumnSpan = new hv4drwdu;
    this.PanelGridColumnSpan.FromString("1");

    this.PanelGridRowSpan = new hv4drwdu;
    this.PanelGridRowSpan.FromString("1");

    this.Panel = new hv4dpanel;
    this.Panel.SetPanel("0px", "0px", "0px", "0px");
  }

  ngOnInit()
  {
    this.PanelGridColumn = new hv4drwdu;
    this.PanelGridRow = new hv4drwdu;
    this.PanelGridColumnSpan = new hv4drwdu;
    this.PanelGridRowSpan = new hv4drwdu;

    if (typeof this.GridColumn != 'undefined') {
      try {
        this.PanelGridColumn.FromString(this.GridColumn);
      }
      catch (SyntaxError) {
        throw SyntaxError;
      }
    }
    else this.PanelGridColumn.FromString("1");

    if (typeof this.GridRow != 'undefined') {
      try {
        this.PanelGridRow.FromString(this.GridRow);
      }
      catch (SyntaxError) {
        throw SyntaxError;
      }
    }
    else this.PanelGridColumn.FromString("1");

    if (typeof this.GridColumnSpan != 'undefined') {
      try {
        this.PanelGridColumnSpan.FromString(this.GridColumnSpan);
      }
      catch (SyntaxError) {
        throw SyntaxError;
      }
    }
    else this.PanelGridColumnSpan.FromString("1");

    if (typeof this.GridRowSpan != 'undefined') {
      try {
        this.PanelGridRowSpan.FromString(this.GridRowSpan);
      }
      catch (SyntaxError) {
        throw SyntaxError;
      }
    }
    else this.PanelGridRowSpan.FromString("1");
        
    if (typeof this.GridColDefinitions != 'undefined') this.ColDefinitions = this.GridColDefinitions;
    if (typeof this.GridRowDefinitions != 'undefined') this.RowDefinitions = this.GridRowDefinitions;
  }

  GridItems: ihv4dwebelement[] = [];

  ngAfterContentInit()
  {
    if (this.items.length > 0) this.GridItems = this.items.toArray();
  }

  private ColsX: hv4drwdu[] = [];
  private RowsY: hv4drwdu[] = [];

  ngAfterViewInit()
  {
    try {
      this.AutoDefineColumns();
    }
    catch (SyntaxError) {
      throw SyntaxError;
    }

    try {
      this.AutoDefineRows();
    }
    catch (SyntaxError) {
      throw SyntaxError;
    }

    try {
      this.PlaceChildren();
    }
    catch (SyntaxError) {
      throw SyntaxError;
    }
  }
  
  private AutoDefineColumns(): void {

    this.ColsX.push(this.Panel.UCoordx());

    var numauto: number = 0;

    var nonautowidth: number = 0;

    for (let index: number = 0; index < this.GridItems.length; index++) {

      var width = new hv4drwdu();

      try {
        width.FromString(this.ColDefinitions.ColDefinitions[index].Width);
      }
      catch (SyntaxError) {
        throw SyntaxError;
      }

      if (width.Units().match("auto")) numauto += 1;

      else if (width.Units().match("px")) nonautowidth += width.Value();

      else throw SyntaxError;
    }

    var panelwidth: number = this.Panel.VCoordx().Value() - this.Panel.UCoordx().Value();

    var diffpanelwidth: number = panelwidth - nonautowidth;

    var autocellsz: number = diffpanelwidth / numauto;

    for (let index: number = 0; index < this.GridItems.length; index++) {

      var width = new hv4drwdu();

      try {
        width.FromString(this.ColDefinitions.ColDefinitions[index].Width);
      }
      catch (SyntaxError) {
        throw SyntaxError;
      }

      if (width.Units().match("auto")) this.ColDefinitions.ColDefinitions[index].Width = autocellsz.toString();

      var gridpoint: number = width.Value() + this.ColsX[index].Value();

      this.ColsX.push(new hv4drwdu);

      this.ColsX[this.ColsX.length - 1].FromString(gridpoint.toString + "px");
    }

    this.ColsX.push(new hv4drwdu);

    this.ColsX[this.ColsX.length - 1].FromString(this.Panel.VCoordx().ToString());
  }

  private AutoDefineRows(): void {

    this.RowsY.push(this.Panel.UCoordy());

    var numauto: number = 0;

    var nonautoheight: number = 0;

    for (let index: number = 0; index < this.GridItems.length; index++) {

      var height = new hv4drwdu();

      try {
        height.FromString(this.RowDefinitions.RowDefinitions[index].Height);
      }
      catch (SyntaxError) {
        throw SyntaxError;
      }

      if (height.Units().match("auto")) numauto += 1;

      else if (height.Units().match("px")) nonautoheight += height.Value();

      else throw SyntaxError;
    }

    var panelheight: number = this.Panel.VCoordy().Value() - this.Panel.UCoordy().Value();

    var diffpanelheight: number = panelheight - nonautoheight;

    var autocellsz: number = diffpanelheight / numauto;

    for (let index: number = 0; index < this.GridItems.length; index++) {

      var height = new hv4drwdu();

      try {
        height.FromString(this.RowDefinitions.RowDefinitions[index].Height);
      }
      catch (SyntaxError) {
        throw SyntaxError;
      }

      if (height.Units().match("auto")) this.RowDefinitions.RowDefinitions[index].Height = autocellsz.toString();

      var gridpoint: number = height.Value() + this.RowsY[index].Value();

      this.RowsY.push(new hv4drwdu);

      this.RowsY[this.RowsY.length - 1].FromString(gridpoint.toString + "px");
    }

    this.RowsY.push(new hv4drwdu);

    this.RowsY[this.RowsY.length - 1].FromString(this.Panel.VCoordy().ToString());
  }

  private PlaceChildren(): void {

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

        this.GridItems[index].Panel = new hv4dpanel;

        this.GridItems[index].Panel.SetPanel(
          ucoordx.ToString(),
          ucoordy.ToString(),
          vcoordx.ToString(),
          vcoordy.ToString())
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

    this.PanelGridColumn = new hv4drwdu;
    this.PanelGridRow = new hv4drwdu;
    this.PanelGridColumnSpan = new hv4drwdu;
    this.PanelGridRowSpan = new hv4drwdu;

    if (typeof gridcol != 'undefined') this.PanelGridColumn.FromString(gridcol);
    else this.PanelGridColumn.FromString("1");

    if (typeof gridrow != 'undefined') this.PanelGridRow.FromString(gridrow);
    else this.PanelGridRow.FromString("1");

    if (typeof gridcolspan != 'undefined') this.PanelGridColumnSpan.FromString(gridcolspan);
    else this.PanelGridColumnSpan.FromString("1");

    if (typeof gridrowspan != 'undefined') this.PanelGridRowSpan.FromString(gridrowspan);
    else this.PanelGridRowSpan.FromString("1");
  }

  GetGridColumn(): hv4drwdu { return this.PanelGridColumn; };
  GetGridRow(): hv4drwdu { return this.PanelGridRow; };
  GetGridColumnSpan(): hv4drwdu { return this.PanelGridColumnSpan; };
  GetGridRowSpan(): hv4drwdu { return this.PanelGridRowSpan; };
}


