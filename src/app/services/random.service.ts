import { Injectable } from '@angular/core';
import { Student } from '../mocks/students.mock';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  listOfStudentsPresent! : Student[];

  constructor() { }

  createStudent(student : Student) {
    this.listOfStudentsPresent.push(student);
  }
}
