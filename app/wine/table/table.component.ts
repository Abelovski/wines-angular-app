import { Component, OnInit, Input } from '@angular/core';
import { wines } from '../model/model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    @Input() private Wine :wines[];
  constructor() { }

  ngOnInit() {
  }

}
