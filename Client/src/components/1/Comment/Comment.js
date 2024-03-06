import { Avatar } from "antd";
import { Action, CommentDetails, CommentDiv, CreatedDate, DivContainer } from "./styled";
import { UserOutlined, StarOutlined, LikeOutlined } from "@ant-design/icons";

const Comment = () => {
    return (  
        <DivContainer>
            <div>
                <Avatar size={48} icon={<UserOutlined />} />
            </div>

            <CommentDiv>
                <div style={{fontSize: '12px'}}>
                    <span>User name</span>
                </div>
                <div style={{fontSize: '14px'}}>
                    Đánh giá: <span><StarOutlined /> <StarOutlined /> <StarOutlined /> <StarOutlined /> <StarOutlined /> </span>
                </div>
                <CreatedDate>
                    Ngày đăng: ...
                </CreatedDate>
                <CommentDetails>
                    Nội dung comments
                </CommentDetails>

                <Action>
                    <div style={{marginRight: 5}}> <LikeOutlined /> </div>
                    <div> 5 </div>
                </Action>
            </CommentDiv>
            
        </DivContainer>
    );
}
 
export default Comment