import Blog from "@/models/blog";
import connectDb from "@/middleware/connectDb";

const handler = async (req, res) => {
  let blogs = await Blog.find()
  res.status(200).json({ blogs })
}

export default connectDb(handler);