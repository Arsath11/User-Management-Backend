import userModal from "../modals/UserModals.js";

export const postData = async (req, res) => {
  try {
    const addUser = new userModal(req.body);
    const savedData = await addUser.save();
    return res.status(200).json(savedData);
  } catch (error) {
    return res.status(500).json({ errorMessage: "Internal Server Error" });
  }
};
export const getDatas = async (req, res) => {
  try {
    const getData = await userModal.find({});
    return res.status(200).json(getData);
  } catch (error) {
    return res.status(500).json({ errorMessage: "Internal Server Error" });
  }
};
