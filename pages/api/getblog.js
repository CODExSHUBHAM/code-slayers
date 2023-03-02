import Blog from "@/models/blog";
import connectDb from "@/middleware/connectDb";

const handler = async (req, res) => {
  let blog = await Blog.find({ slug: req.query.slug })
  res.status(200).json(blog)
}

export default connectDb(handler);