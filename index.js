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
    
    readline.question(`\n choose your numbers! `, the_numbers_choosen => {
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

play_a_round(your_choosen_values_storage); // startar spelet




/*
    TO-DO:

    1.Jag måste kolla så att inputet av användaren, finns med i arrayen d.v.s 
    om tärningskastet är 1,4,4,3,2 och användaren vill spara de två fyrorna så måste jag
    kolla att det finns 2 fyror i arrayen to begin with. 

    2. Gör en algoritm som kollar reglerna för poängen

*/