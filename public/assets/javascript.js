let questions = ["I am arguing over everything.", "I go crazy over fast food", "Money is the most important thing for me.", "I love to volunteer",
    "Kids are the greatest and I want to have many.", "I love to travel.", "Family is my home base.",
    "If I have nothing to do, I go to home depot.", "Secretly I love to dance.", "Shopping? Let's go."
];
let result;
let answers = []

$(document).ready(function () {

    for (i = 0; i < questions.length; i++) {
        let newQuestion = $('<p>');
        let newSelect = $('<select>');

        newQuestion.attr('id', `question${i}`).text(questions[i]);
        newSelect.attr("type", "text").attr("id", `select${i}`);
        $(`#form`).append(newQuestion);
        $(`#question${i}`).after(newSelect);
        for (j = 0; j < 11; j++) {
            let newOption = $("<option>");
            // let disabledOption = $("<option disabled selected>Choose your option</option>");
            if (j == 0) {
                // $(`#select${i}`).append(disabledOption);
            } else {
                newOption.attr("value", j).text(j);
                $(`#select${i}`).append(newOption);
            }
        }
    }
});

$('#submit').on("click", function (event) {
    event.preventDefault();

    for (i = 0; i < questions.length; i++) {
        answers.push($(`#select${i}`).val());
    }

    result = {
        query: answers
    };
    $.post("/api/friends", result, function (data) {
        console.log("You submitted!");
        console.log(data.friend.name);
    });
});


/* <div class="input-field col s12">
<select>
  <option value="" disabled selected>Choose your option</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</select>
<label>Materialize Select</label>
</div> */


// Like fast food
// argues a lot
// Money is important
// I like vounteering
// I wanna have kids
// I like to travel
// Family is important for me
// I love home depot
// dancing
// I love shopping