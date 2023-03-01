import connectDb from "@/middleware/connectDb";
import Blog from "@/models/blog";

const handler = async (req, res) => {
  if (req.method == 'POST') {
    let blog = new Blog({
      title: req.body.title,
      slug: req.body.slug,
      author: req.body.author,
      content: req.body.content,
    })
    await blog.save()
    res.status(200).json({ "Success": "Success" })
  } else {
    res.status(400).json({ "error": "Bad Request" })
  }
}

export default connectDb(handler);