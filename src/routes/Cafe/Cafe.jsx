
const Cafe = () => {
    return (
        <div>
            <div className="bg-[#1e3933]">
                <div className="md:max-w-[680px] my-4 mx-auto">
                    <h1 className="text-white text-[calc(1.2125rem+2.55vw)] font-bold py-12 px-5">Nuestro Café</h1>
                </div>
            </div>
            <div className="md:max-w-[680px] px-5 mt-4 mb-12 mx-auto">
                <div className="container mx-auto">
                    <p className="opacity-80 mb-4">El olor al café, a unos granos recién tostados, es la mejor bienvenida que cada día planificamos para brindarles cuando abrimos las puertas de nuestras tiendas. Pero eso es sólo el comienzo.</p>
                    <img src="https://i.postimg.cc/9FXCGzhk/2022-03-Nuestro-Caf.png" alt="nuestro café" className="w-full h-auto my-8" />
                    <p className="opacity-80 mb-4">De cuerpo entero, un poco ahumado, con notas cítricas, con fuerte presencia de chocolate…el desafío que tenemos constantemente es que cada uno de nuestros clientes encuentre su mezcla favorita y a la vez, que explore nuestras amplias selecciones más singulares. </p>
                    <p className="opacity-80 mb-4">Para alcanzarlo nos abastecemos de los mejores granos de café arábicos siguiendo siempre estrictos principios éticos.</p>
                    <h2 className="font-bold mt-8 mb-4">Nuestro tostado Starbucks</h2>
                    <p className="opacity-80 mb-4">Cada café que ofrecemos exige un perfil de tostado único para crear una taza con el máximo aroma, acidez, cuerpo y sabor. Al trabajar en un delicado balance en calor, tiempo y arte, nuestros maestros en el tostado hacen resaltar estas únicas características de cada grano de café. </p>
                    <img src="https://i.postimg.cc/sf43Q7tS/2022-03-curva.jpg" alt="curva café" className="w-full h-auto my-8" />
                    <h3 className="font-bold mb-4">Rubio</h3>
                    <p className="opacity-80 mb-4">El café Starbucks tostado rubio es tostado en menos tiempo, tiene un cuerpo ligero y sabores suaves.</p>
                    <h3 className="font-bold mb-4">Medio</h3>
                    <p className="opacity-80 mb-4">El café con tostado medio es balanceado con sabores agradables y enriquecidos.</p>
                    <h3 className="font-bold mb-4">Oscuro</h3>
                    <p className="opacity-80 mb-4">Los cafés con tostado oscuro presentan un cuerpo completo y sabores fuertes y robustos. </p>
                    <h2 className="font-bold mt-8 mb-4">Descubre los métodos de preparación en Starbucks, ¿Cuál es el correcto para vos?</h2>
                    <p className="opacity-80 mb-4">Desde el cultivo responsable hasta el tostado, cada detalle en la elaboración de manera artesanal es fundamental para poder disfrutar de una taza de café Starbucks. Y además de la esencia de los granos, sabemos que la forma en la que se prepara el café tiene un efecto sorprendente en el sabor de cada taza y define su cuerpo. </p>
                    <img src="https://i.postimg.cc/YqXk8k2C/2022-03-Metodos.png" alt="nuestros métodos" className="w-full h-auto my-8" />
                    <p className="opacity-80 mb-4">Es por eso que nuestros magníficos baristas se enfocan en crear diariamente rituales escogiendo diferentes métodos de preparación para que sean nuestros clientes quienes se sorprenden. Así, de la mano de las explicaciones de nuestros expertos, no sólo cultivarán la curiosidad sino que podrán seleccionar el mejor método para su experiencia Starbucks.</p>
                    <button className="bg-transparent font-medium border border-black rounded-full px-4">Conocé nuestro métodos</button>
                </div>
            </div>
        </div>
    )
}

export default Cafe