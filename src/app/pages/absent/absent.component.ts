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
 
  constructor(
    public studentsService: StudentsService
  ) { }

  ngOnInit() {

    this.checkPresent();
    this.absentByGender();

  }

  //function pour filtrer que les présents 
  checkPresent() {
    const present = STUDENTSLIST.filter(student => student.status === true);
    this.onlyPresent = present;
    console.log(present);
  }

  //function pour filtrer que les absents 
  // checkAbsent() {
  //   const absent = STUDENTSLIST.filter(student => student.status === false);
  //   this.onlyAbsent = absent;
  //   console.log("absence totale", absent);
  // }

  absentByGender() {
    const manAbsent = STUDENTSLIST.filter(student => student.gender === "Homme" && student.status === false);
    this.manAbsent = manAbsent;
    const womanAbsent = STUDENTSLIST.filter(student => student.gender === "Femme" && student.status === false);
    this.womanAbsent = womanAbsent;
  }


  // function to add an absent
    add(studentId:number): void {
      this.onlyPresent.forEach((student) => {
        if (student.id === studentId) {
          student.status = !student.status;
          
          const index = this.onlyPresent.findIndex(student => student.id === studentId);
          this.onlyPresent.splice(1, index);
          if (student.gender === "Homme"){
            this.manAbsent.push(student);
          }else {
            this.womanAbsent.push(student)
          }
          
        }
      });


  }



  removeGirl(id: number): void {
    this.womanAbsent.forEach((student) => {
      if (student.id === id) {
        student.status = !student.status;
        const index = this.womanAbsent.findIndex(student => student.id === id);
        this.onlyPresent.push(student);
        this.womanAbsent.splice(index, 1);
      }
    });
  }

  removeMan(id: number): void {
    this.manAbsent.forEach((student) => {
      if (student.id === id) {
        student.status = !student.status;
        const index = this.manAbsent.findIndex(student => student.id === id);
        this.onlyPresent.push(student);
        this.manAbsent.splice(index, 1);
      }
    });
  }
}