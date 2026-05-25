import express from "express";

import {
  createNewFaculty,
  createNewFacultyForm,
  deleteFaculty,
  home,
  readAllFaculty,
  readOneFaculty,
  updateFaculty,
} from "../controllers/faculty.controllers.js";

const router = express.Router();

// CRUD API
// Faculty Management System for UMT

// home route
router.route("/").get(home);

// Fetch/Read all faculty
router.route("/faculty").get(readAllFaculty);

// Create new faculty html form page
router.route("/faculty/new").get(createNewFacultyForm);

// Read One
router.route("/faculty/:id").get(readOneFaculty);

// Create new faculty
router.route("/faculty").post(createNewFaculty);

// Update faculty data
router.route("/faculty/:id").put(updateFaculty);

// delete facuty
router.route("/faculty/:id").delete(deleteFaculty);

export default router;
