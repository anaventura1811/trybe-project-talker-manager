const { getAllTalkers, editData } = require('../readData');
const { HTTP_OK_STATUS } = require('./httpStatus');

const removeTalker = async (req, res) => {
  const { id } = req.params;

  const talkers = await getAllTalkers();

  const talkerIndex = talkers.findIndex((talker) => talker.id === parseInt(id, 10));
  
  if (talkers[talkerIndex] !== -1) {
    talkers.splice(talkerIndex, 1);
    await editData(talkers);
    res.status(HTTP_OK_STATUS).json({ message: 'Pessoa palestrante deletada com sucesso' });
  }
};

module.exports = removeTalker;

// Com consulta ao código disponibilizado pelo Instrutor Renato:
// https://github.com/tryber/sd-10a-live-lectures/blob/lecture/26.5/app-express/booksRouter.js
