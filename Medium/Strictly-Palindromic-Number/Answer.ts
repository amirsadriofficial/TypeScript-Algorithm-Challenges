function isPalindrome(s){
    const n = s.length
    for(let i=0;i<Math.floor(n/2);i++)
        if(s[i] !== s[n-i-1])
            return false
    return true
}

function isStrictlyPalindromic(n: number): boolean {
    let s,n_str = n.toString(2)
    for(let i=2;i<=n-2;i++){
        s = i === 2 ? n_str : `${parseInt(n_str, i)}`
        console.log(s)
        if(!isPalindrome(s)) return false
    }
    return true
};