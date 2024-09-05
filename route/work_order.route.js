const { Router } = require("express");
const controller = require("../controller/work_order.controller");
const route = Router();
const middleware = require("../middleware/auth.middleware");

/**
 * @openapi
 *  /api/worder-order:
 *   get:
 *     tags: [Worder Order]
 *     responses:
 *       200:
 *         description: success
 */
route.get("/worder-order", middleware.authJwtMiddleware, controller.all);

/**
 * @openapi
 *  /api/worder-order/create:
 *   post:
 *     tags: [Worder Order]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticket_id:
 *                 type: string
 *                 default: 0
 *     responses:
 *       200:
 *         description: success
 */
route.post(
  "/worder-order/create",
  middleware.authJwtMiddleware,
  controller.create
);

/**
 * @openapi
 *  /api/worder-order/done:
 *   post:
 *     tags: [Worder Order]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: number
 *                 default: 0
 *     responses:
 *       200:
 *         description: success
 */
route.post("/worder-order/done", middleware.authJwtMiddleware, controller.done);

/**
 * @openapi
 *  /api/worder-order/accept:
 *   post:
 *     tags: [Worder Order]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               technician_name:
 *                 type: number
 *                 default: ""
 *               code:
 *                 type: string
 *                 default: ""
 *     responses:
 *       200:
 *         description: success
 */
route.post(
  "/worder-order/accept",
  middleware.authJwtMiddleware,
  controller.accept
);

module.exports = route;
