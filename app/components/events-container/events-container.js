import EventsData from "@/public/cardFilter";
import EventsList from "./group-events";
import Recommended from "./Recommended";
import EventSearchComponent from "./EventSearchComponent";

function EventsContainer() {
  return (
    <section className="w-full my-20">
      <EventSearchComponent/>
      <div className="w-[90%] m-auto">
        <h1 className="text-6xl font-bold mb-16">Upcoming Events in Sydney</h1>
        <Recommended/>
        <h2 className="text-5xl font-bold my-9">Events by Date</h2>
        <div>
          <EventsList groupedEvents={EventsData} />
        </div>
      </div>
    </section>
  );
}

export default EventsContainer;
