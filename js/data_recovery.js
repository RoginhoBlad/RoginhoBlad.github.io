data_recovery = [
    {
        "title": "Chegar a 0 PV",
        "subtitle": "Caída ou morte instantânea",
        "icon": "pirate-grave",
        "description": "Ao chegar a 0 PV, um personagem fica Inconsciente até recuperar PV, salvo se morrer instantaneamente.",
        "bullets": [
            "Se o dano que sobra após chegar a 0 for igual ou superior aos seus PV máximos, você morre. Por exemplo, com 4 PV atuais e 10 máximos, sofrer 14 de dano causa morte instantânea.",
            "Se seus PV máximos forem reduzidos a 0, você morre.",
            "Monstros normalmente morrem ao chegar a 0 PV. O Mestre pode aplicar a um monstro as regras dos personagens."
        ],
        "reference": "Livro do Jogador 2024 · Capítulo 1 · Dano e cura"
    },
    {
        "title": "Salvaguardas contra morte",
        "subtitle": "Role no início do turno",
        "icon": "death-note",
        "description": "Ao iniciar seu turno com 0 PV, se estiver vivo e não estiver Estável, role um d20 sem modificador de atributo. Com 10 ou mais, marque um sucesso. Abaixo de 10, marque uma falha.",
        "bullets": [
            "Com três sucessos, você fica Estável. Com três falhas, morre. Registre as duas contagens separadamente. Elas voltam a zero ao estabilizar ou recuperar PV.",
            "Um 1 natural conta como duas falhas. Um 20 natural recupera 1 PV imediatamente.",
            "Sofrer dano quando já está com 0 PV causa uma falha. Um acerto crítico causa duas falhas. Se o dano recebido for igual ou superior aos seus PV máximos, você morre."
        ],
        "reference": "Livro do Jogador 2024 · Capítulo 1 · Dano e cura"
    },
    {
        "title": "Estabilizar",
        "subtitle": "Ajudar com Medicina CD 10",
        "icon": "bandage-roll",
        "description": "Use a ação Ajudar e faça um teste de Sabedoria (Medicina) CD 10. Em um sucesso, a criatura com 0 PV fica Estável.",
        "bullets": [
            "Ela continua Inconsciente, mas deixa de fazer salvaguardas contra morte. Se sofrer dano, perde a estabilidade e aplica as regras de dano com 0 PV.",
            "Se continuar Estável e sem receber cura, a criatura recupera 1 PV após 1d4 horas."
        ],
        "reference": "Livro do Jogador 2024 · Capítulo 1 · Dano e cura"
    },
    {
        "title": "Cura e PV temporários",
        "subtitle": "Recuperação ou proteção",
        "icon": "heart-bottle",
        "description": "A cura recupera PV até o máximo. Se você estava Inconsciente por estar com 0 PV, recuperar ao menos 1 PV faz você acordar.",
        "bullets": [
            "PV temporários absorvem dano antes dos PV reais. Se receber outra reserva, escolha qual manter. As duas não se somam.",
            "Receber PV temporários com 0 PV não estabiliza nem desperta você. A cura não repõe PV temporários, que normalmente duram até se esgotarem ou até o fim de um descanso longo."
        ],
        "reference": "Livro do Jogador 2024 · Capítulo 1 · Dano e cura"
    },
    {
        "title": "Descanso curto",
        "subtitle": "Pelo menos 1 hora",
        "icon": "campfire",
        "description": "Comece com pelo menos 1 PV. Passe uma hora ou mais em repouso, realizando apenas atividades leves, como comer, ler ou cuidar de ferimentos.",
        "bullets": [
            "Ao terminar, você pode gastar Dados de Vida, um por vez. Para cada dado, role e some seu modificador de Constituição. Recupere o resultado em PV, com mínimo de 1 por dado, até seus PV máximos.",
            "Recupere também os recursos que sua ficha indicar. Rolar Iniciativa, sofrer dano ou conjurar uma magia que não seja um truque interrompe o descanso e impede seus benefícios."
        ],
        "reference": "Livro do Jogador 2024 · Glossário de Regras · Descanso curto"
    },
    {
        "title": "Descanso longo",
        "subtitle": "Pelo menos 8 horas",
        "icon": "sleepy",
        "description": "Comece com pelo menos 1 PV. Normalmente, são pelo menos 6 horas de sono e até 2 horas de atividades leves. Após concluir um descanso longo, espere 16 horas para iniciar outro.",
        "bullets": [
            "Ao terminar, recupere todos os PV perdidos e Dados de Vida gastos. Seu máximo de PV e seus valores de atributo reduzidos voltam ao normal.",
            "Remova um nível de Exaustão, respeitando requisitos da causa, e recupere recursos conforme sua ficha.",
            "Rolar Iniciativa, sofrer dano, conjurar uma magia que não seja um truque ou fazer uma hora de esforço físico interrompe o descanso. Se já descansou pelo menos uma hora, recebe os benefícios de um descanso curto.",
            "Você pode retomar logo após a interrupção. Acrescente uma hora ao tempo necessário para cada interrupção."
        ],
        "reference": "Livro do Jogador 2024 · Glossário de Regras · Descanso longo"
    },
    {
        "title": "Nocautear uma criatura",
        "icon": "back-pain",
        "subtitle": "Ataque corpo a corpo",
        "description": "Quando um ataque corpo a corpo seu reduziria uma criatura a 0 PV, você pode deixá-la com 1 PV. Ela fica Inconsciente e inicia um descanso curto.",
        "bullets": [
            "O nocaute termina se ela recuperar qualquer quantidade de PV.",
            "Outra criatura também pode usar uma ação para prestar primeiros socorros. Um teste bem-sucedido de Sabedoria (Medicina) CD 10 encerra o nocaute."
        ],
        "reference": "Livro do Jogador 2024 · Glossário · Nocauteando uma criatura"
    }
];
