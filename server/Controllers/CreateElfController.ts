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
  } catch (error) {
    res.status(500).json({ message: "Error retrieving elf", error });
  }
};

const getElfById = async (req: Request, res: Response) => {
  const { elfId } = req.params;

  try {
    const elf = await ElfCustomization.findOne({ elfId });
    if (!elf) {
      return res.status(404).json({ message: "Elf not found" });
    }
    res.status(200).json(elf);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving elf", error });
  }
};

const createElf = async (req: Request, res: Response) => {
  const { name, hair, face, outfit, colour } = req.body;

  try {
    let elf = await ElfCustomization.findOne({ name });
    if (!elf) {
      const elfId = generateGUID();
      elf = new ElfCustomization({ name, hair, face, outfit, colour, elfId });
    }
    await elf.save();
    res.status(200).json(elf);
  } catch (error) {
    res.status(500).json({ message: "Error saving elf customization", error });
  }
};

function generateGUID(): string {
  // generates random guid for elf id
  const s4 = (): string => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .slice(1);
  };

  return `${s4()}${s4()}-${s4()}-${s4().slice(0, 3)}4${s4().slice(
    0,
    3
  )}-${s4().slice(0, 3)}${(Math.floor(Math.random() * 0x10) | 0x8).toString(
    16
  )}${s4().slice(0, 3)}-${s4()}${s4()}${s4()}`;
}

export { getElves };
export { getElfById };
export { createElf };
