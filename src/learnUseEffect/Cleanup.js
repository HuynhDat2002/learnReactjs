import { useEffect,useState } from "react";



function Cleanup(){
    const [avatar,setAvatar]=useState()

    //cleanup 
    useEffect(()=>{
        return ()=>avatar && URL.revokeObjectURL(avatar.preview)
    },[avatar])

    const handlePreviewAvatar = (e)=>{
       const file= e.target.files[0] //lấy ra file ảnh đâù tiên
       file.preview=URL.createObjectURL(file) //tạo thuộc tính preview là một đường dẫn liên kết
       setAvatar(file) 
        
    }
    return(
        <div>
            <input
                type="file"
                onChange={handlePreviewAvatar}
            />
            {avatar && (
                // hiển thị ảnh đã chọn với preview(thuộc tính của avatar) là một đường dẫn liên kết
                <img src={avatar.preview} alt="" width="80%" />
            )}
        </div>
    )
}


export default Cleanup