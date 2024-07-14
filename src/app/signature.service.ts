import { Injectable } from '@angular/core';
import { ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignatureService {
  private signatureContainerRef: ElementRef | null = null;

  constructor() { }

  setSignatureContainerRef(ref: ElementRef) {
    this.signatureContainerRef = ref;
  }

  getSignatureContainerRef(): ElementRef | null {
    return this.signatureContainerRef;
  }
}
