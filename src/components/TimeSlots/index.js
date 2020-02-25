import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"

import dragndrop from "src/images/dragndrop.svg"
import * as Styled from "./style"
import Button from "../Button"
import Flex from "../Flex"

export const TimeSlots = ({ pomodoros, ...props }) => {
  const [tasks, setTasks] = useState([""])
  const [minimalisticView, setMinimalisticView] = useState(null)
  const dragIndex = useRef()

  useEffect(() => {
    if (minimalisticView !== null) {
      localStorage.setItem("minView", minimalisticView)
    }
  }, [minimalisticView])

  useEffect(() => {
    let initTasks = localStorage.getItem("tasks")
    let minView = localStorage.getItem("minView")
    if (initTasks) {
      initTasks = JSON.parse(initTasks)
      setTasks(initTasks)
    }
    if (minView) {
      minView = minView === "true"
      setMinimalisticView(minView)
    }
  }, [])

  useEffect(() => {
    if (tasks[tasks.length - 1] !== "") {
      let addNewArea = [...tasks, ""]
      setTasks(addNewArea)
    }
  }, [tasks])

  const handleChange = (val, index) => {
    let arr = [...tasks]
    arr[index] = val
    setTasks(arr)
  }

  const handleBlur = (val, index) => {
    let arr = [...tasks]
    if (val === "" && index + 1 !== arr.length) {
      arr.splice(index, 1)
      setTasks(arr)
    }
    let str = JSON.stringify(arr)
    localStorage.setItem("tasks", str)
  }

  const handleDragStart = async (e, index) => {
    dragIndex.current = index
    e.dataTransfer.effectAllowed = "move"
    e.dataTransfer.setData("text/html", e.target.parentNode)
    e.dataTransfer.setDragImage(e.target.parentNode.parentNode, 20, 20)
  }

  const handleDrag = (e, index) => {
    e.preventDefault()
    const draggedItem = tasks[dragIndex.current]

    // if the item is dragged over itself, ignore
    if (dragIndex === index) {
      return
    }

    // filter out the currently dragged item
    let items = tasks.filter(item => item !== draggedItem)

    // add the dragged item after the dragged over item
    items.splice(index, 0, draggedItem)
    setTasks(items)
    dragIndex.current = index
  }

  const handleDrop = e => {
    e.preventDefault()
    dragIndex.current = null
  }

  const clearTasks = () => {
    let newTasks = [""]
    let str = JSON.stringify(newTasks)
    localStorage.setItem("tasks", str)
    setTasks(newTasks)
  }

  return (
    <Styled.Flexer col onDrop={e => handleDrop(e)}>
      <h4>Time Slots</h4>
      <Flex wr>
        <Styled.ResetButton onClick={clearTasks}>
          Clear Tasks
        </Styled.ResetButton>
        <Styled.MinWrapper>
          <Styled.ShowOrHide>Show Done</Styled.ShowOrHide>
          <Styled.ShowMin
            minimalisticView={minimalisticView}
            onClick={() => setMinimalisticView(!minimalisticView)}
          >
            <Styled.Toggle minimalisticView={minimalisticView}></Styled.Toggle>
          </Styled.ShowMin>
        </Styled.MinWrapper>
      </Flex>
      <div>
        {tasks.map((task, index) => (
          <Styled.Wrapper
            onDragEnter={e => handleDrag(e, index)}
            key={`Tasks-${index}`}
            done={index < pomodoros && minimalisticView && tasks[index] !== ""}
          >
            <Styled.DnDWrapper col>
              <Styled.CountTasks>{index + 1}</Styled.CountTasks>
              <Styled.DragButton
                tabIndex="-1"
                draggable={index + 1 === tasks.length ? false : true}
                onDragStart={e => handleDragStart(e, index)}
                onDragEnd={e => handleDrop(e)}
                src={dragndrop}
              ></Styled.DragButton>
            </Styled.DnDWrapper>
            {index < pomodoros && minimalisticView && tasks[index] !== "" && (
              <Styled.DoneText>Done 🎉</Styled.DoneText>
            )}
            {(!(index < pomodoros && minimalisticView) ||
              tasks[index] === "") && (
              <Styled.TextArea
                done={index < pomodoros && tasks[index] !== ""}
                value={tasks[index]}
                onBlur={e => handleBlur(e.target.value, index)}
                onChange={e => handleChange(e.target.value, index)}
                placeholder={
                  "Add a short description of your task for this 25 minute block."
                }
              ></Styled.TextArea>
            )}
          </Styled.Wrapper>
        ))}
      </div>
    </Styled.Flexer>
  )
}

TimeSlots.propTypes = {}

export default TimeSlots
