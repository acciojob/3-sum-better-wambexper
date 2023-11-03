function threeSum(arr, tar) {
// write your code here
	 let n=arr.length;
        let a1=[];
        let j=0;
        let d=0;
        for(let i=0;i<n-2;i++){
            let s=0;
            a1[j]=arr[i]+arr[i+1]+arr[i+2];
            j++;
            
            
            
        }
        
        let n1=a1.length;
        let near=a1[0];
        if(a1[0]>tar){
            d=a1[0]-tar;

        }else{
            d=tar-a1[0]
        }
        
        let o=0;

        for(let i=1;i<n1;i++){
            if(a1[i]>tar){
                o=a1[i]-tar;

            }else{
                o=tar-a1[i];
            }
            

            if(d>o){
                d=o;
            }

            

        }
        console.log(d) ;
  
}

module.exports = threeSum;