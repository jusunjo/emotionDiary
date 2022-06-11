import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";

const Diary = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    //해당 객체 가져옴
    const getData = useSelector((it) => it.write.writeList[id]);

    const goEdit = () => {
        navigate(`/edit/${getData.id}`);
    };
    return (
        <div className="Diary">
            <MyHeader headText={`그 날의 기록`} leftChild={<MyButton onClick={() => navigate(-1)} text={"뒤로가기"} />} rightChild={<MyButton onClick={goEdit} text={"수정하기"} />} />
            <section>
                <h4>그 날의 감정</h4>
                <img src={process.env.PUBLIC_URL + `assets/emotion5.png`} />
            </section>
            <section>
                <h4>그 날의 일기</h4>
                <div className="getDataContent">{getData.content}</div>
            </section>
        </div>
    );
};

export default Diary;
