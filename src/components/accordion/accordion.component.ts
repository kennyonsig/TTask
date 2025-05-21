import {Component, Input} from '@angular/core';
import {ITreeNode} from './ITree';

@Component({
  selector: 'app-accordion',
  imports: [],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {

  @Input() treeElem!: ITreeNode;
  isOpen = false
  get hasChildren():boolean {
    return this.treeElem.children?.length > 0;
  }

  get hasIsDeleted():boolean {
    return this.treeElem.is_deleted
  }

  toggle() {
    if (this.hasChildren) {this.isOpen = !this.isOpen}
  }
}
