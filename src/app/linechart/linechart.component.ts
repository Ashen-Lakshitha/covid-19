import { Component, OnInit,Input } from '@angular/core';
import { CoronaService } from '../services/corona.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit {

  lineChart :any;
  data:any;
  date:any[];
  count:any[];
  update:any;

  @Input() min: number;
  @Input() max: number;
  //@Input() check():  void;

  constructor(private corona:CoronaService) { }

  check():void{
    console.log("min ->",this.min);
    console.log("max ->",this.max);
    this.count = [];
    this.date = [];
    for(let i = this.min; i <= this.max; i++){
      this.count.push( this.data.data.daily_pcr_testing_data[i].count);
      this.date.push(this.data.data.daily_pcr_testing_data[i].date);
    }
    console.log("Count", this.count);
    if(this.count && this.date){
      this.renderChart(this.count,this.date); 
    } 
  }

  reset():void{
    this.ngOnInit();
  }
  renderChart(c:any,d:any) {
    this.lineChart = new Chart('lineChart', {
      type: 'line',
      data: {

          labels: d,
          datasets: [{
              label: 'Number of PCR',

              data: c,
              fill:false,
              lineTension:0.2,
              borderColor:"red",
              borderWidth: 1,
              pointStyle:'circle',
              pointRadius:0
          }]
      }, 
      options: {
          scales: {
              yAxes: [{
                display: true,
                ticks:{
                  fontColor:'black',
                  fontSize:16,
                }
              }],
              xAxes: [{
                display: true,
                ticks:{
                  fontColor:'pink',
                  fontSize:16,
                }
              }],
          },
          legend:{
            labels:{
              fontColor:'rgb(255, 51, 133)',
              fontSize:16,
            }
          }
      }
    })
  }

  /*ngOnChanges(changes: SimpleChanges): void {
    //throw new Error('Method not implemented.');
    console.log("min ->",this.min);
    console.log("max ->",this.max);
    this.count = [];
    this.date = [];
    for(let i = this.min; i <= this.max; i++){
      this.count.push( this.data.data.daily_pcr_testing_data[i].count);
      this.date.push(this.data.data.daily_pcr_testing_data[i].date);
    }
    console.log("Count", this.count);
    if(this.count && this.date){
      this.renderChart(this.count,this.date); 
    } 
    
  }*/

  ngOnInit(): void {
    this.corona.getData().subscribe((res)=>{
      this.data = res;
      this.count = res.data['daily_pcr_testing_data'].map((r: { count: any; }) => r.count);
      this.date = res.data['daily_pcr_testing_data'].map((r: { date: any; }) => r.date);
      this.update = res.data.update_date_time;

      console.log("date ->", this.update)
      //console.log("count ->", count)
      
      if(this.count && this.date){
        this.renderChart(this.count,this.date); 
      } 
    })
  }
}