import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from '../periodic-table.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PeriodicTableService } from '../../Services/periodic-table.service';

// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-element',
  templateUrl: './delete-element.component.html',
  styleUrls: ['./delete-element.component.css']
})
export class DeleteElementComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data, public periodicService : PeriodicTableService,
  public dialogRef: MatDialogRef<DeleteElementComponent>) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.periodicService.deleteElement(this.data.id).subscribe(
      res => {
     if (res) {
       console.log(res);
      //  this.toastr.success("Hello, I'm the toastr message.")   
       this.dialogRef.close(res);    
     }
    },
     err =>{
      // this.toastr.error("Hello, I'm the toastr error message.")
      if(err) throw err;
     
   });  
 }
 

 close(){
   this.dialogRef.close();
 }
  

}


