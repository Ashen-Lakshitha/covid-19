import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { MatDatepickerModule } from '@angular/material/datepicker'; //datepicker
import { MatInputModule } from '@angular/material/input'; //
import { MatFormFieldModule } from '@angular/material/form-field';//
import { MatNativeDateModule } from '@angular/material/core';//

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';
import { ChartComponent } from './chart/chart.component';
import { LinechartComponent } from './linechart/linechart.component';
import { CoronaService } from './services/corona.service';
import { DateSelectorComponent } from './date-selector/date-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    ChartComponent,
    LinechartComponent,
    DateSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    ChartsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
  ],
  providers: [CoronaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
