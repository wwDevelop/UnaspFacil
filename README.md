INFORMAÇÕES SOBRE A IMPLEMENTAÇÃO DO WEBSERVICE PARA O APP


SISTEMA DE LOGIN POR WEB SERVICE, A SER IMPLEMENTADO ASSIM QUE O DOUGLAS FIZER O WEB SERVICE

       ' <script>

       /* <script>
>>>>>>> origin/master
            $("#loginform").submit(function(){
                                
                                logindata= new Object();

                                logindata.login= $("#login").val();
                                logindata.senha= $("#senha").val();
                                
                                tjson=JSON.stringify(logindata);  /* Transforma as strings em JSON */
                                alert(tjson); /* DEBUGS : TIRAR QUANDO IMPLEMENTAR */
                            }
                        $.ajax({
                            type: "POST",
                            contentType:"application/json; charset=utf-8",
                            url: "175.123.88.11/login", /*EXEMPLO DE SERVIDOR, MUDAR QUANDO TIVER UM SERVIDOR FUNCIONANDO */
                            data: tjson,
                            success: function() {
                                alert("Aguarde"); /* A ser modificado */
                                
                                    
                            },
                            error: function (xhr, ajaxOptions, thrownError) {
                                alert("Usuário ou senha incorretos. Favor entrar em contato com a Coordenação dos Laboratórios");
                                alert(xhr.status); /* DEBUGS : TIRAR QUANDO IMPLEMENTAR */
                                alert(thrownError); /* DEBUGS : TIRAR QUANDO IMPLEMENTAR */
      }
    })
                        /* INSERIR A RESPOSTA DO WEBSERVICE */
    })
                                

        </script>'


*/
>>>>>>> origin/master
O script recebe do form o login(ra) e a senha do usuário, cria um json com essas informações e envia por POST para o web service, esse verifica se esse RA é de um aluno interno e se a senha (que é a mesma do UNASPACAD) está correta e retorna para o app um JSON com um boolean informando TRUE se as duas informações forem verdadeiras e FALSE se alguma não for. 

		FORMATO DO JSON DE LOGIN: {"login":"104696","senha":"12345"}

		FORMATO DO JSON DE RETORNO:
		{"autentica":"TRUE"} OU {"autentica":"FALSE"}

