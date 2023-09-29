import Model3 from "../models/test.js";

export const Testdata = async (req, res) => {
  try {
    const data = await Model3.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving data from db3" });
  }
};
