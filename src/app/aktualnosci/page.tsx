import Link from "next/link"
import type { Metadata } from 'next'
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';
import './style.css'
import flagaUe from '@/icons/flaga-ue-tlo.png'
const backendLink = process.env.STRAPI_PUBLIC_BACKEND_LINK;

async function getStrapiData() {
    const data = await fetch(`${backendLink}/api/aktualnosci-dcis?sort=id:desc`,

        {
            cache: 'no-store',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.BEARER_TOKEN}`
            },
        }
    );
    return data.json();
}

export const metadata: Metadata = {
    title: 'Aktualności o projekcie Kobieta-Aktywność-Sukces',
    description: 'Aktualności o projekcie Kobieta-Aktywność-Sukces w Radomiu i gminie Wieniawa',
}

function createSlug(text: string): string {
    const polishChars: { [key: string]: string } = {
        'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z',
        'Ą': 'a', 'Ć': 'c', 'Ę': 'e', 'Ł': 'l', 'Ń': 'n', 'Ó': 'o', 'Ś': 's', 'Ź': 'z', 'Ż': 'z'
    };

    return text
        .split('')
        .map(char => polishChars[char] || char) // Zamień polskie znaki
        .join('')
        .toLowerCase() // Zamień na małe litery
        .replace(/[^a-z0-9\s-]/g, '') // Usuń wszystko oprócz liter, cyfr, spacji i myślników
        .trim() // Usuń białe znaki z początku i końca
        .replace(/\s+/g, '-') // Zamień spacje na myślniki
        .replace(/-+/g, '-'); // Usuń powtarzające się myślniki
}

export default async function News() {
    const { data } = await getStrapiData();

    // Sortowanie danych według daty od najnowszej do najstarszej
    const sortedData = data.sort((a: any, b: any) => new Date(b.attributes.data).getTime() - new Date(a.attributes.data).getTime());

    return (
        <>
            <section
                className="wrapper"
                style={{
                    position: 'relative',
                    backgroundPosition: 'right',
                    backgroundImage: `url(${flagaUe.src})`,
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
                                Aktualności
                            </h1>
                            <p className="lead px-xxl-10"></p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container mb-15 mt-15">
                <div className="row gx-0 gx-md-3 gx-xl-8 gy-8 align-items-center">

                    {sortedData.map((article: any) => {
                        const slug = createSlug(article.attributes.tytul);
                        const articleUrl = `/aktualnosci/${article.id}-${slug}`;

                        return (
                            <div className="col-md-4" key={article.id}>
                                <Link href={articleUrl}>
                                    <div className="card news-card">
                                        <div className="card-body">
                                            <div className="post-header">
                                                <h2 className="post-title h3 mt-1 mb-3">{article.attributes.tytul}</h2>
                                            </div>
                                            <div className="post-content">
                                                <p>{article.attributes.podtytul}</p>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <ul className="post-meta d-flex mb-0">
                                                <li className="post-date">
                                                    <i className="uil uil-calendar-alt"></i>
                                                    <span>{format(new Date(article.attributes.data), 'dd MMMM yyyy', { locale: pl })}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}

                </div>
            </div>
        </>
    );
}