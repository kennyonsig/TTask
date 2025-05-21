import { Component } from '@angular/core';
import { AccordionComponent } from '../components/accordion/accordion.component';
import { treeNodes } from '../components/accordion/data';

@Component({
  selector: 'app-root',
  imports: [AccordionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TESTASK';
  protected readonly treeNodes = treeNodes;
}
