import { Component } from '@angular/core';
import { Student, STUDENTSLIST } from 'src/app/mocks/students.mock';
import { RandomService } from 'src/app/services/random.service';

@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.css']
})
export class TirageComponent {

//   // Liste des etudiants dont le statut est présent à créer
//   listOfStudentsPresent! : Student[];
//   listTest! : Student [];

//   // Etudiant à créer
//  // student : Student = new Student: any();

// constructor(private service : RandomService) {}

// //Ajout d'un étudiant dans le tableau
// addStudent() {
//  // this.service.createStudent(this.student);
//   //this.student = new Student();
// }


listOfStudent: Student[] = STUDENTSLIST;
listeDesEtudiants : string[] = ['Fama', 'Cynthia', 'Anne', 'Julie'];

// créer une liste qui recupére les selectionné
listeDesSelectionné : string[] = [];
nom! : string;
selection! :string;

// Créer une fonction qui permet de choisir aléatoirement
tirageAuSort() {
  const choix = Math.floor(Math.random()*this.listOfStudent.length);
  const nom = this.listOfStudent[choix];
  const selection = nom.identity;
 console.log(nom);
 this.selection = selection;
}
}