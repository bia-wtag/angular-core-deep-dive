import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private API_URL = 'http://localhost:9000';

  constructor(private http: HttpClient) {}

  getCourses() {
    return this.http.get<Course[]>(`${this.API_URL}/courses`);
  }
}
