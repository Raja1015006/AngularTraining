let res=str=>{

    if(str===str.split("").reverse().join(""))

    {

        return "Palindrome";

    }

    else

    {

        return "Not Palindrome";

    }

}

console.log(res("naman"));