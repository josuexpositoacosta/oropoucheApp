//dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/service.index';

import { ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userLoginOn:boolean=false;
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  //  this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    
    this.loginService.currentUserLoginOn.subscribe({
      next:(userLoginOn) => {
        this.userLoginOn=userLoginOn;
      } 
    });

  }

}
