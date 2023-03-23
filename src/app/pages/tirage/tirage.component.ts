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
    //si la liste est vide alors on la recharge avec la fonction reset qui va remettre tous les students a true pour canBeSelected
    if (this.listCanBeSelected.length <= 0) {
      this.resetStudent();
    }
  }


  //function pour reinitialiser ma liste de student avec tous les étudiants présents et le selecteur canBeSelected à true
  resetStudent(): void {
    //j'assigne a ma propriété listCanBeSelected un nouveau tableau qui est filtré sur la listofSutdent dont le status est présent et qui va parcourir chaque student et modifier leur canBeSelected à true
    this.listCanBeSelected = this.listOfStudent
      //methode filter sur les student.status a true
      .filter((s) => s.status)
      //methode map sur les student
      .map((student) => {
        //renvoit un tableau de student
        return {
          //parcourt tous les students
          ...student,
          //change a true le canBeSelected
          canBeSelected: true,
        };
      });

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
      //je recupéere une nouvelle liste de student prêt à être sélectionné
      this.getStudent();
      //je fais une récursivité pour éviter un clip dans le vide quand je clic
      this.tirageAuSort();
    }
  }
}


