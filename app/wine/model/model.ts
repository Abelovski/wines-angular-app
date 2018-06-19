export class wines {
    
    constructor(object) {
        this.id = object._id;
        this.name = object.name;
        this.year = object.year;
        this.grapes = object.grapes;
        this.country = object.country;
        this.region = object.region;
        this.description = object.description;
        this.picture = object.picture;
    }

    id:number;
    name:string;
    year:number;
    grapes:string;
    country:string;
    region:string;
    description:string;
    picture:string;


} 