const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let your_choosen_values_storage = [];


function play_a_round(each_game_values_storage, your_choosen_values_storage){
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
        
        if(input_check_for_yatzi_numbers_round(the_rounds_generated_numbers,the_numbers_choosen) === true){
            console.log(`\n you choose ${the_numbers_choosen}`);
        }
        else{
            console.log("Try again!");
        }
        readline.close();
    });
}

function input_check_for_yatzi_numbers_round(the_rounds_generated_numbers ,player_input){
    for (let i = 0; i < player_input.length; i++) {
        let the_number = parseInt(player_input[i]);
        
        if(isNaN(the_number)){
            return false;
        }
        
        your_choosen_values_storage.push(the_number);
        console.log(your_choosen_values_storage);
    }
    return true;
}

play_a_round()

/*
    TO-DO:

    Jag måste kolla så att inputet av användaren, finns med i arrayen d.v.s 
    om tärningskastet är 1,4,4,3,2 och användaren vill spara de två fyrorna så måste jag
    kolla att det finns 2 fyror i arrayen to begin with. 
*/