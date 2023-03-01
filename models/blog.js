const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true }, // String is shorthand for {type: String}
  author: { type: String, required: true },
  content: { type: String, required: true },
  slug: { type: String, required: true },
  comments: [{ body: { type: String }, date: Date }],
  date: { type: Date, default: Date.now },
  meta: {
    votes: Number,
    favs: Number
  }
}, { timestamps: true });

mongoose.models = {}
export default mongoose.model('Blog', blogSchema);