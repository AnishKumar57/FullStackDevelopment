function mergeTwoArray(Arr1,m,Arr2,n){
  let resArr=[];
    i=1; j=1;
      while(i<m && j<n){
        if(Arr1[i]<Arr2[j]{
          resArr.push(Arr1[i]);
          i++;
         }
         else {
          resArr.push(Arr2[j]);
          j++;
          }
         while(i<m){
          resArr.push(Arr1[i]);
          i++;
          }
          while(j<n){
          resArr.push(Arr2[j]);
          j++;
          }
        }
