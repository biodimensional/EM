import { isDefined } from '@angular/compiler/src/util';

export class ArrayOperations{
    private  ARRAY:Array<any>
    


    constructor(
    ){};
    
    setArray(a: any){
        this.ARRAY=a;
    }
    getArray():Array<any>{
        return this.ARRAY;
    }
        
}

export class StringArrayOperations extends ArrayOperations{
    constructor(stringarray:Array<string>) {  
        super();  
        this.setArray(stringarray) ;
    }

    
    public getList(comma:string=', ') {

        return new Promise(resolve => {
          var OUT='';
          console.log(this.getArray())
            this.getArray().forEach((element,index) => {
               
              OUT=OUT.concat(element + comma);
              console.log(element)

            if (index == this.getArray().length - 1) {
                resolve(OUT.endsWith(', ') ? OUT.substring(0, OUT.length - 3) : OUT);
            }
    
            });
                
        });
      }


}



export class myRoi{

    param={
        id:undefined,
        position:{
        x:0.0,
        y:0.0
    },
    color:'red'
}
  
    constructor(x:number,y:number){
        this.param.position.x=x
        this.param.position.y=y
        this.param.id=Math.random();
    }
  
    sayHi(){
      console.log(this.param)
    }
  
  
  };


  export class cmEllipticalRoi extends myRoi{
      
      ray={
          first:undefined,
          second:undefined
      };
    constructor(x:number,y:number,rx:number,ry:number) {  
        super(x,y);        
        this.ray={
            first:rx,
            second:ry
        }
    
    }
    printit(p){
        // console.log(p);
        p.ellipse(this.param.position.x,this.param.position.y, this.ray.first, this.ray.second);
    }

}
export class cmCircleRoi extends cmEllipticalRoi{
      ray:{
          first:number,
          second:number
      }
    constructor(x:number,y:number,rx:number) {  
        super(x,y,rx,rx)
        }
    }

