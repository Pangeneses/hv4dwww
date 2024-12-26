import { Component, Input, OnInit } from '@angular/core';
import { ihv4dwebelement, WEB_ELEMENT_TOKEN } from '../../interface/ihv4dwebelement';
import { hv4drwdu } from '../../lib/hv4drwdu/hv4drwdu';
import { hv4dpanel } from '../../lib/hv4dpanel/hv4dpanel';

@Component({
  selector: 'hv4dbanner',
  templateUrl: './hv4dbanner.html',
  styleUrls: ['./hv4dbanner.css'],
  providers: [{ provide: WEB_ELEMENT_TOKEN, useExisting: hv4dbanner }]
})
export class hv4dbanner implements ihv4dwebelement {
  @Input('GridColumn') GridColumn?: string;
  @Input('GridRow') GridRow?: string;
  @Input('GridColumnSpan') GridColumnSpan?: string;
  @Input('GridRowSpan') GridRowSpan?: string;
  @Input('URL') URL!: string;

  private PanelGridColumn: hv4drwdu;
  private PanelGridRow: hv4drwdu;
  private PanelGridColumnSpan: hv4drwdu;
  private PanelGridRowSpan: hv4drwdu;

  Panel: hv4dpanel;
  PanelURL: string;

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

    this.PanelURL = "";
  }

  ngOnInit() {
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
    if (typeof this.GridRow != 'undefined') {      
      try {
        this.PanelGridRow.FromString(this.GridRow);
      }
      catch (SyntaxError) {
        throw SyntaxError;
      }
    }
    if (typeof this.GridColumnSpan != 'undefined') {      
      try {
        this.PanelGridColumnSpan.FromString(this.GridColumnSpan);
      }
      catch (SyntaxError) {
        throw SyntaxError;
      }
    }
    if (typeof this.GridRowSpan != 'undefined') {
      try {
        this.PanelGridRowSpan.FromString(this.GridRowSpan);
      }
      catch (SyntaxError) {
        throw SyntaxError;
      }
    }

    if (typeof this.URL != 'undefined') this.PanelURL = this.URL;
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
