import { EventDetails } from "./EventDetails";
import Image from "./assets/images/raghu-logo.png";
import FilterIcon from "./assets/icons/filter.svg";
import CancelIcon from "./assets/icons/cancel.svg";

export const Labels = ["Technical", "Sports", "Culturals"];

const Events = () => {
  return (
    <div className="m-4">
    <div className="relative flex flex-row">
      {Labels.map((label, index) => (
        <button key={index} className="bg-white border-black border-2 text-black hover:bg-black hover:text-white text-sm px-4 py-1 rounded-full mr-2">
          {label}
        </button>
      ))}
      <div className="size-8">
        <button>
          <img src={CancelIcon} alt="" className="my-0 size-8"/>
        </button>
      </div>
      <div className="absolute right-3">
        <button className="">
          <img src={FilterIcon} alt="Filter the events" className="size-9"/>
        </button>
      </div>
      
    </div>
    <div className="grid grid-cols-3  max-lg:grid-cols-2 max-lg:gap-6 gap-8 max-sm:flex max-sm:flex-col max-md:gap-2 max-sm:items-center">
        {EventDetails.map((e) => {
          return (
          <Card title={e.title} description={e.description}/>
          );
        })}
    </div>
    </div>
  )
}
export default Events;

export const Card = ({ title, description, src }) => {
  return (
    <div className="relative bg-gray-200 p-4 rounded-lg shadow-md h-[300px] w-[400px] mt-6">
      <div className="absolute right-3 bg-white text-black px-3 py-0 rounded-xl">
        Live
      </div>
      <img src={Image} alt={title} />
      <div className=" bottom-3 p-2">
        <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};

