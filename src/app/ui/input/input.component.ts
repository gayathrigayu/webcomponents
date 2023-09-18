import { Component , Input } from '@angular/core';

type InputValue= string | number | undefined;
type MenuArray= string | number | undefined;
type InputArray = any[] | undefined;
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() label= "";
  @Input() dummytext= "";
  @Input() value : InputValue;
  @Input() myarray : any[] = [];

}
