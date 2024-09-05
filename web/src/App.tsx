import { useState } from "react";
import { SideMenu } from "./components/SideMenu/SideMenu";
import { ChatMessage } from "./components/ChatMessage/ChatMessage";
import makeRequest from "./components/api/api.js";

const App = () => {
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([
    {
      user: "gpt",
      message: "Oque posso fazer por você?",
    },
  ]);
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const response = await makeRequest({ prompt: input });
    // Está quebrando a resposta em partes
    const res = response.data.slit("\n").map((line: string) => <p>{line}</p>);

    setChatLog([
      ...chatLog,
      {
        user: "me",
        message: `${input}`,
      },
      {
        user: "gpt",
        message: res,
      },
    ]);

    setInput("");
  };

  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full grid grid-cols-4">
        <SideMenu />

        <section className="h-full w-full col-span-3 grid grid-rows-4">
          {/* chat log */}
          <div className=" row-span-3 mt-2 p-6">
            {chatLog.map((message, index) => (
              <ChatMessage key={index} controller={message} />
            ))}
          </div>

          {/*input chat*/}
          <div className="p-4 row-span-1">
            <form onSubmit={handleSubmit}>
              <input
                className="h-12 w-full rounded-md"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              ></input>

              <button type="submit">ok</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
