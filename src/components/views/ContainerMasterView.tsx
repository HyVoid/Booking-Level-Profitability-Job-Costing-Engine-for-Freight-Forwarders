import React, { useState } from 'react';
import { Layers, Plus, Trash2 } from 'lucide-react';
import { AppState, ContainerMasterItem } from '../../types';

interface ContainerMasterViewProps {
  state: AppState;
  onUpdateContainers: (newContainers: ContainerMasterItem[]) => void;
}

export const ContainerMasterView: React.FC<ContainerMasterViewProps> = ({
  state,
  onUpdateContainers,
}) => {
  const [newContainerId, setNewContainerId] = useState('');
  const [newBookingId, setNewBookingId] = useState(
    state.bookings[0]?.bookingId || ''
  );
  const [newSizeType, setNewSizeType] = useState('40HQ');
  const [newStatus, setNewStatus] = useState('In Transit');

  const handleCellEdit = (
    idx: number,
    field: keyof ContainerMasterItem,
    val: string
  ) => {
    const updated = [...state.containers];
    updated[idx] = { ...updated[idx], [field]: val };
    onUpdateContainers(updated);
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newContainerId.trim()) return;

    if (state.containers.some((c) => c.containerId === newContainerId.trim())) {
      alert('Container ID already exists!');
      return;
    }

    const newItem: ContainerMasterItem = {
      containerId: newContainerId.trim().toUpperCase(),
      bookingId: newBookingId,
      sizeType: newSizeType,
      containerStatus: newStatus,
    };

    onUpdateContainers([...state.containers, newItem]);
    setNewContainerId('');
  };

  const handleDelete = (id: string) => {
    if (confirm(`Delete container ${id}?`)) {
      onUpdateContainers(state.containers.filter((c) => c.containerId !== id));
    }
  };

  return (
    <div className="space-y-6 animate-fade-up">
      <div>
        <h1 className="font-garamond text-2xl font-bold text-[#051C2C]">
          Container Master Registry
        </h1>
        <p className="text-xs text-[#888888] mt-0.5">
          1:N mapping connecting physical container IDs (TEU/HQ) to Master Booking Orders.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleAdd}
        className="bg-white p-4 rounded-xl border border-[#E8E8E6] shadow-xs flex flex-wrap items-end gap-3"
      >
        <div className="space-y-1">
          <label className="text-[11px] font-semibold text-[#051C2C] uppercase tracking-wider">
            Container ID *
          </label>
          <input
            type="text"
            required
            value={newContainerId}
            onChange={(e) => setNewContainerId(e.target.value)}
            placeholder="MSCU9988112"
            className="editable-input px-3 py-1.5 rounded-md text-xs w-40 font-mono font-semibold"
          />
        </div>

        <div className="space-y-1">
          <label className="text-[11px] font-semibold text-[#051C2C] uppercase tracking-wider">
            Booking ID *
          </label>
          <select
            value={newBookingId}
            onChange={(e) => setNewBookingId(e.target.value)}
            className="editable-input px-3 py-1.5 rounded-md text-xs w-48 font-mono"
          >
            {state.bookings.map((b) => (
              <option key={b.bookingId} value={b.bookingId}>
                {b.bookingId} ({b.customerName})
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-[11px] font-semibold text-[#051C2C] uppercase tracking-wider">
            Size / Type
          </label>
          <select
            value={newSizeType}
            onChange={(e) => setNewSizeType(e.target.value)}
            className="editable-input px-3 py-1.5 rounded-md text-xs w-28"
          >
            <option value="40HQ">40HQ</option>
            <option value="20GP">20GP</option>
            <option value="40GP">40GP</option>
            <option value="Reefer">Reefer</option>
            <option value="LCL">LCL</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-[11px] font-semibold text-[#051C2C] uppercase tracking-wider">
            Status
          </label>
          <select
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
            className="editable-input px-3 py-1.5 rounded-md text-xs w-32"
          >
            <option value="Booked">Booked</option>
            <option value="In Transit">In Transit</option>
            <option value="Customs Hold">Customs Hold</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>

        <button
          type="submit"
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-md bg-[#2251FF] text-white text-xs font-semibold hover:bg-[#1a40cc] transition-colors cursor-pointer shadow-xs"
        >
          <Plus className="w-4 h-4" />
          <span>Add Container</span>
        </button>
      </form>

      {/* Table */}
      <div className="bg-white rounded-xl border border-[#E8E8E6] overflow-hidden card-hover">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="table-header">
              <tr>
                <th className="p-3">Container ID (PK)</th>
                <th className="p-3">Booking ID (FK)</th>
                <th className="p-3">Size / Type</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8E8E6]">
              {state.containers.map((container, idx) => (
                <tr key={container.containerId} className="hover:bg-[#F5F5F2]/80">
                  <td className="p-3 font-mono font-bold text-[#051C2C]">
                    {container.containerId}
                  </td>
                  <td className="p-3">
                    <select
                      value={container.bookingId}
                      onChange={(e) =>
                        handleCellEdit(idx, 'bookingId', e.target.value)
                      }
                      className="editable-input px-2 py-1 rounded text-xs font-mono font-semibold"
                    >
                      {state.bookings.map((b) => (
                        <option key={b.bookingId} value={b.bookingId}>
                          {b.bookingId}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="p-3">
                    <select
                      value={container.sizeType}
                      onChange={(e) =>
                        handleCellEdit(idx, 'sizeType', e.target.value)
                      }
                      className="editable-input px-2 py-1 rounded text-xs"
                    >
                      <option value="40HQ">40HQ</option>
                      <option value="20GP">20GP</option>
                      <option value="40GP">40GP</option>
                      <option value="Reefer">Reefer</option>
                      <option value="LCL">LCL</option>
                    </select>
                  </td>
                  <td className="p-3">
                    <select
                      value={container.containerStatus}
                      onChange={(e) =>
                        handleCellEdit(idx, 'containerStatus', e.target.value)
                      }
                      className="editable-input px-2 py-1 rounded text-xs"
                    >
                      <option value="Booked">Booked</option>
                      <option value="In Transit">In Transit</option>
                      <option value="Customs Hold">Customs Hold</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => handleDelete(container.containerId)}
                      className="p-1 text-[#888888] hover:text-[#D32F2F] hover:bg-[#D32F2F]/10 rounded cursor-pointer transition-colors"
                      title="Delete Container"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
