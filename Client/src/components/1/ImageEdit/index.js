import ImgCrop from "antd-img-crop";
import { EditImageContainer } from "./styled";
import { Upload } from "antd";
// import { useState } from "react";

const ImageEdit = () => {

    return (  
        <EditImageContainer>
            <ImgCrop showGrid rotationSlider aspectSlider showReset>
                <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                > + Add image</Upload>
            </ImgCrop>
        </EditImageContainer>
    );
}
 
export default ImageEdit;