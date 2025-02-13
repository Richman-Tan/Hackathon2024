import mongoose, {Schema, Document} from 'mongoose';

interface IElfCustomization extends Document {
  name: string;
  hair:string;
  face: string;
  outfit: string;
  colour: string;
  elfId: string;
}

const ElfCustomizationSchema: Schema = new Schema({
  name:{type: String, required: true, unique: true},
  hair: {type:String, required: true},
  face: {type:String, required: true},
  outfit: {type:String, required: true},
  colour: {type:String, required: true},
  elfId: {type:String, required: true, unique: true},
});

const ElfCustomization = mongoose.model<IElfCustomization>('ElfCustomization', ElfCustomizationSchema);
export default ElfCustomization;