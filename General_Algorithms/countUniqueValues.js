function countUniqueValues(values){
    count = 1;
    for (let i of values){
        for (let j = 1; j < values.length; j++){
            //console.log(values[j]);
            if (i === values[j]){
                continue;
            }else{
                i = values[j];
                count++;
             }            
        }break;
    }
    console.log(count);
}


values = [1,1,1,1,2];
countUniqueValues(values);