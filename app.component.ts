import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  display1:boolean =true;
  display2:boolean = true;
  display3:boolean = true;
  display4:boolean = true;
  display5:boolean = true;
  display6:boolean = true;
  display7:boolean = true;
  display8:boolean = true;
  display9:boolean = true;
  display10:boolean = true;
  display11:boolean= true;
  display12:boolean= true;

   note(choice:any){
     this.display1=true;
     this.display2=true;
     this.display3=true;
     this.display4=true;
     this.display5=true;
     this.display6=true;
     this.display7=true;
     this.display8=true;
     this.display9=true;
     this.display10=true;
     this.display11=true;
     this.display12=true;

     if(choice==1)
     {
       this.display1=false;
     }
     else if(choice==2)
     {
      this.display2=false;
     }
     else if(choice==3)
     {
      this.display3=false;
     }
     else if(choice==4){
       this.display4=false;
     }
     else if(choice==5){
      this.display5=false;
    }
    else if(choice==6){
      this.display6=false;
    }
    else if(choice==7){
      this.display7=false;
    }
    else if(choice==8){
      this.display8=false;
    }
    else if(choice==9){
      this.display9=false;
    }
    else if(choice==10){
      this.display10=false;
    }
    else if(choice==11){
      this.display11=false;
    }
    else if(choice==12){
      this.display12=false;
    }



   }

}
