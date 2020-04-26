import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-publication-entry-tags',
  templateUrl: './publication-entry-tags.component.html',
  styleUrls: ['./publication-entry-tags.component.css']
})
export class PublicationEntryTagsComponent implements OnInit {

  constructor() { }

  @Input() tags:Array<string>
  ngOnInit(): void {
  }

}
