import React, { useEffect } from 'react'
import axios from 'axios'
import getPayload from './getPayload';

function Home() {
    const [data, setData] = React.useState(null)

    useEffect(() => {

        axios.get("http://localhost:4000/").then(response => {
            console.log("inside axios");
            console.log("response", response)
            setData(response.data)
        })
    }, []);
    // console.log(getPayload("date"))
    console.log("data", data)

    return (
        <>
            This is Home Component
            <p>

                {data.asks}
            </p>
            {/* {data?.forEach(element => {
                <>{element?.ask}</>
            })} */}
        </>
    )
}

export default Home
