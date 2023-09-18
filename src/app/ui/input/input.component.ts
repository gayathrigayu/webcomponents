import { Component , Input } from '@angular/core';

type InputValue= string | number | undefined;
type MenuArray= string | number | undefined;

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() label= "";
  @Input() value : InputValue;
  MenuArray =[
    {
    "label":"Company"
    },
    {
      "label":"Products"
      },
      {
        "label":"Rates"
        },
        {
          "label":"Contact Us"
          }
]

 


}
