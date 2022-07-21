function mergeTwoArray(arr1,m,arr2,n){
    var i,j;
    while(i<m && j<n){
        var arr=new Array[m+n];
        if(arr1[i]<arr[j]){
            arr.push[i];
            i++  
        } 
        else {
            arr.push[j];
            j++;
        }
        
    }
return arr;
}

arr1=[3,6,9,12,15];
arr2=[7,14,21,28,35];
mergeTwoArray(arr1,5,arr2,5);
console.log(arr);