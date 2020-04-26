import { Component, OnInit } from '@angular/core';
import {PUBLICATIONS} from '../publicationslist';
 

@Component({
  selector: 'app-publication-entry',
  templateUrl: './publication-entry.component.html',
  styleUrls: ['./publication-entry.component.css']
})
export class PublicationEntryComponent implements OnInit {

  publications=PUBLICATIONS;



  
  
  constructor() { }

  ngOnInit(): void {
  }

}
