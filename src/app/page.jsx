import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="m-4">
      <p>
        Bienvenidos familia, por medio de esta aplicación se realizará el sorteo
        para el intercambio navideño. Por favor presta atención a las siguientes
        instrucciones:
        <br />
        1. El costo del regalos es de $300.00
        <br />
        2. Previamente elige 3 opciones de regalo para compra en tiendas
        virtuales, por ejemplo, amazon, mercado libre, etc.
        <br />
        3. El sorteo se realizará el próximo miércoles 06 de diciembre, por
        medio de WhatsApp recibirás el nombre de la persona a la que tendrás que
        regalarle.
        <br />
        4. Da clic en el botón acepto para continuar con el registro.
      </p>

      <Link href="/subscribe">
        <button className="text-white bg-green-700 hover:bg-green-800 focus:outline-none font-medium rounded-full text-sm w-full px-5 py-2.5 my-4 text-center shadow-lg shadow-gray-600">
          Acepto
        </button>
      </Link>
    </div>
  )
}
