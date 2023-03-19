import { Component, Input } from '@angular/core';
import { Student, STUDENTSLIST } from 'src/app/mocks/students.mock';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-absent',
  templateUrl: './absent.component.html',
  styleUrls: ['./absent.component.css']
})
export class AbsentComponent {

  manAbsent: Student[] = [];
  womanAbsent: Student[] = [];

  onlyPresent: Student[] = [];
  onlyAbsent: Student[] = [];

  constructor(
    public studentsService: StudentsService
  ) { }

  ngOnInit() {

    this.checkPresent();
    this.checkAbsent();
    this.absentByGender();

  }

  //function pour filtrer que les présents 
  checkPresent() {
    const present = STUDENTSLIST.filter(student => student.status === true);
    this.onlyPresent = present;
    console.log(present);
  }

  //function pour filtrer que les absents 
  checkAbsent() {
    const absent = STUDENTSLIST.filter(student => student.status === false);
    this.onlyAbsent = absent;
    console.log("absence totale", absent);
  }

  absentByGender() {
    const manAbsent = this.onlyAbsent.filter(student => student.gender === "Homme");
    this.manAbsent = manAbsent;
    const womanAbsent = this.onlyAbsent.filter(student => student.gender === "Femme");
    this.womanAbsent = womanAbsent;
  }


  // function to add an absent
  add() {



  }



  remove(id: number): void {
    this.onlyAbsent.forEach((student) => {
      if (student.id === id) {
        if (student.gender === "Femme") {
          student.status = !student.status;
          this.womanAbsent.pop();
          this.onlyPresent.push(student);
        } else {
          student.status = !student.status;
          this.manAbsent.pop();
          this.onlyPresent.push(student);
        }
        

      }
      console.log("absence totale", this.onlyAbsent);
    });
  }
}