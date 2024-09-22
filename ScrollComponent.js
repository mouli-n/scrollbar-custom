import { useEffect, useRef, useState } from "react"
import ScrollBar from "./ScrollBar"
import { useMemo } from "react";

const ScrollComponent = () => {
    const [barHeight, seBarHeight] = useState(0);
    const movebar = useRef(null);
    const listRef = useRef(null);
    function calculateScrollbarHeight(scrollHeight, clientHeight) {
        if (scrollHeight <= clientHeight) {
            // If content fits within the visible area, no scrollbar is needed
            return 0;
        }

        const visibleRatio = clientHeight / scrollHeight;
        const scrollbarHeight = clientHeight * visibleRatio;
        console.log("scrollbarHeight", scrollbarHeight);

        return scrollbarHeight;
    }

    useEffect(() => {
        if (listRef) {
            seBarHeight(calculateScrollbarHeight(listRef?.current?.scrollHeight, listRef?.current?.clientHeight));
        }
    }, [listRef])

    const data = useMemo(() => {
        let d = []
        for (let index = 0; index < 500; index++) {
            d.push(index)

        }
        return d
    }, [])
    const calcScrollTopHeight = () =>{
        const refElement = listRef?.current;
        const scrollBarRefElm = movebar?.current;
        if(refElement && scrollBarRefElm){
            const listScrollFromTop = ((refElement?.scrollTop*100) / refElement?.scrollHeight);
            console.log(refElement?.scrollTop,"listScrollFromTop");
            scrollBarRefElm.style.top = `${listScrollFromTop}%`;
        console.log(listScrollFromTop);
    }
        //return listScrollFromTop

    }

    useEffect(() => {
        const refElement = listRef?.current;
        const scrollBarRefElm = movebar?.current;
        if (refElement && scrollBarRefElm) {
            refElement.addEventListener('scroll', calcScrollTopHeight);
            return () => {
                refElement.removeEventListener('scroll', calcScrollTopHeight);
            };
        }
    }, [listRef?.current]);
    const dd=useMemo(()=>{
        calcScrollTopHeight();
    },[listRef])

    return (<div>
        <div className="wrapper">
            <div ref={listRef} style={{ height: "500px", background: "red", fontSize: "0.5rem", padding: "0.6rem" }}>
                {data.map((e) => <h1>{e}</h1>)}

            </div>
            <div className="App">
                <div style={{ width: "25px", background: "grey" }} onClick={() => {
                    console.log(listRef.current.clientHeight);
                    const targetScrollValue = (listRef.current.scrollTop - listRef.current.offsetHeight);
                    console.log(targetScrollValue);

                    listRef.current.scrollTo({
                        top: targetScrollValue,
                        behavior: 'smooth',
                    });

                }} >
                    ⬆️
                </div>
                {/* <ScrollBar> */}
                <div style={{ height: "500px", width: "25px", background: "#000",position:"relative" }}>
                    <div ref={movebar} style={{ height: `${barHeight}px`, width: "25px", background: "green",position:"absolute" }}>
 
                    </div>
                </div>
                {/* </ScrollBar> */}
                <div onClick={() => {
                    console.log(listRef.current.clientHeight);
                    const targetScrollValue = (listRef.current.scrollTop + listRef.current.offsetHeight);
                    console.log(listRef.current.scrollTop);

                    listRef.current.scrollTo({
                        top: targetScrollValue,
                        behavior: 'smooth',
                    });

                }} style={{ width: "25px", background: "grey" }}>
                    ⬇️
                </div>
            </div>
        </div>
    </div>)
}
export default ScrollComponent
