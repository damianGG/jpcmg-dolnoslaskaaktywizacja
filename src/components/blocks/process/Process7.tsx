

import { ProcessList1 } from "@/components/reuseable/process-list";
import DownloadList from "@/components/reuseable/process-list/DownloadList";
import { doPobrania2, processList1 } from "@/data/process";
import Image from 'next/image'
import { doPobrania } from "@/data/process";
import Link from "next/link";
const backendLink = process.env.STRAPI_PUBLIC_BACKEND_LINK;

// Definicje interfejsów
interface FileData {
  attributes: {
    url: string;
  };
}

interface OptionalFile {
  data?: FileData[];
}

interface DocumentAttributes {
  tytul: string;
  kolorowy?: OptionalFile;
  czarnobialy?: OptionalFile;
}

interface DocumentItem {
  id: number;
  attributes: DocumentAttributes;
}

interface StrapiResponse {
  data: DocumentItem[];
}

export async function getStrapiData() {
  try {
    const response = await fetch(`${backendLink}/api/dokumenty-dcis?sort=rank:asc&populate=*`, {
      method: 'GET',
      cache: "no-cache",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.BEARER_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data from Strapi:", error);
    return { data: [] }; // Zwraca pustą tablicę danych zamiast null
  }
}


export default async function Process7() {

  const dataFromStrapi = await getStrapiData();
  const data = dataFromStrapi?.data || [];

  return (
    <>
      <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
        <div className="row mb-5">
          <div className="col-md-10 col-xl-8 col-xxl-7 mx-auto text-center">

            <h2 className="display-4 mb-4 px-lg-14">Kto może wziąć udział w projekcie?</h2>
          </div>
        </div>

        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-lg-6 order-lg-2">
            {processList1.map((item) => (
              <ProcessList1 {...item} key={item.no} />
            ))}
          </div>

          <div className="col-lg-6">

            <p className="lead fs-lg pe-lg-5">

            </p>

            <p>
              Rekrutacja realizowana będzie z uwzględnieniem zasady równych szans i płci oraz niedyskryminacji,
              w tym dostępności dla osób z niepełnosprawnościami. Przy rekrutacji stosowane będą także zasady
              zrównoważonego rozwoju.
            </p>

            <p>
              Do wzięcia udziału w projekcie zapraszamy wszystkich chętnych spełniających wyżej wymienione
              kryteria.
            </p>
            <p>
              <strong>Istnieje możliwość skorzystania z tłumacza języka migowego, pętli indukcyjnej lub pomocy
                asystenta osoby z niepełnosprawnością.</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="container pt-10 pt-md-10 pb-13 pb-md-15">

        <div className="row mb-5">
          <div className="col-md-10 col-xl-8 col-xxl-7 mx-auto text-center">

            <h2 className="display-4 mb-4 px-lg-14">Jak zgłosić się do projektu?</h2>
            <p>Komplet dokumentów rekrutacyjnych można składać osobiście w Biurze projektu bądź przesyłać je
              listownie lub e-mailem.</p>
            <div className="col-lg-12 order-lg-2">
              <div className="shadow-lg mt-10">

              </div>
              <div className="text-center mt-4">

                <h3 className="mb-1">Na komplet dokumentów rekrutacyjnych składa się:</h3>

              </div>
              <div className="shadow-lg mt-5">
                <div className="card-body p-6">
                  <div className="d-flex flex-row">
                    <div>
                      {/* <span className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                        <span className="number">2</span>
                      </span> */}
                    </div>

                    <div>
                      <h4 className="mb-1">Formularz rekrutacyjny – załącznik nr 1 do Regulaminu rekrutacji i uczestnictwa
                        w projekcie;</h4>
                      <p className="mb-0"></p>
                    </div>
                  </div>
                </div>

              </div>
              <img className="mt-5" height={100}
                src="/down-arrow-download-svgrepo-com.svg"

                alt="Picture of the author"
              />
              <div className="shadow-lg mt-5">
                <div className="card-body p-6">
                  <div className="d-flex flex-row justify-content-center">
                    <div>
                      {/* <span className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                        <span className="number">3</span>
                      </span> */}
                    </div>

                    <div>
                      <h4 className="mb-1">zaśw./ośw./dok.potw.spełnienie kryt.form.(m.in.: status osoby z kategorii NEET) </h4>
                      <p className="mb-0"></p>
                    </div>
                  </div>
                </div>

              </div>
              <img className="mt-5" height={100}
                src="/down-arrow-download-svgrepo-com.svg"

                alt="Picture of the author"
              />
              <div className="shadow-lg mt-5">
                <div className="card-body p-6">
                  <div className="d-flex flex-row">
                    <div>
                      {/* <span className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                        <span className="number">4</span>
                      </span> */}
                    </div>

                    <div>
                      <h4 className="mb-1">Dokument potwierdzający miejsce zamieszkania na terenie województwa dolnośląskiego
                        (np. zaświadczenie z Urzędu Miasta/Gminy lub deklaracja za śmieci lub akt własności
                        lokalu mieszkalnego lub umowa najmu lokalu mieszkalnego lub PIT lub faktura np. za
                        telefon (gdzie wskazany jest adresem miejsca zamieszkania) lub w przypadku osób
                        pobierających np. 800 plus lub bon żłobkowy lub świadczenia z rodzinnego kapitału
                        opiekuńczego -  decyzji wydanej w tej sprawie gdzie wskazano adres miejsca zamieszkania
                        wnioskodawcy lub dokument z ZUS potwierdzający zgłoszenie do ubezpieczeń i miejsce
                        zamieszkania uczestniczki projektu);</h4>
                      <p className="mb-0"></p>
                    </div>
                  </div>
                </div>

              </div>
              <img height={100}
                className="mt-5"
                src="/down-arrow-download-svgrepo-com.svg"

                alt="Picture of the author"
              />
              <div className="shadow-lg mt-5">
                <div className="card-body p-6">
                  <div className="d-flex flex-row">
                    <div>
                      {/* <span className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                        <span className="number">5</span>
                      </span> */}
                    </div>

                    <div>
                      <h4 className="mb-1">Orzeczenie o stopniu niepełnosprawności w rozumieniu ustawy z dnia 27 sierpnia 1997 r.
                        o rehabilitacji zawodowej i społecznej oraz zatrudnianiu osób niepełnosprawnych (Dz. U.
                        z 2023 r. poz. 100, z późn. zm.) lub orzeczenia albo innego dokumentu, o którym mowa
                        w ustawie z dnia 19 sierpnia 1994 o ochronie zdrowia psychicznego (Dz. U. z 2022 r. poz.
                        2123)(jeśli dotyczy); </h4>
                      <p className="mb-0"></p>
                    </div>
                  </div>
                </div>

              </div>

            </div>


          </div>
        </div>
        <p className="text-center mt-15 ">
          Aby uzyskać więcej informacji prosimy o kontakt z Biurem projektu – dane w zakładce <a className="link-primary" href="/kontakt">„Kontakt”</a>
        </p>
      </div>
      <div className="container pt-10 pt-md-10 pb-13 pb-md-15">

        <div className="row mb-5">
          <div className="col-md-10 col-xl-8 col-xxl-7 mx-auto text-center">

            <h2 className="display-4 mb-10 px-lg-14">Dokumenty do pobrania</h2>
            <div className="d-flex flex-column align-items-start">
              <p>
                <span className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                  <span className="number"><i className="uil uil-file-download fs-40"></i></span>
                </span>
                - pobrania pliku w wersji kolorowej
              </p>
              <p>
                <span className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4" style={{ backgroundColor: "white" }}>
                  <span className="number" style={{ color: "black" }}><i className="uil uil-file-download fs-40"></i></span>
                </span>
                - pobrania pliku w wersji czarno-białej
              </p>
            </div>
            <p>Prosimy o drukowanie dokumentów rekrutacyjnych w kolorze. Wersja czarno-biała dotyczy sytuacji braku możliwości wydruku w kolorze.</p>


            {!dataFromStrapi ? (
              <p className="text-danger">Nie udało się pobrać dokumentów. Prosimy spróbować później.</p>
            ) : (
              <div className="col-lg-12 order-lg-2">
                {data.map((item: any) => (
                  <DownloadList
                    key={item.id}
                    title={item.attributes.tytul}
                    podtytul={item.attributes.podtytul}
                    link1={item.attributes.kolorowy?.data?.[0]?.attributes?.url || ''}
                    link2={item.attributes.czarnobialy?.data?.[0].attributes?.url || ''}
                    className="mb-5"
                  />
                ))}
              </div>
            )}


          </div>
        </div>
        <p className="text-center mt-5">Aby uzyskać więcej informacji prosimy o kontakt z <Link href="/kontakt" className="link-primary">Biurem projektu.</Link> </p>
      </div>



    </>


  );
}
