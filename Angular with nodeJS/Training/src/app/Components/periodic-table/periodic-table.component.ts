import { Component, OnInit, ViewChild } from '@angular/core';
import { AddElementComponent } from './add-element/add-element.component';
import { MatDialog } from '@angular/material/dialog';
import { EditElementComponent } from './edit-element/edit-element.component';
import { DeleteElementComponent } from './delete-element/delete-element.component';

import { PeriodicTableService } from '../Services/periodic-table.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';



export interface PeriodicElement {
  position: number;
  name: string;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-periodic-table',
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.css']
})
export class PeriodicTableComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public dialog: MatDialog, public periodicService: PeriodicTableService,) { }

  displayedColumns: string[] = ['name', 'weight', 'symbol', 'iconButton'];
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource(ELEMENT_DATA);



  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.periodicService.getElement().subscribe(res => {
      console.log(res);
      // let tabledata = res as any;
      // console.log(tabledata);
      this.dataSource.data = res as any;
      console.log(this.dataSource.data);
    },
      err => {
        if (err) throw err;
      });

  }

  openAddElementDialogBox(): void {
    const dialogRef = this.dialog.open(AddElementComponent, {
      width: '350px',
      data: {
        action: 'add'
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.ngOnInit();
    });

  }

  openEditElementDialogBox(Element): void {
    const dialogRef = this.dialog.open(AddElementComponent, {
      width: '350px',
      data: {
        action: 'edit',
        editElement: Element
      }
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.ngOnInit();
    });
  }

  openDeleteElementDialogBox(ElementID): void {
    const dialogRef = this.dialog.open(DeleteElementComponent, {
      width: '350px',
      data: {
        id: ElementID
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.ngOnInit();
    });
  }


  applyFilter(filterValue: string) {
    // const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.filter = filterValue.trim();
  }

}

