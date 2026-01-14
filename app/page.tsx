'use client';

import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CardsSection from "./components/CardsSection";
import DatePickerSection from "./components/DatePickerSection";
import CalendarModal from "./components/CalendarModal";
import Footer from "./components/Footer";

export default function Home() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<{ day: number; month: string; year: number }>({ 
    day: new Date().getDate(), 
    month: new Date().toLocaleString('default', { month: 'long' }), 
    year: new Date().getFullYear() 
  });
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  const cards = [
    { id: 1, title: "1 WEEK", price: "$35 for 5 days" },
    { id: 2, title: "2 WEEKS", price: "$70 for 10 days" },
    { id: 3, title: "3 WEEKS", price: "$105 for 15 days" },
    { id: 4, title: "4 WEEKS", price: "$140 for 20 days" },
  ];

  const handleCardClick = (cardId: number) => {
    if (selectedCard === cardId) {
      setSelectedCard(null);
      setShowDatePicker(false);
      setStartDate('');
      setEndDate('');
    } else {
      setSelectedCard(cardId);
      setShowDatePicker(true);
      setStartDate('');
      setEndDate('');
    }
  };

  const handleCalendarClick = () => {
    setShowCalendarModal(true);
  };

  const formatDate = (day: number, month: string, year: number): string => {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthIndex = monthNames.indexOf(month);
    const monthNumber = monthIndex + 1;
    return `${monthNumber.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;
  };

  const calculateEndDate = (startDay: number, startMonth: string, startYear: number, weeks: number): string => {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthIndex = monthNames.indexOf(startMonth);
    const startDateObj = new Date(startYear, monthIndex, startDay);
    const endDateObj = new Date(startDateObj);
    endDateObj.setDate(endDateObj.getDate() + (weeks * 7));
    
    const endMonth = (endDateObj.getMonth() + 1).toString().padStart(2, '0');
    const endDay = endDateObj.getDate().toString().padStart(2, '0');
    const endYear = endDateObj.getFullYear();
    
    return `${endMonth}/${endDay}/${endYear}`;
  };

  const handleConfirmDate = () => {
    if (selectedCard) {
      const formattedStartDate = formatDate(selectedDate.day, selectedDate.month, selectedDate.year);
      setStartDate(formattedStartDate);
      
      const calculatedEndDate = calculateEndDate(selectedDate.day, selectedDate.month, selectedDate.year, selectedCard);
      setEndDate(calculatedEndDate);
    }
    setShowCalendarModal(false);
  };

  const handleCancelDate = () => {
    setShowCalendarModal(false);
  };

  return (
    <div className="min-h-screen w-full" style={{ width: '100vw', overflowX: 'hidden' }}>
      <Header />
      
      <HeroSection>
        <div className="relative mx-auto rounded-lg px-4" style={{ width: '100%', maxWidth: '1280px' }}>
          <CardsSection 
            cards={cards} 
            selectedCard={selectedCard} 
            onCardClick={handleCardClick} 
          />
          
          {showDatePicker && (
            <DatePickerSection
              selectedCard={selectedCard}
              cards={cards}
              startDate={startDate}
              endDate={endDate}
              onCalendarClick={handleCalendarClick}
            />
          )}
        </div>
      </HeroSection>

      {showCalendarModal && (
        <CalendarModal
          selectedCard={selectedCard}
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
          onConfirm={handleConfirmDate}
          onCancel={handleCancelDate}
        />
      )}

      <Footer selectedCard={selectedCard} cards={cards} />
    </div>
  );
}
