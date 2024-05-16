export default function Page() {
  return (
    <div className="text-white [&>*]:indent-4">
      <p>A energia de soldagem (H) é definida como sendo a energia liberada pela fonte de calor por unidade de comprimento da solda, e é útil na avaliação dos efeitos metalúrgicos da operação de soldagem sobre o material soldado e na comparação de diferentes procedimentos e processos de soldagem.</p>
      <p>No que diz respeito aos processos de soldagem, o parâmetro mais apropriado para medição da energia do processo é conhecido como a energia líquida de soldagem (HL), também conhecida como Energia Imposta ou Aporte Térmico (Heat Input). Este parâmetro é definido pelo produto entre o rendimento do processo de soldagem e a energia de soldagem.</p>
      <p>Quanto maior o HL maior o tamanho do grão da ZTA e consequentemente menor a resistência mecânica dessa região;</p>
      <p>Quanto maior o HL maior a extensão da ZTA;</p>
      <p>Para os Aços-C quanto maior o HL menor será a velocidade de resfriamento levando a formação de ferrita e austenita, sendo esta última rica em carbono, que durante o resfriamento pode se transformar em martensita e bainita fragilizando a ZTA;</p>
      <p>Para os Aços-C quanto menor o HL maior será a velocidade de resfriamento levando a possível formação de martensita na ZTA fragilizando essa região;</p>
      <p>Quanto menor o HL menor será a Zona Parcialmente Fundida (ZPF) e consequentemente menor o risco de formação de trincas nessa região.</p>
      <p>Quanto maior o HL maior a distorção na junta soldada;</p>
      <p>Para os aços inoxidáveis quanto maior o HL maior a extensão da região propensa a sensitização  </p>
    </div>
  )
}
