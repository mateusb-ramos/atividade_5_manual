const form = document.getElementById
        ('form-inspecao');
        const mensagem = document.getElementById
        ('mensagem');

        form.addEventListener('submit', function (event){
            event.preventDefault();

            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();;
            const setor = document.getElementById('setor').value;
            const descricao = document.getElementById('descricao').value;
            const termos = document.getElementById('termos').checked;
            const prioridade = document.querySelector('input[name = "prioridade"]:checked');

            if (nome === '') {
                mensagem.textContent = 'Preencha o nome.';
                return;
            }
            
            if (email === '') {
                mensagem.textContent = 'Preencha o email.';
                return;
            }         
            
            if (setor === '') {
                mensagem.textContent = 'Preencha o setor.';
                return;
            }         
            
            if (!prioridade) {
                mensagem.textContent = 'Preencha a prioridade.';
                return;
            } 
            
            if (descricao.length < 10) {
                mensagem.textContent = 'A descrição deve ter pelo menos 10 caracteres.'
                return;
            }

            if (!termos) {
                mensagem.textContent = 'Marque a confirmação de dados.'
                return;
            }

            mensagem.textContent = 'Formulário valido com sucesso.'
                                
        }); 