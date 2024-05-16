export default function Page() {
  return (
    <div className="text-white [&>p]:indent-4">
      <h1 className="mt-4 text-center">O que é o fator de Bruscato?</h1>
      <p>De forma semelhante ao fator de Watanabe o fator de Bruscato mede a tendência de um metal de base e metal de solda de sofrer fragilização do revenido. O fator X de Bruscato, contudo, não leva em consideração outros elementos que não sejam impurezas nocivas. Dessa forma, o fator de Bruscato não considera o teor de Mn e Si.</p>
      <p>Para um fator X &lt; 15 ppm o aço possui resistência a fragilização do revenido;</p>
      <p>Quanto maior o fator X mais propícia a fragilização do revenido e consequentemente menor a tenacidade do aço.</p>
    </div>
  )
}
