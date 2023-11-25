import { Component , EventEmitter, Input, Output} from '@angular/core';
import { Sale } from 'src/app/models/sale';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  @Input() sale: Sale | null = null;

  @Output() close: EventEmitter<void> = new EventEmitter();


  onCloseModal() {
    this.close.emit();
  }
}
