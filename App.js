import { PaperProvider } from "react-native-paper";
import PageContador from "./src/pages/PageContador";

export default function App() {
  return (
    <PaperProvider>
      <PageContador />
    </PaperProvider>
  );
}