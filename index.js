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
        let the_value = input_check_for_yatzi_numbers_round(the_rounds_generated_numbers,the_numbers_choosen);
        if( the_value !== false){
            console.log(`\n you choose ${the_numbers_choosen}`);
            if(rounds === 0 || your_choosen_values_storage.length === 5){
                console.log("Game done!");
                console.log(`your values are ${your_choosen_values_storage}`)
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
        return false; // finns för att man ska veta att om den inte retunerar poängen så får man false
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
        return false; // finns för att man ska veta att om den inte retunerar poängen så får man false
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

        return false; // finns för att man ska veta att om den inte retunerar poängen så får man false
    }
    // klar
    function check_for_little_straight(){
        let points_counter = 0;
        let index_counter = 0;
        for (let i = 1; index_counter < your_choosen_values_storage.length; i++) {
            if(your_choosen_values_storage[index_counter] === i){
                points_counter += 2;
                console.log(i);
                index_counter++;
            }
            else{
                return false; // finns för att man ska veta att om den inte retunerar poängen så får man false
            }
        }
        return true;
    }
    // klar
    function check_for_big_straight(){
        let points_counter = 0;
        let index_counter = 0;
        for (let i = 2; index_counter < your_choosen_values_storage.length; i++) {
            if(your_choosen_values_storage[index_counter] === i){
                points_counter += 4;
                console.log(i);
                index_counter++;
            }
            else{
                return false; // finns för att man ska veta att om den inte retunerar poängen så får man false
            }
        }

       return true; // finns för att man ska veta att om den inte retunerar poängen så får man false
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

            console.log(first_value_counter);
            console.log(second_value_counter);

            if(first_value_counter == 3 && second_value_counter == 2 || second_value_counter == 3 && first_value_counter == 2){
                first_right = true;
                second_right = true;
            }
            else{
                first_right = false;
                second_right = false;  
            }
           
            console.log(first_right)
            console.log(second_right);

            if(first_right === true && second_right === true){
                console.log('it was one');
                return true;
            }
            else{
                console.log('it was not one');
                return false;
            }
        }
        find_the_two_numbers();
    }
    // klar
    function check_for_yatzy(){
        let points_counter = 0;
        for (let i = 0; i < your_choosen_values_storage.length; i++) {
            let each_index = your_choosen_values_storage[i];
            
            for (let j = i + 1; j < your_choosen_values_storage.length; j++) {
                let the_check = your_choosen_values_storage[j];
                if(each_index === the_check){
                    points_counter++;
                }
                if(points_counter === 5){
                    console.log("Yatzy!!!!");
                    return 50;
                }
            }   
        }
        return false; // finns för att man ska veta att om den inte retunerar poängen så får man false
    }
    
    check_for_kåk();
}

// play_a_round(your_choosen_values_storage); // startar spelet

let test_array = [2,5,2,3,3];
points_algorithm(test_array);


/*
    TO-DO:

    1.Jag måste kolla så att inputet av användaren, finns med i arrayen d.v.s 
    om tärningskastet är 1,4,4,3,2 och användaren vill spara de två fyrorna så måste jag
    kolla att det finns 2 fyror i arrayen to begin with. 

    2. Gör en algoritm som kollar reglerna för poängen

*/