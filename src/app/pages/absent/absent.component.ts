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
  selectedStudent!: string;
  student!: Student;

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



  absentByGender() {
    const manAbsent = STUDENTSLIST.filter(student => student.gender === "Homme" && student.status === false);
    this.manAbsent = manAbsent;
    const womanAbsent = STUDENTSLIST.filter(student => student.gender === "Femme" && student.status === false);
    this.womanAbsent = womanAbsent;
  }


  add() {

    const index = this.onlyPresent.findIndex((student) => student.identity === this.selectedStudent!);

    if (this.onlyPresent.length > 0 && index != -1) {
      const student = this.onlyPresent.find((student) => student.identity === this.selectedStudent!);
      if (!student) return;
      console.log("student", student);
      console.log("nom select", this.selectedStudent);
      console.log("avant", student.status);
            student.status = false;
           console.log("apres", student.status);
      if (student.gender === "Homme") {
        console.log("ok boy");
        this.manAbsent.push(student);

      } else {
        this.womanAbsent.push(student);
      }
      this.onlyPresent.splice(this.onlyPresent.indexOf(student), 1);
    }


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