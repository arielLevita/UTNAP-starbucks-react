/* Ruta para errores 404. Maneja las rutas que no poseen un componente de referencia */
const HandleNotFound = () => {
    return (
        <div className="flex justify-center items-center w-screen py-24">
            <div className="text-center">
                <img className="w-48 mx-auto mb-4" src="https://i.postimg.cc/ZqSS3RhT/mr-coffee.png" alt="error 404 page not found" />
                <h2 className="font-bold text-[calc(1.2125rem+2.55vw)]">¡Ooops!</h2>
                <p className="text-[calc(1.025rem+.3vw)]">No podemos encontrar la página que buscaba.</p>
                <p className="text-[calc(1.025rem+.3vw)]">Puede intentar volver a escribir la URL.</p>
            </div>
        </div>
    )
}

export default HandleNotFound