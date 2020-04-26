import { Component, OnInit } from '@angular/core';
import { Publication } from '../publications';
import { Input } from '@angular/core';
@Component({
  selector: 'app-publication-card',
  templateUrl: './publication-card.component.html',
  styleUrls: ['./publication-card.component.css']
})
export class PublicationCardComponent implements OnInit {

  constructor() { }
  @Input() publication:Publication
  selected=false;

  public getCitation(link) {
    
  
    window.open(link, "_blank");

  }

  public downloadit(){
    

    let link = document.createElement("a");
        link.download = this.publication.journal + this.publication.date + '.pdf' ;
        link.href = this.publication.download;
        link.click();
  }

  ngOnInit(): void {
  }

}
