import { Component, OnInit } from '@angular/core';
import { SelectableItem } from "../models/selectableItem.model"

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  public items: SelectableItem[] = [
    new SelectableItem("Вода", false),
    new SelectableItem("Сік", false),
    new SelectableItem("Вино", false),
    new SelectableItem("Молоко", false),
    new SelectableItem("Хліб", false),
  ]


  public name:string="Tom";
  public age:number = 24;
  public listChecked: string[] = [];

  constructor() {}

  ngOnInit(): void {}


  updateCheckboxes(index: number) {
    this.items[index].selected = !this.items[index].selected;

    if(this.items[index].selected){
      this.listChecked.push(this.items[index].name);
      console.log(this.listChecked)
    }else{
      let indexDelete = this.listChecked.indexOf(this.items[index].name); 
      this.listChecked.splice(indexDelete, 1); 
      console.log(this.listChecked)  
    }

    this.items.sort(function(x, y) {
      return Number(x.selected) - Number(y.selected);
    });
  }

  toggleTrueChecked() {
    for (const id of this.items) {
        id.selected = true;
        this.listChecked.push(id.name);
    }

    
  }

  toggleFalseChecked() {
    for (const id of this.items) {
        id.selected = false;
    }
    this.listChecked = [];
    
  }





}
