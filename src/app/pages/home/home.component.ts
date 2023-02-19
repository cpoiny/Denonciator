import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  listeDesEtudiants : string[] = ['Fama', 'Cynthia', 'Anne', 'Julie'];

  // créer une liste qui recupére les selectionné
  listeDesSelectionné : string[] = [];
  nom! : string
  
  // Créer une fonction qui permet de choisir aléatoirement
  tirageAuSort() {
    const choix = Math.floor(Math.random()*this.listeDesEtudiants.length);
    const nom = this.listeDesEtudiants[choix];
   console.log(nom);
   this.nom = nom;
  }
}
