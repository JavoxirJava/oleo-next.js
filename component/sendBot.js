import React, {useState} from 'react';

function SendBot() {

    const [nameValue, setNameValue] = useState("")
    const [numberValue, setNumberValue] = useState("")
    const [emailValue, setEmailValue] = useState("")
    const [value, setValue] = useState("")

    const [redName, setRedName] = useState(false);
    const [redNumber, setRedNumber] = useState(false)
    const [redEmail, setRedEmail] = useState(false)
    const [redText, setRedText] = useState(false)

    function handleChange1(item) {
        setNameValue(item)
        setRedName(false)
    }

    function handleChange2(item) {
        setEmailValue(item)
        setRedEmail(false)
    }

    function handleChange3(item) {
        setValue(item)
        setRedText(false)
    }

    function handleChange4(item) {
        setNumberValue(item)
        setRedNumber(false)
    }

    let bot = {
        TOKEN: "5169354010:AAFlFQCD4lk29l9FXfKYb7nTzZnbsfOohy0",
        chatID: "1085241246",
        message: `Ism: ${nameValue}, %0ATelefon Raqam: ${numberValue}, %0AEmail: ${emailValue}, %0AXabar: ${value}`
    }

    function sendMessage(e) {
        if (nameValue === "") {
            setRedName(true)
        } else if (numberValue === "" && emailValue === "") {
            setRedNumber(true)
        } else if (!emailValue.includes("@") && emailValue !== "" || !emailValue.includes(".") && emailValue !== "") {
            setRedEmail(true)
        } else {
            fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${bot.message} `, {
                method: "GET"
            })
                .then(success => {
                    console.log('send message')
                }, error => {
                    console.log(error)
                })

            setNameValue("")
            setNumberValue("")
            setEmailValue("")
            setValue("")
            changeModal()
            setRedName(false)
            setRedEmail(false)
            setRedText(false)
            setRedNumber(false)
        }
    }

    return (
        <>

        </>
    );
}

export default SendBot;