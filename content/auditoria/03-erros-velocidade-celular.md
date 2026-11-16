# Erros 6 a 10: velocidade e experiência no celular

A maioria das pessoas que procura um dentista, um psicólogo ou um advogado está no **celular**, muitas vezes com pressa ou preocupada. Site lento ou difícil de usar faz a pessoa voltar pro Google e clicar no próximo. E o Google percebe esse comportamento.

## Erro 6: Nota baixa no PageSpeed (Core Web Vitals ruins)

**Como identificar:** rode a página inicial e 2 páginas de serviço em **pagespeed.web.dev**, aba **Celular**. Anote a nota e olhe o quadro **"Core Web Vitals"** no topo.

| Métrica | O que mede, em português claro | Bom |
|---|---|---|
| **LCP** (Largest Contentful Paint) | Quanto tempo leva pra aparecer o maior elemento da tela (geralmente a foto ou o título principal) | Até 2,5 s |
| **INP** (Interaction to Next Paint) | Quanto o site demora pra reagir quando a pessoa toca em algo | Até 200 ms |
| **CLS** (Cumulative Layout Shift) | Quanto a página "pula" enquanto carrega (aquele botão que foge do dedo) | Até 0,1 |

> Se aparecer a mensagem "não há dados suficientes de usuários reais", tudo bem: sites pequenos raramente têm. Use a **nota de laboratório** logo abaixo como referência.

**Por que importa:** velocidade é um dos sinais de qualidade que o Google usa. E, na prática, cada segundo a mais de carregamento faz parte dos visitantes desistir.

**Como corrigir:** role a página do PageSpeed até **"Oportunidades"** e **"Diagnóstico"**. As causas mais comuns em sites de consultório e escritório, em ordem de frequência:

| Causa provável | Onde aparece no PageSpeed | Solução |
|---|---|---|
| Imagens enormes | "Dimensione as imagens corretamente", "Veicule imagens em formatos modernos" | Erro 7 |
| Muitos plugins ou scripts (chat, pop-up, pixels, sliders) | "Reduza o JavaScript não usado" | Remover o que não é essencial |
| Hospedagem lenta | "Reduza o tempo de resposta inicial do servidor" | Plugin de cache ou trocar o plano de hospedagem |
| Vídeo de fundo na página inicial | "Evite payloads de rede muito grandes" | Trocar por uma foto |
| Fontes externas demais | "Elimine recursos que bloqueiam a renderização" | Usar no máximo 2 fontes |

**No WordPress:** um plugin de cache (como **LiteSpeed Cache**, se a hospedagem usa LiteSpeed, ou **WP Super Cache**) costuma melhorar a nota em 10 a 30 pontos. Instale **um só**: dois plugins de cache juntos dão conflito.

## Erro 7: Imagens pesadas e sem descrição

**Como identificar**

- **Peso:** no PageSpeed, procure "Dimensione as imagens corretamente". No Screaming Frog, aba **Images**, ordene pela coluna **Size**: imagens acima de 300 KB são suspeitas.
- **Descrição:** no Screaming Frog, filtro **Images → Missing Alt Text**. Sem Screaming Frog: no WordPress, abra a **Biblioteca de mídia** e veja o campo "Texto alternativo" das imagens principais.

**Por que importa:** imagem pesada é a causa nº 1 de site lento. E imagem sem descrição é invisível pro Google e pras IAs, além de inacessível pra quem usa leitor de tela.

**Como corrigir**

1. Antes de subir qualquer foto, reduza em **squoosh.app** (grátis, no navegador): largura máxima de 1.600 px pra fotos grandes e 800 px pra fotos de conteúdo, formato **WebP**, qualidade entre 70 e 80.
2. No WordPress, o plugin gratuito **Smush** ou **EWWW Image Optimizer** comprime as imagens que já estão no site.
3. Preencha o **texto alternativo** de cada imagem importante descrevendo o que ela mostra, de forma natural:

```copiar Exemplos de texto alternativo
Fachada da Clínica Sorriso Centro, na Rua X, em Campinas
Dra. Ana Souza, dentista, no consultório
Sala de atendimento do consultório de psicologia em Santos
Recepção do escritório de advocacia em Belo Horizonte
```

> Não encha o texto alternativo de palavras-chave ("dentista campinas implante melhor dentista"). Descreva a imagem como descreveria pra alguém que não pode vê-la.

## Erro 8: Pop-ups e banners que cobrem a tela no celular

**Como identificar:** abra o site **no seu celular**, numa aba anônima, como se fosse um paciente. Algo cobre o conteúdo logo que a página abre? Uma janela de newsletter, um aviso enorme de cookies, um banner de WhatsApp que esconde o texto?

**Por que importa:** o Google penaliza explicitamente páginas que, no celular, cobrem o conteúdo principal com intersticiais intrusivos. E o visitante fecha a página.

**Como corrigir**

- Remova pop-ups que abrem sozinhos ao carregar a página.
- O aviso de cookies (LGPD) deve ser uma **faixa pequena** no rodapé, não uma janela no meio da tela.
- O botão de WhatsApp deve ser um **ícone pequeno no canto**, que não cubra texto.

## Erro 9: Texto pequeno e botões difíceis de tocar

**Como identificar:** no celular, tente ler um parágrafo sem dar zoom e tocar no telefone e no botão de agendar com o polegar. No PageSpeed, a seção **Acessibilidade** aponta "Os tamanhos de fonte são legíveis?" e "As áreas de toque têm tamanho adequado?".

**Por que importa:** se a pessoa precisa dar zoom pra ler, ou erra o botão, ela desiste. E o público de muitos consultórios inclui pessoas mais velhas.

**Como corrigir**

| Elemento | Mínimo recomendado no celular |
|---|---|
| Texto do corpo | 16 px (ideal: 17 a 18 px) |
| Botões e links tocáveis | 48 × 48 px de área de toque |
| Espaço entre links | Pelo menos 8 px |
| Contraste | Texto escuro em fundo claro (ou o contrário), nunca cinza-claro em branco |

- **WordPress:** a maioria dos temas tem a opção **Aparência → Personalizar → Tipografia**.
- **Wix:** o editor tem uma visão **Mobile** separada: ajuste os tamanhos ali.
- O **telefone** deve ser um link clicável (no editor, link do tipo `tel:+55DDDNUMERO`), assim a pessoa liga com um toque.

## Erro 10: Layout quebrado no celular

**Como identificar:** no celular, percorra a página inicial e todas as páginas de serviço procurando:

- texto ou imagem "vazando" pra fora da tela, criando rolagem pro lado;
- tabelas cortadas;
- menu que não abre ou não fecha;
- formulário com campos impossíveis de preencher;
- elementos sobrepostos.

Se não tiver um celular à mão, no Chrome do computador aperte **F12** e clique no ícone de celular (**Ctrl+Shift+M**) pra simular.

**Por que importa:** o Google usa a versão **mobile** do site como versão principal pra indexar e classificar. Se ela está quebrada, é como se o site estivesse quebrado.

**Como corrigir:** anote a página e o elemento com problema e tire um print. Muitos casos se resolvem no próprio editor (visão mobile do Wix, ou "responsivo" nos construtores do WordPress, como Elementor). Os demais vão pro relatório do webdesigner (capítulo 6), **com o print**: isso economiza muita troca de mensagem.

## Checklist do capítulo

- [ ] Erro 6: rodei o PageSpeed (celular) e anotei a nota e as Core Web Vitals de 3 páginas
- [ ] Erro 7: identifiquei imagens acima de 300 KB e comprimi as principais
- [ ] Erro 7: preenchi o texto alternativo das imagens importantes
- [ ] Erro 8: abri o site no celular e removi pop-ups que cobrem o conteúdo
- [ ] Erro 9: conferi tamanho de texto e de botões, e o telefone é clicável
- [ ] Erro 10: percorri todas as páginas no celular e tirei print do que está quebrado
- [ ] Anotei na planilha cada erro encontrado, com as páginas afetadas
