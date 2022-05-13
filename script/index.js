
const randomizer = () => {

    const arrNum = [];

    const addNum = () => {

        const randomNum = Math.floor(Math.random() * 101);

        if(!arrNum.includes(randomNum)){
            arrNum.push(randomNum)
        }

        return arrNum;
    }

    for(i = 0; arrNum.length <= 100; i += 1 ){
        addNum();
    }

    return arrNum;
}

console.log(randomizer());
