import React, { useState } from 'react';
import { Plus, Ship, Trash2 } from 'lucide-react';
import { AppState, BookingMasterItem } from '../../types';

interface BookingMasterViewProps {
  state: AppState;
  onUpdateBookings: (newBookings: BookingMasterItem[]) => void;
}

export const BookingMasterView: React.FC<BookingMasterViewProps> = ({
  state,
  onUpdateBookings,
}) => {
  const [newBookingId, setNewBookingId] = useState('');
  const [newOrderDate, setNewOrderDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [newCustomerName, setNewCustomerName] = useState('');
  const [newStatus, setNewStatus] = useState('In Transit');

  const handleCellEdit = (
    idx: number,
    field: keyof BookingMasterItem,
    val: string
  ) => {
    const updated = [...state.bookings];
    updated[idx] = { ...updated[idx], [field]: val };
    onUpdateBookings(updated);
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBookingId.trim() || !newCustomerName.trim()) return;

    if (state.bookings.some((b) => b.bookingId === newBookingId.trim())) {
      alert('Booking ID already exists!');
      return;
    }

    const newItem: BookingMasterItem = {
      bookingId: newBookingId.trim().toUpperCase(),
      orderDate: newOrderDate,
      customerName: newCustomerName.trim(),
      bookingStatus: newStatus,
    };

    onUpdateBookings([...state.bookings, newItem]);
    setNewBookingId('');
    setNewCustomerName('');
  };

  const handleDelete = (id: string) => {
    if (confirm(`Delete booking ${id}? Associated transactions may lose link.`)) {
      onUpdateBookings(state.bookings.filter((b) => b.bookingId !== id));
    }
  };

  return (
    <div className="space-y-6 animate-fade-up">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-garamond text-2xl font-bold text-[#051C2C]">
            Booking Master Index
          </h1>
          <p className="text-xs text-[#888888] mt-0.5">
            Primary registry for freight order IDs, client mappings, and auto-computed container volume denominators.
          </p>
        </div>
      </div>

      {/* Add New Booking Form */}
      <form
        onSubmit={handleAdd}
        className="bg-white p-4 rounded-xl border border-[#E8E8E6] shadow-xs flex flex-wrap items-end gap-3"
      >
        <div className="space-y-1">
          <label className="text-[11px] font-semibold text-[#051C2C] uppercase tracking-wider">
            Booking ID *
          </label>
          <input
            type="text"
            required
            value={newBookingId}
            onChange={(e) => setNewBookingId(e.target.value)}
            placeholder="BFLCOMEINSMAC006"
            className="editable-input px-3 py-1.5 rounded-md text-xs w-44 font-mono font-semibold"
          />
        </div>

        <div className="space-y-1">
          <label className="text-[11px] font-semibold text-[#051C2C] uppercase tracking-wider">
            Order Date
          </label>
          <input
            type="date"
            value={newOrderDate}
            onChange={(e) => setNewOrderDate(e.target.value)}
            className="editable-input px-3 py-1.5 rounded-md text-xs w-36 font-mono"
          />
        </div>

        <div className="space-y-1 flex-1 min-w-[200px]">
          <label className="text-[11px] font-semibold text-[#051C2C] uppercase tracking-wider">
            Customer Name *
          </label>
          <input
            type="text"
            required
            value={newCustomerName}
            onChange={(e) => setNewCustomerName(e.target.value)}
            placeholder="Global Logistics Inc"
            className="editable-input px-3 py-1.5 rounded-md text-xs w-full"
          />
        </div>

        <div className="space-y-1">
          <label className="text-[11px] font-semibold text-[#051C2C] uppercase tracking-wider">
            Booking Status
          </label>
          <select
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
            className="editable-input px-3 py-1.5 rounded-md text-xs w-36"
          >
            <option value="Booked">Booked</option>
            <option value="In Transit">In Transit</option>
            <option value="Customs Hold">Customs Hold</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <button
          type="submit"
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-md bg-[#2251FF] text-white text-xs font-semibold hover:bg-[#1a40cc] transition-colors cursor-pointer shadow-xs"
        >
          <Plus className="w-4 h-4" />
          <span>Add Booking</span>
        </button>
      </form>

      {/* Bookings Table */}
      <div className="bg-white rounded-xl border border-[#E8E8E6] overflow-hidden card-hover">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="table-header">
              <tr>
                <th className="p-3">Booking ID (PK)</th>
                <th className="p-3">Order Date</th>
                <th className="p-3">Customer Name</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-center">Container Count (Auto)</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8E8E6]">
              {state.bookings.map((booking, idx) => {
                // Calculate Container Count formula: MAP(bk, COUNTIF(Container_Master!A:A, bk), fallback=1)
                const realCount = state.containers.filter(
                  (c) => c.bookingId === booking.bookingId
                ).length;
                const safeCount = realCount === 0 ? 1 : realCount;

                return (
                  <tr key={booking.bookingId} className="hover:bg-[#F5F5F2]/80">
                    <td className="p-3 font-mono font-bold text-[#051C2C]">
                      {booking.bookingId}
                    </td>
                    <td className="p-3">
                      <input
                        type="date"
                        value={booking.orderDate}
                        onChange={(e) =>
                          handleCellEdit(idx, 'orderDate', e.target.value)
                        }
                        className="editable-input px-2 py-1 rounded text-xs font-mono"
                      />
                    </td>
                    <td className="p-3">
                      <input
                        type="text"
                        value={booking.customerName}
                        onChange={(e) =>
                          handleCellEdit(idx, 'customerName', e.target.value)
                        }
                        className="editable-input px-2 py-1 rounded text-xs w-full max-w-xs font-medium"
                      />
                    </td>
                    <td className="p-3">
                      <select
                        value={booking.bookingStatus}
                        onChange={(e) =>
                          handleCellEdit(idx, 'bookingStatus', e.target.value)
                        }
                        className="editable-input px-2 py-1 rounded text-xs"
                      >
                        <option value="Booked">Booked</option>
                        <option value="In Transit">In Transit</option>
                        <option value="Customs Hold">Customs Hold</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </td>
                    <td className="p-3 text-center">
                      <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full bg-[#2251FF]/10 text-[#2251FF] font-mono font-bold text-xs">
                        {safeCount}{' '}
                        {realCount === 0 && (
                          <span className="text-[10px] text-[#888888] font-normal ml-1">
                            (Fallback)
                          </span>
                        )}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => handleDelete(booking.bookingId)}
                        className="p-1 text-[#888888] hover:text-[#D32F2F] hover:bg-[#D32F2F]/10 rounded cursor-pointer transition-colors"
                        title="Delete Booking"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
