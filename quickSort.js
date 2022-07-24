function swap(arr, x, y){
    let temp=arr[x];
    arr[x]=arr[y];
    arr[y]=temp;
}
function partition(arr, start,end){
    let pivot=arr[end];
    let smaller=start; //Every element less than smaller will be left of smaller
    for(let i=start; i<end;i++){
        if(arr[i]<pivot){
            swap(arr,i,smaller);
            smaller++;
        }
    }
    swap(arr,end,smaller);
    return smaller;
}

function quickSort(arr,start,end){
    if(start>=end){
        return;
    }
    let pivotIndex=partition(arr,start,end);
    console.log(arr,arr[pivotIndex]);
    console.log("start:",start,"end:",end);

    quickSort(arr,start,pivotIndex-1);  // for left part
    quickSort(arr,pivotIndex+1,end);    // for right part
}



let arr=[7,3,9,2,1,6,8,4,5];
console.log(arr);

quickSort(arr,0,8);
console.log(arr);
