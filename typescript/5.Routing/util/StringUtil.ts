export class StringUtil{
    public static len(str:string):number{
        return str.length;
    }
    public static print_string(str:string):string{
        let print_string:string = ''
        for (let i:number = 0 ; i < str.length - 1; i++)
            {
                for(let j:number = 0 ; j <= i ; j++)
                {
                    print_string += `${str.charAt(j)}`;
                }
            print_string += `\n`;
        }
        return print_string
    }
}