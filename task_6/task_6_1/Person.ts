type Field = {
    title: string,
    value: string
};
type Info = {
    _name : Field,
    _type : Field,
    _surname : Field
};

export class Person {
    public info: Info;

    protected static _count: number = 0;
    constructor(name: string, surname: string) {
        Person._count++;
        this.info = {
            _type : {
                title: 'Type: ',
                value: 'Person'
            },
            _name : {
                title: 'Name: ',
                value: name
            },
            _surname : {
                title: 'Surname: ',
                value: surname
            }
        };
        
    }
    
    get fullName(): string {
        return this.info._name.value + ' ' + this.info._surname.value;
    }

    set name(value: string) {
        if (value != '')
            this.info._name.value = value;
        else throw new Error();
    }

    set surname(value: string) {
        if (value != '')
            this.info._surname.value = value;
        else throw new Error();
    }

    show(): void {
        for (let item in this.info) {
            let field = (<Field>this.info[item])
            console.log(field.title + field.value);
        }
        console.log("\n");
    }
    

    protected formatDate(date: Date) : string {
        let day = date.getDate(),
            month = date.getMonth(),
            year = date.getFullYear();
        return  (day < 10 ? '0' + day : day) + '.' + 
                (month < 10 ? '0' + month : month) + '.' +
                year;
    }

    get count() : string {
        return this.info._type.value + ' : ' + Person._count;
    }
}
