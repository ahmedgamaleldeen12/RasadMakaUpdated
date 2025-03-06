import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  constructor() { }
  // Simple XOR Encryption (Fastest, But Less Secure)
  //This method is very lightweight and does not require any external libraries, but it's weaker than AES.
  //❌ Not very secure (can be cracked easily with frequency analysis)

  xorEncrypt(text: string, key: string): string {
    return btoa(text.split('').map((char, i) =>
      String.fromCharCode(char.charCodeAt(0) ^ key.charCodeAt(i % key.length))
    ).join(''));
  }

  xorDecrypt(encryptedText: string, key: string): string {
    return atob(encryptedText).split('').map((char, i) =>
      String.fromCharCode(char.charCodeAt(0) ^ key.charCodeAt(i % key.length))
    ).join('');
  }



}
