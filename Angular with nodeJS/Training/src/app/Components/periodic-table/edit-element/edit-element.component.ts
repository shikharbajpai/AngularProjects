import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PeriodicTableService } from '../../Services/periodic-table.service';

@Component({
  selector: 'app-edit-element',
  templateUrl: './edit-element.component.html',
  styleUrls: ['./edit-element.component.css']
})


export class EditElementComponent implements OnInit {

  elementData;

  constructor( @Inject(MAT_DIALOG_DATA) public data, public periodicService : PeriodicTableService,
  public dialogRef: MatDialogRef<EditElementComponent>,) { }

  ngOnInit(): void {
    this.elementData = this.data.Element;
    this.bindValues(this.elementData);
  }

  editElementForm = new FormGroup({
    name: new FormControl(),
    Weight: new FormControl(),
    Symbol: new FormControl(),
    
  });

  bindValues(data) {
    this.editElementForm.controls.name.setValue(data.name);
    this.editElementForm.controls.Weight.setValue(data.weight);
    this.editElementForm.controls.Symbol.setValue(data.symbol);
  }

  onSubmit(){
    this.periodicService.editElement(this.elementData._id, this.editElementForm.value).subscribe(
      res => {
      if (res) {   
        console.log(res)
          this.dialogRef.close(res); 
      }
      }
      ,err =>{
        if(err) throw err;
      
    });
  }

}
