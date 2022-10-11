import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { Observable, tap } from 'rxjs';
import { AdminService } from 'src/app/common/service/admin.service';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-roaster',
  templateUrl: './roaster.component.html',
  styleUrls: ['./roaster.component.scss']
})
export class RoasterComponent implements OnInit {
  proUsers:any;
  constructor(private adminservice:AdminService) { }

  ngOnInit(): void {
    AOS.init()
    this.adminservice.getProUsers()
    .subscribe(data=>{
      
      this.proUsers=JSON.parse(JSON.stringify(data))
      //console.log(this.proUsers)
    })
  //   .pipe(tap(e=>{
  //     console.log('elements',e)
  //   }))
    
   }

}
