import { fetchFromTMDB } from "../services/tmdb.service.js";
export async function getTrendingTv(req, res) {
    try {
        const data = await fetchFromTMDB("https://api.themoviedb.org/3/trending/tv/day?language=en-US");
       const randomTv = data.results[Math.floor(Math.random() * data.results?.length)];

       res.status(200).json({sucess: true, content: randomTv})
    } catch (error) {
        res.status(500).json({success: false, message: "Internal server error"});
    }
}

export async function getTvTrailers(req, res) {
    const {id} = req.params;
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`);
        // data.results will get results
        res.status(200).json({success: true, trailers: data.results})
    } catch (error) {
        if (error.message.includes("404")) {
            return res.status(400).send(null)
        }

        res.status(500).json({success: false, message: "Internal server error"});
    }
}

export async function getTvDetails(req, res) {
    const {id} = req.params;
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}?language=en-US`); 
        // data will get just the details
        res.status(200).json({success: true, details: data});
    } catch (error) {
        if (error.message.includes("404")) {
            return res.status(400).send(null)
        }

        res.status(500).json({success: false, message: "Internal server error"});   
        
    }
}

export async function getSimilarTv(req, res) {
    const {id} = req.params;

    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`);
        res.status(200).json({success: true, similarMovies: data.results})
    } catch (error) {
        if (error.message.includes("404")) {
            return res.status(400).send(null)
        }

        res.status(500).json({success: false, message: "Internal server error"});   
        
    }
}

export async function getTvsByCategory(req, res) {
    const {category } = req.params; 
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`);
        res.status(200).json({success: true, content: data.results}) 
    } catch (error) {
        if (error.message.includes("404")) {
            return res.status(400).send(null)
        }

        res.status(500).json({success: false, message: "Internal server error"});   
        
    }
}