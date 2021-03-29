import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DatePipe } from '@angular/common'


@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  
  dash : any;
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
    this.http.get("https://habbit-thymeleaf.herokuapp.com/hab/dash").subscribe((response) => {
      this.dash = response;
      console.log(response);
    });
  }

  ngOnInit(): void {
    this.getDashData();
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