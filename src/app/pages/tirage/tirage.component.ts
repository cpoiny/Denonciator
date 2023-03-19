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
  listEnCours : Student[] = [];


  selection!: string;
  result!: string;

  constructor(
    public studentsService: StudentsService
  ) { }

  ngOnInit() {
    this.getStudent();
    this.tirageAuSort();
  }


  getStudent(): void {
    this.listOfStudent = this.studentsService.getStudent();
    const listCanBeSelected = this.listOfStudent.filter(student => student.canBeSelected === true);
    console.log("liste filtré", listCanBeSelected);
    this.listCanBeSelected = listCanBeSelected;
  }


  //Créer une fonction qui permet de choisir aléatoirement
  tirageAuSort() {
    

    if (this.listCanBeSelected.length > 0) {
      const index = Math.floor(Math.random() * this.listCanBeSelected.length);
      // je recupere la valeur de l'index
      const student = this.listCanBeSelected[index];
      // console.log("canBe", nom.canBeSelected);
      // j'exclu les absents
      if (student.status) {
        student.canBeSelected = !student.canBeSelected;
        // j'affiche le message selon le genre
        if (student.gender === "Homme") {
          this.result = "Tu es le grand gagnant!";
        } else {
          this.result = "Tu es la grande gagnante!";
        }
        // je recupere l'attribut identity de l'etudiant
        const selection = student.identity;
        // j'assigne a ma variable selection la valeur de l'etudiant selectionne
        this.selection = selection;
      }



    }else {
      this.listEnCours = this.listCanBeSelected; 
    }



  }



}