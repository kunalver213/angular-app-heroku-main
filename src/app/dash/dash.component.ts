import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  
  dash : any;
  allDash : any;
  markdon : string = "";
  
  constructor(private http : HttpClient, public dialog: MatDialog) {   }

  markdone(id){
    if (this.markdon.search(id) == -1 ) { 
      this.markdon += ","+id;
    }else{      
      this.markdon = this.markdon.replace(","+id,"");
    }   
    console.log(this.markdon);
  }

  getDashData(){
    this.http.get("https://habbit-thymeleaf.herokuapp.com/hab/dash?option=0").subscribe((response) => {
      this.dash = response;
      console.log(response);
    });
  }

  getAllDashData(){
    this.http.get("https://habbit-thymeleaf.herokuapp.com/hab/dash?option=1").subscribe((response) => {
      this.allDash = response;
      console.log(response);
    });
  }

  ngOnInit(): void {
    this.getDashData();
    this.getAllDashData();
  }


  openDialog(id, status) {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      data: {
        shdid: id,
        shdstatus: status
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getDashData();
    });
  }

}


@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {
  
  today: number = Date.now();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private http : HttpClient) {}

  mdsave(id){    
    this.http.get("https://habbit-thymeleaf.herokuapp.com/hab/logdash?shdId="+id+"&time="+(<HTMLInputElement>document.getElementById("timetxt")).value).subscribe((response) => {
      console.log(response);
    });    
  }
}