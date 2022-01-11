import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import Feedback from '../models/feedback.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private dbPath = '/feedback';
  feedbackRef: AngularFirestoreCollection<Feedback>;

  constructor(private db: AngularFirestore) {
    this.feedbackRef = db.collection(this.dbPath);
   }

   getAll(): AngularFirestoreCollection<Feedback> {
     return this.feedbackRef;
   }

   create(feedback: Feedback): any{
      return this.feedbackRef.add({ ...feedback });
   }
}
