import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {MatDialog} from '@angular/material/dialog';
import {AddItemComponent} from "./add-item/add-item.component";
import {ChangeDetectorRef} from "@angular/core";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  animal: any;
  name: any;
  item = [];
  todoLists = [
    {
      id: 4,
      name: 'Tìm hiểu về Drag and Drop',
      content: 'Tìm hiểu về Drag and Drog và dựng giao diện demo sử dụng Drag and Drop',
      cteatTime: 'Tue Nov 09 2021 09:43:08 GMT+0700 (Giờ Đông Dương)',
    }
  ];
  inProgressLists = [
    {
      id: 3,
      name: 'Tìm hiểu về Response',
      content: 'Tìm hiểu về Response và dựng giao diện demo sử dụng Response',
      cteatTime: 'Tue Nov 09 2021 01:45:08 GMT+0700 (Giờ Đông Dương)',
    }
  ];
  resolvedLists = [
    {
      id: 2,
      name: 'Tìm hiểu về Bootstrap 4',
      content: 'Tìm hiểu về Bootstrap 4 và dựng giao diện demo sử dụng bootstrap4',
      cteatTime: 'Tue Nov 09 2021 15:46:08 GMT+0700 (Giờ Đông Dương)',
    }
  ];
  doneLists = [
    {
      id: 1,
      name: 'Tìm hiểu về DOM',
      content: 'Tìm hiểu về DOM và dựng giao diện demo sử dụng DOM',
      cteatTime: 'Tue Nov 09 2021 00:43:08 GMT+0700 (Giờ Đông Dương)',
    }
  ];

  total = 0;
  todo = 0;
  inProgress = 0;
  resolved = 0;
  done = 0;
  index: any = [];
  constructor(
    public dialog: MatDialog,
    public cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.changeTotalItem();
  }

  changeTotalItem(){
    this.todo = this.todoLists.length;
    this.inProgress = this.inProgressLists.length;
    this.resolved = this.resolvedLists.length;
    this.done = this.doneLists.length;
    this.total = this.todo + this.inProgress + this.resolved + this.done;
  }

  addItem(){
    if(this.item){
      this.todoLists = this.todoLists.concat(this.item)
      // console.log('todoLists', this.todoLists)
    }
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    this.changeTotalItem();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddItemComponent, {
      width: '350px',
    });


    dialogRef.afterClosed().subscribe(res => {
      if (!res) {
        return;
      }else{
        this.item = res;
        this.addItem();
        this.changeTotalItem();
        this.cdr.markForCheck();
        this.index.push(this.total);
        console.log('index', this.index);
        const length = this.todoLists.length - 1
        this.todoLists[length];
        this.todoLists[length].id = this.index[this.index.length - 1];
        this.todoLists[length].cteatTime = new Date().toString();
        console.log(this.todoLists)
        const creatTime = new Date();
        console.log('this.todoLists', this.todoLists)
        console.log('this.new Date();', new Date())
        }
    });
  }

}
