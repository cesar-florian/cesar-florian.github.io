$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var phone = $("input#phone").val();
            var message = $("textarea#message").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            
            $('#success').html('');
            $('#loading').show();
            $('button[type="submit"]').prop('disabled', true);
            
            fetch(event.target.action, {
                method: event.target.method,
                // Convertir el objeto a una cadena JSON
                body: JSON.stringify({
                    email: email,
                    message: message + " \n\nEnviado por: " + name + (phone ? "\nTeléfono: " + phone : "")
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                cache: 'no-cache'
            })
            .then(response => {
                // Manejar la respuesta del servidor
                if (!response.ok) {
                    // Lanza un error si la respuesta no es exitosa (ej. 404, 500)
                    throw new Error('Network response was not ok.');
                }
                return response.json(); // Convierte la respuesta a JSON
            })
            .then(data => {
                // Esto se ejecuta solo si la petición fue exitosa y la respuesta es JSON válida
                // Ocultar loading
                $('#loading').hide();
                $('button[type="submit"]').prop('disabled', false);
                
                // Mensaje de éxito
                $('#success').html("<div class='alert alert-success'>");
                $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    .append("</button>");
                $('#success > .alert-success')
                    .append("<strong>Tu mensaje ha sido enviado. </strong>");
                $('#success > .alert-success')
                    .append('</div>');
                // Limpiar todos los campos
                $('#contactForm').trigger("reset");
            })
            .catch(error => {
                // Esto se ejecuta si hay un error en la red o si la respuesta no fue exitosa
                // Ocultar loading
                $('#loading').hide();
                $('button[type="submit"]').prop('disabled', false);
                
                // Mensaje de error
                $('#success').html("<div class='alert alert-danger'>");
                $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    .append("</button>");
                $('#success > .alert-danger').append("<strong>Lo siento, parece que mi servidor de correo no responde. ¡Vuelve a intentarlo más tarde!");
                $('#success > .alert-danger').append('</div>');
                // Limpiar todos los campos
                $('#contactForm').trigger("reset");
            });
            
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
