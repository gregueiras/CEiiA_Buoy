const allQuestions = [
    new Question("As pessoas sempre conviveram com a ideia de que o mundo era constituído por cinco oceanos. No entanto, conforme as classificações mais recentes, existem apenas três oceanos no mundo. Quais são?", ["Pacífico, Atlântico e Índico", "Glacial Ártico, Índico e Pacífico","Glacial Antártico, Atlântico e Índico", "Glacial Ártico, Glacial Antártico e Atlântico"], "Pacífico, Atlântico e Índico"),

    new Question("Os oceanos ocupam cerca de 70,7% da superfície terrestre, e o _________________, com extensão de aproximadamente 146,5 milhões de quilômetros quadrados, é o maior de todos eles. Ele também apresenta a maior profundidade média: 4.049 metros, sendo que o ponto mais profundo, na fossa das Marianas, atinge 11.022 metros.", ["Glacial Ártico", "Índico","Pacífico", "Atlântico"], "Pacífico"),

    new Question("Qual a opçãos das seguintes refere-se ao oceano Pacífico:", ["Grande presença de terremotos e tsunamis", "Os maiores rios do mundo desaguam nas suas águas", "Apresenta a maior profundidade média dos oceanos", "É o mais pequeno dos oceanos"], "Apresenta a maior profundidade média dos oceanos"),

    new Question("Qual a opçãos das seguintes refere-se ao oceano Índico:",["Grande presença de terremotos e tsunamis", "Os maiores rios do mundo desaguam nas suas águas", "Apresenta a maior profundidade média dos oceanos", "Origina os fenómenos “El Niño” e “La Niña”"], "Grande presença de terremotos e tsunamis"),
   
    new Question("Qual a opçãos das seguintes refere-se ao oceano Atlântico :",["Grande presença de terremotos e tsunamis", "Os maiores rios do mundo desaguam nas suas águas", "Apresenta a maior profundidade média dos oceanos", "Origina os fenómenos “El Niño” e “La Niña”"], "Os maiores rios do mundo desaguam nas suas águas"),
    
    new Question("A água é o elemento mais presente na superfície da Terra. Qual a percentagem de água no chamado Planeta Azul?", ["A água cobre cerca de 54% da superfície da Terra", "A água cobre cerca de 63% da superfície da Terra", "A água cobre cerca de 91% da superfície da Terra", "A água cobre cerca de 71% da superfície da Terra"], "A água cobre cerca de 71% da superfície da Terra"),

    new Question("2. 97% da água do planeta é composta por água dos mares e oceanos, extremamente salgadas e impróprias para consumo. Qual a alternativa mais sustentável para garantir água potável no Planeta?", ["Transportar águas das geleiras. Uma vez que 71% da água doce está em forma de gelo nas calotas polares", "Não é necessário preocupar, a àgua regenera-se", "Dessalinizar toda água do mar", "Adotar formas alternativas de irrigação e reuso na agricultura"], "Adotar formas alternativas de irrigação e reuso na agricultura"),

    new Question("Qual o outro nome para a chuva, que é o retorno da água à Terra?", ["Precipitação", "Condensação", "Transpiração", "Granizo"], "Precipitação"),

    new Question("O que mantém o movimento da água dos rios na direção dos mares e oceanos?", ["Força da gravidade", "Lei da impenetrabilidade dos corpos", "Condensação da água", "Força das chuvas"], "Força da gravidade"),

    new Question("Que atividade mais consome água segundo a Organização das Nações Unidas para a Alimentação e Agricultura (FAO)?", ["A atividade agropecuária, responsável por 70% do uso da água", "O consumo residencial, que responde por 41% do uso de água na Terra", "O setor pesqueiro que gasta 26% da água do planeta", "As atividades industriais, responsáveis por 55%"], "A atividade agropecuária, responsável por 70% do uso da água"),

    new Question("A Vaquita (Phocoena sinus), uma espécie da mesma ordem das baleias e golfinhos, encontra-se em vias de extinção. Porquê?", ["Poluição", "Pesca ilegal", "Redes de pesca em que ficam presas", "Aquecimento das águas"], "Pesca ilegal"),

    new Question("Qual a principal razão pela qual o Cavalo-marinho se encontra em perigo de extinção?", ["Poluição", "Pesca excessiva", "Redes de pesca em que ficam presos", "Aquecimento das águas"], "Pesca excessiva"),

    new Question("O tubarão branco, mais temido predador do meio aquático, encontra-se em vias de extinção, principalmente porque:", ["Poluição", "Pesca desportiva", "Escassez de alimento", "Aquecimento das águas"], "Pesca desportiva"),

    new Question("Qual é a maior estrutura viva na Terra?", ["Apo Reef", "Recife Amazonas", "Recife Mediterrâneo", "Grande Barreira de Corais da Austrália"], "Grande Barreira de Corais da Austrália"),

    new Question("O furacão Katrina teve origem em que Oceano?", ["Atlântico", "Índico", "Pacifico", "Glaciar Ártico"], "Atlântico"),

    new Question("O tubarão-frade, segundo maior peixe conhecido, encontra-se em vias de extinção. Porquê? ", ["Pesca desportiva", "Aquecimento das águas", "Escassez de alimento", "Poluição"], "Pesca desportiva"),

    new Question("Qual o maior assassino das marés costeiras da Austrália?", ["Caravela-portuguesa", "Tubarão-branco", "Baleia-azul", "Polvo-de-anéis-azuis"], "Polvo-de-anéis-azuis"),

    new Question("A presença de plástico no mar é razão de alarme?", ["Sim, em 2050 é estimado que existe mais plástico do que peixes no mar", "Não, é um problema secundário facilmente ultrapassado ", "Não, não afeta a vida marinha", "Sim, porque afunda e não sabemos exatamente a quantidade"], "Sim, em 2050 é estimado que existe mais plástico do que peixes no mar"),

    new Question("Onde/Por quem é produzida a maior quantidade de oxigénio na Terra?", ["Peixes", "Algas marinhas", "Trevos", "Árvores"], "Algas marinhas"),

    new Question("Porque se chama tubarão-martelo?", ["Um dos seus progenitores era carpinteiro", "Tradução dos hebreus", "Graças ao formato das projeções existentes em ambos os lados da cabeça", "Transporta consigo sempre um martelo"], "Graças ao formato das projeções existentes em ambos os lados da cabeça"),

    new Question("Porque razão existe um tubarão chamado tubarão-baleia?", ["Por ser comparado em termos de tamanho com uma baleia e se alimentar de plâncton", "Por ser comparado em termos de tamanho com uma baleia e se alimentar de todos os peixes de tamanho inferior", "Ambas as opções", "Nenhuma das opções"], "Por ser comparado em termos de tamanho com uma baleia e se alimentar de plâncton"),

    new Question("A orca é uma espécie de baleia-assassina?", ["Não, a orca é da família dos golfinhos e não das baleias", "Sim, a mais pequena das baleias-assassinas", "Sim", "Não, esta baleia apenas se alimenta de plâncton e peixes de menor porte"], "Não, a orca é da família dos golfinhos e não das baleias"),

    new Question("Porque razão existe um tubarão chamado tubarão-baleia?", ["Por ser comparado em termos de tamanho com uma baleia e se alimentar de todos os peixes de tamanho inferior", "Por se se alimentar de todos os peixes de tamanho inferior", "Por se alimentar de plâncton", "Por ser comparado em termos de tamanho com uma baleia e se alimentar de plâncton"], "Por ser comparado em termos de tamanho com uma baleia e se alimentar de plâncton"),

    new Question("Qual o ponto mais fundo, conhecido, do oceano?", ["24km", "16km", "11km", "7km"], "11km"),

    new Question("Como se chama a área mais profunda, conhecida, do oceano?", ["Fossa das Marianas", "Fossa intercontinental", "Lago Baikal", "Fossa Sub-Glacial de Bentley"], "Fossa das Marianas"),
    
    new Question("Onde foi realizado o mergulho com oxigénio, mais profundo?", ["Mar vermelho, Egito", "Fossa do Mediterrâneo", "Mponeng, África do Sul", "Thrihnukagigur, Islândia"], "Mar vermelho, Egito"),

    new Question("Onde fica localizado o lago mais profundo do planeta?", ["Lago Baikal, Sudoeste Siberiano", "Lago de Montreux, Suiça", "Lago Moraine, Alberta", "Lago de Garda, Itália"], "Lago Baikal, Sudoeste Siberiano"),

    new Question("O peixe remo, alegado mito, com comprimento aproximado de 11m e comparado a um monstro do mar, existe mesmo?", ["Não, apenas se trata de uma lenda", "Sim,  foi encontrado a ser vendido em mercados negros para bilionários", "Não, existe um com características parecidas e é facilmente confundido", "Sim, não se sabe ao certo de quantos ainda existem mas em 2010 foram captadas imagens inéditas do peixe-remo a navegar no fundo do oceano"], "Sim, não se sabe ao certo de quantos ainda existem mas em 2010 foram captadas imagens inéditas do peixe-remo a navegar no fundo do oceano"),

    new Question("Existe fotossíntese sem luz solar, no fundo dos oceanos?", ["Sim, algumas bactérias perto de fontes hidrotermais usam o brilho vermelho escuro dos respiradouros para fotossintetizar e produzir alimentos para si", "Não, não há seres vivos nesse espaço", "Não, a luz solar é indispensável à fotossíntese", "Sim,  existem algas que se estendem por quilómetros e conseguem levar a luz solar necessária até ao fundo do oceano"], "Sim, algumas bactérias perto de fontes hidrotermais usam o brilho vermelho escuro dos respiradouros para fotossintetizar e produzir alimentos para si"),

    new Question("Existe algum cefalópode que ejete tinta que brilhe no oceano profundo?", ["Sim, a lula-vampiro-do-inferno é uma criatura bizarra que produz luz através de tentáculos brilhantes e manchas nas suas laterais. Se perturbada, pode ejetar tinta que brilha.", "Não, apenas tinta escura é ejetada por cefalópodes", "Sim, cada peixe tem nos genes uma combinação para a sua cor", "Não a tinta não é ejetada, é um membro do cefalópede"], "Sim, a lula-vampiro-do-inferno é uma criatura bizarra que produz sua própria luz através de tentáculos brilhantes e manchas nas suas laterais. Se perturbada, pode ejetar tinta que brilha"),

    new Question("Para que utiliza o peixe-pescador a protuberância da sua cabeça, com uma luz?", ["Para atrair presas", "Para comunicar e localizar outros membros da sua espécie", "Não utilizado para nada especificamente", "Para se guiar no escuro do oceano profundo"], "Para atrair presas"),

    new Question("Existe um tubarão cobra?", ["Sim, chamado por vezes fóssil vivo devido às suas características primitivas", "Não, tal animal não existe", "Não, mas já existiu. Conseguimos encontrar fósseis dele", "Sim, é muito comum"], "Sim, chamado por vezes fóssil vivo devido às suas características primitivas"),

    new Question("Existe algum peixe conhecido como peixe-fantasma?", ["Sim, a Macropinna Microstoma", "Sim, o Macropinna Mitossoma", "Sim, é um peixe que não se consegue ver e assusta os restantes navegantes do oceano", "Não, apenas se trata de um mito"], "Sim, a Macropinna Microstoma"),

    new Question("Onde se situa a maior cadeia de montanhas do mundo?", ["Alpes", "Cordilheira dos Andes, na América do Sul", "No oceano atlântico, a dorsal meso atlântica", "Montes Apalaches, na América do Norte"], "No oceano atlântico, a dorsal meso atlântica"),

    new Question("O lixo no Oceano Pacifico deve ser considerado um problema grave?", ["Sim, polui visualmente", "Sim, foi encontrado um amontoado de lixo que supera o território Francês", "Não, no oceano Pacifico o lixo rapidamente dispersa e circula para as costas", "Não, eventualmente irá decompor-se"], "Sim, foi encontrado um amontoado de lixo que supera o território Francês"),

    new Question("Qual a percentagem estimada de espécies marinhas, conhecidas pela ciência? (são conhecidas mais de 200k)", ["Cerca de 25 %", "Cerca de 50 %", "Cerca de 70 %", "Cerca de 10 %"], "Cerca de 10 %"), 

    new Question("Qual o volume liquido aproximado dos oceanos?", ["Cerca de um quintilião de litros", "Cerca de 13 biliões de litros", "Difícil de contabilizar", "Cerca 1,35 sextilião de litros"], "Cerca 1,35 sextilião de litros"),

    new Question("Quanto pesa um litro de água do mar?", ["Todas as opções estão erradas", "Mais cerca de 28 gramas que a água normal devido ao sal", "A água do mar não se pesa em litros", "O mesmo que a água normal"], "Mais cerca de 28 gramas que a água normal devido ao sal"),

    new Question("Todos os mares são azuis?", ["Sim, claro", "Sim, quando associados a lagoas", "Não, o mar negro, apresenta uma cor escura devido ao alto teor em sulfeto de hidrogénio", "Não, existe o Mar Vermelho"], "Não, o mar negro, apresenta uma cor escura devido ao alto teor em sulfeto de hidrogénio"),

    new Question("Porque se chama Mar Vermelho?", ["Devido a algas vermelhas que por vezes florescem à sua superfície", "Devido à cor da água ser vermelha", "Porque os nativos decidiram chamar assim", "Devido ao derrame de lixo tóxico no mar"], "Devido a algas vermelhas que por vezes florescem à sua superfície"),

    new Question("Qual o mar mais salgado do planeta?", ["Mar Báltico", "Mar Vermelho", "São todos igualmente salgados", "Mar Morto"], "Mar Morto"),

    new Question("Qual a profundidade média dos oceanos?", ["4km", "1km", "500m", "2,5km"], "4km"),

    new Question("Que percentagem, aproximadamente, dos oceanos profundo, continua inexplorada?", ["95%", "80%", "50%", "10%"], "95%"),

    new Question("Quais destes países são banhados pelo Oceano Pacífico?", ["Estados Unidos, Rússia, México e Equador", "Rússia, Brasil, Equador Canada", "Rússia, México ,Equador, Brasil", "Estados Unidos, Rússia, Chile, Brasil"], "Estados Unidos, Rússia, México e Equador"),

    new Question("Que países são banhados pelos Oceanos Atlântico e Pacífico ao mesmo tempo?", ["Brasil, Estados Unidos e Canadá", "Colômbia, Estados Unidos e Canadá", "México, Guiana e Brasil", "Estados Unidos, México e Venezuela"], "Colômbia, Estados Unidos e Canadá"),

    new Question("A ilha das Galápagos é banhada por qual oceano?", ["Atlântico", "Glaciar Ártico", "Indíco", "Pacifico"], "Atlântico"),

    new Question("As ilhas Maldivas estão localizadas em que oceano?", ["Índico", "Pacifico", "Atlântico", "Glaciar Ártico"], "Índico"),

    new Question("O Mar do Norte esta localizado em que continente?", ["Europeu", "Africano", "Asiático", "Americano"], "Europeu"),

    new Question("Que mar se localiza a noroeste da Rússia e a sul da Escandinávia, além de se situar a norte da Polónia e a nordeste da Europa?", ["Mar Báltico", "Mar de Bering", "Mar Vermelho", "Mar Mediterrâneo"], "Mar Báltico"),

    new Question("O canal do Panamá é uma ligação artificial que liga que oceanos?", ["Oceano Atlântico", "Oceano Pacífico e Atlântico", "Oceano Indico e Atlântico", "Oceano Indico e Pacifico"], "Oceano Pacífico e Atlântico"),

    new Question("Qual é o maior mar da superfície terrestre?", ["Mar Vermelho", "Mar Morto", "Mar da China", "Mar Mediterrâneo"], "Mar da China"),

    new Question("Qual é o mar situado no Pacífico Norte, entre o Alasca e Kamchatka (na Rússia), próximo do Círculo Polar Ártico?", ["Mar do Japão", "Mar de Hudson", "Mar de Coral", "Mar de Bering"], "Mar de Bering"),

];

