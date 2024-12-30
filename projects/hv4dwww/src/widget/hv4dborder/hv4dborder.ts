import { Component, Input, OnInit } from '@angular/core';
import { ihv4dwebelement, WEB_ELEMENT_TOKEN } from '../../interface/ihv4dwebelement';
import { hv4dpixels } from '../../lib/hv4dpixels/hv4dpixels';
import { hv4dpanel } from '../../lib/hv4dpanel/hv4dpanel';

@Component({
  selector: 'hv4dborder',
  templateUrl: './hv4dborder.html',
  styleUrls: ['./hv4dborder.css'],
  providers: [{ provide: WEB_ELEMENT_TOKEN, useExisting: hv4dborder }],
  standalone: false
})
export class hv4dborder implements ihv4dwebelement, OnInit {
  @Input('GridColumn') GridColumn?: string;
  @Input('GridRow') GridRow?: string;
  @Input('GridColumnSpan') GridColumnSpan?: string;
  @Input('GridRowSpan') GridRowSpan?: string;
  @Input() URL!: string;

  public Position = 'absolute';

  public Width = '0px';
  public Height = '0px';
  public TopLeftX = '0px';
  public TopLeftY = '0px';

  constructor() { }

  DefaultContainer() {

    this.Position = 'absolute';

    this.Width = "0px";
    this.Height = "0px";
    this.TopLeftX = "0px";
    this.TopLeftY = "0px";

    if (typeof this.GridColumn == 'undefined') this.GridColumn = this.GridColumn ?? "1";
    if (typeof this.GridRow == 'undefined') this.GridRow = this.GridRow ?? "1";
    if (typeof this.GridColumnSpan == 'undefined') this.GridColumnSpan = this.GridColumnSpan ?? "1";
    if (typeof this.GridRowSpan == 'undefined') this.GridRowSpan = this.GridRowSpan ?? "1";

    this.URL = "";
  }

  ngOnInit() {

    console.log("Border: onInit");

    if (typeof this.GridColumn == 'undefined') this.GridColumn = this.GridColumn ?? "1";
    if (typeof this.GridRow == 'undefined') this.GridRow = this.GridRow ?? "1";
    if (typeof this.GridColumnSpan == 'undefined') this.GridColumnSpan = this.GridColumnSpan ?? "1";
    if (typeof this.GridRowSpan == 'undefined') this.GridRowSpan = this.GridRowSpan ?? "1";

    decodeURIComponent(this.URL);

    if (typeof this.URL !== 'undefined') this.URL = this.URL ?? "";
  }

  SetPlacement(
    gridcol?: number,
    gridrow?: number,
    gridcolspan?: number,
    gridrowspan?: number): void {

    console.log("Border: SetPlacement");

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

    console.log("Border: FromPanel");

    input.UCoordx().FromString((input.UCoordx().Value() / window.devicePixelRatio).toString() + "px");
    input.UCoordy().FromString((input.UCoordy().Value() / window.devicePixelRatio).toString() + "px");
    input.VCoordx().FromString((input.VCoordx().Value() / window.devicePixelRatio).toString() + "px");
    input.VCoordy().FromString((input.VCoordy().Value() / window.devicePixelRatio).toString() + "px");

    this.TopLeftX = input.UCoordx().ToString();
    this.TopLeftY = input.UCoordy().ToString();

    let width: number = input.VCoordx().Value() - input.UCoordx().Value();
    let height: number = input.VCoordy().Value() - input.UCoordy().Value();

    this.Width = width.toString() + "px";
    this.Height = height.toString() + "px";

    console.log("Top Left X: " + this.TopLeftX + " Top Left Y: " + this.TopLeftY + " Width: " + this.Width + " Height: " + this.Height);
  }
}
