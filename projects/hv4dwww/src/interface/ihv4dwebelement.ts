import { Component, InjectionToken } from '@angular/core';

@Component({
  selector: 'ihv4dwebelement',
  imports: [],
  templateUrl: './ihv4dwebelement.html',
  styles: `./ihv4dwebelement.css`,
  standalone: true
})
export interface ihv4dwebelement {

}

export const WEB_ELEMENT_TOKEN = new InjectionToken<ihv4dwebelement>('WebElementToken');
