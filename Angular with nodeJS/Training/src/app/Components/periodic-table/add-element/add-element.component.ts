import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { MAT_DIALOG_DATA,  MatDialogRef } from '@angular/material/dialog';
import { PeriodicTableService } from '../../Services/periodic-table.service';

@Component({
  selector: 'app-add-element',
  templateUrl: './add-element.component.html',
  styleUrls: ['./add-element.component.css']
})
export class AddElementComponent implements OnInit {

  action;
  // Edit = 'edit';
  editElementData;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data, public periodicService : PeriodicTableService,
    public dialogRef: MatDialogRef<AddElementComponent>,) { 
      this.action = data.action;
      console.log(this.action);
      if(this.action === 'edit'){
        this.editElementData = this.data.editElement;
        console.log(this.editElementData);
        this.bindValues(this.editElementData);
      }
      else{
        console.log(this.action);
      }
    }
    


  ngOnInit(): void {
  }
  
  closeVendorPopup() {
    this.dialogRef.close();
  }

  addElementForm = new FormGroup({
    name: new FormControl(),
    Weight: new FormControl(),
    Symbol: new FormControl()
  });

  addUpdateElement(){
    if(this.addElementForm.valid){
      if(this.action === 'edit'){
        this.periodicService.editElement(this.editElementData._id, this.addElementForm.value).subscribe(
          res => {
          if (res) {   
            console.log(res)
              this.dialogRef.close(res);
              // this.toastr.success("Profile form updated"); 
          }
          }
          ,err =>{
            if(err) throw err;
            // this.toastr.error("Error in updating Profile form");
          
        });

      }else{
        this.periodicService.addElement(this.addElementForm.value).subscribe(
          res => {
            console.log(res)
            this.dialogRef.close(res);
            // this.toastr.success("Profile form updated"); 
          }
          ,err =>{
            if(err) throw err;
            // this.toastr.error("Error in updating Profile form");
          })
      }
    }
        
  }

  bindValues(data) {
    this.addElementForm.controls.name.setValue(data.name);
    this.addElementForm.controls.Weight.setValue(data.weight);
    this.addElementForm.controls.Symbol.setValue(data.symbol);
  }

}
