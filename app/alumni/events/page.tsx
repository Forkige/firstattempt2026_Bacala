'use client';

import { useState } from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';
import Tabs from '@/components/Tabs';
import { events } from '@/data/events';

export default function EventsPage() {
  const [view, setView] = useState<'list' | 'calendar'>('list');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [rsvpEvents, setRsvpEvents] = useState<Set<number>>(new Set([3, 6]));

  const categories = ['All', 'Reunions', 'Outreach', 'Donations'];
  const filteredEvents = selectedCategory === 'All'
    ? events
    : events.filter(e => e.category === selectedCategory);

  const toggleRSVP = (id: number) => {
    const newRsvp = new Set(rsvpEvents);
    if (newRsvp.has(id)) {
      newRsvp.delete(id);
    } else {
      newRsvp.add(id);
    }
    setRsvpEvents(newRsvp);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 pb-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold mb-1">Events & Updates 📅</h1>
          <p className="text-blue-100">Connect with your alumni community</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto p-4 -mt-4 space-y-6">
        {/* View Toggle */}
        <Card>
          <div className="flex gap-2 justify-center">
            <Button
              variant={view === 'list' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setView('list')}
            >
              List View
            </Button>
            <Button
              variant={view === 'calendar' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setView('calendar')}
            >
              Calendar View
            </Button>
          </div>
        </Card>

        {/* Category Filter */}
        <Tabs
          tabs={categories.map(cat => ({ id: cat, label: cat }))}
          defaultTab="All"
          onTabChange={setSelectedCategory}
          variant="pills"
        >
          <div />
        </Tabs>

        {/* List View */}
        {view === 'list' && (
          <div className="space-y-4">
            {filteredEvents.map(event => {
              const eventDate = new Date(event.date);
              const isRsvped = rsvpEvents.has(event.id);
              
              return (
                <Card key={event.id} className="hover:shadow-lg cursor-pointer">
                  <div className="flex gap-4">
                    <div className="hidden sm:block">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-24 h-24 rounded object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold text-gray-800 text-lg">{event.title}</h3>
                          <p className="text-sm text-blue-600 font-semibold">{event.category}</p>
                        </div>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {eventDate.toLocaleDateString()}
                        </span>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <p className="text-sm text-gray-700 line-clamp-2">{event.description}</p>
                        <div className="flex gap-4 text-sm text-gray-600">
                          <span>⏰ {event.time}</span>
                          <span>📍 {event.location}</span>
                        </div>
                      </div>

                      <Button
                        onClick={() => toggleRSVP(event.id)}
                        variant={isRsvped ? 'primary' : 'outline'}
                        size="sm"
                      >
                        {isRsvped ? '✓ RSVP\'d' : 'RSVP'}
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
            
            {filteredEvents.length === 0 && (
              <Card className="text-center py-8">
                <p className="text-gray-600">No events in this category</p>
              </Card>
            )}
          </div>
        )}

        {/* Calendar View */}
        {view === 'calendar' && (
          <Card>
            <div className="overflow-x-auto">
              <div className="min-w-full">
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-center font-bold text-gray-600 p-2 text-sm">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-2">
                  {/* Calendar days - simplified mock */}
                  {Array.from({ length: 35 }).map((_, i) => {
                    const day = i - 6 + 1; // Start from -6 to show previous month days
                    const hasEvent = filteredEvents.some(e => {
                      const eDay = new Date(e.date).getDate();
                      return eDay === (day > 0 ? day : 0);
                    });
                    
                    return (
                      <div
                        key={i}
                        className={`p-3 rounded text-center text-sm ${
                          day <= 0
                            ? 'text-gray-300 bg-gray-50'
                            : 'border border-gray-200'
                        } ${
                          hasEvent ? 'bg-blue-50 border-blue-300 font-bold' : ''
                        } cursor-pointer hover:bg-blue-100`}
                      >
                        {day > 0 ? day : ''}
                        {hasEvent && day > 0 && <div className="text-xs mt-1">📍</div>}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-6 border-t pt-4">
              <h3 className="font-bold text-gray-800 mb-3">Events This Month</h3>
              <div className="space-y-2">
                {filteredEvents.slice(0, 3).map(event => (
                  <div key={event.id} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-lg">📌</span>
                    <span className="flex-1">{event.title}</span>
                    <span className="text-xs text-gray-600">{event.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        )}

        <div className="pb-4" />
      </div>
    </div>
  );
}
