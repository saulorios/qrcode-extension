# QR Code Generator Extension

## Descrição

Esta é uma extensão que permite gerar um QR Code para a URL da aba atual do navegador. É compatível com os navegadores Google Chrome, Microsoft Edge e Mozilla Firefox.
A ideia principal para essa ideia, é a rapidez de se acessar um link do navegador no celular! Imagine que precise realizar uma alteração na sua maquina mas precisa reiniciar, ao invés de copiar cada link, use o QRcode para abrir no celular as informações e continuar com o processo.

## Recursos

- Gera QR Codes rapidamente para URLs abertas.
- Modal de exibição personalizada.
- Design simples e intuitivo.

---

## Instalação

### Google Chrome

1. Abra o navegador Chrome.
2. Acesse `chrome://extensions` na barra de endereço.
3. Ative o **Modo do Desenvolvedor** no canto superior direito da página.
4. Clique em **Carregar sem Compactação**.
5. Selecione a pasta onde está o arquivo `manifest.json`.
6. A extensão será carregada e estará pronta para uso.

### Microsoft Edge

1. Abra o navegador Edge.
2. Acesse `edge://extensions` na barra de endereço.
3. Ative o **Modo do Desenvolvedor** no canto inferior esquerdo da página.
4. Clique em **Carregar sem Compactação**.
5. Selecione a pasta onde está o arquivo `manifest.json`.
6. A extensão será carregada e estará pronta para uso.

### Mozilla Firefox

1. Abra o navegador Firefox.
2. Acesse `about:debugging#/runtime/this-firefox` na barra de endereço.
3. Clique em **Carregar Extensão Temporária**.
4. Selecione o arquivo `manifest.json` na pasta do projeto.
5. A extensão será carregada temporariamente e poderá ser usada até o navegador ser reiniciado.

---

## Uso

1. Após a extensão estar instalada, clique no ícone da extensão na barra de ferramentas do navegador.
2. Um modal será exibido contendo o QR Code da URL da aba atual.
3. Para fechar o modal, clique fora dele.

---

## Estrutura do Projeto

```
Chrome; Firefox; Edge;/
├── background.js      # Lógica para gerar o modal e o QR Code
├── manifest.json      # Arquivo de configuração da extensão
├── icons/             # Ícones utilizados pela extensão
│   ├── icon-16.png
│   ├── icon-48.png
│   └── icon-128.png
README.md          # Documentação do projeto
```

---

## Contribuições

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork deste repositório.
2. Crie um branch para sua feature/bugfix: `git checkout -b minha-feature`.
3. Envie suas alterações: `git push origin minha-feature`.
4. Abra um Pull Request explicando suas mudanças.

---

## Livre uso

Este projeto é de livre uso e contribuição para a melhora do algoritmo.

