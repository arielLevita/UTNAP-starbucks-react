

const Homepage = () => {
    return (
        <main>
        <section id="hero">
            <div className="wrapper">
                <div className="container-fluid">
                    <div className="row bg-sbgreen">
                        <div className="col-md-6 p-0">
                            <img className="img-fluid" src="https://i.postimg.cc/GpJ3f9Tj/home-01.png" alt="promo image" />
                        </div>
                        <div className="col-md-6 p-0">
                            <div
                                className="d-flex flex-column align-items-center justify-content-center text-white text-center h-100 px-5">
                                <h2 className="my-3">VIAJÁ A LA PASIÓN DEL CAFÉ JUNTO A DELTA AIR LINES</h2>
                                <p className=" fs-5 fw-semibold my-3">Conocé más sobre esta oportunidad</p>
                                <a className="fs-5 fw-semibold my-3" href="">
                                    <button className="bg-transparent text-white border border-white rounded-pill px-3">Ver bases y condiciones</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="hiring">
            <div className="wrapper my-4">
                <div className="container-fluid">
                    <div className="row flex-md-row-reverse bg-sblightblue">
                        <div className="col-md-6 d-flex justify-content-center align-items-center p-0">
                            <img className="img-fluid" src="https://i.postimg.cc/bwnwQmzW/home-02.png" alt="hiring image" />
                        </div>
                        <div className="col-md-6 p-0">
                            <div
                                className="d-flex flex-column align-items-center justify-content-center text-sbgreen text-center h-100 p-5">
                                <h2 className="my-3">Unite a algo más grande</h2>
                                <p className="fs-5 fw-semibold my-3">Revisá las oportunidades que tenemos para vos</p>
                                <a className="fs-5 fw-semibold my-3" href="">
                                    <button className="bg-transparent text-sbgreen border-sbgreen rounded-pill px-3">Postular acá</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}

export default Homepage