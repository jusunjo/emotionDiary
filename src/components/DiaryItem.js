import React from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";

const DiaryItem = ({ it }) => {
    const navigate = useNavigate();

    const strDate = new Date(parseInt(it.date)).toLocaleDateString();

    const goDetail = () => {
        navigate(`/diary/${it.unique}`);
    };

    const goEdit = () => {
        navigate(`/edit/${it.unique}`);
    };

    return (
        <div className="DiaryItem">
            <div onClick={goDetail} className={["emotion_img_wrapper", `emotion_img_wrapper_${it.emotion}`].join(" ")}>
                <img src={process.env.PUBLIC_URL + `assets/emotion${it.emotion}.png`} />
            </div>
            <div onClick={goDetail} className="info_wrapper">
                <div className="diary_date">{strDate}</div>
                <div className="diary_content_preview">{it.content}</div>
            </div>
            <div onClick={goEdit} className="btn_wrapper">
                <MyButton text={"수정하기"} />
            </div>
        </div>
    );
};

export default DiaryItem;
