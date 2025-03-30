import registerModal from "../modals/RegistrationFormModal.js";

export const postData = async (req, res) => {
  try {
    const addUser = new registerModal(req.body);
    const savedData = await addUser.save();
    return res.status(200).json(savedData);
  } catch (error) {
    return res.status(500).json({ errorMessage: "Internal Server Error" });
  }
};
export const getDatas = async (req, res) => {
  try {
    const getData = await registerModal.find({});
    return res.status(200).json(getData);
  } catch (error) {
    return res.status(500).json({ errorMessage: "Internal Server Error" });
  }
};
export const getData = async (req, res) => {
  try {
    const getData = await registerModal.findById({ _id: req.params.id });
    return res.status(200).json(getData);
  } catch (error) {
    return res.status(500).json({ errorMessage: "Internal Server Error" });
  }
};
export const updateData = async (req, res) => {
  try {
    const { id } = req.params;
    const updateValue = await registerModal.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(updateValue);
  } catch (error) {
    return res.status(500).json({ errorMessage: "Internal Server Error" });
  }
};
export const deleteData = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteValue = await registerModal.findByIdAndDelete(id);
    return res.status(200).json(deleteValue);
  } catch (error) {
    return res.status(500).json({ errorMessage: "Internal Server Error" });
  }
};
