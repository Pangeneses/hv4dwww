import { Component, ContentChildren, QueryList, AfterContentInit, Inject, forwardRef, Input, OnInit } from '@angular/core';
import { ihv4dwebelement, WEB_ELEMENT_TOKEN } from '../../interface/ihv4dwebelement';

@Component({
  selector: 'hv4dgridcolumn',
  imports: [],
  templateUrl: './hv4dgridview.html',
  styles: `./hv4dgridview.css`,
  standalone: true
})
export class hv4dgridcolumn implements OnInit {
  @Input() MinWidth: string = '0px';
  @Input() MaxWidth: string = '7680px';
  @Input() Width: string = '*';

  private MinWidthSz: string = '';
  private MaxWidthSz: string = '';
  private WidthSz: string = '';

  ngOnInit() {


  }

  public ActualWidthSz: string = '';

}
@Component({
  selector: 'hv4dgridcolumns',
  imports: [],
  templateUrl: './hv4dgridview.html',
  styles: `./hv4dgridview.css`,
  standalone: true
})
export class hv4dgridcolumns implements AfterContentInit {
  @ContentChildren(hv4dgridcolumn) items!: QueryList<hv4dgridcolumn>;

  private ColDefinitions: hv4dgridcolumn[] = [];

  ngAfterContentInit() { this.ColDefinitions = this.items.toArray(); }

}
@Component({
  selector: 'hv4dgridrow',
  imports: [],
  templateUrl: './hv4dgridview.html',
  styles: `./hv4dgridview.css`,
  standalone: true
})
export class hv4dgridrow implements OnInit {
  @Input() MinHeight: string = '0px';
  @Input() MaxHeight: string = '4320px';
  @Input() Height: string = '*';

  private MinHeightSz: string = '';
  private MaxHeightSz: string = '';
  private HeightSz: string = '';

  ngOnInit() {


  }

  public ActualHeightSz: string = '';

}
@Component({
  selector: 'hv4dgridrows',
  imports: [],
  templateUrl: './hv4dgridview.html',
  styles: `./hv4dgridview.css`,
  standalone: true
})
export class hv4dgridrows implements AfterContentInit {
  @ContentChildren(hv4dgridrow) items!: QueryList<hv4dgridrow>;

  private RowDefinitions: hv4dgridrow[] = [];

  ngAfterContentInit() { this.RowDefinitions = this.items.toArray(); }

}
@Component({
  selector: 'hv4dgridview',
  imports: [],
  templateUrl: './hv4dgridview.html',
  styles: `./hv4dgridview.css`,
  standalone: true
})
export class hv4dgridview implements OnInit, AfterContentInit {
  @ContentChildren(hv4dgridcolumns) columns!: QueryList<hv4dgridcolumns>;
  @ContentChildren(hv4dgridrows) rows!: QueryList<hv4dgridrows>;
  @ContentChildren(WEB_ELEMENT_TOKEN as any) items!: QueryList<ihv4dwebelement>;

  private ColDefinitions: hv4dgridcolumns[] = [];
  private RowDefinitions: hv4dgridrows[] = [];

  ngOnInit()
  {
    this.ColDefinitions = this.columns.toArray();
    this.RowDefinitions = this.rows.toArray();
  }

  private GridItems: ihv4dwebelement[] = [];

  ngAfterContentInit() { this.GridItems = this.items.toArray(); }

}


