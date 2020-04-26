import { Component, OnInit,Input } from '@angular/core';
import { Authors } from '../publications';

@Component({
  selector: 'app-publication-entry-authors',
  templateUrl: './publication-entry-authors.component.html',
  styleUrls: ['./publication-entry-authors.component.css']
})
export class PublicationEntryAuthorsComponent implements OnInit {


  constructor() {
    console.log(this.authors);
    
   }

   
  @Input() authors:Authors
  
  ngOnInit(): void {
  }

}
