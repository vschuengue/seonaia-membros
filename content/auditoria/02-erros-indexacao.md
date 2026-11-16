# Erros 1 a 5: o Google consegue encontrar seu site?

Estes são os erros mais graves da lista, porque **um site que o Google não encontra não aparece em lugar nenhum**: nem na busca, nem no mapa, nem nas respostas de IA que se apoiam no Google. A boa notícia é que quase todos se resolvem em minutos.

Para cada erro você tem: **como identificar**, **por que importa** e **como corrigir**.

## Erro 1: Site (ou páginas importantes) fora do Google

**Como identificar**

1. No Google, busque `site:seudominio.com.br` (sem espaço depois dos dois-pontos).
2. Conte quantos resultados aparecem e confira se as suas páginas de serviço estão lá.
3. No Search Console, abra **Indexação → Páginas** e veja quantas páginas estão **indexadas** e quantas **não indexadas**, com o motivo de cada uma.

**Por que importa:** página não indexada é página invisível. É comum descobrir que a página de serviço mais importante nunca entrou no Google.

**Como corrigir**

1. No Search Console, cole o endereço da página na barra **Inspeção de URL** (topo da tela).
2. Se aparecer "O URL não está no Google", clique em **Solicitar indexação**.
3. Se o motivo listado for algum dos erros 2, 3 ou 5, corrija esse erro primeiro e depois solicite a indexação.

| Motivo que aparece no Search Console | O que significa | O que fazer |
|---|---|---|
| "Excluída pela tag 'noindex'" | A página pede que não seja indexada | Erro 2 |
| "Bloqueada pelo robots.txt" | O arquivo robots.txt impede o acesso | Erro 3 |
| "Página com redirecionamento" | É uma versão duplicada que leva para outra | Normal, se for o erro 5 corrigido |
| "Rastreada, mas não indexada" | O Google viu e achou que não vale a pena | Erro 13 (conteúdo raso) |
| "Detectada, mas não indexada" | O Google sabe que existe, mas ainda não visitou | Solicite indexação e aguarde |
| "Não encontrado (404)" | A página não existe mais | Erro 19 |

## Erro 2: Páginas marcadas como "noindex"

**Como identificar**

- No Search Console: relatório **Páginas**, motivo "Excluída pela tag 'noindex'".
- No WordPress: vá em **Configurações → Leitura** e veja se a caixa **"Evitar que mecanismos de busca indexem este site"** está marcada. É o erro mais comum de sites recém-publicados: a caixa fica marcada durante a construção e ninguém desmarca.
- No Yoast ou Rank Math: na edição de cada página, procure a opção **"Permitir que mecanismos de busca mostrem esta página"**, que precisa estar como **Sim**.
- No Wix: em cada página, **Configurações da página → SEO básico → "Permitir que buscadores indexem esta página"** precisa estar ativado.

**Por que importa:** é literalmente um aviso dizendo "Google, não me mostre". Se estiver no site inteiro, o site some.

**Como corrigir:** desmarque a opção no lugar indicado acima, salve e solicite a indexação das páginas principais no Search Console.

## Erro 3: robots.txt bloqueando o Google

**Como identificar:** abra `seudominio.com.br/robots.txt` no navegador.

| O que aparece | Situação |
|---|---|
| `User-agent: *` seguido de `Disallow: /` | ❌ **Site inteiro bloqueado** |
| `Disallow: /wp-admin/` | ✅ Normal no WordPress (bloqueia só o painel) |
| `Disallow:` vazio, ou o arquivo nem existe | ✅ Nada bloqueado |
| `Disallow: /servicos/` (ou outra pasta importante) | ⚠️ Essa parte do site está escondida |

**Por que importa:** o robots.txt é o primeiro arquivo que o Google lê. Uma linha errada esconde o site inteiro.

**Como corrigir**

- **WordPress com Yoast:** **Yoast SEO → Ferramentas → Editor de arquivos**. Com Rank Math: **Rank Math → Configurações Gerais → Editar robots.txt**.
- **Wix:** **Configurações → SEO → Editor de robots.txt**.
- Se não encontrar, peça ao webdesigner. Este é um robots.txt seguro para quase todo site de consultório ou escritório:

```copiar robots.txt seguro (WordPress)
User-agent: *
Disallow: /wp-admin/
Allow: /wp-admin/admin-ajax.php

Sitemap: https://[seudominio.com.br]/sitemap_index.xml
```

> Troque o endereço do sitemap pelo do seu site (erro 4). Em sites que não são WordPress, remova as duas linhas de `wp-admin`.

## Erro 4: Sitemap ausente ou não enviado

**Como identificar**

1. Tente abrir `seudominio.com.br/sitemap.xml` e `seudominio.com.br/sitemap_index.xml`.
2. No Search Console, abra **Indexação → Sitemaps** e veja se há algum sitemap enviado com status **"Sucesso"**.

**Por que importa:** o sitemap é a lista oficial de páginas do seu site. Sem ele, o Google descobre suas páginas só pelos links, e páginas novas demoram mais para aparecer.

**Como corrigir**

- **WordPress:** os plugins Yoast ou Rank Math criam o sitemap sozinhos (normalmente em `/sitemap_index.xml`). Sem plugin, o próprio WordPress gera um em `/wp-sitemap.xml`.
- **Wix, Squarespace e similares:** o sitemap é criado automaticamente em `/sitemap.xml`.
- Depois, no Search Console, em **Sitemaps**, cole o endereço e clique em **Enviar**.

## Erro 5: Versões duplicadas do site

**Como identificar:** digite no navegador as quatro variações do seu endereço e veja onde cada uma termina.

```copiar As 4 variações para testar
http://seudominio.com.br
http://www.seudominio.com.br
https://seudominio.com.br
https://www.seudominio.com.br
```

Todas as quatro devem **terminar no mesmo endereço**, com cadeado (`https`). Se alguma abre o site sem redirecionar, ou abre sem cadeado, há duplicidade.

**Por que importa:** para o Google, cada variação pode ser um site diferente. A "força" do seu site fica dividida, e a IA pode encontrar dados em versões diferentes.

**Como corrigir**

1. Peça à hospedagem que **ative o SSL** (certificado do cadeado), se ainda não houver. Na maioria das hospedagens é gratuito e fica no painel com o nome "SSL", "Let's Encrypt" ou "HTTPS".
2. Escolha a versão oficial (com ou sem `www`, tanto faz, desde que seja uma só).
3. **WordPress:** em **Configurações → Geral**, os campos "Endereço do WordPress" e "Endereço do site" devem estar iguais e com `https`.
4. Peça à hospedagem ou ao webdesigner um **redirecionamento 301** de todas as outras variações para a versão oficial.

## Checklist do capítulo

- [ ] Erro 1: chequei o `site:` no Google e o relatório de Páginas do Search Console
- [ ] Erro 1: solicitei a indexação das páginas importantes que estavam fora
- [ ] Erro 2: conferi que nenhuma página importante está como "noindex"
- [ ] Erro 3: abri o robots.txt e confirmei que ele não bloqueia o site
- [ ] Erro 4: confirmei que o sitemap existe e enviei no Search Console
- [ ] Erro 5: testei as 4 variações do endereço e todas levam à mesma versão com cadeado
- [ ] Anotei na planilha cada erro encontrado, com as páginas afetadas
