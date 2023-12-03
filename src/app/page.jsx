import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="m-4">
      <p>
        Intercambio de regalos de la familia Landero, el costo del regalo debe
        de ser de por lo menos $500.00 pesos, la persona a la que le regalaras
        la esogerá el sistema de manera aleatoria; el sorteo se llevará a cabo
        el día lunes 04 de diciembre, el cual te enviará un mensaje con la
        persona que te toco, así como los liks de sugerencias de compra.
      </p>
      <div className="flex flex-row justify-center items-center gap-4 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 my-4 text-center">
        <Link href="/subscribe">Acepto</Link>
      </div>
    </div>
  )
}
