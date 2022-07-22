import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserUpdateDto } from '@core/dto/user-update.dto';
import { LocalStorageService } from '@core/services/local-storage.service';
import { UserService } from '@user/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  id = 0;
  user = new UserUpdateDto();
  error = '';
  constructor(private localStorageService: LocalStorageService, private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
    this.id = this.localStorageService.id
    this.user = this.localStorageService.user
  }
  onUpdate(){
    this.userService.updateUser(this.id, this.user).subscribe({
      next: (v: any) => {
        this.localStorageService.user = v.data.user;
      },
      error: (e: any) => {this.error = e.error.messages },
      complete:() => {this.router.navigate(['/user']);}
    })
  }

onDelete(){
  this.userService.deleteUser(this.id).subscribe({
    error: (e: any) => {this.error = e.error.messages },
    complete:() => {
      this.localStorageService.logOut();
      this.router.navigate(['/']);
    }
  })
  
}
}
