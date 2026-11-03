data_environment_obscurance = [
    {
        "title": "Parcialmente obscurecido",
        "subtitle": "Visão prejudicada",
        "description": "Penumbra, névoa irregular ou folhagem moderada podem dificultar a visão.",
        "bullets": [
            "Faça com desvantagem testes de Sabedoria (Percepção) para enxergar algo nesse espaço."
        ],
        "icon": "bleeding-eye",
        "reference": "Livro do Jogador 2024 · Capítulo 1 e Glossário de Regras"
    },
    {
        "title": "Totalmente obscurecido",
        "subtitle": "Visão bloqueada",
        "description": "Escuridão, névoa opaca ou folhagem densa podem bloquear a visão.",
        "bullets": [
            "Ao tentar ver algo nesse espaço, você sofre os efeitos da condição Cego."
        ],
        "icon": "lightning-tear",
        "reference": "Livro do Jogador 2024 · Capítulo 1 e Glossário de Regras"
    }
];

data_environment_light = [
    {
        "title": "Luz plena",
        "subtitle": "Visão normal",
        "description": "A maioria das criaturas enxerga normalmente em luz plena.",
        "bullets": [
            "Uma tocha ou lanterna ilumina a área indicada na descrição do objeto."
        ],
        "icon": "star-pupil",
        "reference": "Livro do Jogador 2024 · Capítulo 1 e Glossário de Regras"
    },
    {
        "title": "Penumbra",
        "subtitle": "Sombras e contornos",
        "description": "A penumbra torna o espaço parcialmente obscurecido.",
        "bullets": [
            "É comum entre a região bem iluminada de uma fonte de luz e a escuridão ao redor."
        ],
        "icon": "semi-closed-eye",
        "reference": "Livro do Jogador 2024 · Capítulo 1 e Glossário de Regras"
    },
    {
        "title": "Escuridão",
        "subtitle": "Área totalmente obscurecida",
        "description": "Onde não há iluminação suficiente, o espaço fica totalmente obscurecido.",
        "bullets": [
            "Um sentido especial pode permitir que uma criatura enxergue ali, dentro dos limites desse sentido."
        ],
        "icon": "worried-eyes",
        "reference": "Livro do Jogador 2024 · Capítulo 1 e Glossário de Regras"
    }
];

data_environment_vision = [
    {
        "title": "Visão às Cegas",
        "subtitle": "Enxergue sem visão física",
        "description": "Dentro do alcance desse sentido, você enxerga o que não estiver atrás de cobertura total, mesmo na escuridão ou sob a condição Cego.",
        "bullets": [
            "Também enxerga criaturas Invisíveis nesse alcance."
        ],
        "icon": "one-eyed",
        "reference": "Livro do Jogador 2024 · Capítulo 1 e Glossário de Regras"
    },
    {
        "title": "Visão no Escuro",
        "subtitle": "Veja melhor com pouca luz",
        "description": "Dentro do alcance indicado, você vê na penumbra como se fosse luz plena e na escuridão como se fosse penumbra.",
        "bullets": [
            "Na escuridão, distingue apenas tons de cinza."
        ],
        "icon": "semi-closed-eye",
        "reference": "Livro do Jogador 2024 · Capítulo 1 e Glossário de Regras"
    },
    {
        "title": "Visão Verdadeira",
        "subtitle": "Perceba além de ilusões",
        "description": "Dentro do alcance indicado, você enxerga na escuridão normal e mágica e vê criaturas e objetos Invisíveis.",
        "bullets": [
            "Ilusões visuais parecem transparentes e você tem sucesso automático nas salvaguardas contra elas.",
            "Você percebe a forma verdadeira de criaturas e objetos transformados por magia e enxerga no Plano Etéreo."
        ],
        "icon": "eye-shield",
        "reference": "Livro do Jogador 2024 · Capítulo 1 e Glossário de Regras"
    },
    {
        "title": "Sentido Sísmico",
        "subtitle": "Localize movimentos por vibração",
        "description": "Dentro do alcance desse sentido, você localiza criaturas e objetos em movimento em contato com a mesma superfície ou líquido que você.",
        "bullets": [
            "O sentido não conta como visão e não detecta alvos no ar."
        ],
        "icon": "one-eyed",
        "reference": "Livro do Jogador 2024 · Capítulo 1 e Glossário de Regras"
    }
];

data_environment_cover = [
    {
        "title": "Meia cobertura",
        "subtitle": "Mureta, mobília grande, criaturas",
        "description": "Se um obstáculo protege pelo menos metade do corpo do alvo, ele recebe esse bônus contra ameaças do outro lado.",
        "bullets": [
            "Outra criatura também pode fornecer cobertura.",
            "Se várias coberturas se aplicarem, use apenas o maior grau."
        ],
        "icon": "broken-shield",
        "reference": "Livro do Jogador 2024 · Capítulo 1 e Glossário de Regras"
    },
    {
        "title": "Três-quartos de cobertura",
        "subtitle": "Grade levadiça, seteira",
        "description": "Um alvo protegido em pelo menos três quartos por um obstáculo, como uma seteira, recebe esse bônus contra ameaças do outro lado.",
        "bullets": [
            "Use apenas a melhor cobertura disponível."
        ],
        "icon": "cracked-shield",
        "reference": "Livro do Jogador 2024 · Capítulo 1 e Glossário de Regras"
    },
    {
        "title": "Cobertura total",
        "subtitle": "Completamente escondido",
        "description": "Um obstáculo que cobre o alvo por inteiro impede que ele seja escolhido diretamente para ataques ou magias através do obstáculo.",
        "bullets": [
            "Para efeitos em área, considere o ponto de origem e o caminho do efeito."
        ],
        "icon": "shield",
        "reference": "Livro do Jogador 2024 · Capítulo 1 e Glossário de Regras"
    }
];

data_environment_other = [
    {
        "title": "Queda",
        "subtitle": "1d6 de dano a cada 3 m",
        "description": "Ao fim de uma queda, sofra 1d6 de dano contundente a cada 3 m, até 20d6.",
        "bullets": [
            "Você fica Caído ao atingir a superfície, a menos que evite o dano da queda.",
            "Ao cair em água ou outro líquido, pode usar uma reação para tentar entrar de cabeça ou com os pés primeiro.",
            "Com sucesso em Força (Atletismo) ou Destreza (Acrobacia) CD 15, reduza o dano pela metade."
        ],
        "icon": "falling",
        "reference": "Livro do Jogador 2024 · Capítulo 1 e Glossário de Regras"
    },
    {
        "title": "Asfixia",
        "subtitle": "Sem ar, acumule Exaustão",
        "description": "Você pode prender a respiração por 1 + seu modificador de Constituição em minutos, com mínimo de 30 segundos.",
        "bullets": [
            "Quando fica sem ar ou está sufocando, ganha um nível de Exaustão ao final de cada um dos seus turnos.",
            "Assim que voltar a respirar, remova todos os níveis de Exaustão causados por essa asfixia."
        ],
        "icon": "drowning",
        "reference": "Livro do Jogador 2024 · Capítulo 1 e Glossário de Regras"
    },
    {
        "title": "Combustão",
        "subtitle": "1d4 de dano ígneo por turno",
        "description": "Em chamas, uma criatura ou objeto sofre 1d4 de dano ígneo no início de cada um de seus turnos.",
        "bullets": [
            "Você pode usar uma ação para ficar Caído e rolar no chão para se apagar.",
            "Abafar ou submergir o fogo também o extingue."
        ],
        "icon": "wildfires",
        "reference": "Livro do Jogador 2024 · Capítulo 1 e Glossário de Regras"
    },
    {
        "title": "Desidratação",
        "subtitle": "Água insuficiente causa Exaustão",
        "description": "Se você beber menos água do que sua necessidade diária, que depende do tamanho, ganha um nível de Exaustão no fim do dia.",
        "bullets": [
            "Para poder remover a Exaustão dessa causa, primeiro beba toda a quantidade de água de que precisa em um dia."
        ],
        "icon": "waterskin",
        "reference": "Livro do Jogador 2024 · Capítulo 1 e Glossário de Regras"
    },
    {
        "title": "Desnutrição",
        "subtitle": "Pouca comida pode causar Exaustão",
        "description": "Se comer menos da metade da quantidade diária necessária, faça uma salvaguarda de Constituição CD 10 no fim do dia.",
        "bullets": [
            "Em uma falha, ganhe um nível de Exaustão.",
            "Depois de cinco dias sem comer, ganhe um nível automaticamente.",
            "A cada dia adicional sem comer, ganhe outro.",
            "Para poder remover a Exaustão dessa causa, primeiro coma a quantidade necessária para um dia."
        ],
        "icon": "stomach",
        "reference": "Livro do Jogador 2024 · Capítulo 1 e Glossário de Regras"
    }
];
