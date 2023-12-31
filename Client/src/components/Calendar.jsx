import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (arg) => {
    const dateStr = arg.dateStr;
    setSelectedDate(dateStr);
    setModalOpen(true);
  };


  const handleSaveEvent = () => {
    // Aquí puedes manejar la lógica para guardar el evento
    console.log("Evento guardado:", selectedDate);
    handleCloseModal();
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        height={"90vh"}
        selectable={true}
        select={handleDateClick}
        events={[
          // Aquí puedes proporcionar eventos preexistentes si los tienes
        ]}
      />
    </div>
  );
}

export default Calendar;
