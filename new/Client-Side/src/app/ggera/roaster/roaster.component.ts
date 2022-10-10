import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-roaster',
  templateUrl: './roaster.component.html',
  styleUrls: ['./roaster.component.scss']
})
export class RoasterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }

}
