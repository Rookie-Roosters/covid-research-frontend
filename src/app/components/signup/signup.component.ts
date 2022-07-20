import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }
  confirmpass: string = ''

  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }

  submitted = false;
//check it up
  onSubmit() { this.userService.createUser(this.user).subscribe({
    error: (e) => console.error(e),
    complete: () => console.info('complete') 
})
}
}
