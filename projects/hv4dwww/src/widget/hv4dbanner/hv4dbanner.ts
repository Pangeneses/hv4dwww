import { Component, Input, OnInit } from '@angular/core';
import { ihv4dwebelement, WEB_ELEMENT_TOKEN } from '../../interface/ihv4dwebelement';
import { hv4drwdu } from '../../lib/hv4drwdu/hv4drwdu';
import { hv4dpanel } from '../../lib/hv4dpanel/hv4dpanel';

@Component({
  selector: 'hv4dbanner',
  templateUrl: './hv4dbanner.html',
  styleUrls: ['./hv4dbanner.css'],
  providers: [{ provide: WEB_ELEMENT_TOKEN, useExisting: hv4dbanner }],
  standalone: false
})
export class hv4dbanner implements ihv4dwebelement, OnInit {
  @Input() GridColumn?: string;
  @Input() GridRow?: string;
  @Input() GridColumnSpan?: string;
  @Input() GridRowSpan?: string;
  @Input() URL!: string;

  private PanelGridColumn: hv4drwdu;
  private PanelGridRow: hv4drwdu;
  private PanelGridColumnSpan: hv4drwdu;
  private PanelGridRowSpan: hv4drwdu;

  public Width = "";
  public Height = "";
  public TopLeftX = "";
  public TopLeftY = "";

  public Position = "absolute";

  PanelURL: string;

  constructor() {
    console.log("constructor banner");

    this.PanelGridColumn = new hv4drwdu;
    try {
      this.PanelGridColumn.FromString("1");
    }
    catch (SyntaxError) {
      console.log("Banner Constructor");
    }

    this.PanelGridRow = new hv4drwdu;
    try {
      this.PanelGridRow.FromString("1");
    }
    catch (SyntaxError) {
      console.log("Banner Constructor");
    }

    this.PanelGridColumnSpan = new hv4drwdu;
    try {
      this.PanelGridColumnSpan.FromString("1");
    }
    catch (SyntaxError) {
      console.log("Banner Constructor");
    }

    this.PanelGridRowSpan = new hv4drwdu;
    try {
      this.PanelGridRowSpan.FromString("1");
    }
    catch (SyntaxError) {
      console.log("Banner Constructor");
    }

    this.PanelURL = "";
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
        console.log("NgOnInit: Grid Column");
      }
    }
    if (typeof this.GridRow != 'undefined') {
      try {
        this.PanelGridRow.FromString(this.GridRow);
      }
      catch (SyntaxError) {
        console.log("NgOnInit: Grid Row");
      }
    }
    if (typeof this.GridColumnSpan != 'undefined') {
      try {
        this.PanelGridColumnSpan.FromString(this.GridColumnSpan);
      }
      catch (SyntaxError) {
        console.log("NgOnInit: Grid ColumnSpan");
      }
    }
    if (typeof this.GridRowSpan != 'undefined') {
      try {
        this.PanelGridRowSpan.FromString(this.GridRowSpan);
      }
      catch (SyntaxError) {
        console.log("NgOnInit: Grid RowSpan");
      }      
    }

    if (typeof this.URL != 'undefined') this.PanelURL = this.URL;
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
        console.log("Banner SetPlacement: gridcol")
      }
    }
    else this.PanelGridColumn.FromString("1");

    if (typeof gridrow != 'undefined') {
      try {
        this.PanelGridRow.FromString(gridrow);
      }
      catch (SyntaxError) {
        console.log("Banner SetPlacement: gridcol")
      }
    }
    else this.PanelGridRow.FromString("1");

    if (typeof gridcolspan != 'undefined') {
      try {
        this.PanelGridColumnSpan.FromString(gridcolspan);
      }
      catch (SyntaxError) {
        console.log("Banner SetPlacement: gridcol")
      }
    }
    else this.PanelGridColumnSpan.FromString("1");

    if (typeof gridrowspan != 'undefined') {
      try {
        this.PanelGridRowSpan.FromString(gridrowspan);
      }
      catch (SyntaxError) {
        console.log("Banner SetPlacement: gridcol")
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

    const width: number = input.UCoordx().Value() - input.UCoordx().Value();
    const height: number = input.UCoordy().Value() - input.UCoordy().Value();

    this.Width = width.toString() + "px";
    this.Height = height.toString() + "px";

    console.log(this.TopLeftX + " " + this.TopLeftY + " " + this.Width + " " + this.Height);
  }
}
