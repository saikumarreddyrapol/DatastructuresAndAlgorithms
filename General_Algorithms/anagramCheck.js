function validAnagram(a,b){
    anagramChecker1 = {};
    anagramChecker2 = {};  
    if(a.length !== b.length){
        console.log('the string length was different');
    }else{
        for(let i of a){
            let letter = i;
            console.log(anagramChecker1[letter]);
            anagramChecker1[letter] ? anagramChecker1[letter] += 1 : anagramChecker1[letter] = 1; 
        }
        for(let i of b){
            let letter = i;
            if(!anagramChecker1[letter]){
                return false;
            }else{
                anagramChecker1[letter] --;
                console.log(anagramChecker1)
            }
            }
            return true;
    }
    };
    
    
    a = 'saia';
    b = 'siaa';
    validAnagram(a,b);