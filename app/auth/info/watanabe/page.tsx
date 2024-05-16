export default function Page() {
  return (
    <div className="text-white [&>p]:indent-4">
      <h1 className="text-center font-bold text-lg mb-4">O que é o fator de Watanabe?</h1>
      <p>Esse fator mede a tendência de um metal de base de sofrer fragilização do revenido. Esta fragilização é causada pela segregação de alguns elementos de liga específicos nos contornos de grão da austenita primária durante um período de trabalho prolongado, ou por uma baixa taxa de resfriamento do aço na faixa de temperaturas entre 350°C a 550°C.</p>
      <p>Para um fator J &lt; 160 o aço possui resistência a fragilização do revenido;</p>
      <p>Quanto maior o fator J mais propícia a fragilização do revenido e consequentemente menor a tenacidade do aço.</p>
    </div>
  )
}
