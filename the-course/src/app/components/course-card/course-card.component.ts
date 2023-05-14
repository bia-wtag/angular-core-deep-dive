import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { SaleBannerComponent } from '../sale-banner/sale-banner.component';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent {
  @Input() course: Course;
  @Input() isFirst: boolean;
  @Input() noImageTemplate: TemplateRef<any>;

  // works similar to ViewChild but for contents
  @ContentChild(SaleBannerComponent)
  salesBannerComponent: SaleBannerComponent;

  buttonClass: string = 'primary-btn';

  handleClick() {
    console.log('Button Clicked!');
  }

  onToggleHighlight() {
    console.log('Highlight Toggled!');
  }

  ngAfterContentInit() {
    console.log('this.salesBannerComponent available');
  }
}
