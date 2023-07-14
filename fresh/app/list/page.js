'use client';

import {useState} from 'react';

const Symbols = {
    plus: 'plus',
    minus: 'minus',
};

export default function List() {
    const goodsList = ['Tomatoes', 'Pasta', 'Coconut'];
    const [count, setCount] = useState(Array(goodsList.length).fill(0));

    const handleCount = (index, symbol) => {
        const newCount = [...count];
        newCount[index] = symbol === Symbols.plus ? newCount[index] + 1 : Math.max(newCount[index] - 1, 0);
        setCount(newCount);
    };

    return (
        <div>
            <h4 className="title">상품목록</h4>
            {goodsList.map((goods, index) => {
                return (
                    <div className="food" key={index}>
                        {/* <Image src={food0} /> */}
                        <img src={`/food${index}.png`} />
                        <h4>{goods} $40</h4>
                        <button onClick={() => handleCount(index, Symbols.minus)}>-</button>
                        <span> {count[index]}개 </span>
                        <button onClick={() => handleCount(index, Symbols.plus)}>+</button>
                    </div>
                );
            })}
        </div>
    );
}
