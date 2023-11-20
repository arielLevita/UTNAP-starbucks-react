import Banner from "../Banner/Banner"


const ExperienciaPage = () => {

    const banners = [
        {
            title: 'In Store',
            bgColor: 'bg-white',
            textColor: '',
            image: 'https://i.postimg.cc/rmmFRGQZ/in-store.png',
            paragraph: 'En nuestras tiendas te esperan nuestros baristas capacitados para ofrecerte una bebida muy especial. El ambiente cálido y los detalles de nuestros productos elaborados artesanalmente hacen que la experiencia sea única e inigualable.',
            hasHashtag: false,
            hashtag: '',
            isFlipped: true,
            hasButton: false,
            buttonText: '',
            buttonBorder: ''
        },
        {
            title: 'Drive Thru',
            bgColor: 'bg-white',
            textColor: '',
            image: 'https://i.postimg.cc/PxRfWL7X/drive-thru.png',
            paragraph: 'Retirá tu bebida favorita y viví la Experiencia Starbucks sin bajarte del auto.',
            hasHashtag: false,
            hashtag: '',
            isFlipped: false,
            hasButton: false,
            buttonText: '',
            buttonBorder: ''
        },
        {
            title: 'Delivery',
            bgColor: 'bg-white',
            textColor: '',
            image: 'https://i.postimg.cc/mrTrBWMs/delivery.png',
            paragraph: 'Los clientes pueden pedir sus bebidas y productos favoritos donde sea que estén con operadores logísticos al servicio como Pedidos Ya.',
            hasHashtag: false,
            hashtag: '',
            isFlipped: false,
            hasButton: true,
            buttonText: 'Pedí Delivery',
            buttonBorder: 'border-black'
        }
    ]


    return (
        <div>
            <h1 className="text-white text-center text-[calc(1.2125rem+2.55vw)] font-bold bg-[#1e3933] p-12">Experiencia Starbucks</h1>
            <p className="text-center text-[calc(1.0875rem+1.05vw)] font-semibold max-w-[900px] my-16 mx-auto px-12">Para cada momento hay una forma de vivir la Experiencia Starbucks como vos quieras.</p>
            <div className="wrapper max-w-[1400px] mx-auto">
                <div>
                    {
                        banners.map((banner) => (
                            <Banner
                                key={banner.title}
                                title={banner.title}
                                bgColor={banner.bgColor}
                                textColor={banner.textColor}
                                image={banner.image}
                                paragraph={banner.paragraph}
                                hasHashtag={banner.hasHashtag}
                                hashtag={banner.hashtag}
                                isFlipped={banner.isFlipped}
                                hasButton={banner.hasButton}
                                buttonText={banner.buttonText}
                                buttonBorder={banner.buttonBorder}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ExperienciaPage