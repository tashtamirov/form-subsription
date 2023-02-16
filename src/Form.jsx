import React, { useState } from 'react'

const Form = () => {

    const [text, setText] = useState('')
    const [sended, setSended] = useState(false)
    const [blur, setBlur] = useState(false)

    const handleSetText = (e) => {
        setText(e.target.value)
        setSended(false)
        setBlur(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(text)
        setText('')
        setSended(true)
    }

    const handleBlur = () => {
        setBlur(true)
        setSended(false)
    }

    return (
        <>
            <form>
                <input value={text} onBlur={handleBlur} onChange={handleSetText} />
                <button disabled={!text} onClick={handleSubmit}>Add</button>
                {sended ? <div className='messageSended'>Сообщение успешно отправлено!</div> : null}
                {!text && blur ? <div className='messageErr'>Поле ввода не должно быть пустым</div> : null}
            </form>
        </>
    )


}

export default Form