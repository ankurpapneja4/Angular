class Employee {

          name   : string; // 'public' memeber by default
  public  team   : string;
  private salary : number;
  
  // Constructor
  constructor( name: string,   team: string,   salary: number) {
  
        this.name   = name;
        this.team   = team;
        this.salary = salary;
  }

  // Methods
  incrementSalary( amt: number){
      this.salary += amt;
  }

}

const emp1 = new Employee( "Max", "JavaDev", 100000);

console.log( emp1.name );
console.log( emp1.team );

