import express from "express";
import userRouter from "./user.router";

const router= express.Router(); 

router.use("/user", userRouter);    //Alle httpmethoden gehen auf den Router userRouter bei /user HTTP requests

export default router;