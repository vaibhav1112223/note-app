import Note from "../models/Note.js"

export const getAllnotes=async(req,res)=>{
  try{
const notes=await Note.find().sort({createdAt:-1})
res.status(200).json(notes)
  }catch(error){
    console.error(error.message)
res.status(500).json({message:"internal server error"})
  }
}

export const getNoteById=async(req,res)=>{
    try{
const note=await Note.findById(req.params.id)
if(!note) return res.status(404).json({message:"note not found!"})
res.json(note)
    }
    catch(error){
            console.error(error.message)
console.error("error in getnote controlller",error)
res.status(500).json({message:"internal server error"})
    }
}


export const createNote=async(req,res)=>{
try{
    const {title,content}=req.body
    const newNote=new Note({title,content})
    const savedNote=await newNote.save()
    res.status(201).json(savedNote)
}
catch(error){
       
console.error("error in getallnote controlller",error)
res.status(500).json({message:"internal server error"})
}
}


export const updateNote=async(req,res)=>{
    try{
const {title,content}=req.body
const updatedNote=await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true})
if(!updateNote) return res.status(404).json({message:"note not found"})
res.status(200).json(updatedNote)
    }catch(error){
console.error("error in put  controlller",error)
res.status(500).json({message:"internal server error"})
    }
}


export const deleteNote=async(req,res)=>{
try{
const deletedNote=await Note.findByIdAndDelete(req.params.id)
if(!deletedNote)return res.status(404).json({message:"Note not found"})
    res.status(200).json({message:"note deeleted succesfully"})
}
catch(error){
console.error("error in delete  controlller",error)
res.status(500).json({message:"internal server error"})
}
}

