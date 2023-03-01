import connectDb from "@/middleware/connectDb";
import Contact from "@/models/contact";

const handler = async (req, res) => {
  if (req.method == 'POST') {
    let message = new Contact({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    })
    await message.save()
    res.status(200).json({ "Success": "Success" })
  } else {
    res.status(400).json({ "error": "Bad Request" })
  }
}

export default connectDb(handler);