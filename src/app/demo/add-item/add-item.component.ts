import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  formAdd!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddItemComponent>,
    @Inject(MAT_DIALOG_DATA) data:any,
  ) {}
  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.formAdd = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      content: ['', Validators.compose([Validators.required])],
    });
  }

  cancel(){
    this.dialogRef.close();
  }

  getError(name: any): any{
    if(this.formAdd.controls[name].getError('required')){
      return ' is requied'
    }else {
      return null
    }
  }
  onChangeInput(fieldName: any, event: any) {
    const value = event.target.value;
    if (value) {
      this.formAdd.controls[fieldName].setValue(value.toString().trim());
      return;
    }
  }
  Add(){
    this.formAdd.markAllAsTouched();
    if (!this.formAdd.valid) {
      return;
    }
    const body = {
      name: this.formAdd.controls.name.value,
      content: this.formAdd.controls.content.value,
    }
      window.alert("Thêm Thành Công!");
        this.dialogRef.close(body);
  }

}
