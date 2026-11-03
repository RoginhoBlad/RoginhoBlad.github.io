data_roll_types = [
    {
        "title": "Teste de atributo",
        "subtitle": "Resolva uma tentativa incerta",
        "description": "Quando o Mestre pedir um teste, role 1d20 e some o modificador do atributo indicado.",
        "bullets": [
            "Se uma proficiência relevante se aplicar, some o bônus de proficiência.",
            "Um total igual ou superior à CD é um sucesso."
        ],
        "icon": "stairs-goal",
        "reference": "Livro do Jogador 2024 · Capítulo 1 e Glossário de Regras"
    },
    {
        "title": "Salvaguarda",
        "subtitle": "Resista a uma ameaça",
        "description": "O efeito indica o atributo, a CD e as consequências.",
        "bullets": [
            "Role 1d20, some o modificador do atributo e, se tiver proficiência nessa salvaguarda, o bônus de proficiência.",
            "Você pode escolher falhar voluntariamente sem rolar."
        ],
        "icon": "shield-reflect",
        "reference": "Livro do Jogador 2024 · Capítulo 1 e Glossário de Regras"
    },
    {
        "title": "Jogada de ataque",
        "subtitle": "Compare o resultado com a CA",
        "description": "Role 1d20 e some os modificadores aplicáveis.",
        "bullets": [
            "Um total igual ou superior à Classe de Armadura do alvo acerta.",
            "Use o atributo apropriado à arma, magia ou ataque.",
            "No dado, um 1 sempre erra e um 20 sempre acerta e é crítico.",
            "Em um crítico, jogue duas vezes os dados de dano do ataque e acrescente os modificadores uma só vez."
        ],
        "icon": "sword-brandish",
        "reference": "Livro do Jogador 2024 · Capítulo 1 e Glossário de Regras"
    },
    {
        "title": "Percepção Passiva",
        "icon": "magnifying-glass",
        "subtitle": "Perceber sem uma busca ativa",
        "description": "O Mestre pode usar esse valor para decidir se você percebe algo sem fazer conscientemente um teste de Sabedoria (Percepção).",
        "bullets": [
            "Some 10 ao bônus completo de Sabedoria (Percepção) da sua ficha. Com vantagem nesse teste, acrescente 5. Com desvantagem, subtraia 5.",
            "Exemplo: com Percepção +4, seu valor passivo é 14. Com vantagem, sobe para 19. Com desvantagem, cai para 9.",
            "Se você procura ativamente uma criatura escondida, a ação Procurar usa um teste de Sabedoria (Percepção) contra a CD estabelecida pelo resultado de Furtividade dela."
        ],
        "reference": "Livro do Jogador 2024 · Glossário · Percepção Passiva, Procurar e Esconder"
    }
];

data_roll_mods = [
    {
        "title": "Vantagem e desvantagem",
        "subtitle": "Role dois d20",
        "description": "Com vantagem, use o maior resultado.",
        "bullets": [
            "Com desvantagem, use o menor.",
            "Fontes do mesmo tipo não acumulam dados.",
            "Se houver ao menos uma de cada tipo, elas se anulam e você rola um único d20."
        ],
        "icon": "sword-tie",
        "reference": "Livro do Jogador 2024 · Capítulo 1 e Glossário de Regras"
    },
    {
        "title": "Bônus de proficiência",
        "subtitle": "Some seu treinamento à jogada",
        "description": "Aplique o bônus quando uma regra usar uma proficiência que você possui, como numa perícia, ferramenta, arma ou salvaguarda.",
        "bullets": [
            "O bônus não se soma duas vezes à mesma jogada.",
            "Especialização pode dobrar esse bônus.",
            "Quando tanto a perícia quanto a ferramenta usadas em um teste forem suas proficiências, você também tem vantagem nesse teste."
        ],
        "icon": "master-of-arms",
        "reference": "Livro do Jogador 2024 · Capítulo 1 e Glossário de Regras"
    },
    {
        "title": "Resistência e vulnerabilidade",
        "subtitle": "Reduza ou dobre o dano",
        "description": "Resistência reduz à metade o dano do tipo indicado, arredondando para baixo.",
        "bullets": [
            "Vulnerabilidade dobra o dano desse tipo.",
            "Após outros ajustes, aplique primeiro resistência e depois vulnerabilidade.",
            "Múltiplas resistências ao mesmo dano não se acumulam, nem múltiplas vulnerabilidades.",
            "Imunidade a um tipo de dano impede esse dano."
        ],
        "icon": "achilles-heel",
        "reference": "Livro do Jogador 2024 · Capítulo 1 e Glossário de Regras"
    },
    {
        "title": "Inspiração Heroica",
        "subtitle": "Role um dado novamente",
        "description": "Imediatamente após rolar qualquer dado, você pode gastar sua Inspiração Heroica para rolá-lo novamente.",
        "bullets": [
            "Use o novo resultado.",
            "Só é possível guardar uma Inspiração Heroica por vez."
        ],
        "icon": "star-pupil",
        "reference": "Livro do Jogador 2024 · Capítulo 1 e Glossário de Regras"
    },
    {
        "title": "Iniciativa",
        "subtitle": "Determine a ordem dos turnos",
        "description": "No início do combate, cada participante faz um teste de Destreza.",
        "bullets": [
            "Os turnos seguem do maior para o menor resultado.",
            "Se for pego de surpresa pelo início do combate, você tem desvantagem na Iniciativa.",
            "Estar Invisível ao rolar concede vantagem.",
            "Estar Incapacitado ao rolar impõe desvantagem."
        ],
        "icon": "sprint",
        "reference": "Livro do Jogador 2024 · Capítulo 1 e Glossário de Regras"
    }
];
