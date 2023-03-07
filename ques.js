const arr = [1,2,3,4,5,1,3,2,1,4,6,5,4,5,6,3,2,1,2,3,4,3,4,4,3,2,3,4,5,6,4]
const func = (arr,obj={}) => {
    let key1 = {key:"",value:0},key2 = {key:"",value:0};
    for(let i=0;i<arr.length;i++){
        if(arr[i] in obj){
            obj[arr[i]] = obj[arr[i]] + 1;
        }else{
            obj[arr[i]] = 1;
        }
        if(key1["value"] < obj[arr[i]]){
            key2["key"] = key1["key"];
            key2["value"] = key1["value"];
            key1["key"] = arr[i];
            key1["value"] =  obj[arr[i]];
        }else if(key2["value"] < obj[arr[i]]){
            key2["key"] = arr[i];
            key2["value"] =  obj[arr[i]];
        }
    }
    let value1 = +key1["key"] * +key1["value"];
    let value2 = +key2["key"] * +key2["value"];
    let total = key1["value"] + key2["value"];
    // console.log(key1,key2);
    // console.log(value1,value2,total);
    return (value1+ value2)/total;
}
console.log((func(arr)));