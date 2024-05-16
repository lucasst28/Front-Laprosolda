export default function Page() {
  return (
    <div className="text-white">
      <h1 className="font-bold text-3xl text-center">Carbono Equivalente</h1>
      <div className="mt-10 [&>_p]:indent-4">
        <p>O carbono equivalente é uma excelente ferramenta utilizada para prever algumas  propriedades importantes dos aços, sendo um indicador essencial da temperabilidade, soldabilidade e da fragilização induzida pelo hidrogênio para estes materiais.</p>
        <p>CEIIW é a equação mais utilizada para prever a soldabilidade e o comportamento à trinca a frio dos aços C e C-Mn e geralmente é utilizada para teores de %C &gt; 0.12</p>
        <p>O Pcm é mais adequado para os aços de baixo carbono e de baixa liga com %C &lt; 0.12;</p>
        <p>O CEN é mais adequado para aços com teores de carbono entre 0,01 a 0,30% e é equivalente ao CEIIW quando o teor de carbono aumenta, e mais próximo do Pcm quando o carbono diminui;</p>
        <p>Para os Aços-C, quando o CEiiw é &lt; 0.35 tem-se uma excelente soldabilidade, e geralmente o pré-aquecimento não é recomendado;</p>
        <p>Para Aços-C, quando o 0.36 &lt; CEiiw &lt; 0.40 tem-se uma média soldabilidade, e geralmente o pré-aquecimento é recomendado;</p>
        <p>Para Aços-C, quando o 0.41 &lt; CEiiw &lt; 0.45 tem-se uma boa soldabilidade, e geralmente o pré-aquecimento é recomendado;</p>
        <p>Para Aços-C, quando o 0.46 &lt; CEiiw &lt; 0.51 tem-se uma má soldabilidade, e geralmente o pré-aquecimento é recomendado;</p>
        <p>Para Aços-C, quando o CEiiw é &gt; 0.51 tem-se uma péssima soldabilidade,  e geralmente o pré-aquecimento é recomendado;</p>
        < p > Para os Aços - C, baixos CEiiw geram melhor tenacidade e menor dureza na ZTA.</p >
      </div>
    </div>
  )
}
