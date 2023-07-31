import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  messages :string[]=[];

  addMessage(message:string){
    this.messages.push(message);
  }

  clearMessage(){
    this.messages =[];
  }
}
