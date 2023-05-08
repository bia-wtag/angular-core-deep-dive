import { CoursesService } from '@/app/services/courses.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent {
  courses: Observable<Course[]>;

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
  }
}
