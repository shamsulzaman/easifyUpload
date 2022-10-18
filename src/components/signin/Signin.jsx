import { useEffect, useState } from "react"

const Signin = () => {
    const [products, setProducts] = useState([])
    const [url,setUrl] = useState('')
    const [accT,setaccT] = useState('')
    const onSub = async (e) =>{
        e.preventDefault()
        console.log("what")
        let storeUrl = await document.querySelector("#store-url")
        let storeAcc = await document.querySelector("#accTok")
        setUrl(storeUrl.value)
        setaccT(storeAcc.value)
    }
    useEffect(()=>{
        const headers = { 'Content-Type': 'application/json' }
        fetch("https://api-testing-first.myshopify.com/admin/api/2022-04/products.json",{'X-Shopify-Access-Token':'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'})
            .then(response => response.json())
            .then(data => console.log(data));

        
    },[url])
    return(
        <div>
            {/* <input id="key" placeholder="Key" name="key"/> */}
            <input id="store-url" placeholder="Store url" name="store"/>
            <input id="accTok" placeholder="Access token" name="accT"/>
            <button onClick={onSub}>Get Started</button>
        </div>
    )

}
export default Signin