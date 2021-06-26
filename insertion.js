var myFun=x=>{
    for(var i=1;i<x.length;i++){
    var key=x[i];
    var j=i-1;
    while(j>=0&&x[j]>key){
    x[j+1]=x[j];
    j--;
    }
    x[j+1]=key;
    }
    return x;
    }
    console.log(myFun([9,5,1,4,3]))
