interface User {
    name: string,
    id: number
}

class UserAccount {
    name: string;
    id:number;

    constructor(name:string,id:number){
        this.name=name;
        this.id=id;
    }
}

function Pointers(x:number,y:number){
    return x+y;
}
console.log(Pointers(2,3))

const user:User = new UserAccount("Smitha",1);
// const user:User = {
//     name: 'Smitha',
//     id:0
// }

function Demo(){
    return <div>
        Username is {user.name}
    </div>
}

export default Demo