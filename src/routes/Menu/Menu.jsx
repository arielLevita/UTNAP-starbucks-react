import MenuItem from "../../components/MenuItem/MenuItem"
import { useState, useEffect } from "react";

const Menu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const getMenu = async () => {
            try {
                const response = await fetch('../../../menu.json');
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