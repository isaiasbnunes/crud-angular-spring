import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../model/course';
import { delay, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) { }

  save(course: Course){
     return this.httpClient.post<Course>(this.API, course);
  }

  list(){
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first()
    );
  }
}
