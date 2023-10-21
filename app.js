const check = function(arr){
    let material=0 
    let x=arr[0]
    let y=0;
    let z=[];

    if(Array.isArray(arr[0])){
        arr.forEach(e=>{
            material+=check(e)
        })
    }
    for(let i=1;i<arr.length;i++){
        if(x<=arr[i]){
            z.push([y,i])
            x=arr[i]
            y=i
        }
    }
    if(z.length==0){
        z.push([y,arr.findIndex((e)=>e==Math.max(...arr.slice(1)))])
    }
    let lastArrayCheck = true
    while(lastArrayCheck){
        let sum=0;
        for(let i=z[z.length-1][1]+1;i<arr.length;i++){
            sum+=arr[i]
        }
        if(sum>0){
            z.push([z[z.length-1][1],arr.findLastIndex((el)=>Math.max(...arr.slice(z[(z.length-1)][1]+1))==el)])
        }else{
            lastArrayCheck=false
        }
    }
    z.forEach(e=>{
        if(e[0]+1==e[1]){
            z = z.filter(function(z){ return z != e})
        }
    })
    z.forEach(e=>{

        let min_e = Math.min(...e)
        if(arr[e[0]]>arr[e[1]]){
            min_e=e[1]
        }
        for(let i=e[0]+1;i<e[1];i++){
            if(!(arr[min_e]-arr[i]<0)){
                material+=arr[min_e]-arr[i]
            }
        }
    })
    return material
}

module.exports=check