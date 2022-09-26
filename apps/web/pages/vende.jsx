import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Logo, LomasMobile, CoverLanding, Dropdown, ArrowSend, SecondCoverLanding, ImagenVende1, phone, LomasHomeIcon, Camera, ImagenVende2, ImagenVende3, ImagenVende4, ImagenVende5, Asesor, Asesor2, Asesor3 } from 'ui/constants'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'
import Footer from '../src/Components/Footer/Footer'
import FormSteps from '../src/Components/FormSteps/FormSteps'


export default function Vende(){
    const [isActive, setIsActive] = useState(false)
    const [isClick, setIsClick] = useState(false)
    const chageBackground = () =>{
        if(window.scrollY >= 80){
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }
    useEffect(() =>{
        if (window.innerWidth > 767) {
    
            let section = document.querySelector('#llegaste'),
                title = document.querySelector('.block.llegaste h2');
    
            if (section) {
                let wrapper = section.querySelector('.wrapper-sections'),
                    variable = window.innerWidth - window.innerHeight,
                    width = wrapper.offsetWidth;
                section.style.height = (width - variable) + 'px';
                
                const handleScroll = event => {
                    let sectionRect = section.getBoundingClientRect();
    
                    if (sectionRect.top < 0) {
                        title.style.position = 'fixed';
                        wrapper.style.position = 'fixed';
                        wrapper.style.top = 0;
                        title.style.top = '200px';
                        wrapper.style.bottom = 'unset';
                        wrapper.style.transform = 'translateX(' + sectionRect.top + 'px)';
                    }
                    
                    if (sectionRect.top > 0) {
                        title.style.position = 'absolute';
                        wrapper.style.position = 'absolute';
                        wrapper.style.top = 0;
                        title.style.top = '200px';
                        wrapper.style.bottom = 'unset';
                        wrapper.style.transform = 'translateX(0)';
                    }
                    
                    if ((sectionRect.bottom - window.innerHeight) < 0) {
                        title.style.position = 'absolute';
                        wrapper.style.position = 'absolute';
                        wrapper.style.top = 'unset';
                        wrapper.style.bottom = 0;
                        title.style.top = '200px';
                        wrapper.style.transform = 'translateX(-' + (width - window.innerWidth) + 'px)';
                    }
    
                };
                
                window.addEventListener('scroll', handleScroll);
            }
        }
        chageBackground()
        window.addEventListener('scroll', chageBackground)
    }, [])
    return(
        <ParallaxProvider>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="navbar-nav ms-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Comprar
                                <Image src={Dropdown} alt="pin" width="20" height="13" layout={"fixed"} />
                            </a>
                            <ul className="dropdown-menu text-center">
                                <li>
                                    <Link href={{ pathname: '/[category]', query: { category: 'casa'}}}>
                                        <a className="dropdown-item">Casas</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={{ pathname: '/[category]', query: { category: 'departamento'}}}>
                                        <a className="dropdown-item">Departamentos</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={{ pathname: '/[category]', query: { category: 'terreno'}}}>
                                        <a className="dropdown-item">Terrenos</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={{ pathname: '/[category]', query: { category: 'local'}}}>
                                        <a className="dropdown-item">Locales comerciales</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={{ pathname: '/[category]', query: { category: 'oficina'}}}>
                                        <a className="dropdown-item">Oficinas</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <Link href="/vende">
                            <a className="nav-link">Vende tu propiedad</a>
                        </Link>
                        <Link href="/creditos">
                            <a className="nav-link">Créditos</a>
                        </Link>
                        <Link href="/conocenos">
                            <a className="nav-link">Conócenos</a>
                        </Link>
                        <Link href='/#contacto'>
                            <a className="nav-link">Contacto</a>
                        </Link>
                    </div>           
                </div>
            </div>
            <section className={`navi ${isActive ? "isActive" : ""}`}>
                <div className='holder'>
                    <nav className='navbar navbar-expand-lg'>
                        <div className='container-fluid'>
                            <Link href="/">
                                <a className={`navbar-brand d-none d-sm-none d-md-block ${isActive ? "Active" : ""}`} href="#">
                                    <Image src={Logo} alt="Logo Lomas Home" width="114" height="70" />
                                </a>
                            </Link>
                            <Link href="/">
                                <a className={`navbar-brand d-block d-sm-block d-md-none ${isActive ? "Active" : ""}`} href="#">
                                    <Image className={`${isActive ? "Show" : "Hidden"}`} src={LomasMobile} alt="Logo Lomas Home" width="114" height="13.65" />
                                </a>
                            </Link>
                            <button onClick={() => setIsClick(!isClick)} className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                <i className="bi bi-list"></i>
                            </button>
                            
                        </div>
                    </nav>
                </div>
            </section>
            <div className='wrapper'>
                <section className='block' id='landing'>
                    <div className='holder'>
                        <div className='row'>
                            <div className='col-12 col-md-6 title'>
                                <div className='container-fluid'>
                                    <h1>Es hora de vender tu propiedad de manera eficiente</h1>
                                    <span>Olvídate del estrés y la espera innecesaria.</span><br/>
                                    <a>Quiero vender mi propiedad <Image src={ArrowSend} alt="pin" width="13" height="12" /></a>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 image'>
                                <ParallaxBanner 
                                    className=''
                                    style={{
                                        aspectRatio: '2/1',
                                        height: '580px'
                                    }}
                                    layers={[
                                        {
                                            image: SecondCoverLanding.src,
                                            speed: -10
                                        }
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/*}<section className='block' id='title-statick'>
                    <div className='holder'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <h2><span>¿Por qué vender tu propiedad</span> con Lomas Home Inmobiliaria?</h2>
                            </div>
                        </div>
                    </div>
                </section>{*/}
                <section className='block llegaste' id='llegaste'>
                    <div className='holder'>
                        <div className='container-fluid'>
                            <div className='header'>
                                <h2><span>¿Por qué vender tu propiedad</span> con Lomas Home Inmobiliaria?</h2>
                            </div>
                            <div className='wrapper-sections'>
                                <div className='item item-one'>
                                    <div className='content'>
                                        <div className='flex-content'>
                                        
                                            <div className='image-wrapper'>
                                                <Image src={ImagenVende1} alt="Asesor 1" />
                                            </div>
                                            <div className='text-wrapper'>
                                                <p>Queremos hacer de este proceso <strong>una experiencia extraordinaria.</strong></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='item item-two'>
                                    <div className='content'>
                                        <div className='flex-content'>
                                            <div className='image-wrapper'>
                                                <Image src={ImagenVende2} alt="Asesor 2" />
                                            </div>
                                            <div className='text-wrapper'>
                                                <p><strong>Absorbemos todos los procesos operativos</strong> y entregamos un reporte con todos los movimientos relacionados con tus propiedades. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='item item-three'>
                                    <div className='content'>
                                        <div className='flex-content'>
                                            <div className='image-wrapper'>
                                                <Image src={ImagenVende3} alt="Asesor 2" />
                                            </div>
                                            <div className='text-wrapper'>
                                                <p>Nos ocuparemos de <strong>recolectar el material visual de tus bienes,</strong> como fotografías profesionales y creación de recorridos virtuales, para ofrecer una excelente visibilidad.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='item item-four'>
                                    <div className='content'>
                                        <div className='flex-content'>
                                            <div className='text-wrapper'>
                                                <p><strong>Contamos con asesoría integral</strong> para atender cualquier tema legal y de operación. </p>
                                            </div>
                                            <div className='image-wrapper'>
                                                <Image src={ImagenVende4} alt="Asesor 4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='item item-five'>
                                    <div className='content'>
                                        <div className='flex-content'>
                                            <div className='image-wrapper'>
                                                <Image src={ImagenVende5} alt="Asesor 5" />
                                            </div>
                                            <div className='text-wrapper'>
                                                <p>Nuestros socios vendedores son esenciales, por ello les <strong>asignamos un agente inmobiliario  altamente capacitado</strong> para crear un canal de comunicación eficiente.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='block' id='que-hacemos'>
                    <div className='holder'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-12 col-md-6'>
                                    <h2>¿Qué hacemos para vender tu propiedad?</h2>
                                    <div className='row'>
                                        <div className='col-12 col-md-6'>
                                            <ul className="">
                                                <li className="">Levantamiento de fotografías profesionales.</li>
                                                <li className="">Mostramos los recorridos virtuales de tu propiedad.</li>
                                                <li className="">Proporcionamos los planos arquitectónicos.</li>
                                                <li className="">Damos visibilidad de la propiedad en distintas plataformas digitales.</li>
                                                <li className="">Asignamos a un consultor altamente capacitado.</li>
                                                <li className="">Colocamos material promocional en zonas digitales estratégicas.</li>
                                            </ul>
                                        </div>
                                        <div className='col-12 col-md-6'>
                                            <ul className="">
                                                <li className="">Valoración gratuita.</li>
                                                <li className="">Asignamos a un ejecutivo de cuenta.</li>
                                                <li className="">Elaboramos el contrato privado de compra-venta.</li>
                                                <li className="">Verificamos la legalidad de la propiedad.</li>
                                                <li className="">Brindamos acompañamiento en citas y escritura.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-md-6 image'>
                                    <div className='row'>
                                        <Image src={LomasHomeIcon} width="115" height="110" className='' alt="Asesor 1" />
                                    </div>
                                    <Image src={phone} width="417" height="534" alt="Asesor 1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='block' id="lugar">
                    <div className='holder'>
                        <div className='container-fluid'>
                            <div className='row content'>
                                <div className='col-12 col-md-6'>
                                    <h2><span>¡Llegaste al lugar indicado!,</span> empieza ahora a ofertar tus bienes con nosotros.</h2>
                                    <a>Quiero vender mi propiedad <Image src={ArrowSend} alt="pin" width="13" height="12" /></a>
                                </div>
                                <div className='col-12 col-md-6 d-none d-sm-none d-md-block'>
                                    <Image src={Asesor} alt="Asesor 1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='block' id='vender'>
                    <div className='holder'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <h2><span>¿Qué necesitas para vender</span> tu propiedad con nosotros?</h2>
                            </div>
                            <div className='row'>
                                <div className='col-12 col-md-6 images'>
                                    <Image src={Asesor2} alt="Asesor 2" />
                                </div>
                                <div className='col-12 col-md-6'>
                                    <div className='row requisitos'>
                                        <h3>Requisitos</h3>
                                        <div className='row requi'>
                                            <div className='col-12 col-md-6'>
                                                <ul className="">
                                                    <li className=""><span>Información y copia de la escritura (con sello del Registro Público de la Propiedad)</span></li>
                                                    <li className=""><span>Copia de último pago de predial y agua.</span></li>
                                                    <li className=""><span>Comprobante de domicilio (no mayor a 3 meses).</span></li>
                                                    <li className=""><span>Información de las dimensiones y detalles de la propiedad (para valuación).</span></li>
                                                </ul>
                                            </div>
                                            <div className='col-12 col-md-6'>
                                                <ul className="">
                                                    <li className=""><span>Fotografías del inmueble.</span></li>
                                                    <li className=""><span>Constancia de situación fiscal.</span></li>
                                                    <li className=""><span>Certificado de libertad de gravamen.</span></li>
                                                    <li className=""><span>Identificación del propietario.</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='block' id='form-landing'>
                    <div className='holder'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-12 col-md-5 images'>
                                    <div className='row'>
                                        <h2><span>¡Felicidades!</span> estás a punto de comenzar el proceso de venta de tu propiedad</h2>
                                    </div>
                                    <div className='row text-center justify-content-center asesor'>
                                        <Image src={Asesor3} alt="Asesor 3" />
                                    </div>
                                </div>
                                <div className='col-12 col-md-7 form'>
                                    <FormSteps />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='block' id="lugares">
                    <div className='holder'>
                        <div className='row mx-auto'>
                            <div className='col-md-2 col-12'>
                                <h4>Casas en Venta Puebla</h4>
                                <ul>
                                    <li><a>Casas en Venta en Lomas de Angelópolis</a></li>
                                    <li><a>Casas en Venta Recta a Cholula</a></li>
                                    <li><a>Casas en Venta en Forjadores</a></li>
                                    <li><a>Casas en Venta en San Andrés Cholula</a></li>
                                    <li><a>Casas en Venta en Cuautlancingo</a></li>
                                    <li><a>Casas en Venta en Momoxpan</a></li>
                                </ul>
                            </div>
                            <div className='col-md-2 col-12'>
                                <h4>Terreno en Venta en Puebla</h4>
                                <ul>
                                    <li><a>Terrenos en Venta en Lomas de Angelópolis</a></li>
                                    <li><a>Terrenos en Venta en San Andrés Cholula </a></li>
                                    <li><a>Terrenos en Venta en San Martín Texmelucan</a></li>
                                    <li><a>Terrenos en Venta Bioparque Estrella</a></li>
                                </ul>
                            </div>
                            <div className='col-md-2 col-12'>
                                <h4>Departamentos en Venta en Puebla</h4>
                                <ul>
                                    <li><a>Departamentos en Venta en La Vista</a></li>
                                    <li><a>Departamentos en Venta junto a Lomas de Angelópolis</a></li>
                                </ul>
                            </div>
                            <div className='col-md-2 col-12'>
                                <h4>Departamentos en Renta en Puebla</h4>
                                <ul>
                                    <li><a>Departamentos en Renta en Tlaxclancingo </a></li>
                                    <li><a>Departamentos en Renta junto a Lomas de Angelópolis</a></li>
                                </ul>
                            </div>
                            <div className='col-md-2 col-12'>
                                <h4>Oficinas en Renta en Puebla </h4>
                                <ul>
                                    <li><a>Oficinas en Renta en Atlixcayotl</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </ParallaxProvider>
    )
}