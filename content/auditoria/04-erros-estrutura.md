# Erros 11 a 15: estrutura e informações do site

Seu site já é encontrado e carrega bem. Agora a pergunta é: **quando o Google e as IAs leem o site, eles entendem do que cada página trata e quem você é?** Estes cinco erros são os que mais atrapalham esse entendimento.

## Erro 11: Títulos e descrições ausentes, repetidos ou genéricos

Cada página tem dois textos "escondidos" que aparecem no Google: o **título** (a linha azul clicável) e a **meta descrição** (as duas linhas cinzas embaixo).

**Como identificar**

- No Screaming Frog: abas **Page Titles** e **Meta Description**, filtros **Missing** (ausente), **Duplicate** (repetido) e **Over 60 characters** (título longo demais).
- Sem Screaming Frog: busque `site:seudominio.com.br` no Google e leia os títulos que aparecem. Se várias páginas têm o mesmo título, ou o título é só "Início" ou "Home", é este erro.

**Por que importa:** o título é um dos sinais mais fortes do assunto da página. Uma página de implante com título "Serviços · Clínica X" não disputa a busca por implante.

**Como corrigir:** use estas fórmulas.

```copiar Fórmulas de título e descrição
TÍTULO (até 60 caracteres)
Página de serviço: [Serviço] em [Cidade] · [Seu nome ou clínica]
Página inicial:   [Profissão + especialidade] em [Cidade] · [Seu nome]
Página Sobre:     Sobre [Seu nome] · [Profissão] em [Cidade]

META DESCRIÇÃO (até 155 caracteres)
[O que é o serviço, em uma frase]. Atendimento [presencial em bairro/cidade e/ou online] com [nome], [registro]. Agende sua [consulta/conversa].
```

**Exemplos:**

| Página | Título | Meta descrição |
|---|---|---|
| Serviço (dentista) | Implante Dentário em Campinas · Dra. Ana Souza | Substituição de dentes perdidos com implantes planejados. Atendimento no Centro de Campinas com Dra. Ana Souza, CRO-SP 00000. Agende sua avaliação. |
| Serviço (psicologia) | Terapia para Ansiedade em Santos · Psicóloga Bia Lima | Psicoterapia para ansiedade, presencial no Gonzaga ou online. Atendimento com Bia Lima, CRP 06/00000. Agende uma primeira conversa. |
| Serviço (advocacia) | Advogado Trabalhista em Belo Horizonte · Dr. Paulo Reis | Orientação sobre rescisão, horas extras e direitos trabalhistas. Atendimento em BH e online com Paulo Reis, OAB/MG 00000. |

**Onde editar:** no WordPress com Yoast ou Rank Math, no fim da edição de cada página ("Título SEO" e "Meta descrição"). No Wix: **Configurações da página → SEO básico**.

## Erro 12: Título principal (H1) ausente ou repetido

O **H1** é o título visível no topo da página, aquele em letras maiores. Cada página deve ter **exatamente um** H1.

**Como identificar**

- No Screaming Frog: aba **H1**, filtros **Missing** (ausente) e **Multiple** (vários).
- Sem Screaming Frog: no Chrome, clique com o botão direito no título da página → **Inspecionar**. A linha destacada deve começar com `<h1`.

**Por que importa:** o H1 é o "título do capítulo" para quem lê e para quem indexa. Sem ele, ou com vários, o assunto da página fica difuso. Um problema comum em sites com construtores visuais: o logotipo, ou um "Bem-vindo!", é o H1, e o título real está como texto comum.

**Como corrigir:** no editor, selecione o título principal de cada página e defina como **Título 1 (H1)**. Os subtítulos internos devem ser **Título 2 (H2)** e **Título 3 (H3)**. O H1 deve seguir a lógica do título SEO: "Implante dentário em Campinas", e não "Bem-vindo".

## Erro 13: Páginas rasas, com pouco conteúdo

**Como identificar**

- No Screaming Frog: na coluna **Word Count** da aba **Internal**, ordene do menor para o maior. Páginas de serviço com menos de **300 palavras** são suspeitas.
- No Search Console: páginas com o motivo **"Rastreada, mas não indexada"** quase sempre são rasas.

**Por que importa:** uma página de serviço com três linhas ("Fazemos implantes com qualidade e carinho. Agende!") não responde nada. O Google não vê motivo para mostrá-la, e a IA não tem o que citar.

**Como corrigir:** amplie cada página de serviço para **500 a 1.000 palavras**, cobrindo: o que é, para quem é indicado, como funciona, quanto tempo leva, por que com você, perguntas frequentes e como agendar. Se você tem o guia principal (SEO+GEO), o capítulo 5 tem o modelo completo. Se levou o guia **Páginas Prontas**, use os textos dele.

## Erro 14: Não existe uma página por serviço

**Como identificar:** olhe o menu do seu site. Existe uma página **"Serviços"** ou **"Áreas de atuação"** com todos os serviços listados numa página só, sem páginas próprias para cada um?

**Por que importa:** é o erro estrutural mais comum em site de profissional liberal, e o que mais custa visibilidade. Uma página que fala de dez assuntos não disputa nenhum deles. Quando alguém busca (ou pergunta à IA) sobre um serviço específico na sua cidade, quem tem uma página dedicada tem muito mais chance de aparecer.

**Como corrigir**

1. Liste seus serviços e escolha os **3 a 5 mais importantes**.
2. Crie uma página para cada um, com título "[Serviço] em [Cidade]" e endereço curto (ex.: `/implante-dentario`).
3. Transforme a página "Serviços" num **índice**: um parágrafo curto para cada serviço, com link para a página dele.
4. Coloque as páginas novas no menu.

## Erro 15: Nome, endereço e telefone inconsistentes (e Perfil da Empresa desatualizado)

**Como identificar**

1. Anote como seu nome, endereço e telefone aparecem no **rodapé do site**.
2. Compare, caractere por caractere, com o **Perfil da Empresa no Google**, o **Instagram**, o **Facebook** e os diretórios onde você aparece (Doctoralia, JusBrasil, guias locais).
3. Busque seu telefone antigo e seu endereço antigo no Google, entre aspas, para achar cadastros esquecidos.

Monte uma tabela assim:

```copiar Tabela de consistência de dados
Fonte	Nome exibido	Endereço	Telefone	Site	Está correto?
Site (rodapé)
Perfil da Empresa no Google
Instagram
Facebook
[Diretório 1]
[Diretório 2]
```

**Por que importa:** para o Google e para as IAs, dados divergentes geram dúvida sobre qual informação é a verdadeira. E dúvida reduz a chance de você ser recomendado. Pior: a IA pode passar ao paciente o telefone errado.

**Como corrigir**

1. Defina **um formato oficial** e use idêntico em todo lugar (inclusive abreviações: "Rua" ou "R."? "Sala 4" ou "Sl. 4"? Escolha um).
2. Corrija primeiro o **site** e o **Perfil da Empresa**, depois redes sociais e diretórios.
3. No Perfil da Empresa, confira também: **categoria principal** (a mais específica possível), **horário**, **fotos reais** e **link do site**.
4. Cadastros antigos que você não controla: use a opção "sugerir uma edição" ou entre em contato com o diretório pedindo a correção.

## Checklist do capítulo

- [ ] Erro 11: revisei título e meta descrição de todas as páginas importantes
- [ ] Erro 12: cada página tem um único H1 descrevendo o assunto
- [ ] Erro 13: identifiquei as páginas com menos de 300 palavras
- [ ] Erro 14: conferi se existe uma página própria para cada serviço importante
- [ ] Erro 15: montei a tabela de consistência de nome, endereço e telefone
- [ ] Erro 15: corrigi site e Perfil da Empresa no formato oficial
- [ ] Anotei na planilha cada erro encontrado, com as páginas afetadas
