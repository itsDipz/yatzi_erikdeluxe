const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let your_choosen_values_storage = [];
let rounds = 3;

function play_a_round(your_choosen_values_storage){
    console.log("\n a round started");

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }
      

    let the_rounds_generated_numbers = [];

    for (let i = 0; i < 5; i++) {
        let a_random_number_1_to_5 = getRandomInt(1,6)
        the_rounds_generated_numbers.push(a_random_number_1_to_5) 
    }
    console.log(`\n Here are your numbers ${the_rounds_generated_numbers}`);
    
     readline.question(`\n choose your numbers! `, the_numbers_choosen => { // the game loop
        let the_numbers_choosen_checked = input_check_for_yatzi_numbers_round(the_rounds_generated_numbers,the_numbers_choosen);
       
        if( the_numbers_choosen_checked !== false){
            console.log(`\n you choose ${the_numbers_choosen}`);
            for (let i = 0; i < the_numbers_choosen_checked.length; i++) {
                your_choosen_values_storage.push(the_numbers_choosen_checked[i]);
            }
            if(rounds === 0){
                points_algorithm(your_choosen_values_storage)
                console.log("Game done!");
                readline.close();
            }
            else{
                rounds--;
                play_a_round(your_choosen_values_storage); // kör igen (recursivt)
            }
        }
        else{
            console.log("Try again!");
            play_a_round(your_choosen_values_storage); // kör igen (recursivt)
        }
    });

}

function input_check_for_yatzi_numbers_round(the_rounds_generated_numbers ,player_input){
    let the_pop_off_array = [];
    console.log(player_input)
    for (let i = 0; i < player_input.length; i++) {
        let the_number = parseInt(player_input[i]);
    
        if(isNaN(the_number)){
            return false;
        }

        for (let j = 0; j < the_rounds_generated_numbers.length; j++) {
            if(the_number === the_rounds_generated_numbers[j]){
                the_pop_off_array.push(the_number);
                the_rounds_generated_numbers.splice(j, 1);
                break;
            }
        }
    }

    for (let index = 0; index < the_pop_off_array.length; index++) {
        your_choosen_values_storage.push(the_pop_off_array[index]);
    }

    return the_pop_off_array;
}

function points_algorithm(your_choosen_values_storage){


    let the_points_array_for_each_function_check = [];
    // klar
    function check_for_dubble(){
        for (let i = 0; i < your_choosen_values_storage.length; i++) {
            let each_index = your_choosen_values_storage[i];
            
            for (let j = i + 1; j < your_choosen_values_storage.length; j++) {
                let the_check = your_choosen_values_storage[j];
                if(each_index === the_check){
                   
                    return 2;
                }
            }   
        }
        
        return 0; // finns för att man ska veta att om den inte retunerar poängen så får man false
    }
    // klar
    function check_for_tripple(){
        let points_counter = 0;
        for (let i = 0; i < your_choosen_values_storage.length; i++) {
            let each_index = your_choosen_values_storage[i];
            
            for (let j = i + 1; j < your_choosen_values_storage.length; j++) {
                let the_check = your_choosen_values_storage[j];
                if(each_index === the_check){
                    points_counter++;
                }
                if(points_counter === 3){
                   
                    return 3;
                }
            }   
        }
        
        return 0; // finns för att man ska veta att om den inte retunerar poängen så får man false
    }
    // klar
    function check_for_quad(){
        let points_counter = 0;
        for (let i = 0; i < your_choosen_values_storage.length; i++) {
            let each_index = your_choosen_values_storage[i];
            
            for (let j = i + 1; j < your_choosen_values_storage.length; j++) {
                let the_check = your_choosen_values_storage[j];
                if(each_index === the_check){
                    points_counter++;
                }
                if(points_counter === 4){
                    return 4;
                }
            }   
        }

        return 0; // finns för att man ska veta att om den inte retunerar poängen så får man false
    }
    // klar
    function check_for_little_straight(){
        let points_counter = 0;
        let index_counter = 0;
        for (let i = 1; index_counter < your_choosen_values_storage.length; i++) {
            if(your_choosen_values_storage[index_counter] === i){
                points_counter += 2;
                
                index_counter++;
            }
            else{
                return 0; // finns för att man ska veta att om den inte retunerar poängen så får man false
            }
        }
        return 5;
    }
    // klar
    function check_for_big_straight(){
        let points_counter = 0;
        let index_counter = 0;
        for (let i = 2; index_counter < your_choosen_values_storage.length; i++) {
            if(your_choosen_values_storage[index_counter] === i){
                points_counter += 4;
                index_counter++;
            }
            else{
                return 0; // finns för att man ska veta att om den inte retunerar poängen så får man false
            }
        }

       return 6; // finns för att man ska veta att om den inte retunerar poängen så får man false
    }
    //  klar
    function check_for_kåk(){
        function find_the_two_numbers(){
            let array_of_the_chosen_numbers = [];
            let first_value = your_choosen_values_storage[0];
            let second_value;
            let first_value_counter = 0;
            let second_value_counter = 0;

            let first_right;
            let second_right;

            for (let i = 0; i < your_choosen_values_storage.length; i++) {
                if(first_value !== your_choosen_values_storage[i]){
                    second_value = your_choosen_values_storage[i];
                    array_of_the_chosen_numbers.push(first_value)
                    array_of_the_chosen_numbers.push(second_value);
                    break;
                }
            }
            for (let j = 0; j < your_choosen_values_storage.length; j++) {
                if(first_value === your_choosen_values_storage[j]){
                    first_value_counter++;
                } 
            }
            for (let k = 0; k < your_choosen_values_storage.length; k++) {
                if(second_value === your_choosen_values_storage[k]){
                    second_value_counter++;
                } 
            }

            

            if(first_value_counter == 3 && second_value_counter == 2 || second_value_counter == 3 && first_value_counter == 2){
                first_right = true;
                second_right = true;
            }
            else{
                first_right = false;
                second_right = false;  
            }
           
            if(first_right === true && second_right === true){
                
                return 7;
            }
            else{
               
                return 0;
            }
        }
        let value = find_the_two_numbers();
        return value;
    }
    // klar
    function check_for_yatzy(){
        let first_value = your_choosen_values_storage[0];
        let counter = 0;
        for (let i = 0; i < your_choosen_values_storage.length; i++) {
            if(first_value === your_choosen_values_storage[i]){
                counter++;
                if(counter === your_choosen_values_storage.length){
                    return 50;
                }
            }
            else{
                return 0;
            }      
        }
    }
    
    // Kollar de
    the_points_array_for_each_function_check.push(check_for_yatzy());
    the_points_array_for_each_function_check.push(check_for_kåk());
    the_points_array_for_each_function_check.push(check_for_big_straight());
    the_points_array_for_each_function_check.push(check_for_little_straight());
    the_points_array_for_each_function_check.push(check_for_quad());
    the_points_array_for_each_function_check.push(check_for_tripple());
    the_points_array_for_each_function_check.push(check_for_dubble());


    
    let biggest_number = 0;
    for (let i = 0; i < the_points_array_for_each_function_check.length; i++) {
        if(the_points_array_for_each_function_check[i] > biggest_number)
            biggest_number = the_points_array_for_each_function_check[i];
    }

    switch(biggest_number){
        case 2:
            console.log("Du fick i denna runda högst ett par");
        break;
        case 3:
            console.log("Du fick i denna runda högst en triss");
        break;
        case 4:
            console.log("Du fick i denna runda högst ett fyrtal");
        break;
        case 5:
            console.log("Du fick i denna runda högst en liten straight");
        break;
        case 6:
            console.log("Du fick i denna runda högst en stor straight");
        break;
        case 7:
            console.log("Du fick i denna runda högst en kåk");
        break;
        case 50:
            console.log("Du fick i denna runda högst Yatzy");
        break;
    }
    


}


play_a_round(your_choosen_values_storage);




