import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { create } from "../modules/write";
import EmotionItem from "./EmotionItem";
import MyButton from "./MyButton";
import MyHeader from "./MyHeader";

// let today = new Date();
// let year = today.getFullYear();
// let month = ("0" + (today.getMonth() + 1)).slice(-2);
// let day = ("0" + today.getDate()).slice(-2);
// let dateString = year + "-" + month + "-" + day;

const emotionList = [
    {
        emotion_id: 1,
        emotion_img: process.env.PUBLIC_URL + `/assets/emotion1.png`,
        emotion_descript: "완전 좋음",
    },
    {
        emotion_id: 2,
        emotion_img: process.env.PUBLIC_URL + `/assets/emotion2.png`,
        emotion_descript: "좋음",
    },
    {
        emotion_id: 3,
        emotion_img: process.env.PUBLIC_URL + `/assets/emotion3.png`,
        emotion_descript: "그럭저럭",
    },
    {
        emotion_id: 4,
        emotion_img: process.env.PUBLIC_URL + `/assets/emotion4.png`,
        emotion_descript: "나쁨",
    },
    {
        emotion_id: 5,
        emotion_img: process.env.PUBLIC_URL + `/assets/emotion5.png`,
        emotion_descript: "끔찍함",
    },
];

const DiaryEditor = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [emotion, setEmotion] = useState(0);
    const [info, setInfo] = useState({});

    const handleClickEmote = (emotion) => {
        setEmotion(emotion);
        setInfo({ ...info, emotion });
    };

    const onChange = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value,
        });
    };

    const postDiary = () => {
        if (window.confirm("일기를 작성하시겠습니까?")) {
            if (!!info.date && !!info.emotion && !!info.content) {
                dispatch(create(info));
                navigate("/");
            } else {
                return alert("값들을 채워주세요");
            }
        } else {
            return;
        }
    };

    return (
        <div className="DiaryEditor">
            <MyHeader
                headText={"새 일기 쓰기"}
                leftChild={
                    <MyButton
                        onClick={() => {
                            navigate(-1);
                        }}
                        text={"뒤로 가기"}
                    />
                }
            />
            <div>
                <section>
                    <h4>오늘은 언제인가요?</h4>
                    <div className="input-box">
                        <input name="date" className="input-date" type="date" onChange={onChange} />
                    </div>
                </section>
                <section>
                    <h4>오늘의 감정</h4>
                    <div className="input_box emotion_list_wrapper">
                        {emotionList.map((it) => (
                            <EmotionItem name="emotion" key={it.emotion_id} {...it} handleClickEmote={handleClickEmote} isSelected={it.emotion_id === emotion} />
                        ))}
                    </div>
                </section>
                <section>
                    <h4>오늘의 일기</h4>
                    <div className="input_box text_wrapper">
                        <textarea name="content" placeholder="오늘은 어땠나요" onChange={onChange} />
                    </div>
                </section>
                <section className="input_button">
                    <MyButton text={"취소하기"} />
                    <MyButton onClick={postDiary} text={"작성완료"} type={"positive"} />
                </section>
            </div>
        </div>
    );
};

export default DiaryEditor;
