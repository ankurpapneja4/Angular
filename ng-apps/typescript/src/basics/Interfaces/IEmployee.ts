interface IEmployee {
    
    name   : string;
    salary : number;

    incrementSalary : () => void;
}



class Manager implements IEmployee {
  
  constructor( public name: string,   public salary: number ){}
  
  incrementSalary() : void 
  {
      this.salary += this.salary * 0.30;
  }

}