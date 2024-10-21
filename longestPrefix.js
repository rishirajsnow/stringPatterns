//z-Algo:
//Given a string s of lowercase alphabets(a-z).
//Find z[k] for all k from 1 to N-1.

let s="abcabcaa";
z=new Array(s.length).fill(0);
let L=0;
let R=0;
let N=s.length;

for(let i=0;i<s.length;i++){
    if(i>R){
        L=R=i;
        while(R<N && s[R]===s[R-L]){R+=1}
        z[i]=R-L;
        R-=1;
    }else{
        if(i+z[i-L]<=R){z[i]=z[i-L]}
        else{
            L=i;
            while(R<N && s[R]===s[R-L]){R+=1}
            z[i]=R-L;
            R-=1;
        }
    }
}

console.log(z);