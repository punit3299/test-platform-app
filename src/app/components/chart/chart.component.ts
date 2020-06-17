import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  chart=[];
  constructor() { }

  ngOnInit() {
    this.chart = new Chart('pieChart', {
      type: 'doughnut',
      data: {
        labels: ['Correct','Wrong'],
        datasets: [
          {
            label: 'English Comprehension',
            backgroundColor: ['#50C76B','#C75052'],
            borderColor: ['#50C76B','#C75052'],
            data: [8,2],
            fill: true,
          }
        ]
      }
    })

    this.chart = new Chart('pieChart1', {
      type: 'doughnut',
      data: {
        labels: ['Correct','Wrong'],
        datasets: [
          {
            label: 'Logical Ability',
            backgroundColor: ['#50C76B','#C75052'],
            borderColor: ['#50C76B','#C75052'],
            data: [5,4],
            fill: true,
          }
        ]
      }
    })

    this.chart = new Chart('pieChart2', {
      type: 'doughnut',
      data: {
        labels: ['Correct','Wrong'],
        datasets: [
          {
            label: 'Quantitative Ability',
            backgroundColor: ['#50C76B','#C75052'],
            borderColor: ['#50C76B','#C75052'],
            data: [5,4],
            fill: true,
          }
        ]
      }
    })

    this.chart = new Chart('pieChart3', {
      type: 'doughnut',
      data: {
        labels: ['Marks Obtained','Marks Cut'],
        datasets: [
          {
            label: 'Essay Writing',
            backgroundColor: ['#50C76B','#C75052'],
            borderColor: ['#50C76B','#C75052'],
            data: [65,35],
            fill: true,
          }
        ]
      }
    })

    this.chart = new Chart('pieChart4', {
      type: 'doughnut',
      data: {
        labels: ['Marks Obtained','Marks Cut'],
        datasets: [
          {
            label: 'Automata',
            backgroundColor: ['#50C76B','#C75052'],
            borderColor: ['#50C76B','#C75052'],
            data: [50,50],
            fill: true,
          }
        ]
      }
    })

    this.chart = new Chart('pieChart5', {
      type: 'doughnut',
      data: {
        labels: ['Correct','Wrong'],
        datasets: [
          {
            label: 'Quantitive Ability',
            backgroundColor: ['#50C76B','#C75052'],
            borderColor: ['#50C76B','#C75052'],
            data: [7,3],
            fill: true,
          }
        ]
      }
    })
  }
}
