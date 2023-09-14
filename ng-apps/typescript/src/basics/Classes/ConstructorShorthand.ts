class EmployeeV2 {

  // All Argument Constructor - Shorthand
  // Declare And Instanciate Class Member Fields
  constructor( 
      public  name  : string, 
      public  team  : string, 
      private salary: number ){}
 
      
  incrementSalary( amt: number){
        this.salary += amt;
  }
}

const emp2 = new EmployeeV2( "Max", "JavaDev", 100000);

console.log( emp2.name );
console.log( emp2.team );
