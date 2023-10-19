const arr1 = [6, 4, 2, 0, 3, 2, 0, 3, 1, 4, 5, 3, 2, 7, 5, 3, 0, 1, 2, 1, 3, 4, 6, 8, 1, 3]
const arr2 = [6, 2, 1, 1, 8, 0, 5, 5, 0, 1, 8, 9, 6, 9, 4, 8, 0, 0]
const arr3 = [6, 2, 1, 1, 8, 0, 5, 5, 0, 1, 8, 9, 6, 9, 4, 8, 0, 4, 0]
const arr4 = [8, 3, 2, 1, 4, 2, 6, 1, 2]
const arr5 = [2, 5, 4, 9, 7, 7, 8, 4, 5, 0, 5, 7, 6, 3, 2, 7, 0, 9, 5, 5, 7, 5, 5, 5, 1, 4, 0, 5, 1, 9, 7, 8]
const arr6 = [2, 10, 10, 6, 6, 1, 7, 1, 8, 5, 0, 8, 0, 7, 2, 6, 4, 2, 4, 7, 0, 3, 0, 9, 8, 1, 0, 3, 7, 6, 6, 4, 7, 3, 7, 5, 7, 1, 0, 3, 4, 3, 1, 5, 3, 3, 7, 9, 3, 2, 5, 9, 6, 7, 6, 3, 1, 0, 6, 0, 2, 4, 1, 8, 3, 1, 9, 7, 2, 2, 9, 0, 3, 9, 9, 0, 9, 0, 3, 9, 10, 6, 4, 3, 0, 5, 10, 1, 8, 9, 5, 5, 5, 7, 10, 5, 8, 4, 5, 10]

function check(arr){
    let material=0 
    let x =arr[0]
    let y=0;
    let z = [];
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

console.log(check(arr6))
// cos(arr6)
// check(arr2)