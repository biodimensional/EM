import { Component, OnInit } from '@angular/core';
import { AuthorList } from 'src/app/CODE/publicationsOperations';
import { cmCircleRoi, cmEllipticalRoi,myRoi } from 'src/app/CODE/arrayoperations';
import * as p5 from 'p5';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';



@Component({
  selector: 'app-people-main',
  templateUrl: './people-main.component.html',
  styleUrls: ['./people-main.component.css']
})


export class PeopleMainComponent implements OnInit {


  constructor() {
   
   }

  ngOnInit(): void {
    var A= new AuthorList();
    var T=A.saHitoME();
    console.log(T);


  }
}
