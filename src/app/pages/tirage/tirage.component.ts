import { Component } from '@angular/core';
import { Student, STUDENTSLIST } from 'src/app/mocks/students.mock';
import { StudentsService } from 'src/app/services/students.service';
//import { RandomService } from 'src/app/services/random.service';

@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.css']
})
export class TirageComponent {

  listOfStudent: Student[] = [];
  listCanBeSelected: Student[] = [];
  listEnCours!: Student[];

  selection!: string;
  result!: string;

  constructor(
    public studentsService: StudentsService
  ) { }

  ngOnInit() {
    this.getStudent();
    this.tirageAuSort();
    this.resetStudent();
  }


  getStudent(): void {
    this.listOfStudent = this.studentsService.getStudent();
    const listCanBeSelected = this.listOfStudent.filter(
      (student) => student.canBeSelected === true && student.status);
    this.listCanBeSelected = listCanBeSelected;
    if(this.listCanBeSelected.length <= 0){
      this.resetStudent();
    } 
  }


  //function pour reinitialiser ma liste de student avec tous les étudiants présents et le selecteur canBeSelected à true
  resetStudent(): void {
    this.listCanBeSelected = this.listOfStudent
      .filter((s) => s.status)
      .map((student) => {
        return {
          ...student,
          canBeSelected: true,
        };
      });
      console.log("liste ok", this.listCanBeSelected);
  }



  //Créer une fonction qui permet de choisir aléatoirement
  tirageAuSort(): void {

    const listEnCours = this.listCanBeSelected;
    console.log("etape 1", listEnCours)
    if (listEnCours.length > 0) {

      const index = Math.floor(Math.random() * listEnCours.length);
      //  console.log("index", index);
      // je recupere la valeur de l'index
      const student = listEnCours[index];
      // console.log("boolean", student.canBeSelected);
      // j'exclu les absents
      if (student.canBeSelected) {
        student.canBeSelected = false;
        // console.log("boolean apres", student.canBeSelected);
      }

      listEnCours.splice(index, 1);

      if (student.gender === "Homme") {
        this.result = "Tu es le grand gagnant!";
      } else {
        this.result = "Tu es la grande gagnante!";
      }
      // je recupere l'attribut identity de l'etudiant
      const selection = student.identity;
      // j'assigne a ma variable selection la valeur de l'etudiant selectionne
      this.selection = selection;

    } else {
      this.getStudent();
     this.tirageAuSort();
    }
  }
}


