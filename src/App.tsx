import { Box } from "@chakra-ui/react";
import Header from "./components/Header/Header";
import { FC } from "react";
import KanbanStack from "./components/Kanban/KanbanStack";

const App: FC = () => {
   return (
      <Box
         backgroundImage={`url(${"https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2334&q=80"})`}
         backgroundPosition={"50%"}
         backgroundSize={"cover"}
         height={"100vh"}
         position={"relative"}
      >
         <Header />
         <KanbanStack/>
      </Box>
   );
};

export default App;
