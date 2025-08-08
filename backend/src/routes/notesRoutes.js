import express from "express"
import { createNote, deleteNote, getAllnotes, getNoteById, updateNote } from "../controller/notesController.js"
const router=express.Router()

router.get("/",getAllnotes)
router.get("/:id",getNoteById)
router.post("/",createNote)

router.put("/:id",updateNote)

router.delete("/:id",deleteNote)


export default router