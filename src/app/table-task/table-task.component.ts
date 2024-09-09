import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'table-task',
  standalone: true,
  imports: [CommonModule,TableModule],
  templateUrl: './table-task.component.html',
  styleUrl: './table-task.component.scss'
})
export class TableTaskComponent {
 
  schedule:any[] = [
    {
      monday: [
        { title: 'Working Issue Name', detail: 'I am working in schedule', time: '4h 25m' },
        { title: 'Working Issue Name', detail: 'I am working in schedule', time: '4h 25m' },
        { title: 'Working Issue Name', detail: 'I am working in schedule', time: '4h 25m' }
      ],
      tuesday: [
        { title: 'Working Issue Name', detail: 'I am working in schedule', time: '4h 25m' },
        { title: 'Working Issue Name', detail: 'I am working in schedule', time: '4h 25m' },
        { title: 'Working Issue Name', detail: 'I am working in schedule', time: '4h 25m' }
      ],
      wednesday: [
        { title: 'Working Issue Name', detail: 'I am working in schedule', time: '4h 25m' },
        { title: 'Working Issue Name', detail: 'I am working in schedule', time: '4h 25m' },
        { title: 'Working Issue Name', detail: 'I am working in schedule', time: '4h 25m' }
      ],
      thursday: [
        { title: 'Working Issue Name', detail: 'I am working in schedule', time: '4h 25m' },
        { title: 'Working Issue Name', detail: 'I am working in schedule', time: '4h 25m' },
        { title: 'Working Issue Name', detail: 'I am working in schedule', time: '4h 25m' }
      ],
      friday: [
        { title: 'Working Issue Name', detail: 'I am working in schedule', time: '4h 25m' },
        { title: 'Working Issue Name', detail: 'I am working in schedule', time: '4h 25m' },
        { title: 'Working Issue Name', detail: 'I am working in schedule', time: '4h 25m' }
      ]
    }
  ];
  
  }
  
  

