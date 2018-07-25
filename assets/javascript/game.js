

$(document).ready(function() {

    var obiwan = $("#obiwan");
    var hansolo = $("#hansolo");
    var kyloren = $("#kyloren");
    var stormtrooper = $("#stormtrooper");

    var playerSelected = false;
    var opponentSelected = false;

    var obiscore = ((Math.floor(Math.random() * 15) * 5) + 100); 
    console.log(obiscore);
    var hanscore = ((Math.floor(Math.random() * 15) * 5) + 100); 
    console.log(hanscore);
    var kyloscore = ((Math.floor(Math.random() * 15) * 5) + 100); 
    console.log(kyloscore);
    var stormscore = ((Math.floor(Math.random() * 15) * 5) + 100); 
    console.log(stormscore);

    var playerHealth;
    var opponentHealth;

    function getHealth() {

    $("#obihealth").text("Health: " + obiscore);
    $("#hanhealth").text("Health: " + hanscore);
    $("#kylohealth").text("Health: " + kyloscore);
    $("#stormhealth").text("Health: " + stormscore);

    }

    getHealth();

    //Player Selectors

    $("#OBIWAN").on("click", function() {
        if ((playerSelected === true) && (opponentSelected === true)) {
            alert("You can only fight one opponent at a time, get back out there!!")
        }
        else if (playerSelected === false) {
            $ ("#obiwan").attr('id', "isuser");
            $ ("#OBIWAN").detach();
            $ ("#player").replaceWith($(obiwan));
            console.log("Player = Obiwan");
            $ (obiwan).addClass("bg-success float-right");
            $ (hansolo).addClass("bg-danger");
            $ (kyloren).addClass("bg-danger");
            $ (stormtrooper).addClass("bg-danger");
            $ ("#instructions").html("<h3 class='mr-auto ml-auto bg-light p-3'>Now choose an enemy to face and begin the fight for the galaxy!</h3>");
            playerSelected = true;
            console.log(playerSelected);
            playerHealth = obiscore;
            console.log(playerHealth);
            $("#obihealth").attr('id', "isplayer");
        }
        else if (playerSelected === true) {
            $ ("#obiwan").attr('id', "isfoe");
            $ ("#OBIWAN").detach();
            $ ("#opponent").append($(obiwan));
            console.log("Opponent = Obiwan");
            $ ("#instructions").html("<h3 class='mr-auto ml-auto bg-light p-3'>Now click attack to deal damage to the opponent, but be careful, they get a chance to attack back!</h3>");
            $ ("#attack").addClass("visible");
            opponentSelected = true;
            console.log(opponentSelected);
            opponentHealth = obiscore;
            console.log(opponentHealth);
            $("#obihealth").attr('id', "isopponent");
        }
        else if ((playerSelected === true) && (opponentSelected === true)) {
            alert("You can only fight one opponent at a time, get back out there!!");
        }

    });

    $("#HANSOLO").on("click", function() {
        if ((playerSelected === true) && (opponentSelected === true)) {
            alert("You can only fight one opponent at a time, get back out there!!");
        }
        else if (playerSelected === false) {
        $ ("#hansolo").attr('id', "isuser");
        $ ("#HANSOLO").detach();
        $ ("#player").replaceWith($(hansolo));
        console.log("Player = Han Solo");
        $ (obiwan).addClass("bg-danger");
        $ (hansolo).addClass("bg-success float-right");
        $ (kyloren).addClass("bg-danger");
        $ (stormtrooper).addClass("bg-danger");
        $ ("#instructions").html("<h3 class='mr-auto ml-auto bg-light p-3'>Now choose an enemy to face and begin the fight for the galaxy!</h3>");
        playerSelected = true;
        console.log(playerSelected);
        playerHealth = hanscore;
        console.log(playerHealth);
        $("#hanhealth").attr('id', "isplayer");
        }
        else if (playerSelected === true) {
            $ ("#hansolo").attr('id', "isfoe");
            $ ("#HANSOLO").detach();
            $ ("#opponent").append($(hansolo));
            console.log("Opponent = Han Solo");
            $ ("#instructions").html("<h3 class='mr-auto ml-auto bg-light p-3'>Now click attack to deal damage to the opponent, but be careful, they get a chance to attack back!</h3>");
            $ ("#attack").addClass("visible");
            opponentSelected = true;
            console.log(opponentSelected);
            opponentHealth = hanscore;
            console.log(opponentHealth);
            $("#hanhealth").attr('id', "isopponent");
        }
    });

    $("#KYLOREN").on("click", function() {
        if ((playerSelected === true) && (opponentSelected === true)) {
            alert("You can only fight one opponent at a time, get back out there!!")
        }
        else if (playerSelected === false) {
            $ ("#kyloren").attr('id', "isuser");
            $ ("#KYLOREN").detach();
            $ ("#player").replaceWith($(kyloren));
            console.log("Player = Kylo Ren");
            $ (obiwan).addClass("bg-danger");
            $ (hansolo).addClass("bg-danger");
            $ (kyloren).addClass("bg-success  float-right");
            $ (stormtrooper).addClass("bg-danger");
            $ ("#instructions").html("<h3 class='mr-auto ml-auto bg-light p-3'>Now choose an enemy to face and begin the fight for the galaxy!</h3>");
            playerSelected = true;
            console.log(playerSelected);
            playerHealth = kyloscore;
            console.log(playerHealth);
            $("#kylohealth").attr('id', "isplayer");
        }
        else if (playerSelected === true) {
            $ ("#kyloren").attr('id', "isfoe");
            $ ("#KYLOREN").detach();
            $ ("#opponent").append($(kyloren));
            console.log("Opponent = Kylo Ren");
            $ ("#instructions").html("<h3 class='mr-auto ml-auto bg-light p-3'>Now click attack to deal damage to the opponent, but be careful, they get a chance to attack back!</h3>");
            $ ("#attack").addClass("visible");
            opponentSelected = true;
            console.log(opponentSelected);
            opponentHealth = kyloscore;
            console.log(opponentHealth);
            $("#kylohealth").attr('id', "isopponent");
        }
        
    });
    
    $("#STORMTROOPER").on("click", function() {
        if ((playerSelected === true) && (opponentSelected === true)) {
            alert("You can only fight one opponent at a time, get back out there!!")
        }
        else if (playerSelected === false) {
        $ ("#stormtrooper").attr('id', "isuser");
        $ ("#STORMTROOPER").detach();
        $ ("#player").replaceWith($(stormtrooper));
        console.log("Player = Stormtrooper");
        $ (obiwan).addClass("bg-danger");
        $ (hansolo).addClass("bg-danger");
        $ (kyloren).addClass("bg-danger");
        $ (stormtrooper).addClass("bg-success float-right");
        $ ("#instructions").html("<h3 class='mr-auto ml-auto bg-light p-3'>Now choose an enemy to face and begin the fight for the galaxy!</h3>");
        playerSelected = true;
        console.log(playerSelected);
        playerHealth = stormscore;
        console.log(playerHealth)
        $("#stormhealth").attr('id', "isplayer");
        }
        else if (playerSelected === true) {
            $ ("#stormtrooper").attr('id', "isfoe");
            $ ("#STORMTROOPER").detach();
            $ ("#opponent").append($(stormtrooper));
            console.log("Opponent = Stormtrooper");
            $ ("#instructions").html("<h3 class='mr-auto ml-auto bg-light p-3'>Now click attack to deal damage to the opponent, but be careful, they get a chance to attack back!</h3>");
            $ ("#attack").addClass("visible");
            opponentSelected = true;
            console.log(opponentSelected);
            opponentHealth = stormscore;
            console.log(opponentHealth);
            $("#stormhealth").attr('id', "isopponent");

        }
    });


    //Attack Button Logic
    $("#attack").on("click", function() {
        console.log("ATTACK!");
        var playerPower = ((Math.floor(Math.random() * 7) + 3) * 5); 
        console.log("player power is: " + playerPower);
        var opponentPower = (Math.floor((Math.random() * 4) + 2) * 5); 
        console.log("opponent power is: " + opponentPower);
        playerHealth = (playerHealth - opponentPower);
        opponentHealth = (opponentHealth - playerPower);
        console.log("new player health: " + playerHealth);
        console.log("new foe health: " + opponentHealth);
        $ ("#isplayer").text("Health: " + playerHealth);
        $ ("#isopponent").text("Health: " + opponentHealth);

        if (playerHealth <= 0) {
            alert("Oh no!! Looks like you've fallen on the field of battle. Now our cause is lost. Please refresh the page to try again!");
            $ ("#instructions").html("<h3 class='mr-auto ml-auto bg-light p-3'>You Lose!</h3>");
            $ ("#attack").remove();
            $ (".bg-danger").remove();
            $ (".bg-success").append($("#characters"));
            


        }

        else if (opponentHealth <= 0) {
            alert("Congratulations! You have defeated your opponent. Please choose the next foe to continue the battle!");
            opponentSelected = false;
             $ ("#opponent").empty();
            opponentHealth = 0;
            console.log("reset opp. health: " + opponentHealth);
            $ ("#instructions").html("<h3 class='mr-auto ml-auto bg-light p-3'>Choose the next opponent!</h3>");

        }



    });




});



