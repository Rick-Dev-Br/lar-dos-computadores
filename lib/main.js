$(document).ready(function(){
    $('#telefone').mask('(00)00000-0000', {
        placeholder: '(99) 99999-9999'
    });

    $("#nome").mask("A", {
        translation: {
            "A": { pattern: /[A-Za-záàâãéèíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ\s]/, recursive: true }
        },
        placeholder: ""
    });

    $("#email").on("input", function(){
        var email = $(this).val();
        var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (email !== "" && !regex.test(email)) {
            $(this).addClass("is-invalid");
        } else {
            $(this).removeClass("is-invalid");
        }
    });

    $("#meuFormulario").on("submit", function(e) {
        e.preventDefault();

        // Validação final antes de "enviar"
        var nomeValido = $("#nome").val().trim() !== "";
        var emailValido = !$("#email").hasClass("is-invalid");
        var telefoneCompleto = $("#telefone").val().replace(/\D/g, '').length === 11;

        if (nomeValido && emailValido && telefoneCompleto) {
            // Simula um envio bem-sucedido (substitua por lógica real se necessário)
            Swal.fire({
                title: "Sucesso!",
                text: "Formulário validado (simulação). Em um caso real, os dados seriam enviados ao servidor.",
                icon: "success",
                confirmButtonColor: "#3085d6"
            }).then(() => {
                // Limpa o formulário após o "envio"
                $("#meuFormulario")[0].reset();
            });
        } else {
            // Mensagem de erro detalhada
            var mensagemErro = "Corrija os seguintes campos:";
            if (!nomeValido) mensagemErro += "\n- Nome inválido";
            if (!emailValido) mensagemErro += "\n- E-mail inválido";
            if (!telefoneCompleto) mensagemErro += "\n- Telefone incompleto";

            Swal.fire("Erro!", mensagemErro, "error");
        }
    });
});