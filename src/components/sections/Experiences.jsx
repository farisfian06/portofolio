import React, { useEffect, useState } from "react";
import ExprienceCard from "../ExprienceCard";

const dumy = [
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
  const [selectedIndex, setSelectedIndex] = useState(null);

  const [progressStates, setProgressStates] = useState(
    Array(dumy.length).fill(0) // Progress setiap card mulai dari 0%
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
        <h2 className="font-primaryBold text-[4svh] text-slate-50">
          Experiences
        </h2>
        <div className="flex items-stretch">
          {dumy.map((item, index) => (
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
      </div>
    </section>
  );
};

export default Experiences;
