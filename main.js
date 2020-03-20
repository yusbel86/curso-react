class Human {
    constructor(){
        this.gender = 'male';
    }

    printMygender(){
        console.log(this.gender);
    }
    

}

class Person extends Human {
    constructor(){
        super();
        this.name = 'Yusbel';
    }

    printMyname(){
        console.log(this.name);
    }
}

const person = new Person();
person.printMyname(); 
person.printMygender();
