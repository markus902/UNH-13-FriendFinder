let questions = ["I am arguing over everything.", "I go crazy over fast food.", "Money is the most important thing for me.", "I love to volunteer.",
    "Kids are the greatest and I want to have many.", "I love to travel.", "Family is my home base.",
    "If I have nothing to do, I go to home depot.", "Secretly I love to dance.", "Shopping? Let's go."
];

$(document).ready(function () {

    $('select').formSelect();

    $('select').on('contentChanged', function () {
        $(this).material_select();
    });

    for (i = 0; i < questions.length; i++) {
        let newQuestion = $('<p>');
        let newSelect = $('<select>');
        let newDiv = $("<div>");
        // let newLabel = $('<label>');

        newQuestion.attr('id', `question${i}`).text(questions[i]);
        newDiv.addClass("input-field col s12").attr("id", `input${i}`);
        newSelect.attr("id", `select${i}`);
        // newLabel.text("Testlabel");

        $(`#selects`).append(newQuestion).append(newDiv);
        $(`#question${i}`).append(newDiv);
        $(`#input${i}`).append(newSelect);
        for (j = 0; j < 11; j++) {
            let newOption = $("<option>");
            let disabledOption = $("<option disabled selected>Select</option>");
            if (j == 0) {
                $(`#select${i}`).append(disabledOption);
            } else {
                newOption.attr("value", j).text(j);
                $(`#select${i}`).append(newOption);
            }
        }
    }

    $("#back").on('click', () => {
        $(".banner").hide();
        $(".headline").show();
    });

    $('#submit').on("click", function (event) {
        event.preventDefault();

        let answers = [];
        let result = 0;

        for (i = 0; i < questions.length; i++) {
            answers.push($(`#select${i}`).val());
        }

        result = {
            query: answers
        };
        $.post("/api/friends", result, function (data) {
            console.log("You submitted!");
            console.log(result);
            console.log(data.friend.name);
            $("#resultName").text(data.friend.name);
            $("#resultImage").attr("src", data.friend.photo);
            $(".banner").show();
            $(".headline").hide();
            window.scrollTo(0, 0);
        });
    });
});






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