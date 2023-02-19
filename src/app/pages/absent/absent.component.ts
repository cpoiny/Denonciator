import { Component } from '@angular/core';
import { Student, STUDENTSLIST } from 'src/app/mocks/students.mock';

@Component({
  selector: 'app-absent',
  templateUrl: './absent.component.html',
  styleUrls: ['./absent.component.css']
})
export class AbsentComponent {
  listOfStudent : Student[] = STUDENTSLIST;
  displayOnlyAbsent : boolean = false;
  
  
  changeStatus(){
    if(this.displayOnlyAbsent){
   this.displayOnlyAbsent = false;
    }else {
    this.displayOnlyAbsent = true;
  }
  console.log(this.displayOnlyAbsent);
  }

 
}
