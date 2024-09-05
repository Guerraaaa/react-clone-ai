const inputPrompt = require("../modals/input-prompt");

// require é basicamente um import
const openai = require("../config/openai");

// O module.exports é uma propriedade especial no Node.js que permite que módulos exportem funcionalidades para serem usadas por outros arquivos.
module.exports = {
  async sendText(req, res) {
    const openaiAPI = openai.configuration()
    console.log(openaiAPI.createCompletion())
    const inputModel = new inputPrompt(req.body);
    try {
      const response = await openaiAPI.createCompletion(
        openai.textCompletion(inputModel)
      );
      return res.status(200).json({
        sucess: true,
        //a posição sempre vai estar nesse data.choices[0], sempre na posição zero
        data: response.data.choices[0].text,
      });
    } catch (error) {
      return res.status(400).json({
        sucess: false,
        error: error.response
          ? error.response.data
          : "there was an inssue on the server",
      });
    }
  },
};
