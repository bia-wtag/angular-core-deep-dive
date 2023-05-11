import { CoursesService } from '@/app/services/courses.service';
import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Observable } from 'rxjs';
import { CourseCardComponent } from '../course-card/course-card.component';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent {
  courses: Observable<Course[]>;

  // local template querying
  // selects multiple components
  @ViewChildren(CourseCardComponent)
  courseCardComponents: QueryList<CourseCardComponent>;

  // same as choosing css selector
  // @ViewChild(CourseCardComponent, { read: ElementRef })
  @ViewChild('.info-container')
  infoContainerElement: ElementRef;

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
  }

  ngAfterViewInit() {
    // listen to changes on course card components
    this.courseCardComponents.changes.subscribe((values) => {
      console.log(values);
    });
  }
}
