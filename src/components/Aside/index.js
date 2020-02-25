import React, { useState, useMemo, useEffect, useCallback, useRef } from "react"

import tomato from "src/images/tomato.svg"
import dots from "src/images/dots.svg"
import check from "src/images/check.svg"
import * as Styled from "./style"
import Flex from "../Flex"
import IconButton from "../IconButton"
import useOnClickOutside from "../../hooks/useOnClickOutside"

export const Aside = ({ timerActive, pomodoros, setPomodoros }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [inputVal, setInputVal] = useState("")
  const [error, setError] = useState("")
  const [animateToW, setAnimateToW] = useState(200)
  const grabWidthRef = useRef()
  const inputRef = useRef()
  const closeOutsideRef = useRef()

  useOnClickOutside(closeOutsideRef, () => closeModalAndSet(null, true))

  const handleUserKeyPress = useCallback(event => {
    const { key, keyCode } = event

    if (keyCode === 27 || key === "Escape") {
      closeModalAndSet(null, true)
    }
    if (inputRef.current.id === document.activeElement.id) {
      if (keyCode === 38 || key === "ArrowUp") {
      } else if (keyCode === 40 || key === "ArrowDown") {
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress)

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress)
    }
  }, [])

  const pomodorosArr = useMemo(() => {
    return [...Array(pomodoros).keys()]
  }, [pomodoros])

  const changeInput = val => {
    if (val.match(/\D/)) {
      setError("No numbers allowed genius!")
    } else {
      setError("")
    }
    let newVal = val.replace(/\D/, "")
    setInputVal(newVal)
  }

  const openModal = async () => {
    let wd = grabWidthRef.current
      ? grabWidthRef.current.getBoundingClientRect().width
      : null
    setAnimateToW(wd)
    await setModalOpen(true)
    inputRef.current.focus()
  }

  const closeModalAndSet = async (e, closeOverride) => {
    if (e) {
      e.preventDefault()
    }
    setError("")
    if (inputVal !== "") {
      let val = parseInt(inputVal)
      if (val > 48 && !closeOverride) {
        setError("Too many Pomodoros you crazy kid! Maximum 48!")
        inputRef.current.focus()
        return
      }
      if (!closeOverride) {
        await setPomodoros(val)
      }
      await setInputVal("")
      inputRef.current.blur()
    }
    setModalOpen(false)
  }

  return (
    <Styled.Aside>
      <h4>Pomodoros</h4>
      <Styled.PomodorosWrapper wr>
        {pomodorosArr.map((item, index) => (
          <Styled.Img
            className={(index + 1) % 4 === 0 ? "noMargin" : ""}
            key={`tomato-${index}`}
            src={tomato}
            alt="A tomato icon"
          ></Styled.Img>
        ))}
        {(pomodoros === 0 || timerActive) && (
          <Styled.Img lowOpa src={tomato} alt="A tomato icon"></Styled.Img>
        )}
      </Styled.PomodorosWrapper>
      <Styled.Wrapper>
        <Styled.Flexer modalOpen={modalOpen} forwardRef={grabWidthRef}>
          <Styled.ResetButton
            disabled={pomodoros === 0}
            red
            onClick={() => setPomodoros(0)}
          >
            Reset Pomodoros
          </Styled.ResetButton>
          <IconButton
            className={modalOpen ? "active" : null}
            onClick={() => openModal()}
            src={dots}
          ></IconButton>
        </Styled.Flexer>
        <Styled.ModalFlexer extra animateToW={animateToW} modalOpen={modalOpen}>
          <Styled.Modal
            onSubmit={e => closeModalAndSet(e)}
            className="Modal"
            modalOpen={modalOpen}
            ref={closeOutsideRef}
            autocomplete="off"
          >
            <input
              disabled={!modalOpen}
              id="forFocus"
              type="text"
              ref={inputRef}
              onChange={e => changeInput(e.target.value)}
              value={inputVal}
              placeholder="Set pomodoros"
            ></input>
            <IconButton
              onClick={() => closeModalAndSet()}
              src={check}
            ></IconButton>
          </Styled.Modal>
        </Styled.ModalFlexer>
      </Styled.Wrapper>
      <Styled.ErrorMsg>{error}</Styled.ErrorMsg>
    </Styled.Aside>
  )
}

export default Aside
