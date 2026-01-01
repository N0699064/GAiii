import React, { useState } from 'react';
import { Calendar } from '../components/ui/calendar';
import { Clock, Globe, AlignLeft, ChevronDown, ChevronUp } from 'lucide-react';

const BookingSection = () => {
  const [date, setDate] = useState(new Date());
  const [showMore, setShowMore] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM',
    '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM'
  ];

  return (
    <section id="booking" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Book a Free Introduction Call
        </h2>

        {/* Booking Widget */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left Side - Info */}
            <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-100">
              {/* Logo */}
              <div className="w-12 h-12 mb-4">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <defs>
                    <linearGradient id="bookingLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#7C3AED" />
                    </linearGradient>
                  </defs>
                  <path d="M20 5 L35 30 L5 30 Z" fill="url(#bookingLogoGradient)" />
                  <path d="M20 12 L28 26 L12 26 Z" fill="white" opacity="0.3" />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                FutureFlow AI - Introduction Call
              </h3>

              <div className="space-y-3 text-gray-600">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span>30 Mins</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-gray-400" />
                  <span>Europe/London (GMT)</span>
                </div>
                <div className="flex items-start gap-3">
                  <AlignLeft className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-800">
                      For Businesses Who Want To Save Time & Make More Money By Automating Lead Nurturing With AI Agents...
                    </p>
                    {showMore && (
                      <p className="mt-2 text-sm text-gray-500">
                        This is just a quick introduction to see if you would be a good fit for our solution.
                      </p>
                    )}
                    <button
                      onClick={() => setShowMore(!showMore)}
                      className="text-purple-600 text-sm font-medium mt-1 flex items-center gap-1 hover:underline"
                    >
                      {showMore ? (
                        <>Show Less <ChevronUp className="w-4 h-4" /></>
                      ) : (
                        <>Show More <ChevronDown className="w-4 h-4" /></>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Calendar */}
            <div className="p-6 md:p-8">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md"
                classNames={{
                  months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                  month: "space-y-4",
                  caption: "flex justify-center pt-1 relative items-center",
                  caption_label: "text-sm font-medium",
                  nav: "space-x-1 flex items-center",
                  nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
                  nav_button_previous: "absolute left-1",
                  nav_button_next: "absolute right-1",
                  table: "w-full border-collapse space-y-1",
                  head_row: "flex",
                  head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
                  row: "flex w-full mt-2",
                  cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                  day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-purple-100 rounded-full",
                  day_range_end: "day-range-end",
                  day_selected: "bg-purple-600 text-white hover:bg-purple-600 hover:text-white focus:bg-purple-600 focus:text-white",
                  day_today: "bg-purple-100 text-purple-900",
                  day_outside: "text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
                  day_disabled: "text-muted-foreground opacity-50",
                  day_hidden: "invisible",
                }}
              />

              {/* Time Zone */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <label className="text-sm text-gray-600 block mb-2">Time zone</label>
                <div className="flex items-center gap-2 text-sm text-gray-800 bg-gray-50 rounded-lg px-3 py-2">
                  <Globe className="w-4 h-4 text-gray-400" />
                  <span>GMT+00:00 UTC (UTC)</span>
                </div>
              </div>

              {/* Time Slots */}
              {date && (
                <div className="mt-4">
                  <label className="text-sm text-gray-600 block mb-2">Available times</label>
                  <div className="grid grid-cols-3 gap-2 max-h-32 overflow-y-auto">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`text-sm py-2 px-3 rounded-lg border transition-all ${
                          selectedTime === time
                            ? 'bg-purple-600 text-white border-purple-600'
                            : 'border-gray-200 hover:border-purple-400 text-gray-700'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {selectedTime && (
                <button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-all">
                  Confirm Booking
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
