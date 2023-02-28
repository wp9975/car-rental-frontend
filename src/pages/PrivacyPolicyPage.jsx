import React from "react";

const policies = [
  {
    header: "Postanowienia ogólne",
    desc: "Polityka prywatności określa, jak zbierane, przetwarzane i przechowywane są dane osobowe Użytkowników niezbędne do świadczenia usług drogą elektroniczną za pośrednictwem serwisu internetowego [adres strony] (dalej: Serwis). Serwis zbiera wyłącznie dane osobowe niezbędne do świadczenia i rozwoju usług w nim oferowanych. Dane osobowe zbierane za pośrednictwem Serwisu są przetwarzane zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych, dalej RODO) oraz ustawą o ochronie danych osobowych z dnia 10 maja 2018 r.",
  },
  {
    header: "Administrator danych",
    desc: "Administratorem danych osobowych zbieranych poprzez Serwis jest [nazwa osoby prawnej/przedsiębiorcy/osoby fizycznej], adres: [adres siedziby/zamieszkania], KRS: [numer], NIP: [numer], REGON: [numer], adres poczty elektronicznej: [adres e-mail] (dalej: Administrator).",
  },
  {
    header: "Cel zbierania danych osobowych",
    desc: "Dane osobowe wykorzystywane są w celu: rejestracji konta i weryfikacji tożsamości Użytkownika, umożliwienia logowania do Serwisu, realizacji umowy dotyczącej usług i e-usług, komunikacji z Użytkownikiem (livechat, formularz kontaktowy itp.) wysyłki newslettera (po wyrażeniu zgody Użytkownika na jego otrzymywanie), prowadzenia systemu komentarzy, świadczenia usług społecznościowych, promocji oferty Administratora, marketingu, remarketingu, afiliacji, personalizacji Serwisu dla Użytkowników, działań analitycznych i statystycznych, windykacji należności, ustalenia i dochodzenia roszczeń albo obrony przed nimi. Podanie danych jest dobrowolne, ale niezbędne do zawarcia umowy albo skorzystania z innych funkcjonalności Serwisu.",
  },
  {
    header: "Rodzaj przetwarzanych danych osobowych",
    desc: "Polityka prywatności określa, jak zbierane, przetwarzane i przechowywane są dane osobowe Użytkowników niezbędne do świadczenia usług drogą elektroniczną za pośrednictwem serwisu internetowego [adres strony] (dalej: Serwis). Serwis zbiera wyłącznie dane osobowe niezbędne do świadczenia i rozwoju usług w nim oferowanych. Dane osobowe zbierane za pośrednictwem Serwisu są przetwarzane zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych, dalej RODO) oraz ustawą o ochronie danych osobowych z dnia 10 maja 2018 r.",
  },
  {
    header: "Okres przetwarzania danych osobowych",
    desc: "Dane osobowe Użytkowników będą przetwarzane przez okres: gdy podstawą przetwarzania danych jest wykonanie umowy – do momentu przedawnienia roszczeń po jej wykonaniu, gdy podstawą przetwarzania danych jest zgoda – do momentu jej odwołania, a po odwołaniu zgody do przedawnienia roszczeń. W obu przypadkach termin przedawnienia wynosi 6 lat, a dla roszczeń o świadczenia okresowe i roszczeń dotyczących prowadzenia działalności gospodarczej – 3 lata (jeśli przepis szczególny nie stanowi inaczej).",
  },
  {
    header: "Udostępnianie danych osobowych",
    desc: "Dane osobowe Użytkowników mogą być przekazywane: podmiotom powiązanym z Administratorem, jego podwykonawcom, podmiotom współpracującym z Administratorem np. firmom obsługującym e-płatności, firmom świadczącym usługi kurierskie/pocztowe, kancelariom prawnym. Dane osobowe Użytkowników nie będą/będą przekazywane poza teren Europejskiego Obszaru Gospodarczego (EOG).",
  },
  {
    header: "Prawa Użytkowników",
    desc: "Użytkownik Serwisu ma prawo do: dostępu do treści swoich danych osobowych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia, wniesienia sprzeciwu wobec przetwarzania, cofnięcia zgody w każdej chwili (co nie ma wpływu na zgodność z prawem przetwarzania dokonanego w oparciu o zgodę przed jej cofnięciem). Zgłoszenie o wystąpieniu przez Użytkownika z uprawnieniem wynikającym z wymienionych praw należy przesłać na adres [adres e-mail]. Administrator spełnia lub odmawia spełnienia żądania niezwłocznie – maksymalnie w ciągu miesiąca od jego otrzymania. Użytkownik ma prawo złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych, jeśli uzna, że przetwarzanie narusza jego prawa i wolności (RODO).",
  },
];

const PrivacyPolicyPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="flex flex-row flex-nowrap items-center my-8 w-full md:w-3/4">
        <span className="w-full flex-grow block border-2 border-gray"> </span>
        <span className="flex-none block mx-4 px-4 py-2.5 text-lg leading-none font-medium uppercase bg-darkgray text-white">
          Polityka prywatności
        </span>
        <span className="w-full flex-grow block border-2 border-gray"></span>
      </h2>
      <div className="pb-5 flex flex-col items-center justify-center space-y-4 max-w-screen-xl">
        {policies.map((item, index) => (
          <div key={index} className="p-5 rounded-lg bg-slategray-200 ">
            <h3 className="text-lg font-bold text-black">{index+1}. {item.header}</h3>
            <p className="text-md">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
