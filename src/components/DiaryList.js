import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DiaryItem from "./DiaryItem";
import MyButton from "./MyButton";

const DiaryList = ({ diaryList }) => {
    const navigate = useNavigate();
    return (
        <div className="diaryList">
            <div className="newDiary">
                <MyButton
                    className="gd"
                    type={"positive"}
                    text="새일기 쓰기"
                    onClick={() => {
                        navigate("/new");
                    }}
                />
            </div>

            {diaryList.map((it) => {
                return <DiaryItem key={it.id} it={it} />;
            })}
        </div>
    );
};

export default DiaryList;
