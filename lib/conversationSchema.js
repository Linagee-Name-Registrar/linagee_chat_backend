import mongoose from "mongoose";

  const conversationsSchema = new mongoose.Schema(
    {
      roomName: {
        type: String,
      },
      roomId: {
        type: String,
      },
      isDm: {
        type: Boolean,
      },
      userReference: [{
        primary: {
            type: String
        },
        addr: {
            type: String
        }
      }],
    },
    { timestamps: true }
  );
  
  let Conversations = mongoose.models.conversations || mongoose.model("conversations", conversationsSchema);
  
  export default Conversations;
  