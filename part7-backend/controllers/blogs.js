const blogsRouter = require("express").Router();
const Blog = require("../models/blog");
const User = require("../models/user");
const Comment = require("../models/comment");
const logger = require("../utils/logger");
const jwt = require("jsonwebtoken");
const middleware = require("../middleware");

blogsRouter.get("/", async (request, response) => {
    const blogs = await Blog.find({}).populate("user", {
        username: 1,
        name: 1,
    });
    response.json(blogs);
});

blogsRouter.get(`/:id`, async (request, response) => {
    const blog = await Blog.findById(request.params.id).populate("comments", {
        content: 1,
    });
    if (blog) {
        response.json(blog);
    } else {
        response.status(404).end();
    }
});

blogsRouter.get("/:id/comments", async (req, res) => {
    const blog = await Blog.findById(req.params.id).populate("comments", {
        content: 1,
    });
    if (blog) {
        res.status(200).json(blog.comments);
    } else {
        res.status(404).end();
    }
});

blogsRouter.post("/", middleware.userExtractor, async (request, response) => {
    const body = request.body;
    const user = await User.findById(request.user.id);

    const decodedToken = jwt.verify(request.token, process.env.SECRET);
    if (!decodedToken.id) {
        response.status(401).json({ error: "token invalid" });
    }

    if (!user.id || !user) {
        response.status(400).json({ error: "userId missing or not valid" });
    }

    if (!body.title || !body.url) {
        logger.info("No Title or URL!");
        logger.error("400: Must include both Title and URL");
        response.status(400).json("Bad Request");
    }

    const blog = new Blog({
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes ? body.likes : 0,
        user: user.id,
        comments: body.comments,
    });
    console.log("blog: ", blog);
    const savedBlog = await blog.save();
    user.blogs = user.blogs.concat(savedBlog._id);
    await user.save();

    response.status(201).json(savedBlog);
});

blogsRouter.post(
    "/:id/comments",
    middleware.userExtractor,
    async (req, res) => {
        const body = req.body;
        const blog = await Blog.findById(req.params.id).populate("comments", {
            content: 1,
        });

        console.log("body", body);
        console.log("blog: ", blog);

        const decodedToken = jwt.verify(req.token, process.env.SECRET);
        if (!decodedToken.id) {
            res.status(401).json({ error: "token invalid" });
        }

        const comment = new Comment({
            content: body.content,
        });
        const savedComment = await comment.save();
        console.log("savedComment: ", savedComment);
        console.log("comment: ", comment);
        blog.comments = blog.comments.concat(savedComment._id);
        await blog.save();

        res.status(201).json(comment);
    },
);

blogsRouter.delete(
    "/:id",
    middleware.userExtractor,
    async (request, response) => {
        const user = await User.findById(request.user.id).populate("blogs", {
            title: 1,
            author: 1,
            url: 1,
            likes: 1,
        });
        const userJSON = user.toJSON();

        const blog = await Blog.findById(request.params.id).populate("user", {
            username: 1,
            name: 1,
        });
        const blogJSON = blog.toJSON();

        if (userJSON.id === blogJSON.user.id) {
            await Blog.findByIdAndDelete(request.params.id);
            response.status(204).end();
        }
        response.status(401).json({ error: "Cannot Delete: Invalid Token" });
    },
);

blogsRouter.put("/:id", middleware.userExtractor, async (request, response) => {
    const body = request.body;

    const user = await User.findById(request.user.id).populate("blogs", {
        title: 1,
        author: 1,
        url: 1,
        likes: 1,
        comments: 1,
    });
    const userJSON = user.toJSON();
    console.log("userJSON: ", userJSON);
    if (userJSON) {
        const updated = await Blog.findByIdAndUpdate(request.params.id, {
            title: body.title,
            author: body.author,
            url: body.url,
            likes: body.likes,
        });
        response.status(204).json(updated);
    }
    response.status(401).json({ error: "Cannot Update: Invalid Token" });
});

blogsRouter.delete("/", async (request, response) => {
    await Blog.deleteMany({});
    response.status(204).end();
});

module.exports = blogsRouter;
