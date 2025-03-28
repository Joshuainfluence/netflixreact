import { User } from "../model/user.model.js";
import { fetchFromTMDB } from "../services/tmdb.service.js";

export async function searchPerson(req, res) {
    // https://api.themoviedb.org/3/search/person?include_adult=false&language=en-US&page=1
    const { query } = req.params;

    try {
        const response = fetchFromTMDB(`https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`);
        if (response.length === 0) {
            return res.status(400).send(null);
        }

        await User.findByIdAndUpdate(req.user._id, {
            $push: {
                searchHistory: {
                    id: response.results[0].id,
                    image: response.results[0].profile_path,
                    title: response.results[0].name,
                    searchType: "person",
                    createdAt: new Date()
                },
            }
        })

        res.status(200).json({ success: true, content: response.results })
    } catch (error) {
        console.log("Error in search person ", error.message)
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

