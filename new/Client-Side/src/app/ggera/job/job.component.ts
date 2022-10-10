import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }

}
