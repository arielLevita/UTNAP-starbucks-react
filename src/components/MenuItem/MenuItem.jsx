/* eslint-disable react/prop-types */
const MenuItem = ({ title, img }) => {
    return (

        <div className="w-1/2 md:w-1/3 h-52 mb-8">
            <div className="flex justify-center items-center h-40 aspect-square rounded-full border-[12px] border-sbdarkgreen bg-sbdarkgreen hover:border-sblightblue mx-auto">
                <img className="h-32" src={img} alt="" />
            </div>
            <p className="text-center font-semibold mt-4">{title}</p>
        </div>
    )
}

export default MenuItem