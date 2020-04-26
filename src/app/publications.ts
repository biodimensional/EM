export interface Authors {
    id: number;
    name :string;
    surname:string;
    affiliation:string;
    };

  export interface Publication {
    id: number;
    title: string;
    authors: Authors[];
    journal: string;
    date: string;
    link: string;
    abstract: string;
    type:string;
    tags:Array<string>;
    image:string;
    download:string;
    getAuthors?():Function;
    // getAuthors2?():return "dede";
  };