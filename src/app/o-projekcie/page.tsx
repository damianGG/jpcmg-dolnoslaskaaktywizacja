import About6 from "@/components/blocks/about/About6Project";
import About6v2 from "@/components/blocks/about/About6v2";
import About6v3 from "@/components/blocks/about/About6v3";
import Image from "next/image";

export default function News() {
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
                                O projekcie
                            </h1>
                            <p className="lead px-xxl-10"></p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container mb-15 mt-15" >
                <div className=" mt-4 mb-15">
                    <p>Wartość projektu: <span className="fw-bold">1 970 574,74 zł</span> </p>
                    <p>Wysokość wkładu Funduszy Europejskich:<span className="fw-bold"> 1 872 046,00 zł</span></p>
                    <p className="mb-3 fw-bold lead fs-lg">
                        <p>Zapraszamy do wzięcia udziału w projekcie ,,Dolnośląska Fabryka Aktywizacji’’</p>

                        Celem głównym projektu jest wsparcie aktywnego włączenia społecznego w celu promowania
                        równości szans, niedyskryminacji i aktywnego uczestnictwa oraz zwiększenie zdolności do
                        zatrudnienia w szczególności grup w niekorzystnej sytuacji 92 osób młodych (w tym 65 kobiet-K) w
                        wieku 18-29 lat, pozostających poza zatrudnieniem, edukacją i szkoleniem (osoby z kategorii NEET),
                        które zamieszkują w rozumieniu przepisów KC na obszarze woj. dolnośląskiego w okresie realizacji
                        projektu tj. 1.03.2025-31.10.2026.
                    </p>
                </div>

                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative order-lg-1">

                        <div className="overlap-grid overlap-grid-2">

                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/photo-1.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />

                        </div>
                    </div>

                    <div className="col-lg-6">


                        <p className="display-6 mb-3">Udział w projekcie obejmuje następujące elementy:</p>

                        <p className="lead fs-lg">
                            Identyfikacja potrzeb osób młodych oraz diagnozowanie możliwości w zakresie
                            doskonalenia zawodowego poprzez opracowanie indywidualnych planów działań (IPD) –
                            dla wszystkich Uczestników Projektu
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        W ramach wsparcia dla każdego Uczestnika przewidziano identyfikację potrzeb oraz
                                        diagnozowanie możliwości w zakresie doskonalenia zawodowego poprzez opracowanie
                                        Indywidualnych Planów Działań (IPD), w tym aktualizacja i podsumowanie planu.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Celem wsparcia będzie rozpoznanie sytuacji społeczno-zawodowej i identyfikacja potrzeb
                                        Uczestnika projektu, dostarczenie kompleksowej wiedzy o jego szansach na rynku pracy,
                                        opracowanie IPD oraz diagnoza potrzeb i możliwości doskonalenia w regionie. Oferowane
                                        wsparcie będzie dostosowane do indywidualnych potrzeb Uczestnika.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Każdy Uczestnik projektu otrzyma 4 godz. zegarowych wsparcia.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative">

                        <div className="overlap-grid overlap-grid-2">

                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/shutterstock_2489860569.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />

                        </div>
                    </div>

                    <div className="col-lg-6">


                        <h2 className="display-4 mb-3"></h2>

                        <p className="lead fs-lg">
                            Indywidualne poradnictwo psychologiczne (usługi aktywnej integracji o charakterze
                            społecznym)
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <p>Poradnictwo psychologiczne - będzie obejmowało m.in.:</p>
                                    <li>
                                        <i className="uil uil-check" />indywidualną analizę i diagnozę sytuacji Uczestnika zmierzającą do poprawy funkcjonowania
                                        w społeczeństwie,
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" /> określenie celów życiowych,
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />zachowania asertywne; umiejętność radzenie sobie ze stresem; poczucie własnej wartości,
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />określenie wartości motywujących Uczestników, mocne/słabe strony,
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />nawiązywanie i utrzymywanie kontaktów międzyludzkich,
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />nakierowania na działania zmierzające do poprawy pewności siebie oraz usprawnienia
                                        komunikacji ze społeczeństwem.
                                    </li>
                                    <p>Każdy Uczestnik projektu otrzyma 2 godz. zegarowych wsparcia.</p>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative order-lg-1">

                        <div className="overlap-grid overlap-grid-2">
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />
                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/ludzie.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-6">


                        <h2 className="display-4 mb-3"></h2>

                        <p className="lead fs-lg">
                            Indywidualne poradnictwo zawodowe (usługi aktywnej integracji o charakterze
                            zawodowym)
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">

                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Poradnictwo będzie wspomagać proces poszukiwania pracy, realizowane będzie w formie
                                        indywidualnych spotkań doradcy zawodowego z Uczestnikami Projektu, podczas których
                                        doradca udzieli informacji Uczestnikom o rynku pracy oraz możliwości rozwoju zawodowego.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Doradca będzie udzielał porad z wykorzystaniem standaryzowanych metod ułatwiających
                                        wybór zawodu, zmianę kwalifikacji i podjęcie zatrudnienia. Doradca zawodowy zidentyfikuje
                                        mocne i słabe strony Uczestników Projektu poprzez zdobycie umiejętności ułatwiających
                                        pełnienie ról zawodowych.

                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Każdy Uczestnik projektu otrzyma 2 godz. zegarowych wsparcia.
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative ">

                        <div className="overlap-grid overlap-grid-2">

                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/shutterstock_283445021_przyciete2.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "18rem", left: "-2.5rem", zIndex: "-1" }} />

                        </div>
                    </div>

                    <div className="col-lg-6">


                        <h2 className="display-4 mb-3"></h2>

                        <p className="lead fs-lg">
                            Uzupełnienie poziomu kompetencji cyfrowych osób młodych
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        Zadaniem zostanie objętych połowa Uczestników projektu tj. 46 os.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Zaplanowano śr. 24 - godzinne szkolenie, którego tematyka będzie odpowiadała na zbadane
                                        &quot;luki kompetencyjne&quot; Uczestników. Tematyka może dotyczyć któregoś z przykładowych
                                        obszarów:<br />
                                        *INFORMACJA I DANE;<br />
                                        *KOMUNIKACJA I WSPÓŁPRACA;<br />
                                        *TWORZENIE I EDYTOWANIE NOWYCH TREŚCI;<br />
                                        *BEZPIECZEŃSTWO;<br />
                                        *ROZWIĄZYWANIE PROBLEMÓW.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Na zakończenie szkolenia egzamin w zakresie przeprowadzonego kształcenia –
                                        potwierdzający zdobyte kompetencje cyfrowe. Uczestnicy otrzymają stosowny certyfikat w
                                        tym zakresie.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative order-lg-1">

                        <div className="overlap-grid overlap-grid-2">
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />
                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/ludzie.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-6">


                        <h2 className="display-4 mb-3"></h2>

                        <p className="lead fs-lg">
                            Szkolenia służące zdobyciu, zmianie lub podniesieniu kompetencji lub kwalifikacji
                            niezbędnych do wykonywania danego zawodu lub zadań na określonym stanowisku (usługi
                            o charakterze zawodowym)
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">

                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        W ramach zadania każdy z Uczestników weźmie udział w szkoleniu zawodowym nadającym
                                        kwalifikacje lub kompetencje
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Szkolenia te umożliwią Uczestnikom zdobycie zatrudnienia i polepszenie swojej sytuacji
                                        społecznej i zawodowej po zakończeniu udziału w projekcie.

                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Szkolenia będą śr. 120-godzinne, aby Uczestnicy nabyli realną wiedzę i umiejętności w
                                        zakresie planowanego do wykonywania zawodu. Tematyka szkolenia (zawód) będą stricte
                                        wynikały z IPD.
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative ">

                        <div className="overlap-grid overlap-grid-2">

                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/shutterstock_283445021_przyciete2.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "18rem", left: "-2.5rem", zIndex: "-1" }} />

                        </div>
                    </div>

                    <div className="col-lg-6">


                        <h2 className="display-4 mb-3"></h2>

                        <p className="lead fs-lg">
                            Staże zawodowe (usługi o charakterze zawodowym)
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        Wsparciem w ramach Zadania zostanie objętych 56 os.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Długość stażu zaw.: założono – 3 miesiące kalendarzowe dla każdego Uczestnika, łącznie
                                        168 m-cy staży (56 os. x 3 m-ce).
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Celem staży będzie polepszenie umiejętności praktycznych przez Uczestników projektu
                                        oraz zdobycie doświadczenia zawodowego na stanowisku związanym z tematyką szkolenia.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

