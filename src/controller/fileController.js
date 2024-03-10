
export let uploadSingleFileController= (req,res,next)=>{
    console.log(req.file);
    let link=`http://localhost:8000/${req.file.filename}`;
    res.json({
        success:true,
        message:"uploaded successfully",
        result:link
    })
};

export let uploadMultipleFile=(req,res,next)=>{
    // console.log(req.files)
    let files=req.files
    let link1=files.map((value,index)=>{
         return `http ://localhost:8000/${value.filename}`
    });

    res.json({
        success:true,
        message:"upload Multiple File",
        result:link1

    })
}
