import axios from "axios";
const URL_API = "http://localhost:5555/api/prompt";

const makeRequest = async (message: any) => {
  // data vai ser a resposta da requisição do axios
  // axios.post(URL, valor que quero passar )
  const { data } = await axios.post(URL_API, message);
  console.log(data)
  return data;
};

export default makeRequest