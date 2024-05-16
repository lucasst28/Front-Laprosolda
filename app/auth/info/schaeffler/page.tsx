export default function Page() {
  return (
    <div className="text-white">
      <h1 className="font-bold text-3xl text-center">Diagrama de Schaeffler</h1>
      <div className="mt-10 [&>_p]:indent-4 text-lg">
        <p>Para se determinar a microestrutura do metal de solda de uma junta soldada e assim predizer as possíveis propriedades e defeitos do mesmo, foram desenvolvidos ao longo das décadas alguns diagramas empíricos, sendo o mais utilizado denominado como diagrama de Schaeffler.</p>
        <p>Esse diagrama prever as microestruturas que serão obtidas no metal de solda em função da composição química do metal de base, metal de adição e diluição.</p>
        <p>O diagrama pode ser subdividido em quatro regiões de acordo com as possíveis problemáticas que cada fase ou grupo de fases possui:</p>
        <p>A região 1 (campo austenítico) é susceptível a trincas à quente (trincas de solidificação e liquefação) e corrosão intercristalina. A fim de mitigar tal problemática sugere-se:</p>
        <p>Baixos teores de C, S e P, e alto nível de Mn;</p>
        <p>Rápida velocidade de resfriamento entre 500 e 800°C;</p>
        <p>Metal de solda com microestrutura com 4 a 10% de ferrita;</p>
        <p>A região 2 (campo austenítico + ferrítico) é susceptível a formação de fases intermetálicas deletérias (ex: fase sigma). O ideal é ter rápida velocidade de resfriamento entre 500 e 900°C.</p>
        <p>A região 3 (campo ferrítico) é susceptível a fragilização pelo crescimento de grão. O ideal é evitar a permanência em elevadas temperaturas (acima de 1100°C.</p>
        <p>A região 4 (campo martensítico) é susceptível a trinca a frio (fragilização por H). O ideal é ter baixos teores de C e uma atmosfera/vareta com baixo teor de H. Além disso, o pré-aquecimento pode ser realizado.</p>
        <p>A parte central do diagrama não é afetada por nenhum dos problemas indicados, de forma que o diagrama é utilizado para se encontrar a composição do consumível que forneça sua solda cuja composição química caia nesta região.</p>
      </div>
    </div>
  )
}
