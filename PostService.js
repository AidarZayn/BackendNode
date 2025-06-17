import Post from "./Post.js";

class PostService {
    async create(post) {
        const createdPost = await Post.create(post);
        return createdPost;
    }

    async getAll() {
        const getAll = await Post.find();
        return getAll;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('ID нету');
        }
        const post = await Post.findById(id);
        return post;
    }

    async update(post) {
        if (!post._id) {
            throw new Error('ID нету');
        }
        const updateFunction = await Post.findByIdAndUpdate(post._id, post,{ new: true });
        return updateFunction;
    }

    async delete(post) {
        if (!post) {
            throw new Error('ID нету');
        }
        const deleteUser = await Post.findByIdAndDelete(post);
        return deleteUser;
    }
}

export default new PostService();