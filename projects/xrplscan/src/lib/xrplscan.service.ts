import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class XrplscanService {

  constructor() { }

  getTransactionsById(txId: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      if (txId.length !== 64) {
        reject();
      }
      resolve({id: txId});
    })
  }
}
