export class Tank {
    id?: string;
    name: string;
    available: boolean;
    pictureLink: string;
    country: string;
    gun:string;
    manufacturer:string;
    amount:string;
    releaseDate: string;
    role:string;
    history:string;
    time: string;
    
  
    constructor() {
      this.name ='';
      this.available = false;
      this.pictureLink = '';
      this.country = '';
      this.gun ='';
      this.manufacturer='';
      this.amount='';
      this.releaseDate = '';
      this.role='';
      this.history='';
      this.time = '';
    }
}
