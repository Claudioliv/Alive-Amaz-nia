// Tipagem de fato curiosidade
export interface Fact {
    id: number;
    value: string;
    label: string;
    image?: string;
}

export const facts: Fact[] = [
    { id: 1, value: "5,5 milhões", label: "de km² de floresta no Brasil"},
    { id: 2, value: "9", label: "países compartilham o bioma amazônico" },
    { id: 3, value: "10%", label: "de toda biodiversidade conhecida do planeta"},
    { id: 4, value: "2.500", label: "espécies de árvores catalogadas"},
];

// Tipagem de um animal em destaque
export interface Animal {
    id:  number;
    name: string;
    scientificName: string;
    description: string;
    curiosity: string;
    image: string;
}

// História sobre amazônia
export interface HistoryEra {
  id: number;
  year: string;
  title: string;
  description: string;
  image: string;
}

// Rios amazônas
export interface River {
  id: number;
  name: string;
  stat: string;
  description: string;
  image: string
}



export const animals: Animal[] = [
    {
        id: 1,
    name: "Onça-pintada",
    scientificName: "Panthera onca",
    description:
      "O maior felino das Américas e o predador de topo da floresta, essencial pra manter o equilíbrio de todo o ecossistema.",
    curiosity:
      "Suas manchas (rosetas) funcionam como impressão digital — nenhum indivíduo tem o mesmo padrão.",
    image: "https://images.pexels.com/photos/36678417/pexels-photo-36678417.jpeg",
  },
  {
    id: 2,
    name: "Boto-cor-de-rosa",
    scientificName: "Inia geoffrensis",
    description:
      "O maior golfinho de água doce do mundo, vive exclusivamente nos rios da bacia amazônica.",
    curiosity:
      "Sua coloração rosada pode variar conforme a idade e a temperatura da água.",
    image: "https://blog.ambiental.tur.br/wp-content/smush-webp/2020/01/ambiental_20_01_16_post01de04nov_00.jpg.webp",
  },
  {
    id: 3,
    name: "Arara-azul",
    scientificName: "Anodorhynchus hyacinthinus",
    description:
      "A maior espécie de arara do mundo, símbolo de força e liberdade da fauna amazônica.",
    curiosity:
      "Até a década de 1980, mais de 10 mil araras-azuis foram retiradas ilegalmente da natureza.",
    image: "https://images.pexels.com/photos/12590274/pexels-photo-12590274.png",
  },
  {
    id: 4,
    name: "Harpia",
    scientificName: "Harpia harpyja",
    description:
      "A maior ave de rapina das Américas, com garras comparáveis às de um urso.",
    curiosity:
      "Sua envergadura ultrapassa 2 metros, e consegue caçar presas do tamanho de um bicho-preguiça.",
    image: "https://images.pexels.com/photos/29434491/pexels-photo-29434491.png",
   },
];

// Curiosidades

export const curiosities: Fact[] = [
    {
        id: 1,
        value: "500 a 1.500",
        label: "é a descarga elétrica do peixe-elétrico amazônico (Poraquê)",
        image: "https://images.pexels.com/photos/753270/pexels-photo-753270.jpeg"
    },
    {
        id: 2,
        value: "Ùnico gênero",
        label: "a orça-pintada é o único felino do gênero Panthera nas Américas - mas não ruge, se comunica com um som chamado esturro",
        image: "https://images.pexels.com/photos/9224842/pexels-photo-9224842.jpeg"
    },
     {
    id: 3,
    value: "Mais de 6 metros",
    label:
      "é o tamanho da maior sucuri já registrada, considerada a maior cobra do mundo em massa corporal",
    image: "https://images.pexels.com/photos/27816151/pexels-photo-27816151.jpeg"
  },
  {
    id: 4,
    value: "30 milhões",
    label:
      "de pessoas vivem na região amazônica, incluindo mais de 220 grupos indígenas só no lado brasileiro",
    image: "https://images.pexels.com/photos/27010821/pexels-photo-27010821.jpeg"
  },
];

// História sobre amazônia
export const historyTimeline: HistoryEra[] = [
  {
    id: 1,
    year: "~11.000 a.C.",
    title: "Os primeiros habitantes",
    description:
      "Evidências arqueológicas mostram presença humana na Amazônia há pelo menos onze mil anos, muito antes de qualquer contato europeu.",
    image: "https://plataformacipo.org/wp-content/uploads/2022/06/2325165161_717880b5ef_b.jpg.webp"
  },
  {
    id: 2,
    year: "Século XVI",
    title: "A chegada dos europeus",
    description:
      "Ao atingir o rio Amazonas, os europeus encontraram uma floresta habitada por povos indígenas diversos, somando cerca de 5 milhões de pessoas na bacia amazônica.",
    image: "https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/desembarquecabralpereirasilvancorrigido.jpeg.webp?w=1600&h=900"
  },
  {
    id: 3,
    year: "1879–1912",
    title: "O ciclo da borracha",
    description:
      "A exploração do látex enriqueceu Manaus e Belém, mas custou um declínio populacional indígena severo, marcado por doenças e trabalho forçado.",
    image: "https://conhecimentocientifico.r7.com/wp-content/uploads/2018/11/o-ciclo-da-borracha-levou-prosperidade-para-o-norte-do-brasil.jpg.webp"
  },
  {
    id: 4,
    year: "Hoje",
    title: "Resistência e futuro",
    description:
      "Restam cerca de 430 mil indígenas na Amazônia — guardiões de um conhecimento ancestral essencial para o futuro da floresta.",
    image: "https://images.pexels.com/photos/27010822/pexels-photo-27010822.jpeg"
  },

]

// Rios amazônas
export const rivers: River[] = [
  {
    id: 1,
    name: "Rio Amazonas",
    stat: "6.992 km",
    description:
      "O maior rio do mundo em extensão e vazão, alimentado por cerca de 1.100 afluentes ao longo de seu curso.",
    image: "https://portalamazonia.com/wp-content/uploads/2021/10/b2ap3_medium_rio-amazonas.jpeg",
  },
  {
    id: 2,
    name: "Rio Negro",
    stat: "15% da água",
    description:
      "Um dos maiores afluentes do mundo, suas águas escuras e ácidas respondem por cerca de 15% de todo o volume do Amazonas.",
    image: "https://portalamazonia.com/wp-content/uploads/2022/02/b2ap3_medium_csm_rio_negro_divulgacao_govBR_af39e2be91.png",
  },
  {
    id: 3,
    name: "Rio Solimões",
    stat: "6 km sem se misturar",
    description:
      "Ao encontrar o Rio Negro perto de Manaus, suas águas barrentas correm lado a lado com as águas escuras, sem se misturar — o famoso Encontro das Águas.",
    image: "https://portalamazonia.com/wp-content/uploads/2022/05/large.jpeg",
  },
]
