# O teste das 10 perguntas: a IA já conhece você?

Antes de mexer em qualquer coisa, você precisa de uma **fotografia do ponto de partida**. Sem isso, daqui a três meses você não vai saber se melhorou. Este teste leva cerca de 40 minutos e você vai repeti-lo uma vez por mês (o capítulo 8 mostra como).

A lógica é simples: você faz as mesmas 10 perguntas pra duas IAs (ChatGPT e Gemini) e, se puder, pra uma terceira (Perplexity). Depois, dá uma nota de 0 a 3 pra cada resposta. A soma vira sua **pontuação de visibilidade em IA**, de 0 a 30 por IA.

## Antes de começar: 4 cuidados pra o teste ser justo

1. **Use uma janela anônima** do navegador, ou saia da sua conta. Se a IA já conversou com você, ela pode "lembrar" do seu nome e distorcer o resultado.
2. **Comece uma conversa nova pra cada pergunta.** Se fizer as 10 perguntas na mesma conversa, a primeira resposta influencia as seguintes.
3. **Não escreva seu nome nas perguntas 1 a 6.** O objetivo é ver se a IA chega até você sozinha, como faria um paciente ou cliente.
4. **Copie as respostas** numa planilha ou documento. Você vai querer comparar depois.

## As 10 perguntas

Substitua o que estiver entre colchetes. Use a especialidade e a cidade exatas que você quer que as pessoas associem a você.

### Bloco A: Descoberta (a IA te encontra sem saber seu nome?)

```prompt Pergunta 1: indicação direta
Quais são os melhores [sua profissão, ex.: psicólogos] em [sua cidade] que atendem [sua especialidade, ex.: ansiedade]? Me indique nomes.
```

```prompt Pergunta 2: indicação por bairro
Preciso de um [sua profissão] perto do bairro [seu bairro], em [sua cidade]. Quem você recomenda?
```

```prompt Pergunta 3: problema do paciente/cliente
Estou com [problema real que você resolve, ex.: dor no dente do siso / fui demitido sem receber a rescisão / crises de ansiedade antes de dormir]. Moro em [sua cidade]. Quem pode me ajudar?
```

```prompt Pergunta 4: comparação
Compare os principais [sua profissão + especialidade] de [sua cidade]. Quais os pontos fortes de cada um?
```

```prompt Pergunta 5: modalidade
Quais [sua profissão] em [sua cidade ou estado] atendem [online / por convênio X / aos sábados / em domicílio]?
```

```prompt Pergunta 6: pergunta de dúvida (sem pedir indicação)
[Uma dúvida comum que seus pacientes/clientes fazem, ex.: "Quanto tempo dura um tratamento de canal?" / "Quais os direitos de quem é demitido grávida?"]. Responda e cite fontes.
```

### Bloco B: Reconhecimento (a IA sabe quem você é?)

```prompt Pergunta 7: quem é você
Quem é [seu nome profissional completo, ex.: Dra. Ana Souza], [sua profissão] em [sua cidade]?
```

```prompt Pergunta 8: o que você faz
Quais serviços [seu nome ou nome da clínica/escritório] oferece e para quem é indicado?
```

```prompt Pergunta 9: credenciais
Qual a formação e o registro profissional de [seu nome]? Há quanto tempo atua?
```

```prompt Pergunta 10: contato
Como entrar em contato com [seu nome ou nome da clínica/escritório] e qual o endereço de atendimento?
```

## Como dar a nota de cada resposta

Use esta régua, sempre igual, pra cada uma das 10 respostas:

| Nota | Bloco A (perguntas 1 a 6) | Bloco B (perguntas 7 a 10) |
|---|---|---|
| **0** | Você não aparece | A IA diz que não sabe, ou confunde você com outra pessoa |
| **1** | Você aparece, mas com informação errada ou desatualizada | Responde, mas com erros importantes (cidade, especialidade, contato) |
| **2** | Você aparece corretamente, entre vários nomes | Responde corretamente, mas de forma vaga ou incompleta |
| **3** | Você aparece entre os primeiros, com descrição correta, ou seu site é citado como fonte | Responde de forma completa e correta, e cita seu site ou seu perfil |

> **Atenção à nota 1.** Informação errada é pior do que não aparecer, porque leva o paciente pra um endereço ou telefone antigo. Se você encontrar algo assim, anote **de onde** a IA tirou o dado (às vezes ela mostra a fonte). Quase sempre é um diretório antigo, um perfil abandonado ou um site desatualizado. Corrigir essa fonte entra na sua lista de tarefas do capítulo 4.

## Modelo de planilha

Crie uma planilha com estas colunas. Uma linha por pergunta, uma aba por mês.

```copiar Cabeçalho da planilha de pontuação
Mês	Pergunta	ChatGPT (0-3)	Gemini (0-3)	Perplexity (0-3)	Fonte citada pela IA	Erro encontrado	Ação pra corrigir
```

No fim da aba, some as colunas. Você terá três números (um por IA), cada um de 0 a 30.

## Como interpretar seu resultado

| Pontuação (por IA) | O que significa | Onde focar primeiro |
|---|---|---|
| **0 a 6** | Você praticamente não existe pras IAs. É o cenário mais comum e o com mais espaço pra crescer | Capítulos 4 (checklist) e 6 (schema). Base técnica primeiro |
| **7 a 15** | A IA sabe que você existe, mas não te recomenda | Capítulo 5 (páginas de serviço) e capítulo 7 (conteúdo). Falta autoridade no assunto |
| **16 a 24** | Boa presença. Você aparece, mas não sempre nem em primeiro | Capítulo 7. Conteúdo constante e menções em outros sites |
| **25 a 30** | Excelente. Seu trabalho agora é manter | Capítulo 8. Monitoramento e atualização |

Um padrão bem comum: **nota razoável no Bloco B e quase zero no Bloco A**. Isso quer dizer que, quando alguém pergunta seu nome, a IA acha. Mas, quando a pessoa pergunta pelo problema, ela indica outros. É exatamente o que os capítulos 5 e 7 resolvem.

## Um prompt extra: peça o diagnóstico pra própria IA

Depois de dar as notas, abra uma conversa nova e use este prompt. Ele não substitui o teste, mas costuma revelar pontos cegos.

```prompt Diagnóstico de presença
Atue como especialista em SEO local e GEO (otimização para respostas de IA).
Sou [sua profissão] em [sua cidade], especializado(a) em [especialidade]. Meu site é [endereço do site].
Analise o que você consegue encontrar sobre mim e responda:
1. O que você sabe sobre mim e de quais fontes tirou isso?
2. Quais informações estão faltando, confusas ou contraditórias?
3. Se um paciente/cliente pedisse uma indicação de [profissão + especialidade] em [cidade], por que você não me indicaria hoje?
4. Liste as 5 mudanças mais importantes pra eu passar a ser uma fonte confiável pra você.
Seja direto e específico. Não invente informações sobre mim: se não souber, diga que não sabe.
```

> **Por que pedir pra ela não inventar:** IAs às vezes "preenchem lacunas" com dados plausíveis e falsos. Se a resposta trouxer algo que você nunca publicou, ignore e anote como erro.

## Checklist do capítulo

- [ ] Abri uma janela anônima e fiz as 10 perguntas no ChatGPT, cada uma em conversa nova
- [ ] Fiz as mesmas 10 perguntas no Gemini
- [ ] (Opcional) Fiz as mesmas 10 perguntas no Perplexity
- [ ] Dei nota de 0 a 3 pra cada resposta usando a régua
- [ ] Criei a planilha com a aba do mês atual e somei a pontuação de cada IA
- [ ] Anotei todo dado errado que encontrei e de onde ele veio
- [ ] Rodei o prompt de diagnóstico e salvei a resposta
