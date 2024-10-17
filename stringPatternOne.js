//Given a string s of lowercase alphabet(a-z).
//find z[k] for a given index k.

//z[k] -> Length of longest substring of s strating from k which 
//is also the prefix of the string s.

//prefix->string starting from index 0.

let s="xxyaxxyaz";
let a=s.split("");

function pattern(s,k){
    let a=s.split("");
    let i=k;
    let ans=0;
    while(i<a.length,a[i]===a[i-k]){i=i+1}
    return i-k;
}

console.log(pattern(s,4));