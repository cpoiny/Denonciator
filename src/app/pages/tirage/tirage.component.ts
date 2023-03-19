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
  }
  //Créer une fonction qui permet de choisir aléatoirement
  tirageAuSort() {


    // je recupere un index
    // while (this.listOfStudent.length > 0) {
    const index = Math.floor(Math.random() * this.listOfStudent.length);
    // je recupere la valeur de l'index
    const nom = this.listOfStudent[index];
    // j'exclu les absents
    if (nom.status) {
      // j'affiche le message selon le genre
      if (nom.gender === "Homme") {
        this.result = "Tu es le grand gagnant!";
      } else {
        this.result = "Tu es la grande gagnante!";
      }
      // je recupere l'attribut identity de l'etudiant
      const selection = nom.identity;
      // j'assigne a ma variable selection la valeur de l'etudiant selectionne
      this.selection = selection;
    }
    // } else {
    //   //je retire le nom de la liste
    //   this.tirageAuSort();
    // }

  }


 
}