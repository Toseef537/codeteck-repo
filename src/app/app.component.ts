import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableTaskComponent } from './table-task/table-task.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TableTaskComponent,InputTextModule,ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'codeteck-task';
}
