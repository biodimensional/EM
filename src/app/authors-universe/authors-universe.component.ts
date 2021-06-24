import { Component, OnInit } from '@angular/core';
import { AuthorList } from 'src/app/CODE/publicationsOperations';
import * as p5 from 'p5';
import { PUBLICATIONS } from '../publicationslist';
@Component({
  selector: 'app-authors-universe',
  templateUrl: './authors-universe.component.html',
  styleUrls: ['./authors-universe.component.css']
})
export class AuthorsUniverseComponent implements OnInit {

  private p5;


  constructor() {
   
   }

  ngOnInit(): void {
  
    
    // console.log(T);
    this.createCanvas();
  }

  private createCanvas() {
    var A= new AuthorList();
    this.p5 = new p5(this.sketch);
    this.p5.Authors=A.saHitoME();

  }
  

  

 

   sketch(p: any) {

    p.preload = ()=> {


      p.imagespoli=p.createImg("http://biodimensional.com/RESOURCES/logos/POLIMIlogo.png");
      p.imagespoli.hide();
      p.imagesint=p.createImg('http://biodimensional.com/RESOURCES/logos/INTlogo.png');
      p.imagesint.hide();
      p.imagesnyu=p.createImg('http://biodimensional.com/RESOURCES/logos/NYUlogo.png');
      p.imagesnyu.hide();
      p.imagesieo=p.createImg('http://biodimensional.com/RESOURCES/logos/IEOlogo.png');
      p.imagesieo.hide();
      p.imageslnf=p.createImg('http://biodimensional.com/RESOURCES/logos/BPlogo.png');
      p.imageslnf.hide();
      p.imagessc=p.createImg('http://biodimensional.com/RESOURCES/logos/SClogo.png');
      p.imagessc.hide();
      p.imagesiodc=p.createImg('http://biodimensional.com/RESOURCES/logos/IODClogo.jpg');
      p.imagesiodc.hide();
      p.imagesbr=p.createImg('http://biodimensional.com/RESOURCES/logos/BRlogo.png');
      p.imagesbr.hide();
    }

    p.authors=[];

    p.setup = () => {
      p.frameRate(30);
      p.myCanvas=p.createCanvas(1024, 700);
      p.background(14, 182, 244)
      p.myCanvas.parent('myAuthorsUniverse');

      // console.log(p.Authors)    
      p.Authors.forEach(function(o,i){
        var image;
        try{
          console.log(o.affiliation);
        switch(o.affiliation.toLowerCase()){
          case "poli":
            image=p.imagespoli;
            break;
            case "int":
              image=p.imagesint;
              break;
             case "ieo":
              image=p.imagesieo;
              break;
             case "nyu":
              image=p.imagesnyu;
              break;
                 case "lnf":
              image=p.imageslnf;
              break;
              case "iccu":
              image=p.imagessc;
              break;
              case "iodc":
              image=p.imagesiodc;
              break;
              
              case "br":
              image=p.imagesbr;
              break;
              
            default:
            image=p.imagesint;

        }     
        var r=i/(p.Authors.length+1);
        var c=2*Math.PI*r   
        var x=400*Math.cos(c)+512;
        var y=300*Math.sin(c)+350;
        let A=new theAuthor(x,y,60,image,p.random(0,1), o.name)
        p.authors.push(A);
      }catch(e){

        }
      })



    }
    p.draw =()=>{
      p.background(14, 182, 244,120);
      p.authors.forEach(function(o,i){
        o.move();
        o.show();

      })

    }

    class theAuthor{
      x
      Cx
      y
      Cy
      ray
      image
      movement
      name
      constructor(x,y,ray,image,movement,name){
        this.Cx=x;
        this.x=x;
        this.Cy=y;
        this.y=y;
        this.ray=ray;
        this.image=image;
        this.movement=movement;
        this.name=name;
      }
      move(){
        this.x=this.Cx+p.random(-this.movement,this.movement);
        this.y=this.Cy+p.random(-this.movement,this.movement);
    }
    show() {
      // image(this.kitten, this.x, this.y, this.r, this.r);
      // stroke(255);
      // strokeWeight(4);
      // fill(this.brightness, 125);

      
     
      p.image(this.image,this.x-this.ray/2,this.y-this.ray/2,this.ray,this.ray)
      p.fill(0);

      
  

      p.fill(255,255,255,120);

      p.ellipse(this.x, this.y, this.ray);

      p.fill(0);
      p.textAlign(p.CENTER);

      p.text(this.name,this.x,this.y);
  

    }
    
    }


  }
}








// p.myCanvas=p.createCanvas(700, 600);
// p.background(0);

// p.myCanvas.parent('myContainer');


// p.select('#unicorn').mouseOver(function(x){console.log("over unicorn")});

// document.getElementById("mybutton").addEventListener("click", function () {
  
//   var A=new cmCircleRoi((p.width/2)+(p.random(-p.width/4,p.width/4)),(p.height/2)+p.random(-p.height/4,p.height/4),20);
//   p.ROIS.push(A);
// })

// document.getElementById("mybuttonEllipse").addEventListener("click", function () {
  
//   var A=new cmEllipticalRoi((p.width/2)+(p.random(-p.width/4,p.width/4)),(p.height/2)+p.random(-p.height/4,p.height/4),20,p.random(-p.height/4,p.height/4));
//   p.ROIS.push(A);
// })






// };

// p.keyPressed=()=>{
// console.log("key")

// p.ROIS.splice(0, 1);
// console.log(p.ROIS.length);
// }
// p.mouseDragged=()=>{
// var A=new cmEllipticalRoi(p.mouseX,p.mouseY,p.random(-p.width/4,p.width/4),p.random(-p.height/4,p.height/4));
//   p.ROIS.push(A);

// }




// p.mousePressed=()=>{

// // console.log(this)
// // this.Roi.push(new myRoi("uno"))

// // this.Roi.forEach(function(o){
// //   o.sayHi();
// // })
// // var t={
// //   r:p.map(p.mouseX,0,p.width,0,255),
// //   g:p.map(p.mouseY,0,p.height,0,255),
// //   b:p.map(p.mouseY*p.mouseX,0,p.height*p.width,0,255),
// // }
// // p.background(t.r,t.g,t.b);

// // p.rotate(p.angle+10)


// //p.ellipse(p.mouseX, p.mouseY, 50, 50);
// var A=new cmEllipticalRoi(p.mouseX,p.mouseY,p.random(-p.width/4,p.width/4),p.random(-p.height/4,p.height/4));
// p.ROIS.push(A);
// }
// p.draw = () => {
// p.background(p.back);
// console.log(p.ROIS.length);
// p.ROIS.forEach(function(o){
//   // o.sayHi();
//   o.printit(p);
// })      
// //  p.background(p.back);
// //  p.randomballs()
// };

// p.randomballs=()=>{
// p.r=p.map(p.mouseX,0,600,0,255);

// p.col.r=p.random(100,255);
// p.col.g=p.random(100,255);
// p.col.b=p.random(100,255);

// p.noStroke();
// p.ellipse(p.random(0,p.width), p.random(0,p.width), 50, 50);
// p.fill(p.col.r,p.col.g,p.col.b,100);
