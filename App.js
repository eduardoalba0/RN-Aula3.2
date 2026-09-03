import { PaperProvider } from "react-native-paper";
import PageTarefas from "./src/pages/PageTarefas";

export default function App() {
  return (
    <PaperProvider>
      <PageTarefas />
    </PaperProvider>
  );
}