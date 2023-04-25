import mongoose from "mongoose";

const EventSchema =  mongoose.Schema({
    title: { type: String },
    message: { type: String},
    discord : { type: String },
    registerLink : { type: String},
    selectedFile: {type:String}

});

mongoose.models = mongoose.models || {};
export default mongoose.models.Event || mongoose.model('Event', EventSchema);

// const EventModal = mongoose.model('EventModal', EventSchema);
// module.exports = EventModal;
