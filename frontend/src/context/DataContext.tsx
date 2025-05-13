import { createContext, useContext, useEffect, useState } from "react";
import { Ticket, Todo, Staff } from "../types";
import { staffData } from "../staffData/staff";

interface DataContextType {
  tickets: Ticket[];
  setNewTickets: React.Dispatch<React.SetStateAction<Ticket[]>>;
  todos: Todo[];
  loading: boolean;
  error: string | null;
  newJoiners: Staff[];
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [newTickets, setNewTickets] = useState<Ticket[]>([]);

  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      fetch("http://localhost:4000/api/tickets") //fetches ticket json data
        .then((res) => res.json())
        .then((data) => {
          setTickets(data);
          setLoading(false);
        });

      fetch("http://localhost:4000/api/todos") //fetches staff json data
        .then((res) => res.json())
        .then((data) => {
          setTodos(data);
          setLoading(false);
        });

      console.log("Data fetched successfully.");
    } catch (err) {
      setError("Couldn't load data. Please try again later.");
    } finally {
      setLoading(false); //sets the loading state to false
    }
  }, []);

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const newJoiners = staffData.filter((staffMember) => { //filters the staff data to show the staff that joined within the last month
    const joinedDate = new Date(staffMember.joinedDate);
    return (
      joinedDate.getMonth() === currentMonth &&
      joinedDate.getFullYear() === currentYear
    );
  });

  return ( //passes down the data to the child components
    <DataContext.Provider
      value={{ tickets, setNewTickets, todos, loading, error, newJoiners }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used within a DataProvider");
  return context;
};
