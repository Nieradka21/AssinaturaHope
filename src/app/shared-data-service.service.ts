import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private formDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor() {}

  setFormData(formData: any) {
    this.formDataSubject.next(formData);
  }

  getFormData(): Observable<any> {
    return this.formDataSubject.asObservable();
  }
}
