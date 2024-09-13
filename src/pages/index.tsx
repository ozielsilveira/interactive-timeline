import { useState } from "react";
import Button from "../components/Button";
import Timeline from "../components/Timeline";
import Modal from "../components/Modal";
import Icon from "../components/Icon";

const RelationshipTimeline = () => {
  const [theme, setTheme] = useState("default");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [events] = useState([
    {
      id: 1,
      date: "14 de Fevereiro, 2023",
      title: "Primeiro Encontro",
      description:
        "Nosso primeiro encontro no café da esquina. Foi mágico desde o primeiro olhar!",
      media: { type: "image", url: "/api/placeholder/400/300" },
    },
    {
      id: 2,
      date: "1 de Julho, 2023",
      title: "Viagem para a Praia",
      description: "Nossa primeira viagem juntos. Dias incríveis à beira-mar!",
      media: { type: "image", url: "/api/placeholder/400/300" },
    },
  ]);

  const themeClasses = {
    default: "bg-gradient-to-r from-pink-100 to-purple-100 text-gray-900",
    romantic: "bg-gradient-to-r from-red-100 to-pink-100 text-pink-900",
    elegant: "bg-gradient-to-r from-gray-100 to-blue-100 text-gray-900",
  };

  const handleAddEvent = () => {
    setIsModalOpen(true);
  };

  //   const handleEditEvent = (id) => {
  //     // Implementar lógica de edição
  //     console.log(`Editar evento ${id}`);
  //   };

  //   const handleDeleteEvent = (id) => {
  //     setEvents(events.filter(event => event.id !== id));
  //   };

  return (
    <div
      className={`min-h-screen p-8 ${
        themeClasses[theme as keyof typeof themeClasses]
      }`}
    >
      <header className="text-center mb-12 animate-fadeInDown">
        <h1 className="text-5xl font-bold mb-2 font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
          Linha do Tempo Interativa do Relacionamento
        </h1>
        <p className="text-xl text-gray-600">
          Capture e celebre cada momento especial
        </p>
      </header>

      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8 animate-fadeInUp">
          <Button onClick={handleAddEvent} icon={<Icon name="plus" />}>
            Adicionar Marco
          </Button>
          <div className="space-x-2">
            <Button variant="secondary">Exportar PDF</Button>
            <Button variant="outline">Assinar Plano Premium</Button>
          </div>
        </div>

        <div className="mb-8 animate-fadeInLeft">
          <label
            htmlFor="theme"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Escolha um tema:
          </label>
          <select
            id="theme"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md transition-colors duration-200"
          >
            <option value="default">Padrão</option>
            <option value="romantic">Romântico</option>
            <option value="elegant">Elegante</option>
          </select>
        </div>

        <div className="space-y-8">
          {events.map((event) => (
            <Timeline
              onEdit={function (): void {
                throw new Error("Function not implemented.");
              }}
              onDelete={function (): void {
                throw new Error("Function not implemented.");
              }}
              key={event.id}
              {...event} //   onEdit={() => handleEditEvent(event.id)}
              //   onDelete={() => handleDeleteEvent(event.id)}
            />
          ))}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-2xl font-bold mb-4">Adicionar Novo Marco</h2>
        <p>Aqui você pode adicionar o formulário para criar um novo marco.</p>
      </Modal>

      <footer className="text-center mt-12 text-sm text-gray-500 animate-fadeInUp">
        <p>
          © 2024 Linha do Tempo Interativa do Relacionamento. Todos os direitos
          reservados.
        </p>
      </footer>
    </div>
  );
};

export default RelationshipTimeline;
