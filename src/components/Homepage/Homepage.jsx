import Banner from "../Banner/Banner"


const Homepage = () => {

    const banners = [
        {
            title: '¡La magia llegó a nuestras tiendas!',
            bgColor: 'bg-sbpink',
            textColor: 'text-white',
            image: 'https://i.postimg.cc/6qp1mHfc/2023-11-BANNER-WEB-0.png',
            paragraph: 'Sentí el cariño de esta temporada con tus favoritos y llena de sabor cada momento.',
            hasHashtag: true,
            hashtag: '#LlevemosLaMagia',
            isFlipped: false,
            hasButton: false,
            buttonText: '',
            buttonBorder: ''
        },
        {
            title: 'Unite a algo más grande',
            bgColor: 'bg-sblightblue',
            textColor: 'text-sbgreen',
            image: 'https://i.postimg.cc/bwnwQmzW/home-02.png',
            paragraph: 'Revisá las oportunidades que tenemos para vos',
            hasHashtag: false,
            hashtag: '',
            isFlipped: true,
            hasButton: true,
            buttonText: 'Postular acá',
            buttonBorder: 'border-sbgreen'
        }
    ]


    return (
        <main>
            <section id="hero">
                <div className="wrapper">
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
            </section>
        </main>
    )
}

export default Homepage