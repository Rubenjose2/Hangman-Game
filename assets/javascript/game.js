//Arrays and Variables

var artis = {
    q1: ["madonna", "assets/images/madonna.jpg", "songlink"],
    q2: ["kiss", "assets/images/kiss_band.jpg", "songlink"],
    q3: ["queen", "imagelink", "songlink"]
}
var artist_name = [artis.q1[0], artis.q2[0], artis.q3[0]];
var artis_imgsrc = [artis.q1[1], artis.q2[1], artis.q3[1]];
var artisindex = 0;
var guess_left = 10;
var user_record = [];
var singer = "";
var singer_array = [];
var container_array = [];
var break_next = "";
var index = 0;
var singer_picture;
console.log(artist_name);

//////////////////////SAND BOX/////////////////////




//////////////////////////////////////////////////


////////////////////Functions/////////////////////
function pullartisname(artis_name, index) {
    singer = artis_name[index];
    singer_picture = artis_imgsrc[index];
    singer_array.length = 0;
    container_array.length = 0;
    singer_array = singer.split("");
    for (var i = 0; i < singer_array.length; i++) {
        container_array.push("_");
    }
    document.getElementById("singer_container").innerHTML = container_array.join(" ");
    document.getElementById("image_id").src = singer_picture;
    return singer, singer_array, container_array, singer_picture;
}
//Function to evaluate the lengh of the artis name
function singer_lengh(artist_name, index) {
    var artist_lengh = artist_name[index];
    return artist_lengh.length;
}
// Funtion to collect the wrong answare and save in array
function notMatch(userGuest) {
    if (guess_left > 0) {
        console.log(user_record);
        console.log(guess_left);
        guess_left--;
    } else {
        user_record = [];
        guess_left = 10;
        index++;
        pullartisname(artist_name, index);
        console.log("Save");
        document.getElementById("image_id").style.filter = "blur(3px)";
    }
    return guess_left;
}
//Function to evaluate if the letter is included in the word OK!
function user_response_evaluate(artist_name, userchoice) {
    var find = artist_name.includes(userchoice);
    console.log(find);
    return find;
}
// ********************************
//          MAIN EVALUATION  
// ********************************
// Initial statement or start up////
pullartisname(artist_name, index);
console.log(singer);
console.log(singer_array);
console.log(singer_picture);
document.getElementById("option_left").innerHTML = guess_left;
///////////////////////////////////////////////
document.onkeyup = function(event) {
    var userGuest = event.key;

    console.log(userGuest);
    console.log(container_array);

    //looking if the choise in content inside//
    if (user_response_evaluate(singer, userGuest)) {
        console.log("match");
        for (var i = 0; i < singer_array.length; i++) {
            if (userGuest == singer_array[i]) {
                container_array[i] = userGuest;
            }
        }
        document.getElementById("singer_container").innerHTML = container_array.join(" ");
        console.log(container_array);
    } else {
        console.log("not match");
        user_record.push(userGuest);
        notMatch();
        if (guess_left == 0) {
            document.getElementById("singer_container").innerHTML = singer;
            document.getElementById("image_id").style.filter = "blur(0px)";
        }
        document.getElementById("option_left").innerHTML = guess_left;
        document.getElementById("already_choice").innerHTML = user_record.join(" ");
    }
    break_next = container_array.join("");
    if (break_next == singer) {
        console.log("yes");
        document.getElementById("singer_container").innerHTML = singer;
        index++;
        pullartisname(artist_name, index);
        console.log(singer);
    }
    console.log(break_next);
}