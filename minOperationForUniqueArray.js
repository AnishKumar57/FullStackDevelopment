function minOperation(arr,n){
//    arr.sort((a,b)=>a-b);
    let freqMap={};
    let maxNumber=0;

    for(let i=0; i<n; i++){
        let currEle=arr[i];
        maxNumber=currEle>maxNumber?currEle:maxNumber;
        if(freqMap[currEle]){
            freqMap[currEle]++;
        }
        else{
            freqMap[currEle]=1;
        }

    }
console.log(freqMap);
console.log(maxNumber);
let totalOperations= 0;
let repeatedElements=0;
for(let i=0; i <= (maxNumber + freqMap[maxNumber]) && repeatedElements >= 0 ; i++){
    if(freqMap[i]){
        let duplicateOccurances=freqMap[i]-1;
        repeatedElements += duplicateOccurances;
        totalOperations += (-1 * i * duplicateOccurances);
    }
    else if(repeatedElements > 0) { // Replace duplicate elements with number i
        repeatedElements--;
        totalOperations +=  1;
    }
    console.log(i,repeatedElements, totalOperations);
} 
return totalOperations;
}











let arr=[1,3,7,1,10,1,3,1,10];
 let n=9;
 console.log(minOperation(arr,n));