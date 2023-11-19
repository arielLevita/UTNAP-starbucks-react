/* eslint-disable react/prop-types */


const Banner = ({title, bgColor, textColor, image, paragraph, hasHashtag, hashtag, isFlipped, hasButton, buttonText}) => {
    return (
        <div className="mb-4">
            <div className={`flex flex-col justify-center items-center bg-${bgColor} ${isFlipped ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                <div className="w-full md:w-1/2 p-0">
                    <img className="w-full h-auto" src={image} alt={title} />
                </div>
                <div className="flex items-center justify-center w-full md:w-1/2 p-0">
                    <div className={`text-${textColor} text-center w-full p-12`}>
                        <h2 className="text-5xl font-bold my-4">{title}</h2>
                        <p className="text-lg my-4">{paragraph}</p>
                        {
                            hasHashtag
                            ? <p className="text-lg font-bold my-4">{hashtag}</p>
                            : null
                        }
                        {
                            hasButton
                            ?   <a className="text-lg font-semibold my-4" href="#">
                                    <button className={`bg-transparent text-${textColor} border border-${textColor} rounded-full px-4`}>{buttonText}</button>
                                </a>
                            : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner