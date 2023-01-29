import React from "react";
import { BiSupport, BiBus, BiDislike, BiDollar, BiDizzy, BiStore, BiPhoneCall, BiEnvelope } from "react-icons/bi";
const ContactCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
      <div className=" px-2 flex items-center bg-snow border-2 rounded-lg border-darkgray">
        <div className="shrink-0">
          <div className="p-4 bg-blue text-white rounded-md shadow-md w-14 h-14 flex items-center justify-center">
            <BiSupport size={32} />
          </div>
        </div>
        <div className="grow ml-6">
          <p className="font-bold mb-1">Dział Obsługi Klienta</p>
          <p className="text-gray-500">support@example.com</p>
          <p className="text-gray-500">+1 234-567-89</p>
        </div>
        <div className="md:hidden shrink-0 px-3">
          <div className="p-4 bg-blue text-white rounded-md shadow-md w-14 h-14 flex items-center justify-center">
            <BiEnvelope size={32} />
          </div>
        </div>
        <div className="md:hidden shrink-0">
          <div className="p-4 bg-blue text-white rounded-md shadow-md w-14 h-14 flex items-center justify-center">
            <BiPhoneCall size={32} />
          </div>
        </div>
      </div>
      <div className=" px-2 flex items-center bg-snow border-2 rounded-lg border-darkgray">
        <div className="shrink-0">
          <div className="p-4 bg-blue text-white rounded-md shadow-md w-14 h-14 flex items-center justify-center">
            <BiDislike size={32} />
          </div>
        </div>
        <div className="grow ml-6">
          <p className="font-bold mb-1">Dział reklamacji</p>
          <p className="text-gray-500">support@example.com</p>
          <p className="text-gray-500">+1 234-567-89</p>
        </div>
        <div className="md:hidden shrink-0 px-3">
          <div className="p-4 bg-blue text-white rounded-md shadow-md w-14 h-14 flex items-center justify-center">
            <BiEnvelope size={32} />
          </div>
        </div>
        <div className="md:hidden shrink-0">
          <div className="p-4 bg-blue text-white rounded-md shadow-md w-14 h-14 flex items-center justify-center">
            <BiPhoneCall size={32} />
          </div>
        </div>
      </div>
      <div className=" px-2 flex items-center bg-snow border-2 rounded-lg border-darkgray">
        <div className="shrink-0">
          <div className="p-4 bg-blue text-white rounded-md shadow-md w-14 h-14 flex items-center justify-center">
            <BiDollar size={32} />
          </div>
        </div>
        <div className="grow ml-6">
          <p className="font-bold mb-1">Rozliczenia wynajmów</p>
          <p className="text-gray-500">support@example.com</p>
          <p className="text-gray-500">+1 234-567-89</p>
        </div>
        <div className="md:hidden shrink-0 px-3">
          <div className="p-4 bg-blue text-white rounded-md shadow-md w-14 h-14 flex items-center justify-center">
            <BiEnvelope size={32} />
          </div>
        </div>
        <div className="md:hidden shrink-0">
          <div className="p-4 bg-blue text-white rounded-md shadow-md w-14 h-14 flex items-center justify-center">
            <BiPhoneCall size={32} />
          </div>
        </div>
      </div>
      <div className=" px-2 flex items-center bg-snow border-2 rounded-lg border-darkgray">
        <div className="shrink-0">
          <div className="p-4 bg-blue text-white rounded-md shadow-md w-14 h-14 flex items-center justify-center">
            <BiDizzy size={32} />
          </div>
        </div>
        <div className="grow ml-6">
          <p className="font-bold mb-1">Szkody komunikacyjne</p>
          <p className="text-gray-500">support@example.com</p>
          <p className="text-gray-500">+1 234-567-89</p>
        </div>
        <div className="md:hidden shrink-0 px-3">
          <div className="p-4 bg-blue text-white rounded-md shadow-md w-14 h-14 flex items-center justify-center">
            <BiEnvelope size={32} />
          </div>
        </div>
        <div className="md:hidden shrink-0">
          <div className="p-4 bg-blue text-white rounded-md shadow-md w-14 h-14 flex items-center justify-center">
            <BiPhoneCall size={32} />
          </div>
        </div>
      </div>
      <div className=" px-2 flex items-center bg-snow border-2 rounded-lg border-darkgray">
        <div className="shrink-0">
          <div className="p-4 bg-blue text-white rounded-md shadow-md w-14 h-14 flex items-center justify-center">
            <BiBus size={32} />
          </div>
        </div>
        <div className="grow ml-6">
          <p className="font-bold mb-1">Serwis mechaniczny</p>
          <p className="text-gray-500">support@example.com</p>
          <p className="text-gray-500">+1 234-567-89</p>
        </div>
        <div className="md:hidden shrink-0 px-3">
          <div className="p-4 bg-blue text-white rounded-md shadow-md w-14 h-14 flex items-center justify-center">
            <BiEnvelope size={32} />
          </div>
        </div>
        <div className="md:hidden shrink-0">
          <div className="p-4 bg-blue text-white rounded-md shadow-md w-14 h-14 flex items-center justify-center">
            <BiPhoneCall size={32} />
          </div>
        </div>
      </div>
      <div className=" px-2 flex items-center bg-snow border-2 rounded-lg border-darkgray">
        <div className="shrink-0">
          <div className="p-4 bg-blue text-white rounded-md shadow-md w-14 h-14 flex items-center justify-center">
            <BiStore size={32} />
          </div>
        </div>
        <div className="grow ml-6">
          <p className="font-bold mb-1">Dział marketingu</p>
          <p className="text-gray-500">support@example.com</p>
          <p className="text-gray-500">+1 234-567-89</p>
        </div>
        <div className="md:hidden shrink-0 px-3">
          <div className="p-4 bg-blue text-white rounded-md shadow-md w-14 h-14 flex items-center justify-center">
            <BiEnvelope size={32} />
          </div>
        </div>
        <div className="md:hidden shrink-0">
          <div className="p-4 bg-blue text-white rounded-md shadow-md w-14 h-14 flex items-center justify-center">
            <BiPhoneCall size={32} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCards;
