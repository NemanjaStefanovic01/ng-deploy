import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allButtonsClicked = false
  clickCount = 0
  showTries = false

  btn0 = false
  btn1 = false
  btn2 = false
  btn3 = false

  buttonClicked(index: number): void{
    this.clickCount++;
    if(this.clickCount == 4)
      this.allButtonsClicked = true

    switch(index){
      case 0:
        this.btn0 = true;
        break;
      case 1:
        this.btn1 = true;
        break;
      case 2:
        this.btn2 = true;
        break;
      case 3:
        this.btn3 = true;
        break;
    }
  }
}