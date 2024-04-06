"use client"
import { AtSymbolIcon, LinkIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { SetStateAction, useEffect, useState } from "react";
import Clubs from "./clubs.json";
import StateFilter from "./components/StateFilter";
import { Club } from "./types/Club";
import ClubList from "./components/ClubList";
import logo from '../public/logo.png';
import Image from "next/image";

const clubs: Array<Club> = Clubs.sort((a,b) => a.state > b.state ? 1 : -1);

export default function Home() {
  const [selectedState, setSelectedState] = useState('');
  const [filteredclubs, setFilteredclubs] = useState(Array<Club>);
  useEffect(() => {
    setFilteredclubs(clubs);
    if(selectedState) {
      setFilteredclubs(clubs.filter((elem) => elem.state == selectedState));
    }
  },[selectedState]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24 md:pt-12 lg:p-24 lg:pt-12 bg-white dark:bg-gray-800">
      <div className="max-w-lg mx-auto">
        <Image src={logo} alt="Brassagem Forte" className="mx-auto w-6/12 mt-2 mb-7" />
        <h1 className="text-4xl font-bold mb-7">Associações Cervejeiras</h1>
          <p className="mb-7 text-sm text-gray-300">
          Com o intuíto de conectar Associações Cervejeiras com possíveis interessados em participar e
          também de fomentar essa participação, criamos esse mapeamento.
          Se você conhece uma associação que não está listada aqui,
          por favor use esse <a className="underline" href="https://docs.google.com/forms/d/e/1FAIpQLSdNbslUn6B-uf9Q88_I1LzMwqCm_26Uf2Aqv930GhZDuTTt7Q/viewform?usp=sf_link">formulário</a> e ajude a enriquecer essa lista.</p>
        <StateFilter states={clubs.map((elem) => elem.state)} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setSelectedState(e.target.value)}  />
        <ClubList clubs={filteredclubs} />
      </div>
      <footer className="mt-5">Brassagem Forte Corp - 2024</footer>
    </main>
  );
}
