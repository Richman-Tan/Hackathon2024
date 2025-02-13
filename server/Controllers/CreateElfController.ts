import { Request, Response } from "express";
import ElfCustomization from "../Models/ElfCustomization";

const getElves = async (req: Request, res: Response) => {
  const { name } = req.params;

  try {
    const elf = await ElfCustomization.findOne({ name });
    if (!elf) {
      return res.status(404).json({ message: "Elf not found" });
    }
    res.status(200).json(elf);
  } catch (error){
    res.status(500).json({ message: "Error retrieving elf", error });
  }
};

const createElf = async (req: Request, res: Response) => {
  const { name, hair, face, outfit, colour } = req.body;

  try {
    let elf = await ElfCustomization.findOne({ name });
    if (!elf) {
      elf = new ElfCustomization({ name, hair, face, outfit, colour });
    }
    await elf.save();
    res.status(200).json(elf);
  } catch (error){
    res.status(500).json({ message: "Error saving elf customization", error });
  }
};

export { getElves };
export { createElf };
