import { isDefined } from '@angular/compiler/src/util';

import {PUBLICATIONS} from '../publicationslist';
import { sharedStylesheetJitUrl } from '@angular/compiler';
import { Authors } from '../publications';


export class Institutions{
private link
private logo
private name
}   

export class AuthorList{ 
    private theAuthors=[]
    private ME

    
    constructor(
        
    ){
        PUBLICATIONS.forEach((publication) => {

            publication.authors.forEach((author)=>{

            if(this.theAuthors.some(e=>(e.name===author.name && e.surname===author.surname))){
            }else{
                //push the author id
                var entryA=author;
                author.id=Math.random();
                this.theAuthors.push(author);

                if(author.name==='Eros' && author.surname==='Montin'){
                    this.ME=author;
                }

            }
        })
        });
    };

    getUnrichedAuthorsList(){
        return this.theAuthors;
    }

    get(){
        return this.theAuthors;
    }
    saHitoME(){
    //    retrieve the people made a publication with me
        var MYLIST=[];
        MYLIST.push({
            id:this.ME.id,
            name:this.ME.name + " "+this.ME.surname,
            connections:[],
            affiliation:this.ME.affiliation
        })

       this.getUnrichedAuthorsList().forEach(function(au){
        if(au.id!=MYLIST[0].id){
            MYLIST.push({
                id:au.id,
                name:au.name + " "+au.surname,
                connections:[],
                affiliation:au.affiliation
            })
        }

           }       );

      var A=this.saHiTo(this.ME);
  
      A.forEach(function(o){
          MYLIST[0].connections.push(o.id)
      })
      
      return MYLIST;
    }

    saHiTo(x:Authors=PUBLICATIONS[10].authors[3]){
        var thetobeSearchedId=x.id;
        console.log(x);
        var stat={
            id:undefined,
            N:0
        }
        var THEARRAY=[];
        //Author
        PUBLICATIONS.forEach((publication) => {
            if(publication.authors.some(e=>(e.id===thetobeSearchedId))){
                //se c'e' l'autore che sto cercando
                publication.authors.forEach((author)=>{
                    if(author.id != thetobeSearchedId){
                    if(THEARRAY.some(e=>e.id===author.id)){
                        THEARRAY.find(function(item,i){if(item.id === author.id){
                            item.N=item.N+1;
                        }})
                    }else{
                        THEARRAY.push({id:author.id,N:1,name:author.name,surname:author.surname});
                    }
                }
                    //     var L=publication.find(e=> e.id)
                    })
            
            
        }

    
    })
    // console.log(THEARRAY);
    return THEARRAY;


}


   
}


export class authorsListNoInterfaces{
    theAuthors=[];

    constructor(authors){
        this.theAuthors=authors;    
    }

    getAffiliationsIcon(){

        let logopoli="http://biodimensional.com/RESOURCES/logos/POLIMIlogo.png";
        let logoint='http://biodimensional.com/RESOURCES/logos/INTlogo.png';
        let logonyu='http://biodimensional.com/RESOURCES/logos/NYUlogo.png';
        let logoieo='http://biodimensional.com/RESOURCES/logos/IEOlogo.png';
        let logolnf='http://biodimensional.com/RESOURCES/logos/BPlogo.png';
        let logossc='http://biodimensional.com/RESOURCES/logos/SClogo.png';
        let logoiodc='http://biodimensional.com/RESOURCES/logos/IODClogo.jpg';
        let logobr='http://biodimensional.com/RESOURCES/logos/BRlogo.png';
        

      
        let logolist=[];
        let image=undefined;
        this.theAuthors.forEach(function(o,i){

            switch(o.affiliation.toLowerCase()){
                case "poli":
                    image={src:logopoli,name:"Politecnico di Milano",url:"https://www.polimi.it/"};

                    break;
                    case "int":
                        image={src:logoint,name:"Fondazione IRCCS Istituto nazionale dei tumori",url:"https://www.istitutotumori.mi.it/"};

                      break;
                     case "ieo":
                        image={src:logoieo,name:"Istituto Europeo di Oncologia",url:"https://www.ieo.it/"};
                        break;
                     case "nyu":
                        image={src:logonyu,name:"NYU Langone Medical Center",url:"https://nyulangone.org/"};

                      break;
                         case "lnf":
                            image={src:logolnf,name:"IRCCS Eugenio Medea",url:"https://emedea.it/medea/it/prenota-la-tua-visita"};

                      break;
                      case "iccu":
                        image={src:logossc,name:"Institute of Cardiology, Catholic University of the Sacred Heart",url:"https://eupha.org/catholic-university-of-the-sacred-heart-rome"};
                        break;
                      case "iodc":
                        image={src:logoiodc,name:"Fondazione Toscana G. Monasterio, Ospedale Del Cuore",url:"https://www.ftgm.it/"};

                      break;
                      
                      case "br":
                      image={src:logobr,name:"Brighton & Sussex University Hospitals NHS Trust",url:"https://www.bsuh.nhs.uk/"};
                      break;
                      
                    default:
                    image=logoint;
            }
            if( logolist.some(x => x.src === image.src)){

            }else{
                
                logolist.push(image);
            }
        })

        return logolist;
    }
}