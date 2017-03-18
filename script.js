   var tb = document.getElementById('textbox');

    function writenum(n1) {
        calcform.textbox.value += n1;
    }

    function enter() {

        tb.value = eval(tb.value);
    }

    document.onkeydown = function(e) {

        if (e.keyCode === 13) {

            if (tb.value === "") {
                
            } else {
                enter();
                $('#equal').addClass('abc');
            }
        }

        if (e.keyCode === 27) {

            calcform.textbox.value = "";
            $('#esc').addClass('abc');

        }

        if (e.keyCode == 8) {
            tb.value = tb.value.slice(0, -1);

        }

    };

    document.body.onkeypress = function(e) {
        if (e.keyCode >= 42 && e.keyCode <= 57) {
            tb.value = tb.value + String.fromCharCode(e.which);
        }
    }

    $(document).keypress(function(e) {

        var which_letter = String.fromCharCode(e.which);
        if (which_letter === "+") {

            $('#plus').addClass('abc');

        } else if (which_letter === "/") {

            $('#divide').addClass('abc');

        } else if (which_letter === "*") {

            $('#multiply').addClass('abc');

        } else if (which_letter === ".") {

            $('#dot').addClass('abc');

        } else {
            $('#' + which_letter + '').addClass('abc');
        }

    });

    $(document).keyup(function() {
        $(".letter").removeClass('abc');
    });