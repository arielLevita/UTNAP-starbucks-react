import MenuItem from "../../components/MenuItem/MenuItem"


const Menu = () => {

    const menu = {
        bebidas: [
            {
                title: 'Cafés calientes',
                img: 'https://i.postimg.cc/Y0tx9FCS/cafes-calientes.png'
            },
            {
                title: 'Cafés helados',
                img: 'https://i.postimg.cc/901YqfDY/cafes-helados.png'
            },
            {
                title: 'Frappuccino',
                img: 'https://i.postimg.cc/tCC5GFcS/frappuccino.png'
            },
            {
                title: 'Té caliente',
                img: 'https://i.postimg.cc/cHSR93Yc/te-caliente.png'
            },
            {
                title: 'Té helado',
                img: 'https://i.postimg.cc/LX3zrs3F/te-helado.png'
            },
            {
                title: 'Heladas',
                img: 'https://i.postimg.cc/Kvq5GRSZ/heladas.png'
            },
            {
                title: 'Calientes',
                img: 'https://i.postimg.cc/dQ9Bf55Z/calientes.png'
            },
        ],
        comidas: [
            {
                title: 'Bakery',
                img: 'https://i.postimg.cc/j50XpmVP/bakery.png'
            },
            {
                title: 'Sándwichs & preparados',
                img: 'https://i.postimg.cc/4xYQmssp/sanwichs-y-preparados.png'
            },
            {
                title: 'Snacks',
                img: 'https://i.postimg.cc/RZ2QtyZy/snacks.png'
            },
        ],
        enCasa: [
            {
                title: 'Café en granos',
                img: 'https://i.postimg.cc/RF7R4d98/cafe-en-granos.png'
            },
            {
                title: 'Té',
                img: 'https://i.postimg.cc/q7ncxwtR/te.png'
            },
        ]
    }


    return (
        <div>
        {/* <div className="inline-block rounded-full hover:ring-4 hover:ring-inset ring-blue-900 m-8 p-8">
            Menú de cafés
        </div> */}

            <div className="flex flex-wrap mx-auto">
                {
                    menu.bebidas.map((bebida) => (
                        <MenuItem key={bebida.title} title={bebida.title} img={bebida.img} />
                    ))
                }
            </div>

        </div>
    )
}

export default Menu