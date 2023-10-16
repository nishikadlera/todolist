import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  userList: any;
  constructor(private userservice : UserService){
    this.userservice.getUsers().subscribe(e => {
      console.log(e)
      this.userList = e;
    })

  }

  ngOnInit(): void {
    
  }

}
