//folder.page.ts
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage  {
  userLoginOn:boolean=false;
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
   // this.router.navigate(['/folder/dashboard']);
  
  /* if (this.folder === 'dashboard') {
  
      this.router.navigate(['/folder/dashboard']);
        //, { relativeTo: this.route });
    }*/
  }

  /*navigateToDashboard() {
    this.router.navigate(['folder/dashboard']);
  }*/


  isDashboard(): boolean {
    return this.folder === 'dashboard';
  }

  isiniciarsesion(): boolean {
    return this.folder === 'iniciar-sesion';
  }

}


  

 

