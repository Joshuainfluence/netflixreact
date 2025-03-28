import { fetchFromTMDB } from "../services/tmdb.service.js";

export async function getTrendingMovie(req, res){
    try {
        const data = await fetchFromTMDB("https://api.themoviedb.org/3/trending/movie/day?language=en-US");
       const randomMovie = data.results[Math.floor(Math.random() * data.results?.length)];

       res.status(200).json({sucess: true, content: randomMovie})
    } catch (error) {
        res.status(500).json({success: false, message: "Internal server error"});
    }
}

export async function getMovieTrailers(req, res) {
    const {id} = req.params;
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`);
        res.status(200).json({success: true, trailers: data.results})
    } catch (error) {
        if (error.message.includes("404")) {
            return res.status(400).send(null)
        }

        res.status(500).json({success: false, message: "Internal server error"});
    }
}

export async function getMovieDetails(req, res) {
    const {id} = req.params;
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}?language=en-US`); 
        res.status(200).json({success: true, details: data});
    } catch (error) {
        if (error.message.includes("404")) {
            return res.status(400).send(null)
        }

        res.status(500).json({success: false, message: "Internal server error"});   
        
    }
}