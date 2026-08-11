import React, { useState } from 'react';
import { Database, Plus, Trash2 } from 'lucide-react';
import { AppState, ServiceMasterItem } from '../../types';

interface ServiceMasterViewProps {
  state: AppState;
  onUpdateServices: (newServices: ServiceMasterItem[]) => void;
}

export const ServiceMasterView: React.FC<ServiceMasterViewProps> = ({
  state,
  onUpdateServices,
}) => {
  const [newCode, setNewCode] = useState('');
  const [newName, setNewName] = useState('');
  const [newCategory, setNewCategory] = useState('Freight');

  const handleCellEdit = (
    idx: number,
    field: keyof ServiceMasterItem,
    val: string
  ) => {
    const updated = [...state.services];
    updated[idx] = { ...updated[idx], [field]: val };
    onUpdateServices(updated);
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCode.trim() || !newName.trim()) return;

    if (state.services.some((s) => s.serviceCode === newCode.trim().toUpperCase())) {
      alert('Service Code already exists!');
      return;
    }

    const newItem: ServiceMasterItem = {
      serviceCode: newCode.trim().toUpperCase(),
      serviceName: newName.trim(),
      category: newCategory,
    };

    onUpdateServices([...state.services, newItem]);
    setNewCode('');
    setNewName('');
  };

  const handleDelete = (code: string) => {
    if (confirm(`Delete service code ${code}?`)) {
      onUpdateServices(state.services.filter((s) => s.serviceCode !== code));
    }
  };

  return (
    <div className="space-y-6 animate-fade-up">
      <div>
        <h1 className="font-garamond text-2xl font-bold text-[#051C2C]">
          Service &amp; Charge Code Master
        </h1>
        <p className="text-xs text-[#888888] mt-0.5">
          Standardized charge codes, service names, and operational categories.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleAdd}
        className="bg-white p-4 rounded-xl border border-[#E8E8E6] shadow-xs flex flex-wrap items-end gap-3"
      >
        <div className="space-y-1">
          <label className="text-[11px] font-semibold text-[#051C2C] uppercase tracking-wider">
            Service Code *
          </label>
          <input
            type="text"
            required
            value={newCode}
            onChange={(e) => setNewCode(e.target.value)}
            placeholder="DEMURRAGE"
            className="editable-input px-3 py-1.5 rounded-md text-xs w-36 font-mono font-semibold"
          />
        </div>

        <div className="space-y-1 flex-1 min-w-[200px]">
          <label className="text-[11px] font-semibold text-[#051C2C] uppercase tracking-wider">
            Service Name *
          </label>
          <input
            type="text"
            required
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Port Storage & Demurrage Charge"
            className="editable-input px-3 py-1.5 rounded-md text-xs w-full"
          />
        </div>

        <div className="space-y-1">
          <label className="text-[11px] font-semibold text-[#051C2C] uppercase tracking-wider">
            Category
          </label>
          <select
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="editable-input px-3 py-1.5 rounded-md text-xs w-40"
          >
            <option value="Freight">Freight</option>
            <option value="Origin Service">Origin Service</option>
            <option value="Destination Service">Destination Service</option>
            <option value="Customs">Customs</option>
            <option value="Documentation">Documentation</option>
            <option value="Finance">Finance</option>
          </select>
        </div>

        <button
          type="submit"
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-md bg-[#2251FF] text-white text-xs font-semibold hover:bg-[#1a40cc] transition-colors cursor-pointer shadow-xs"
        >
          <Plus className="w-4 h-4" />
          <span>Add Service Code</span>
        </button>
      </form>

      {/* Table */}
      <div className="bg-white rounded-xl border border-[#E8E8E6] overflow-hidden card-hover">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="table-header">
              <tr>
                <th className="p-3">Service Code (PK)</th>
                <th className="p-3">Service Name</th>
                <th className="p-3">Category</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8E8E6]">
              {state.services.map((service, idx) => (
                <tr key={service.serviceCode} className="hover:bg-[#F5F5F2]/80">
                  <td className="p-3 font-mono font-bold text-[#051C2C]">
                    {service.serviceCode}
                  </td>
                  <td className="p-3">
                    <input
                      type="text"
                      value={service.serviceName}
                      onChange={(e) =>
                        handleCellEdit(idx, 'serviceName', e.target.value)
                      }
                      className="editable-input px-2 py-1 rounded text-xs w-full max-w-sm font-medium"
                    />
                  </td>
                  <td className="p-3">
                    <select
                      value={service.category}
                      onChange={(e) =>
                        handleCellEdit(idx, 'category', e.target.value)
                      }
                      className="editable-input px-2 py-1 rounded text-xs"
                    >
                      <option value="Freight">Freight</option>
                      <option value="Origin Service">Origin Service</option>
                      <option value="Destination Service">Destination Service</option>
                      <option value="Customs">Customs</option>
                      <option value="Documentation">Documentation</option>
                      <option value="Finance">Finance</option>
                    </select>
                  </td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => handleDelete(service.serviceCode)}
                      className="p-1 text-[#888888] hover:text-[#D32F2F] hover:bg-[#D32F2F]/10 rounded cursor-pointer transition-colors"
                      title="Delete Service"
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
