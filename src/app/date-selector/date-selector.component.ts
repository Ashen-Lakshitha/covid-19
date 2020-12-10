import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { CoronaService } from '../services/corona.service';
import { LinechartComponent } from '../linechart/linechart.component';

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.scss']
})
export class DateSelectorComponent implements OnInit {

  @ViewChild( LinechartComponent ) line: LinechartComponent ; 

  minDate: Date;
  maxDate: Date;
  selectedDate1: Date;
  selectedDate2: Date;
  Index:Number;
  minIndex: Number;
  maxIndex:Number;
  pcr_data:any[];
  c_date1: any;
  c_date2: any;

  constructor(private corona:CoronaService) {
    const currentYear = new Date().getFullYear(); // Set the minimum to start date and maximum to current date.
    let month = new Date().getMonth();
    let day = new Date().getDate();
    this.minDate = new Date(2020,1,18);
    this.maxDate = new Date(currentYear + 0,month,day);
    //console.log(this.minDate.toLocaleDateString('en',{year:'numeric',month:'numeric',day:'numeric'}));
  }

  addEvent1(event: MatDatepickerInputEvent<Date>) {
    this.selectedDate1 = event.value; //get start date
    this.c_date1=this.changeDate(this.selectedDate1); //change as needed
    //console.log(this.c_date1);
    for (let i = 0; i <= this.Index; i++) {
      if(this.pcr_data[i].date.localeCompare(this.c_date1)==true){
        this.minIndex = i-1;
        //console.log(this.pcr_data[i-1].date); 
        break;
      }  
    }
  }

  addEvent2(event: MatDatepickerInputEvent<Date>) {
    this.selectedDate2 = event.value;
    this.c_date2=this.changeDate(this.selectedDate2);
    //console.log(this.c_date2);
    for (let i = 0; i <= this.Index; i++) {
      if(this.pcr_data[i].date.localeCompare(this.c_date2)==true){
        this.maxIndex = i-1;
        //console.log(this.maxIndex); 
        break;
      }
    }
  }

  ngOnInit(): void {
    this.corona.getData().subscribe((res)=>{
      this.pcr_data = res.data.daily_pcr_testing_data;
      this.Index = this.pcr_data.length -1;
      //console.log(this.Index);
    })
  }
    
  btnClick1():void {
    console.log("Check");
    this.line.check();
  }

  btnClick2(){
    console.log("Reset");
    this.line.reset();
  }

  changeDate(date:Date){
    var month_number:any = date.getMonth() + 1;
    var date_date:any = date.getDate();
    //console.log(date_date);
    if(date_date < 10 || month_number < 10){
      if(month_number < 10){
        month_number = '0' + month_number;
      }
      if(date.getDate() < 10){
        date_date = '0' + date_date;
      }
      return date.getFullYear() + '-' + month_number + '-' + date_date;
    }
    return date.getFullYear() + '-' + month_number + '-' + date_date;
  }
}
