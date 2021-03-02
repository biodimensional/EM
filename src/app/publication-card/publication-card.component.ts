import { Component, OnInit } from '@angular/core';
import { Publication } from '../publications';
import { Input } from '@angular/core';
import * as FileSaver from 'file-saver';

// import {MatTooltipModule} from '@angular/material/tooltip';

import { StringArrayOperations } from '../CODE/arrayoperations';
import { authorsListNoInterfaces } from '../CODE/publicationsOperations';

@Component({
  selector: 'app-publication-card',
  templateUrl: './publication-card.component.html',
  styleUrls: ['./publication-card.component.css']
})

export class PublicationCardComponent implements OnInit {
  canidownloadit=false;
  


 logos=[];
  constructor() { 
    
  }
  @Input() publication:Publication
  selected=false;

  // parse the autors affiliation by sending the authorslist
  publicationAuthors;


  public getCitation(link) {
      
    window.open(link, "_blank");

  }

  public downloadit(){
    

    let link = document.createElement("a");
        link.download = this.publication.journal + this.publication.date + '.pdf' ;
        link.href = this.publication.download;
        link.click();
  }



  public parsestringarray(ARRAY) {
    let SAO = new StringArrayOperations(ARRAY);
    return new Promise(resolve => {
        resolve(SAO.getList());        
    });
  }
  
  
  public parsenamesurname(ARRAY) {
    return new Promise(resolve => {
      var OUT='';

     
        ARRAY.forEach((element,index) => {
           
          OUT=OUT.concat(element.name +" " + element.surname + ", ");
          if(index==ARRAY.length-1){
            
               resolve(OUT.substring(0, OUT.length - 2))
          }

        });
            
    });
  }

  public citeme(){
    this.parsenamesurname(this.publication.authors).then(AUTHORS=>{
      console.log(AUTHORS);
      this.parsestringarray(this.publication.tags).then(ASHTAGS=>{
        console.log(ASHTAGS);
        FileSaver.saveAs(new Blob(["@article{'"+ this.publication.journal + this.publication.date + "',abstract = {" + this.publication.abstract +"},author = {" + AUTHORS +"},journal = {" + this.publication.journal+"},keywords = {"+ ASHTAGS +"},title = {{"+this.publication.title+"}},year = {" +this.publication.date +"}}"], {type: 'text/plain'}), this.publication.journal + '.bib');
      });
    });

  }

  ngOnInit(): void {

    this.publicationAuthors= new authorsListNoInterfaces(this.publication.authors);

    try{
    this.canidownloadit=!this.publication.download.includes('biodimensional.com');
    }catch(e){
      console.log("ll")
    }
  

this.logos= this.publicationAuthors.getAffiliationsIcon();

  }
}
