import { Component } from '@angular/core';
import { Student, STUDENTSLIST } from 'src/app/mocks/students.mock';

@Component({
  selector: 'app-absent',
  templateUrl: './absent.component.html',
  styleUrls: ['./absent.component.css']
})
export class AbsentComponent {
  listOfStudent: Student[] = STUDENTSLIST;
  displayOnlyAbsent: boolean = false;

  // creer une fonction pour passer de present a absent

  //creer une fonction pour passer de présent à absent

}
