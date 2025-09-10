import Link from "next/link";
import type { Metadata } from 'next'
import ContactForm from "@/components/blocks/form/form";
export const metadata: Metadata = {
    title: 'Kontakt do projektu „Kobieta * Aktywność * Sukces',
    description: 'Kontakt do projektu „Kobieta * Aktywność * Sukces” w Radomiu i gminie Wieniawa oraz do biura projektu J&P Moritz Consulting Group Sp. z o. o. w Wrocławiu',
}
export default function Kontakt() {
    return (
        <>
            <section
                className="wrapper"
                style={{
                    position: 'relative',
                    backgroundPosition: 'right',
                    backgroundImage: 'url(/_next/static/media/flaga-ue-tlo.a9057970.png)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div
                    className="overlay"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    }}
                />
                <div
                    className="container pt-5 pb-5 pt-md-10 pb-md-10 text-center"
                    style={{ position: 'relative', zIndex: 1 }}
                >
                    <div className="row">
                        <div className="col-md-9 col-lg-7 col-xl-5 mx-auto">
                            <h1 className="display-1 mb-3" style={{ color: 'white' }}>
                                Kontakt
                            </h1>
                            <p className="lead px-xxl-10"></p>
                        </div>
                    </div>
                </div>
            </section>

            <title>Biuro Projektu</title>

            <div className="container mt-5">
                <div className="row">
                    <div className="col text-center">
                        <h1>Biuro Projektu</h1>
                        <p><strong>Adres:</strong> ul. Muchoborska 14 nr 003B, 54-424 Wrocław</p>
                        <p>Biuro projektu czynne jest od poniedziałku do piątku w godzinach 8:00 - 16:00 (istnieje możliwość umówienia się na inne godziny spotkania)</p>
                        <p><strong>Tel:</strong> +48 881 500 075</p>
                        <p><strong>E-mail:</strong> <a href="mailto:dolnoslaskaaktywizacja@jpmcg.pl" className="link-primary" target="_blank">dolnoslaskaaktywizacja@jpmcg.pl</a> </p>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d624.657159428347!2d16.97069028090449!3d51.109064092725575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc1e8b562e439%3A0xd5bdf4251f0f70d1!2sMuchoborska%2014%2F003b%2C%2054-424%20Wroc%C5%82aw!5e1!3m2!1spl!2spl!4v1757536220539!5m2!1spl!2spl" width={600}
                        height={450}
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                <div className="row mt-10">
                    <div className="col text-center">
                        <h2>Siedziba J&P Moritz Consulting Group Sp. z o. o.</h2>
                        <p><strong>Adres: </strong> ul. Plac Solny 14 lok. 3, 50-062 Wrocław</p>
                        <p><strong>Strona: </strong><Link href="http://jpmcg.pl" className="link-primary" target="_blank">www.jpmcg.pl</Link></p>
                        <p><strong>Facebook: </strong><Link href="https://www.facebook.com/profile.php?id=61558567391191" className="link-primary" target="_blank">J&P</Link></p>
                        <p><strong>Tel: </strong> +48 531 954 000</p>
                        <p><strong>E-mail: </strong><a href="mailto:biuro@jpmcg.pl" className="link-primary" target="_blank">biuro@jpmcg.pl</a> </p>
                    </div>

                </div>
                <div className="row">
                    <div className="col text-center mb-15">
                        <Link
                            href="https://www.facebook.com/search/top/?q=%23funduszeue%20%23FunduszeEuropejskie"
                            className="link-primary" target="_blank"
                        >
                            #FunduszeUE #FunduszeEuropejskie
                        </Link>

                    </div>
                </div>
                <div className="container">
                    <h3 className="text-center">Formularz kontaktowy</h3>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

