function validateForm() {
    var toRet = true;

    $('.validate').each(function () {
        if (!($(this).hasClass('valid'))) {
            toRet = false;
            $(this).addClass('invalid');
        }
    });

    if (!toRet) {
        Materialize.toast('Bitte die markierten Felder ausfüllen', 4000);
    }
    return toRet;
}

function sendForm() {
    if (validateForm()) {
        var data = {
            vorname: $('#first_name').val(),
            name: $('#last_name').val(),
            firma: $('#firma').val(),
            phone: $('#phone').val(),
            fax: $('#fax').val(),
            mail: $('#mail').val(),
            page: $('#page').val(),
            textarea: $('#textarea').val()
        };

        $.ajax({
            type: 'POST',
            url: 'mailHandler.php',
            data: data,
            success: function (result) {
                if (result === "true") {
                    Materialize.toast('Ihre Nachricht wurde erfolgreich versandt!', 4000);
                    $('input').each(function () {
                        $(this).val('');
                    });
                    $('textarea').val('');
                } else {
                    Materialize.toast('Ihre Nachricht konnte leider nicht übermittelt werden', 4000);
                }
            }
        });
    }
}