import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContentStore } from '../store/content';
import axios from 'axios';

const WatchPage = () => {
    const { id } = useParams();
    const [trailers, setTrailers] = useState([])
    const [currentTrailerIdx, setCurrentTrailerIdx] = useState(0)
    const [loading, setLoading] = useState(true)
    const [content, setContent] = useState({})
    const [similarContent, setSimilarContent] = useState([])
    const { contentType } = useContentStore()

    useEffect(() => {
        const getTrailers = async () => {
            // const res = await axios.get(`/api/v1/${contentType}/trailer/${id}`)
            try {
                const res = await axios.get(`/api/v1/${contentType}/${id}/trailers`)

                setTrailers(res.data.trailers)
            } catch (error) {
                if (error.message.includes("404")) {
                    console.log("error: ", error.res.data.message)
                    setTrailers([])

                }
            }
        }
        getTrailers()
    }, [contentType, id])

    useEffect(() => {
        const getSimilarContent = async () => {
            // const res = await axios.get(`/api/v1/${contentType}/trailer/${id}`)
            try {
                const res = await axios.get(`/api/v1/${contentType}/${id}/similar`)

                setSimilarContent(res.data.similar)
            } catch (error) {
                if (error.message.includes("404")) {
                    console.log("error: ", error.res.data.message)
                    setSimilarContent([])

                }
            }
        }
        getSimilarContent()
    }, [contentType, id])

    console.log("trailers: ", trailers)

    console.log("similar content: ", similarContent)
    return (
        <div>WatchPage</div>
    )
}

export default WatchPage