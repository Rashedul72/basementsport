'use client';

interface CalendarModalProps {
  selectedCard: number | null;
  selectedDate: { day: number; month: string; year: number };
  onDateChange: (date: { day: number; month: string; year: number }) => void;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function CalendarModal({ selectedCard, selectedDate, onDateChange, onConfirm, onCancel }: CalendarModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 bg-opacity-50">
      <div className="relative rounded-lg bg-white p-8 shadow-xl" style={{ width: '90%', maxWidth: '500px' }}>
        <h2 className="mb-6 text-center text-xl font-semibold text-black" style={{ fontFamily: 'var(--font-public-sans)', fontSize: '18px', fontWeight: 600 }}>
          Please select your start date
        </h2>
        
        {/* Date Picker - Simple version with scrollable columns */}
        <div className="mb-6 flex justify-center gap-4">
          {/* Day Column */}
          <div className="flex flex-col items-center">
            <div className="mb-2 text-sm font-medium text-gray-600">Day</div>
            <div className="flex h-48 flex-col overflow-y-auto border border-gray-200 rounded">
              {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                <button
                  key={day}
                  onClick={() => onDateChange({ ...selectedDate, day })}
                  className={`px-4 py-2 text-sm ${
                    selectedDate.day === day
                      ? 'bg-[#5D06E9] text-white font-semibold'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  style={{ fontFamily: 'var(--font-public-sans)' }}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Month Column */}
          <div className="flex flex-col items-center">
            <div className="mb-2 text-sm font-medium text-gray-600">Month</div>
            <div className="flex h-48 flex-col overflow-y-auto border border-gray-200 rounded">
              {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month) => (
                <button
                  key={month}
                  onClick={() => onDateChange({ ...selectedDate, month })}
                  className={`px-4 py-2 text-sm whitespace-nowrap ${
                    selectedDate.month === month
                      ? 'bg-[#5D06E9] text-white font-semibold'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  style={{ fontFamily: 'var(--font-public-sans)' }}
                >
                  {month}
                </button>
              ))}
            </div>
          </div>

          {/* Year Column */}
          <div className="flex flex-col items-center">
            <div className="mb-2 text-sm font-medium text-gray-600">Year</div>
            <div className="flex h-48 flex-col overflow-y-auto border border-gray-200 rounded">
              {Array.from({ length: 20 }, (_, i) => new Date().getFullYear() - 10 + i).map((year) => (
                <button
                  key={year}
                  onClick={() => onDateChange({ ...selectedDate, year })}
                  className={`px-4 py-2 text-sm ${
                    selectedDate.year === year
                      ? 'bg-[#5D06E9] text-white font-semibold'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  style={{ fontFamily: 'var(--font-public-sans)' }}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Info Note */}
        <div className="mb-6 text-sm text-gray-600" style={{ fontFamily: 'var(--font-public-sans)', fontSize: '14px', lineHeight: '20px' }}>
          <strong>NB:</strong> You&apos;ve chosen a {selectedCard}-week schedule starting on {selectedDate.month} {selectedDate.day}, {selectedDate.year}, with sessions on Mon, Tue, Thu, Fri, and Sat. We&apos;ll automatically set your end date, and you can renew whenever you like — no worries!
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <button
            onClick={onCancel}
            className="rounded text-red-600 transition-colors hover:bg-red-50"
            style={{
              width: '224.5px',
              height: '48px',
              minHeight: '48px',
              paddingTop: '8px',
              paddingRight: '40px',
              paddingBottom: '8px',
              paddingLeft: '40px',
              borderRadius: '4px',
              fontFamily: 'var(--font-public-sans)',
              fontSize: '15px',
              fontWeight: 600,
              lineHeight: '15px',
              textTransform: 'uppercase',
            }}
          >
            CANCEL
          </button>
          <button
            onClick={onConfirm}
            className="rounded text-white transition-colors hover:opacity-90"
            style={{
              width: '224.5px',
              height: '48px',
              minHeight: '48px',
              paddingTop: '8px',
              paddingRight: '40px',
              paddingBottom: '8px',
              paddingLeft: '40px',
              borderRadius: '4px',
              background: '#5D06E9',
              fontFamily: 'var(--font-public-sans)',
              fontSize: '15px',
              fontWeight: 600,
              lineHeight: '15px',
              textTransform: 'uppercase',
            }}
          >
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  );
}

