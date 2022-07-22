import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@core/models/user.model';
import { LocalStorageService } from '@core/services/local-storage.service';

@Component({
  selector: 'app-user',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = new User();
  constructor(private localStorageService: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.localStorageService.user
  }
  logOut(){
    this.localStorageService.logOut()
    this.router.navigate(['/']);
  }

}
