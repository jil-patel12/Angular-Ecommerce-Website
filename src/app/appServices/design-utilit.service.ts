import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as CryptoJS from 'crypto-js'

@Injectable({
  providedIn: 'root'
})
export class DesignUtilitService {
  public key: any = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  cartCount = new BehaviorSubject<number>(0); 

  constructor() { }
 
  encrypt(txtToEncrypt: string): string {
    return CryptoJS.AES.encrypt(txtToEncrypt, this.key).toString();
  }
  decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this.key).toString(CryptoJS.enc.Utf8);
  }

}