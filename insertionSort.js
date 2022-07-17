function insertionSort(arr,n){
    for(let i=1; i<n; i++){
        let x= arr[i];
        let j=i-1;
        while(j>=0 && arr[j]>x){ //shifting grater element to x to the right
            arr[j+1]=arr[j];
            j--;
        } 
        arr[j+1]=x;
        }
}

let arr= [10,4,1,25,40, 20, 30, 5, 25];
let n=9;
console.log(arr);
insertionSort(arr, n);
console.log(arr);