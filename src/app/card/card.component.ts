import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../services/corona.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private corona:CoronaService) { }

  ngOnInit(): void {
    this.corona.getData().subscribe((data)=>{
      var data = data.data;
      // console.log(data);

      this.types[0].value = data.local_total_cases;
      this.types[1].value = data.local_active_cases;
      this.types[2].value = data.local_deaths;
      this.types[3].value = data.local_recovered;
      this.types[4].value = (data.local_deaths / data.local_total_cases * 100).toFixed(2) + "%"; 
      this.types[5].value = (data.local_recovered / data.local_total_cases * 100).toFixed(2) + "%"; 
      
    })
  }

  

  types = [
    {case:"Confirmed Cases", color:"rgb(247,212,206)"},
    {case:"Active Cases", color:"rgb(190,217,238)"},
    {case:"Deaths", color:"rgb(222,222,222)"},
    {case:"Recovered", color:"rgb(198,232,215)"},
    {case:"Death Rate", color:"rgb(222,222,222)"},
    {case:"Recovery Rate", value:"1", color:"rgb(198,232,215)"}
  ];

}
