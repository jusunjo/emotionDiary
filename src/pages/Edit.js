import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams, useParams, Navigate } from "react-router-dom";
import EmotionItem from "../components/EmotionItem";
import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";
import { remove, update } from "../modules/write";

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
    {
        emotion_id: 6,
        emotion_img: process.env.PUBLIC_URL + `/assets/emotion5.png`,
        emotion_descript: "끔찍함",
    },
];

const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const b = useSelector((it) => it.write.writeList);

    const getData = b.filter((it) => String(it.unique) == id)[0];

    let year = new Date(getData.date).getFullYear();
    let month = "0" + (new Date(getData.date).getMonth() + 1);
    let day = ("0" + new Date(getData.date).getDate()).slice(-2);
    let dateString = year + "-" + month + "-" + day;

    const [emotion, setEmotion] = useState(0);
    const [info, setInfo] = useState({
        date: getData.date,
        emotion: getData.emotion,
        content: getData.content,
        unique: id,
    });

    const onChange = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value,
        });
    };

    const handleClickEmote = (emotion) => {
        setEmotion(emotion);
        setInfo({ ...info, emotion });
    };

    const handleUpdate = () => {
        dispatch(update(info));

        navigate("/");
    };

    const handleDelete = () => {
        dispatch(remove(getData.unique));

        navigate("/");
    };

    console.log("redux", b);

    console.log("getData", getData);
    console.log("info", info);

    return (
        <div className="Edit">
            <MyHeader
                headText={`일기 수정하기`}
                leftChild={<MyButton onClick={() => navigate(-1)} text={"뒤로가기"} />}
                rightChild={<MyButton onClick={handleDelete} type={"negative"} text={"삭제하기"} />}
            />
            <div>
                <section>
                    <h4>날짜를 선택해주세요</h4>
                    <div className="input-box">
                        <input defaultValue={dateString} name="date" className="input-date" type="date" onChange={onChange} />
                    </div>
                </section>
                <section>
                    <h4>오늘의 감정</h4>
                    <div className="input_box emotion_list_wrapper">
                        {emotionList.map((it) => (
                            <EmotionItem name="emotion" defaultValue={getData.emotion} key={it.emotion_id} {...it} handleClickEmote={handleClickEmote} isSelected={it.emotion_id === emotion} />
                        ))}
                    </div>
                </section>
                <section>
                    <h4>오늘의 일기</h4>
                    <div className="input_box text_wrapper">
                        <textarea defaultValue={getData.content} name="content" onChange={onChange} placeholder="오늘은 어땠나요" />
                    </div>
                </section>
                <section className="input_button">
                    <MyButton text={"취소하기"} />
                    <MyButton onClick={handleUpdate} text={"작성완료"} type={"positive"} />
                </section>
            </div>
        </div>
    );
};

export default Edit;
