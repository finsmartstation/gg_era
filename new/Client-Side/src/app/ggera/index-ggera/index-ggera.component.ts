import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-index-ggera',
  templateUrl: './index-ggera.component.html',
  styleUrls: ['./index-ggera.component.scss']
})
export class IndexGgeraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }

}
