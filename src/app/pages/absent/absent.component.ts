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

    //je récupère l'index du student dont le nom est le meme que celui choisi dans le menu déroulant
    const index = this.onlyPresent.findIndex((student) => student.identity === this.selectedStudent!);

    //si la liste des présent existe et que l'index de l'étudiant n'est pas -1
    if (this.onlyPresent.length > 0 && index != -1) {
      //je cherche le student dans ma liste de student
      const student = this.onlyPresent.find((student) => student.identity === this.selectedStudent!);
      //je dois absolumenta voir un student sinon je ressors
      if (!student) return;
      //je change le status de mon student en false pour pouvoir le voir dans ma liste des absents
      student.status = false;
      //si le student est un homme push dans catégorie homme
      if (student.gender === "Homme") {

        this.manAbsent.push(student);

      } else {
        this.womanAbsent.push(student);
      }
      //je retire le student de mon tableau des présents
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