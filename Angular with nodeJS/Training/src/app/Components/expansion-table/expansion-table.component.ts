import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



export interface CaseField {
  recourse: string;
  dynamicFields: Array<any>;
}

const ELEMENT_DATA: CaseField[] = [
  {
    recourse: 'NOTICE_SENT',
    dynamicFields: [{
      order: 1,
      field_name: 'Test_1',
      field_label: 'Test1',
      field_type: 'Text',
      field_des: 'NOTICE_SENT'
    },
    {
      order: 2,
      field_name: 'Test_2',
      field_label: 'Test2',
      field_type: 'Date',
      field_des: 'NOTICE_RECEIVED'
    }]
  }, {
    recourse: 'NOTICE_RECEIVED',
    dynamicFields: [{
      order: 2,
      field_name: 'Test_2',
      field_label: 'Test2',
      field_type: 'Date',
      field_des: 'NOTICE_RECEIVED'
    }]
  }
];

@Component({
  selector: 'app-expansion-table',
  templateUrl: './expansion-table.component.html',
  styleUrls: ['./expansion-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class ExpansionTableComponent implements OnInit {

  // dataSource = ELEMENT_DATA;
  dataSource: MatTableDataSource<any>;
  displayedColumns = ['recourse', 'action'];
  expandedElement;

  constructor() { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.setDataSource(ELEMENT_DATA);

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  setDataSource(data) {
    this.dataSource = new MatTableDataSource(data);
    this.ngAfterViewInit();
  }
}



