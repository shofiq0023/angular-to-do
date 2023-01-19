import { Injectable } from '@angular/core';
import { ITask as TaskModel } from '../models/Tasks.model'; 
import {
	Firestore,
	collection,
	collectionData,
	addDoc,
	doc,
	deleteDoc,
	docData,
	setDoc,
	where,
	query,
	getDocs,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  taskCollectionRef = collection(this.firestore, 'tasks');

  constructor(private firestore: Firestore) { }

  getTasks(): Observable<TaskModel[]> {
    return collectionData(this.taskCollectionRef, {idField: 'id'}) as Observable<TaskModel[]>;
  }

  addTask(task: TaskModel) {
    return addDoc(this.taskCollectionRef, task);
  }
}
