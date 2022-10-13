import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-index-ggera',
  templateUrl: './index-ggera.component.html',
  styleUrls: ['./index-ggera.component.scss']
})
export class IndexGgeraComponent implements OnInit {
  //readmore variable, its true than read more string will print
  ReadMore:boolean = true

  //hiding info box
  visible:boolean = false
  visible2:boolean = false
  visible3:boolean = false


  //onclick toggling both
  onclick()
  {
    this.ReadMore = !this.ReadMore; //not equal to condition
    this.visible = !this.visible
  
   
  }

  onclick2()
  {
    this.ReadMore = !this.ReadMore; //not equal to condition
    this.visible2 = !this.visible2
  }
  onclick3()
  {
    this.ReadMore = !this.ReadMore; //not equal to condition
    this.visible3 = !this.visible3
  }
  constructor() { }

  ngOnInit(): void {
   
  }

}
