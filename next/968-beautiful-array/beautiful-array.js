/**
//  * @param {number} n
//  * @return {number[]}
//  */
var beautifulArray = function(n) {
     let res = [1];
    while (res.length < n) {
        let tmp = [];
        for (const x of res) {
            if (x * 2 - 1 <= n) tmp.push(x * 2 - 1);//odd
        }
        for (const x of res) {
            if (x * 2 <= n) tmp.push(x * 2);//even
        }
        res = tmp;
    }
    return res;
    // let arr=[]
    // for(i=1;i<=n;i++){
    //     arr.push(i)
    // }
    // for(let i=1; i<arr.length;i++){
    //     if(2*arr[i]==arr[i-1]+arr[i+1]){
    //         let 
    //         // console.log('IF',arr[i-1], arr[i+1])
    //         // [arr[i-1],arr[i+1]]=[arr[i+1],arr[i-1]]
    //     }
    // }
    // console.log(arr,'array')
};

