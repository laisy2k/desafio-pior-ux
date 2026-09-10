#  Desafio: Pior Experiência de Usuário

## Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de demonstrar, na prática, a diferença entre UI (Interface do Usuário) e UX (Experiência do Usuário), através da criação proposital de uma interface confusa, desconfortável e frustrante.

O sistema consiste em um fluxo de cadastro dividido em etapas: preenchimento dos dados pessoais, criação de senha, confirmação dos dados e conclusão do cadastro.

Durante a navegação, o usuário encontra diversos problemas propositalmente implementados, como botões enganosos, perda de informações, mensagens incorretas, baixo contraste, validações pouco intuitivas e elementos que mudam de posição.

Apesar das dificuldades, o fluxo continua funcional e existe uma maneira de chegar até a mensagem final:

> "Parabéns! Você chegou ao final da pior experiência de usuário."

O projeto foi desenvolvido utilizando **HTML, CSS e JavaScript**.


##  Princípios e Heurísticas Violados

### 1. Hierarquia visual enganosa

O botão **"Cancelar"** possui cor verde chamativa, tamanho maior e maior destaque visual, enquanto o botão **"Continuar"** possui aparência apagada.

Isso pode fazer com que o usuário interprete o botão Cancelar como a ação principal da página, aumentando a possibilidade de clicar na opção errada.

**Princípio violado:** hierarquia visual e consistência da interface.


### 2. Feedback enganoso

Ao clicar no botão **"Cancelar"**, o sistema apresenta a mensagem **"Cadastro realizado com sucesso!"**, mesmo que o usuário tenha solicitado o cancelamento.

Além disso, o cadastro não é realmente concluído.

**Heurística violada:** visibilidade do status do sistema.


### 3. Perda dos dados preenchidos

Depois que o usuário clica em **"Cancelar"**, os campos de nome e e-mail são apagados.

O usuário perde as informações que já havia digitado e precisa preencher os campos novamente.

**Heurística violada:** controle e liberdade do usuário.


### 4. Requisitos da senha escondidos

Na etapa de criação da senha, o sistema informa que existem requisitos de segurança, mas não apresenta quais são eles.

O usuário descobre as regras somente depois de cometer um erro.

**Heurística violada:** prevenção de erros e ajuda ao usuário.


### 5. Campo de senha apagado após um erro

Quando uma senha não atende aos requisitos, o sistema apresenta uma mensagem de erro e apaga completamente o conteúdo do campo.

Isso obriga o usuário a digitar novamente todas as informações.

**Heurística violada:** controle do usuário e recuperação de erros.


### 6. Botão que muda de posição

O botão **"Continuar"** da etapa de senha muda de posição quando o usuário tenta passar o mouse sobre ele.

Após duas tentativas, o botão deixa de fugir e permite que o fluxo seja concluído.

**Heurística violada:** consistência e padrões.


### 7. Ações de confirmação invertidas

Na tela de confirmação, o botão **"Sim, está tudo certo"** faz o usuário voltar para a etapa anterior.

Já o botão **"Não, está tudo errado"** é utilizado para finalizar o cadastro.

Os resultados são contrários ao significado esperado dos botões.

**Heurística violada:** correspondência entre o sistema e o mundo real.


### 8. Perda da senha ao retornar

Caso o usuário escolha **"Sim, está tudo certo"**, ele retorna para a etapa da senha. A senha anteriormente digitada é apagada e o comportamento do botão que muda de posição é reiniciado.

Isso força o usuário a repetir uma tarefa que já havia concluído.

**Heurística violada:** controle e liberdade do usuário.


### 9. Baixo contraste e cores inconsistentes

A interface utiliza propositalmente combinações de cores desconfortáveis, textos com pouco contraste, bordas chamativas e elementos sem uma identidade visual consistente.

Isso dificulta a leitura e prejudica a acessibilidade da interface.

**Princípio violado:** acessibilidade, contraste e consistência visual.


### 10. Instrução propositalmente confusa

Na tela de confirmação, o usuário encontra uma opção escrita utilizando várias negações, dificultando a compreensão da ação necessária para continuar.

Isso aumenta desnecessariamente o esforço necessário para interpretar uma tarefa simples.

**Heurística violada:** correspondência entre o sistema e o mundo real e uso de linguagem clara.


## Proposta de Correção / Versão Ideal

Em uma versão profissional da interface, o fluxo de cadastro deveria ser simples, previsível e apresentar informações claras para o usuário.

O botão **"Continuar"** deveria possuir maior destaque visual, enquanto ações secundárias, como **"Cancelar"**, deveriam receber menos destaque.

As mensagens apresentadas pelo sistema também deveriam corresponder exatamente às ações realizadas. Ao cancelar um cadastro, por exemplo, o sistema deveria informar claramente que a operação foi cancelada.

Os dados preenchidos deveriam ser preservados sempre que possível, principalmente quando ocorrer um erro de validação.

Na criação da senha, todos os requisitos deveriam ser apresentados antes do preenchimento, permitindo que o usuário saiba exatamente o que deve fazer.

Os botões deveriam permanecer em posições previsíveis e possuir nomes que representem corretamente suas ações.

A tela de confirmação deveria apresentar os dados informados anteriormente e utilizar opções claras, como **"Confirmar cadastro"** e **"Voltar e editar"**.

Por fim, a interface deveria utilizar uma paleta de cores consistente, contraste adequado, tipografia legível e organização visual que facilite a identificação das informações e ações disponíveis.


## ▶ Como Executar

1. Faça o download ou clone este repositório.
2. Abra a pasta do projeto.
3. Abra o arquivo `index.html` em um navegador.
4. Preencha o formulário e tente chegar até a tela final.

O projeto utiliza apenas **HTML, CSS e JavaScript**, portanto não é necessário instalar bibliotecas ou dependências adicionais.


##  GitHub Pages

O projeto também pode ser acessado diretamente pelo GitHub Pages:

**Link:** adicionar aqui após a publicação do projeto.