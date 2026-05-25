import Faculty from "../models/faculty.model.js";

// home controller
export const home = (req, res) => {
  res.render("home");
};

// read all
export const readAllFaculty = async (req, res) => {
  try {
    // Submit fetch query to DB and get data in faculty array[]
    const faculty = await Faculty.find();
    const count = faculty.length;
    // return res.status(200).json({
    //   success: true,
    //   count,
    //   faculty,
    // });
    return res.render("allFaculty.ejs");
  } catch (error) {
    return res.status(500).json({
      success: faclse,
      msg: "Internal server error",
    });
  }
};

// read one
export const readOneFaculty = async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;

    const faculty = await Faculty.findById(id);

    if (!faculty) {
      return res.status(400).json({
        success: false,
        msg: `No Faculty exist with id=${id}`,
        // msg: "No Faculty exist with id= " + id,
      });
    }
    //  code to send a DB query to read a faculty data with id = 22920
    return res.status(200).json({
      success: true,
      faculty,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Internal server error",
    });
  }
};

// createNewFacultyForm
export const createNewFacultyForm = (req, res) => {
  res.render("createFaculty");
};

// create new facultry
export const createNewFaculty = async (req, res) => {
  try {
    // read data from Frontend and submit to DB
    // console.log(req.body);

    const { name, employeeCode, salary, gender } = req.body;

    // new Faculty(req.body);
    const faculty = new Faculty({ name, employeeCode, salary, gender });

    // create query
    await faculty.save();

    return res.status(201).json({
      success: true,
      faculty,
    });
  } catch (error) {
    return res.status(500).json({
      success: faclse,
      msg: "Internal server error",
    });
  }
};

// update
export const updateFaculty = async (req, res) => {
  try {
    console.log(req.body);

    // read incoming data inside request and ask mongoDB to update specific faculty member
    const { id } = req.params;
    const faculty = await Faculty.findById(id);

    if (!faculty) {
      return res.status(400).json({
        success: false,
        msg: `No Faculty exist with id=${id}`,
        // msg: "No Faculty exist with id= " + id,
      });
    }

    const updatedFaculty = await Faculty.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true },
    );

    return res.status(200).json({
      success: true,
      updatedFaculty,
    });
  } catch (error) {
    return res.status(500).json({
      success: faclse,
      msg: "Internal server error",
    });
  }
};

// delete
export const deleteFaculty = async (req, res) => {
  try {
    // read incoming data inside request and ask mongoDB to update specific faculty member
    const { id } = req.params;

    const faculty = await Faculty.findById(id);

    if (!faculty) {
      return res.status(400).json({
        success: false,
        msg: `No Faculty exist with id=${id}`,
        // msg: "No Faculty exist with id= " + id,
      });
    }

    await Faculty.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      msg: "Faculty has been deleted",
    });
  } catch (error) {
    return res.status(500).json({
      success: faclse,
      msg: "Internal server error",
    });
  }
};
