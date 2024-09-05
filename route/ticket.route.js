const { Router } = require("express");
const controller = require("../controller/ticket.controller");
const route = Router();
const middleware = require("../middleware/auth.middleware");

/**
 * @openapi
 *  /api/ticket:
 *   get:
 *     tags: [Ticket]
 *     responses:
 *       200:
 *         description: success
 */
route.get("/ticket", middleware.authJwtMiddleware, controller.all);

/**
 * @openapi
 *  /api/ticket/create:
 *   post:
 *     tags: [Ticket]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 default: ""
 *               description:
 *                 type: string
 *                 default: ""
 *               type:
 *                 type: string
 *                 default: ""
 *               helpdesk_name:
 *                 type: string
 *                 default: ""
 *     responses:
 *       200:
 *         description: success
 */
route.post("/ticket/create", middleware.authJwtMiddleware, controller.create);

/**
 * @openapi
 *  /api/ticket/done:
 *   post:
 *     tags: [Ticket]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: number
 *                 default: ""
 *     responses:
 *       200:
 *         description: success
 */
route.post("/ticket/done", middleware.authJwtMiddleware, controller.done);

module.exports = route;
