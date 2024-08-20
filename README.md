        Documentação do Projeto: Player de Música


![Interface do Projeto](images/preview.png)



Visão Geral

Este projeto implementa um player de música interativo usando HTML, CSS e JavaScript. O player oferece uma experiência completa de reprodução de músicas, incluindo funcionalidades como tocar, pausar, avançar e retroceder faixas, ajuste de barra de progresso, botão de curtida, shuffle, repetição e muito mais. Todas as configurações do usuário, como curtir músicas ou ativar o shuffle, são salvas no localStorage para que sejam mantidas mesmo após recarregar a página.
Funcionalidades

    Reprodução de Música:
        Controle de reprodução (play/pause).
        Avançar e retroceder entre as músicas.
        Exibição do tempo atual e total da música.
        Atualização automática da capa do álbum, nome da música e nome do artista.

    Gerenciamento da Playlist:
        Suporte para shuffle (embaralhamento) e repetição de músicas.
        Estado de curtidas que pode ser salvo e recuperado do localStorage.

    Interface Interativa:
        Barra de progresso interativa para saltar para qualquer ponto da música.
        Controles de shuffle e repetição que indicam visualmente o estado atual.
        Botão de curtidas que reflete se a música foi curtida ou não.

Estrutura do Projeto
1. Estrutura HTML

O HTML define a estrutura básica do player, contendo elementos como a imagem da capa do álbum, o player de áudio, botões de controle, barra de progresso, e exibição de informações sobre a música (nome da música e nome do artista).
2. Estilos CSS

O CSS estiliza o player para torná-lo visualmente atraente e fácil de usar. Ele define o layout dos elementos, as cores, e os estados ativos/inativos dos botões, como play/pause, shuffle, repeat e curtidas.
3. Funcionalidade JavaScript

O JavaScript gerencia a lógica do player, incluindo:

    Inicialização e controle da música.
    Atualização de informações e progressão da música.
    Salvamento e recuperação de estados no localStorage.
    Interação do usuário, como tocar, pausar, pular músicas, curtir, e ajustar a barra de progresso.

4. Estrutura de Arquivos e Pastas

O projeto é organizado com pastas para imagens de capas de álbuns e arquivos de áudio. Os principais arquivos incluem:

    HTML: Para a estrutura do player.
    CSS: Para estilização.
    JavaScript: Para a lógica do player.
    Imagens: Armazena as capas dos álbuns.
    Áudio: Contém as faixas de áudio para reprodução.

Como Usar
Adicionar Novas Músicas

Para adicionar novas músicas ao player:

    Insira os arquivos de música na pasta designada para áudio.
    Adicione as capas dos álbuns correspondentes na pasta de imagens.
    Atualize a lista de músicas no JavaScript para incluir a nova música, especificando o nome da música, o artista e os arquivos de áudio e imagem correspondentes.

Personalização

    Estilo: Modifique o arquivo CSS para personalizar a aparência do player, como cores, tamanhos de fonte, ou layout.
    Funcionalidades: Adicione ou modifique funcionalidades no arquivo JavaScript, como suporte para listas de reprodução dinâmicas, busca de músicas, ou integração com APIs externas.

Considerações Finais

Este projeto serve como uma base sólida para um player de música funcional e interativo. Ele pode ser expandido para incluir mais funcionalidades, como playlists dinâmicas, suporte a diferentes formatos de áudio, ou integração com serviços de streaming.

A documentação acima fornece uma visão geral das principais funcionalidades e estrutura do projeto, permitindo que você entenda e expanda o player conforme necessário.
