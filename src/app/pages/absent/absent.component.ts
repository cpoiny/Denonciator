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
  selectedStudent!: Student;
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

    const index = this.onlyPresent.indexOf(this.selectedStudent!);
    console.log(index, "index");
    console.log("select", this.selectedStudent);
    console.log("identity", this.selectedStudent.identity);
    if (this.onlyPresent.length > 0) {


      if (this.selectedStudent.identity === "Thomas" || "Erdal" || "Jerome" || "Fahd") {
        this.manAbsent.push(this.selectedStudent);

      } else {
        this.womanAbsent.push(this.selectedStudent);
      }
      this.onlyPresent.splice(this.onlyPresent.indexOf(this.selectedStudent), 1);
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