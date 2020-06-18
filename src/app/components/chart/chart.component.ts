import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  chart = [];
  constructor() { }

  ngOnInit() {
    this.chart = new Chart('pieChart', {
      type: 'doughnut',
      data: {
        labels: ['Correct', 'Wrong'],
        datasets: [
          {
            label: 'English Comprehension',
            backgroundColor: ['#50C76B', '#C75052'],
            borderColor: ['#50C76B', '#C75052'],
            data: [8, 2],
            fill: true,
          }
        ]
      },
      options: {
        responsive: true,
        legend: {
          display: false
        }
      }
    })

    this.chart = new Chart('pieChart1', {
      type: 'doughnut',
      data: {
        labels: ['Correct', 'Wrong'],
        datasets: [
          {
            label: 'Logical Ability',
            backgroundColor: ['#50C76B', '#C75052'],
            borderColor: ['#50C76B', '#C75052'],
            data: [5, 4],
            fill: true,
          }
        ]
      },
      options: {
        responsive: true,
        legend: {
          display: false
        }
      }
    })

    this.chart = new Chart('pieChart2', {
      type: 'doughnut',
      data: {
        labels: ['Correct', 'Wrong'],
        datasets: [
          {
            label: 'Quantitative Ability',
            backgroundColor: ['#50C76B', '#C75052'],
            borderColor: ['#50C76B', '#C75052'],
            data: [5, 4],
            fill: true,
          }
        ]
      },
      options: {
        responsive: true,
        legend: {
          display: false
        }
      }
    })

    this.chart = new Chart('pieChart3', {
      type: 'doughnut',
      data: {
        labels: ['Marks Obtained', 'Marks Cut'],
        datasets: [
          {
            label: 'Essay Writing',
            backgroundColor: ['#50C76B', '#C75052'],
            borderColor: ['#50C76B', '#C75052'],
            data: [65, 35],
            fill: true,
          }
        ]
      },
      options: {
        responsive: true,
        legend: {
          display: false
        }
      }
    })

    this.chart = new Chart('pieChart4', {
      type: 'doughnut',
      data: {
        labels: ['Marks Obtained', 'Marks Cut'],
        datasets: [
          {
            label: 'Automata',
            backgroundColor: ['#50C76B', '#C75052'],
            borderColor: ['#50C76B', '#C75052'],
            data: [50, 50],
            fill: true,
          }
        ]
      },
      options: {
        responsive: true,
        legend: {
          display: false
        }
      }
    })

    Chart.pluginService.register({
      beforeDraw: function(chart) {
        var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;
    
        ctx.restore();
        var fontSize = (height / 125).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";
    
        var text = "Pass",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
    
        ctx.fillText(text, textX, textY);
        ctx.save();
      }
    });

  }
}
