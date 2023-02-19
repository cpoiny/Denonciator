import { Component, Input } from '@angular/core';
import { Student, STUDENTSLIST } from 'src/app/mocks/students.mock';

@Component({
  selector: 'app-absent',
  templateUrl: './absent.component.html',
  styleUrls: ['./absent.component.css']
})
export class AbsentComponent {
  listOfStudent: Student[] = STUDENTSLIST;
  @Input() student! : string;
  

  // creer une fonction pour passer de present a absent
  addAbsent(student : Student) {
    // changer son status de present à absent
    
  
  }

  //creer une fonction pour passer de présent à absent
removeAbsent() {

}
}
