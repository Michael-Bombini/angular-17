import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from '../../models/Users';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  users: IUser[] = [];

  ngOnInit(): void {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((resp) => resp.json())
      .then((data) => {
        this.users = data;
      });
  }
}
