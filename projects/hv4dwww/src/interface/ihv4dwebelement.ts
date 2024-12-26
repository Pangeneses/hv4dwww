import { InjectionToken } from '@angular/core';
import { hv4drwdu } from '../lib/hv4drwdu/hv4drwdu';
import { hv4dpanel } from '../lib/hv4dpanel/hv4dpanel';
export interface ihv4dwebelement {
  Panel: hv4dpanel;
  SetPlacement(gridcol?: string, gridrow?: string, gridcolspan?: string, gridrowspan?: string): void;
  GetGridColumn(): hv4drwdu;
  GetGridRow(): hv4drwdu;
  GetGridColumnSpan(): hv4drwdu;
  GetGridRowSpan(): hv4drwdu;
}

export const WEB_ELEMENT_TOKEN = new InjectionToken<ihv4dwebelement>('WebElementToken');
