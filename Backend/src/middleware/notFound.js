const notFound = (req, res)=>{
    return res.status(404).json({
        success : true,
        message : "Page not found "
    })
}

export default notFound