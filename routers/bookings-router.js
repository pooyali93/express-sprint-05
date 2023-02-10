import { Router } from "express";
import database from "../database.js";
import Model from "../models/Model.js";
import Accessor from "../accessor/Accessor.js";
import Controller from "../controller/Controller.js";
import bookingsModel from "../models/bookings-model.js"


// Model -----------------------------------
const model = new Model(bookingsModel);


// Data Accessor
const accessor = new Accessor(model, database);



// Controller ----------------------------
const controller = new Controller(accessor);

const router = Router();
// Queery Builders ---------------------------






// Endpoints ---------------------------
router.get('/', (req, res) => controller.get(req, res, null));
router.get('/:id(\\d+)', (req, res) => controller.get(req, res, 'BOOKING_ID'));
//router.get('/:id', (req, res) => controller.get(req, res, null));
router.get('/salesperson/:id', (req, res) => controller.get(req, res, "EMP_ID"));
router.get('/salesperson/', (req, res) => controller.get(req, res, null));
//router.get('/users/:id', (req, res) => controller.get(req, res, "Customer_ID"));
router.get('/customers/:id', (req, res) => controller.get(req, res, "C_ID"));


router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

export default router;
