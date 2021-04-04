import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash.component';
import { DialogContentExampleDialog } from './dash/dash.component';
import { ViewchartComponent } from './viewchart/viewchart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatExpansionModule} from '@angular/material/expansion';
import { HabserapisService } from './habserapis.service';
import { HttpClientModule } from '@angular/common/http';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { DatePipe } from '@angular/common'
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    DialogContentExampleDialog,
    ViewchartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    BrowserAnimationsModule,
    MatSliderModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatCardModule,
    MatProgressBarModule,
    FontAwesomeModule,
    MatDialogModule,
    MatButtonModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule
  ],
  providers: [ 
    HabserapisService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
