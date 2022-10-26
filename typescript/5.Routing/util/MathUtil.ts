export class MathUtils{
    public static Multiple(num:number):string{
        let temp:string = ""
        for (let i:number = 1 ; i < 10 ; i++)
        {
            temp += `${num} * ${i} = ${num * i} \n` 
        }
        return temp
    }
}