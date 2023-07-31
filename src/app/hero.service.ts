import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable ,catchError,of, tap } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'http://127.0.0.1:3000/heroes'; 

  constructor(private messageService:MessageService,private http:HttpClient) { }

  public getHeroes():Observable<Hero[]>{
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(_ => this.log("Fetched Heroes")),
      catchError(this.handleError<Hero[]>('get All Heroes',[]))
    );
  }

  public getHeroById(id:number):Observable<Hero>{
    return this.http.get<Hero>(this.heroesUrl+`/${id}`).pipe(
      tap(_ => this.log(`Fetched hero id=${id}`)),
      catchError(this.handleError<Hero>('get Hero By Id',undefined))
    );
  }

  private log(message:string):void{
    this.messageService.addMessage(message);
  }

  private handleError<T>(operation ='operaton',result?:T){
    return (error:any):Observable<T> =>{
      console.log(error);
      this.log(`${operation} failed : ${error.message}`);
      return of(result as T);
    }
  }

  public updateHero(hero:Hero):Observable<Hero>{
  
    const updateHeroUrl=this.heroesUrl+`/${hero.id}`;

    return this.http.put<Hero>(updateHeroUrl,hero,this.httpOptions).pipe(
      tap(_ => this.log("Updated Successfully")),
      catchError(this.handleError('Updation Failed',hero))
    );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public addHero(hero:Hero):Observable<Hero>{

    return this.http.post<Hero>(this.heroesUrl,hero,this.httpOptions).pipe(
      tap(_=> this.log("Added SuccessFullly")),
      catchError(this.handleError("Failure in Adding",hero))
    );
  }

  public deleteHero(hero:Hero):Observable<Hero>{

    const deleteUrl = this.heroesUrl+`/${hero.id}`;

    return this.http.delete<Hero>(deleteUrl,this.httpOptions).pipe(
      tap(_=> this.log("Deleted SuccessFullly")),
      catchError(this.handleError("Failure in Deleting",hero))
    )
  }
  
}
