import { Injectable } from '@angular/core';
import { Student, STUDENTSLIST } from '../mocks/students.mock';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  list : Student[] = [];

  selection!: string;
  result!: string;

  constructor() { }

//function pour récupérer tous les étudiants

getStudent(): Student[]{
  return STUDENTSLIST;
}

//   //Créer une fonction qui permet de choisir aléatoirement
//   tirageAuSort() {

//     const list2 = this.getStudent();
//     // je recupere un index
//     // while (this.listOfStudent.length > 0) {
//     const index = Math.floor(Math.random() * this.list.length);
//     // je recupere la valeur de l'index
//     const nom = this.list[index];
//     // j'exclu les absents
//     if (nom.status) {
//       // j'affiche le message selon le genre
//       if (nom.gender === "Homme") {
//         this.result = "Tu es le grand gagnant!";
//       } else {
//         this.result = "Tu es la grande gagnante!";
//       }
//       // je recupere l'attribut identity de l'etudiant
//       const selection = nom.identity;
//       // j'assigne a ma variable selection la valeur de l'etudiant selectionne
//       this.selection = selection;
//     } else {
//       //je retire le nom de la liste
//       this.tirageAuSort();
//     }
    
// }
}