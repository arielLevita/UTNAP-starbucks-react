import MenuItem from "../../components/MenuItem/MenuItem"
import { useState, useEffect } from "react";


const Menu = () => {

    const [menu, setMenu] = useState([]);

    /* const menu = {
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
    } */

    useEffect(() => {
        const getMenu = async () => {
            try {
                const response = await fetch('/menu.json');
                const data = await response.json();
                setMenu(data);
            } catch (error) {
                console.error(error);
            }
        };
        getMenu();
    }, []);

    console.log(menu)

    return (
        <div>
            <div className="wrapper px-4">
                <div className="py-8">
                    <p className="font-medium">¡Disfrutalos!</p>
                    <h2 className="font-bold">Conoce nuestras bebidas y alimentos de temporada</h2>
                </div>
                <div className="py-4 border-y border-black font-medium">
                    <p>Bebidas</p>
                </div>
                <div className="flex flex-wrap mx-auto my-8">
                    {
                        menu.bebidas?.map((bebida) => (
                            <MenuItem key={bebida.title} title={bebida.title} img={bebida.img} />
                        ))
                    }
                </div>
                <div className="py-4 border-y border-black font-medium">
                    <p>Comidas</p>
                </div>
                <div className="flex flex-wrap mx-auto my-8">
                    {
                        menu.comidas?.map((comida) => (
                            <MenuItem key={comida.title} title={comida.title} img={comida.img} />
                        ))
                    }
                </div>
                <div className="py-4 border-y border-black font-medium">
                    <p>Bebidas</p>
                </div>
                <div className="flex flex-wrap mx-auto my-8">
                    {
                        menu.enCasa?.map((item) => (
                            <MenuItem key={item.title} title={item.title} img={item.img} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Menu