import React, { useEffect, useState } from "react";
import ExprienceCard from "../ExprienceCard";
import GitHubCalendar from "react-github-calendar";

const experiences = [
  {
    tanggal: "FEB 2024 - JUNE 2024",
    keterangan: "Advanced Programming Practicum Assistant",
  },
  {
    tanggal: "FEB 2024 - JUNE 2024",
    keterangan: "Basic Database Practicum Asssitant",
  },
  {
    tanggal: "SEP 2024 - DES 2024",
    keterangan: "Database Administation Practicum Assistant",
  },
  {
    tanggal: "MARCH 2024 - DES 2024",
    keterangan:
      "Informatics and Technology Development Staff at Keluarga Besar Departemen Sistem Informasi ",
  },
];

const Experiences = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [progressStates, setProgressStates] = useState(
    Array(experiences.length).fill(0) // Progress setiap card mulai dari 0%
  );

  const handleCardClick = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex(null); // Jika card yang aktif diklik, nonaktifkan
    } else {
      setSelectedIndex(index); // Aktifkan card yang baru dipilih
    }
  };

  useEffect(() => {
    const newProgressStates = progressStates.map((progress, index) => {
      if (selectedIndex === null) {
        return 0; // Reset semua jika tidak ada yang dipilih
      } else if (index < selectedIndex) {
        return 100; // Card sebelum card terpilih memiliki progress penuh
      } else if (index === selectedIndex) {
        return 50; // Card terpilih memiliki progress setengah
      } else {
        return 0; // Card setelah card terpilih tidak memiliki progress
      }
    });
    setProgressStates(newProgressStates);
  }, [selectedIndex]);

  return (
    <section>
      <div className="container">
        <h2 className="font-primaryBold text-3xl text-slate-50">Experiences</h2>
        <div className="flex items-stretch mt-8">
          {experiences.map((item, index) => (
            <ExprienceCard
              tanggal={item.tanggal}
              keterangan={item.keterangan}
              key={index}
              isSelected={selectedIndex === index}
              progress={progressStates[index]}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>
        <div className="flex w-full justify-center mt-12">
          <div className="p-8 w-full sm:w-fit bg-primaryBlack-0 rounded-lg shadow-[0_0_15px_5px] shadow-primaryOrange-0">
            <GitHubCalendar username="farisfian06" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
