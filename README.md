# Boas vindas ao projeto Trybers and Dragons!

  Projeto feito durante o curso de desenvolvimento web na trybe.

  Nesse projeto, foi aplicado os princípios da arquitetura `SOLID` e os princípios de `POO` em uma estrutura de jogos de interpretação de papéis, mais conhecidos como jogos `RPG` (_Role Playing Game_).

  <details>
  <summary>
    <h3>
      No universo de Trybers and Dragons
    </h3>
    </summary>

  Por aqui quase todos os seres que andam por essas terras pertencem a uma **raça**.

  As diversas raças (como, por exemplo, Élfica, Orc ou Anã) definem as características das personagens dentro do jogo desde a sua criação, como os seus pontos de vida e a sua destreza.
  
  No entanto, existem seres bestiais denominados **monstros** que não possuem uma raça específica, mas podem lutar.

  Alguns seres também possuem uma **energia** e, ao treinarem o uso da energia, passam a possuir um **arquétipo**. De modo geral, os arquétipos definem a vocação de uma personagem, suas habilidades e visão de mundo: como encaram as situações, exploram masmorras ou enfrentam monstros. Como exemplos de arquétipos presentes em T&D, podemos citar guerreiro, mago e necromante.

  Boa parte dos seres podem ser considerados lutadores, bastando para isso possuir alguns atributos específicos. Em muitas ocasiões podem acontecer lutas entre personagens diversas, bem como entre personagens e monstros.

</details>

<details>
  <summary>
    <h3>
      Antes de começar a desenvolver
    </h3>
    </summary>

  1. Clone o repositório

  - `git clone https://github.com/mabiiak/trybers-and-dragons.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd trybers-and-dragons`

  2. Instale as dependências

  - `npm install`

  3. Crie uma branch a partir da branch `main`

  - Verifique se você está na branch `main`
    - Exemplo: `git branch`
  - Se não estiver, mude para a branch `main`
    - Exemplo: `git checkout main`
  - Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
    - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    - Exemplo: `git checkout -b nome-trybers-and-dragons`

  4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

  - Verifique que as mudanças ainda não estão no _stage_
    - Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
  - Adicione o novo arquivo ao _stage_ do Git
      - Exemplo:
        - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        - `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
  - Faça o `commit` inicial
      - Exemplo:
        - `git commit -m 'descrição commit'`
        - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

  5. Adicione a sua branch com o novo `commit` ao repositório remoto

  - Usando o exemplo anterior: `git push -u origin nome-trybers-and-dragons`

  6. Crie um novo `Pull Request` _(PR)_

  - Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/mabiiak/trybers-and-dragons/pulls);
  - Clique no botão verde _"New pull request"_;
  - Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**;
  - Clique no botão verde _"Create pull request"_;
  - Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_;
  - Volte até a [página de _Pull Requests_ do repositório](https://github.com/mabiiak/trybers-and-dragons/pulls) e confira que o seu _Pull Request_ está criado.

</details>

## Requisitos

    ✅ 1 - Crie a classe `Race`

    ✅ 2 - Crie classes que herdam de `Race`

    ✅ 3 - Crie a interface `Energy`

    ✅ 4 - Crie a classe `Archetype`

    ✅ 5 - Crie classes que herdam de `Archetype`

    ✅ 6 - Crie a interface `Fighter`

    ✅ 7 - Crie a classe `Character`

    ✅ 8 - Crie a interface `SimpleFighter`

    ❌ 9 - Crie a classe `Monster`

    ❌ 10 - Crie a classe `PVP`

### Bônus

    ❌ 11 - Criar a classe `PVE`

    ❌ 12 - Crie a classe `Dragon`

    ❌ 13 - Crie objetos no arquivo `index`
