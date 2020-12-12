import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../services/corona.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor(private corona:CoronaService) { }

  ngOnInit(): void {
    this.corona.getData().subscribe((data)=>{
      var data = data.data;
      console.log(data);

      myChart.data.datasets[0].data[0] = data.local_total_cases;
      myChart.data.datasets[0].data[1] = data.local_active_cases;
      myChart.data.datasets[0].data[2] = data.local_deaths;
      myChart.data.datasets[0].data[3] = data.local_recovered;
      myChart.update();
    })

    var myChart = new Chart("myChart", {
      type: 'doughnut',
      data: {
          labels: ['Confirmed Cases', 'Active Cases', 'Deaths', 'Recovered Cases'],
          datasets: [{
              label: '# of Votes',
              //data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.8)',
                  'rgba(54, 162, 235, 0.8)',
                  'rgba(255, 206, 86, 0.8)',
                  'rgba(75, 192, 192, 0.8)',
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
              ],
              borderWidth: 1,
              hoverBorderColor: [
                'rgba(255, 99, 132, 1.5)',
                'rgba(54, 162, 235, 1.5)',
                'rgba(255, 206, 86, 1.5)',
                'rgba(75, 192, 192, 1.5)',
              ],
              hoverBorderWidth: 2,
          }]
      },
      options: {
        legend: {
          display: true,
          labels: {
              fontColor: 'rgb(255, 51, 133)',
              fontSize:16,
          }
      }
        
      }
    })
  }
}
