function lessThan(arr, x){
    let end=arr[0];
    let num=x;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<x){
            let temp=arr[i];
            arr[i]=arr[end];
            arr[end]=temp;
            // swap(arr[i],arr[end]);
            end++;
        }
        
    }
    return arr;
}
let arr1=[12,32,8,9,40];
let x=10;
let res=lessThan(arr1,x);
console.log(res);