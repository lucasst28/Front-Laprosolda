export default function Page() {
  return (
    <div className="text-white ">
      <h1 className="text-center text-3xl mb-10 font-bold">Diagrama de DeLong</h1>
      <div className="text-justify text-lg [&_.tab]:pl-4">
        <p><span className="tab" />Para se determinar a microestrutura do metal de solda de uma junta soldada existem alguns diagramas empíricos, um deles é o diagrama de DeLong. Este diagrama baseia-se no cálculo do teor de Ni (Níquel) e Cr (Cromo) equivalente presente na microestrutura do material.</p>
        <p><span className="tab" />O diagrama de DeLong aprimorou o método de se determinar o teor de ferrita em comparação com o diagrama de Schaeffler, onde foi estabelecido o Número de Ferrita (FN) que varia entre 0-18.</p>
        <p><span className="tab" />Para os aços dupex, um FN menor que 5 tende a obter uma microestrutura majoritariamente austenítica e uma pequena fração de ferrita. Dessa forma, há uma redução das chances de apresentar trincas à quente uma vez que a ferrita dissolve os elementos responsáveis pela formação de trincas a quente (S e P) em sua matriz, deixando a austenita livre de tais impurezas.</p>
        <p><span className="tab" />Quanto maior o FN maior a fração de ferrita, que pode levar ao aumento da taxa de corrosão em determinados ambientes e a baixa tenacidade em temperaturas negativas.</p>

      </div>
    </div>
  )
}



