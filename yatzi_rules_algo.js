let test_numbers = [2,2,3,3,3];


function yatzi_rules_algo(saved_numbers){

   function same_number_check(saved_numbers){
        let counter = 0;
        for (let i = 0; i < saved_numbers.length; i++) {
            for (let j = 0; j < saved_numbers.length; j++) {
                if(saved_numbers[i] === saved_numbers[j]){
                    counter++;
                    break;
                }
                
            }
        }
        console.log(counter);
    } 
    same_number_check(saved_numbers)
   
}

yatzi_rules_algo(test_numbers);