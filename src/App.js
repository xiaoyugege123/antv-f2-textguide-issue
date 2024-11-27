import "./App.css";
import React, { useState } from "react";
import Canvas from "@antv/f-react";
import { Chart, Interval, TextGuide } from "@antv/f2";

const data = [
  { genre: "Sports", sold: 275, type: "a" },
  { genre: "Strategy", sold: 115, type: "a" },
  { genre: "Action", sold: 120, type: "a" },
  { genre: "Shooter", sold: 350, type: "a" },
  { genre: "Other", sold: 150, type: "a" },
];

function App() {
  const [barWidth, setBarWidth] = useState(55); // 默认宽度在这个情况应该是55
  return (
    <div
      style={{
        padding: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Canvas width={580} height={300}>
        <Chart data={data}>
          <Interval
            x="genre"
            y="sold"
            style={{
              width: barWidth,
            }}
          />
          {data.map((item) => {
            const { sold } = item;
            return (
              <TextGuide
                records={[item]}
                onClick={(ev) => {
                  console.log("ev: ", ev.points);
                }}
                content={`${sold}个`}
                style={{
                  fill: "#000",
                  fontSize: "24px",
                }}
                offsetY={-8}
                offsetX={-15}
              />
            );
          })}
        </Chart>
      </Canvas>
      <h1>这里的自定义 <span style={{color:'red'}}>文本标注</span> 希望能跟随柱状图形中间点位置来进行定位。这里看能不能直接计算文本内容长度来进行居中？希望能将这个文本居中直接写入进去</h1>
      <div style={{display:'flex',gap:40}}>
        <button onClick={() => setBarWidth(100)}>点击扩大宽度</button>
        <button onClick={() => setBarWidth(10)}>点击缩小宽度</button>
      </div>
    </div>
  );
}

export default App;
