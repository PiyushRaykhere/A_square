import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export const WhatsAppButton: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const phoneNumber: string = "917312345678";

  const services: string[] = [
    "Obstetrics & Gynaecology",
    "Surgery",
    "Orthopedics",
    "Pediatrics",
    "Anesthesia",
  ];
``
  const handleWhatsAppRedirect = (service: string): void => {
    const message = `Hi! I'm interested in ${service} services. Could you please provide more information about your approach and availability?`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        {open ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0077B6] to-[#00B894] text-white p-3 flex justify-between items-center">
            <div>
              <h3 className="font-semibold">ASquare</h3>
              <p className="text-sm opacity-90">Multispeciality Hospital</p>
            </div>
            <button onClick={() => setOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Services List */}
          <div className="p-2 max-h-64 overflow-y-auto">
            <p className="text-gray-600 text-xs mb-3">
              Choose a service to start conversation:
            </p>

            {services.map((service: string, index: number) => (
              <button
                key={index}
                onClick={() => handleWhatsAppRedirect(service)}
                className="w-full  text-gray-600 text-left p-2 mb-1 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
              >
                {service}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};