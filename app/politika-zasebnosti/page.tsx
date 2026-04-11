import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Politika zasebnosti | Fasaderstvo Zorman',
  description:
    'Politika zasebnosti in varstvo osebnih podatkov za spletno stran Fasaderstvo Zorman d.o.o. Mojstrana.',
  robots: { index: true, follow: true },
};

export default function PolitikaZasebnosti() {
  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16 sm:py-24">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs text-[#777777] hover:text-[#0a0a0a] transition-colors duration-200 mb-10"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M8.5 2.5L4 7l4.5 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Nazaj na začetno stran
        </Link>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-semibold text-[#0a0a0a] mb-3 tracking-tight">
          Politika zasebnosti
        </h1>
        <p className="text-[#888888] text-sm mb-12">
          Zadnja posodobitev: april 2026
        </p>

        <div className="space-y-10 text-[#444444] text-sm leading-relaxed">

          {/* 1 */}
          <section>
            <h2 className="text-base font-semibold text-[#0a0a0a] mb-3">
              1. Upravljavec podatkov
            </h2>
            <p>
              Upravljavec osebnih podatkov je:
            </p>
            <address className="not-italic mt-3 pl-4 border-l border-[#e0e0e0] space-y-1">
              <p className="font-medium text-[#0a0a0a]">Zorman d.o.o. Mojstrana</p>
              <p>Ulica Alojza Rabiča 36</p>
              <p>4281 Mojstrana</p>
              <p>Slovenija</p>
              <p className="mt-2">Matična številka: SI50998048</p>
              <p>
                E-pošta:{' '}
                <a
                  href="mailto:zorman.doo@telemach.net"
                  className="text-[#7ecba1] hover:underline"
                >
                  zorman.doo@telemach.net
                </a>
              </p>
            </address>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-base font-semibold text-[#0a0a0a] mb-3">
              2. Katere podatke zbiramo
            </h2>
            <p>
              <strong className="text-[#0a0a0a] font-medium">Ne zbiramo osebnih podatkov. Na strani ni kontaktnih obrazcev.</strong>
            </p>
            <p className="mt-3">
              Edini vir podatkov je Google Analytics (GA4), ki ob vaši privolitvi zbira
              anonimne podatke o obisku spletne strani:
            </p>
            <ul className="mt-3 space-y-1.5 pl-5 list-disc">
              <li>Ogledane strani in čas obiska</li>
              <li>Vrsta naprave in spletni brskalnik</li>
              <li>Geografska lokacija na ravni mesta (ne natančnega naslova)</li>
              <li>Vir obiska (npr. iskalni stroj, neposredni obisk)</li>
            </ul>
            <p className="mt-3">
              Vsi podatki so anonimni in ne omogočajo identifikacije posameznika.
              IP-naslovi so anonimizirarani pred shranjevanjem.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-base font-semibold text-[#0a0a0a] mb-3">
              3. Namen zbiranja podatkov
            </h2>
            <p>
              Anonimne statistike obiska uporabljamo izključno za analizo in izboljšanje
              vsebine ter uporabniške izkušnje spletne strani. Podatkov ne prodajamo,
              ne posredujemo tretjim osebam za oglaševalske namene in jih ne uporabljamo
              za profiliranje posameznikov.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-base font-semibold text-[#0a0a0a] mb-3">
              4. Pravna osnova obdelave
            </h2>
            <p>
              Obdelava podatkov za namene analitike temelji na vaši prostovoljni
              privolitvi v skladu s{' '}
              <strong className="text-[#0a0a0a] font-medium">členom 6(1)(a) Splošne uredbe o varstvu podatkov (GDPR)</strong>.
              Privolitev podate s klikom na &ldquo;Sprejmi vse&rdquo; v obvestilu o
              piškotkih. Kadar koli jo lahko prekličete s spremembo nastavitev piškotkov
              v brskalniku.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-base font-semibold text-[#0a0a0a] mb-3">
              5. Hramba podatkov
            </h2>
            <p>
              Google Analytics hrani zbrane podatke <strong className="text-[#0a0a0a] font-medium">14 mesecev</strong> (standardna
              nastavitev storitve GA4). Po preteku tega obdobja se podatki samodejno
              izbrišejo. Piškotek za sledenje privolitvi (<code className="bg-[#f5f5f5] px-1 rounded text-xs">cookie_consent</code>)
              je shranjen lokalno v vašem brskalniku za 365 dni.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-base font-semibold text-[#0a0a0a] mb-3">
              6. Vaše pravice
            </h2>
            <p>
              V skladu z GDPR imate naslednje pravice:
            </p>
            <ul className="mt-3 space-y-2 pl-5 list-disc">
              <li>
                <strong className="text-[#0a0a0a] font-medium">Pravica do dostopa</strong> — pravica zahtevati informacije o
                tem, katere podatke o vas obdelujemo.
              </li>
              <li>
                <strong className="text-[#0a0a0a] font-medium">Pravica do izbrisa</strong> — pravica zahtevati izbris vaših
                podatkov.
              </li>
              <li>
                <strong className="text-[#0a0a0a] font-medium">Pravica do ugovora</strong> — pravica ugovarjati obdelavi
                vaših podatkov.
              </li>
              <li>
                <strong className="text-[#0a0a0a] font-medium">Pravica do preklica privolitve</strong> — privolitev za
                uporabo analitičnih piškotkov lahko kadar koli prekličete z
                brisanjem piškotkov v nastavitvah brskalnika.
              </li>
              <li>
                <strong className="text-[#0a0a0a] font-medium">Pravica do pritožbe</strong> — pritožbo lahko vložite pri
                Informacijskem pooblaščencu Republike Slovenije (IPRS):
                spletna stran{' '}
                <span className="text-[#0a0a0a]">www.ip-rs.si</span>,
                naslov: Dunajska cesta 22, 1000 Ljubljana.
              </li>
            </ul>
            <p className="mt-3">
              Za uveljavljanje pravic nas kontaktirajte na{' '}
              <a
                href="mailto:zorman.doo@telemach.net"
                className="text-[#7ecba1] hover:underline"
              >
                zorman.doo@telemach.net
              </a>
              .
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-base font-semibold text-[#0a0a0a] mb-3">
              7. Piškotki
            </h2>
            <p>
              Piškotki so majhne besedilne datoteke, ki jih spletna stran shrani v
              vaš brskalnik. Omogočajo, da si stran zapomni vaše nastavitve med obiski.
            </p>
            <p className="mt-3 font-medium text-[#0a0a0a]">Piškotki, ki jih uporablja ta stran:</p>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[#e0e0e0]">
                    <th className="text-left py-2 pr-4 font-medium text-[#0a0a0a] w-32">Ime</th>
                    <th className="text-left py-2 pr-4 font-medium text-[#0a0a0a]">Namen</th>
                    <th className="text-left py-2 font-medium text-[#0a0a0a] w-24">Trajanje</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f0f0f0]">
                  <tr>
                    <td className="py-2.5 pr-4 font-mono text-[#0a0a0a]">cookie_consent</td>
                    <td className="py-2.5 pr-4">Shrani vašo izbiro glede piškotkov</td>
                    <td className="py-2.5">365 dni</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4 font-mono text-[#0a0a0a]">_ga</td>
                    <td className="py-2.5 pr-4">Google Analytics — razlikuje med obiskovalci</td>
                    <td className="py-2.5">2 leti</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4 font-mono text-[#0a0a0a]">_gid</td>
                    <td className="py-2.5 pr-4">Google Analytics — razlikuje med obiskovalci</td>
                    <td className="py-2.5">24 ur</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              <strong className="text-[#0a0a0a] font-medium">Kako onemogočiti piškotke:</strong> V nastavitvah brskalnika
              (Chrome: Nastavitve → Zasebnost in varnost → Piškotki; Firefox:
              Možnosti → Zasebnost in varnost) lahko kadar koli izbrišete obstoječe
              piškotke ali preprečite shranjevanje novih. Upoštevajte, da s tem
              morda ne boste mogli v celoti uporabljati nekaterih funkcij spletnih strani.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-base font-semibold text-[#0a0a0a] mb-3">
              8. Kontakt
            </h2>
            <p>
              Za vsa vprašanja v zvezi z varstvom osebnih podatkov nas kontaktirajte:
            </p>
            <p className="mt-2">
              <a
                href="mailto:zorman.doo@telemach.net"
                className="text-[#7ecba1] hover:underline"
              >
                zorman.doo@telemach.net
              </a>
            </p>
          </section>

        </div>

        {/* Bottom back link */}
        <div className="mt-16 pt-8 border-t border-[#e0e0e0]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs text-[#777777] hover:text-[#0a0a0a] transition-colors duration-200"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8.5 2.5L4 7l4.5 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Nazaj na začetno stran
          </Link>
        </div>
      </div>
    </main>
  );
}
