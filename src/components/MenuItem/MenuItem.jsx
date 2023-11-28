/* eslint-disable react/prop-types */

/* Este componente toma la información respecto de los ítems en forma de props y genera los elementos para el menú de forma dinámica. */
const MenuItem = ({ title, img }) => {
    return (
        <div className="w-1/2 md:w-1/3 h-52 cursor-pointer group mb-8">
            <div className="flex justify-center items-center h-40 aspect-square rounded-full border-[12px] border-sbdarkgreen bg-sbdarkgreen group-hover:border-sblightblue mx-auto">
                <img className="h-32" src={img} alt="" />
            </div>
            <p className="text-center font-semibold mt-4">{title}</p>
        </div>
    )
}

export default MenuItem