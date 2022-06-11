import React, { useContext, useEffect, useState } from "react";
import MyHeader from "./../components/MyHeader";
import MyButton from "./../components/MyButton";
import { useSelector } from "react-redux";
import DiaryList from "../components/DiaryList";
const Home = () => {
    const dummyList = useSelector((it) => it.write.writeList);
    const [renderDate, setRenderDate] = useState(new Date());
    const [data, setData] = useState([]);

    useEffect(() => {
        const firstDay = new Date(renderDate.getFullYear(), renderDate.getMonth(), 1);
        const lastDay = new Date(renderDate.getFullYear(), renderDate.getMonth() + 1, 0);

        setData(dummyList.filter((it) => firstDay <= it.date && it.date <= lastDay));
    }, [dummyList, renderDate]);

    const increaseMonth = () => {
        setRenderDate(new Date(renderDate.getFullYear(), renderDate.getMonth() + 1, renderDate.getDate()));
    };

    const decreaseMonth = () => {
        setRenderDate(new Date(renderDate.getFullYear(), renderDate.getMonth() - 1, renderDate.getDate()));
    };
    console.log(data);

    return (
        <div>
            <MyHeader
                headText={`${renderDate.getFullYear()}년 ${renderDate.getMonth() + 1}월`}
                leftChild={<MyButton text={`<`} onClick={decreaseMonth} />}
                rightChild={<MyButton text={`>`} onClick={increaseMonth} />}
            />
            <DiaryList diaryList={data} />
        </div>
    );
};

export default Home;
