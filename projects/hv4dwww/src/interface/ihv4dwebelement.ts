import { InjectionToken } from '@angular/core';
import { hv4drwdu } from '../lib/hv4drwdu/hv4drwdu';
import { hv4dpanel } from '../lib/hv4dpanel/hv4dpanel';
export interface ihv4dwebelement {

  GridColumn?: string;
  GridRow?: string;
  GridColumnSpan?: string;
  GridRowSpan?: string;

  SetPlacement(gridcol?: number, gridrow?: number, gridcolspan?: number, gridrowspan?: number): void;

  FromPanel(input: hv4dpanel): void;

}

export const WEB_ELEMENT_TOKEN = new InjectionToken<ihv4dwebelement>('WebElementToken');
