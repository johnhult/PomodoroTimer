import React, { useState, useEffect, useRef, useMemo, useCallback } from "react"
import confetti from "canvas-confetti"

import Layout from "src/components/Layout"
import Aside from "src/components/Aside"
import SEO from "src/components/seo"
import Timer from "../components/Timer"
import tomato from "src/images/tomato.png"
import * as Styled from "../styles/styledPages"
import Button from "../components/Button"
import TimeSlots from "../components/TimeSlots"

const IndexPage = () => {
  const [showNotificationPrompt, setShowNotificationPrompt] = useState(false)
  const [onePomodoro] = useState(3)
  const [celebrate, setCelebrate] = useState(false)
  const [time, setTime] = useState(onePomodoro)
  const [timerActive, setTimerActive] = useState(false)
  const [pomodoros, setPomodoros] = useState(0)
  const animFrame = useRef()

  useEffect(() => {
    if (!timerActive) {
      return
    }
    animFrame.current = requestAnimationFrame(() => {
      let timestamp = performance.now()
      animate(timestamp)
    })
    return () => cancelAnimationFrame(animFrame.current)
  }, [timerActive])

  const animate = timestamp => {
    let newestTime = performance.now()
    animFrame.current = requestAnimationFrame(() => {
      animate(newestTime)
    })
    const deltaTime = newestTime - timestamp
    setTime(prevTime => {
      const newTime = prevTime - deltaTime * 0.001
      if (newTime <= 0) {
        stopTimer(true)
      }
      return newTime
    })
  }

  const startTimer = async () => {
    if (Notification.permission === "default" && "Notification" in window) {
      setShowNotificationPrompt(true)
    } else {
      setTimerActive(true)
    }
  }

  const stopTimer = natural => {
    cancelAnimationFrame(animFrame.current)
    animFrame.current = null
    setTimerActive(false)
    if (natural) {
      setCelebrate(true)
      setTimeout(() => {
        setTime(onePomodoro)
        setCelebrate(false)
      }, 3000)
      setPomodoros(prevPoms => prevPoms + 1)
      confettiAndShit()
    } else {
      setTime(onePomodoro)
    }
  }

  const confettiAndShit = () => {
    if ("Notification" in window) {
      // API supported
      let notification = new Notification("Pomodoro Done!", {
        body:
          "You completed a Pomodoro! Go take a 5 minute break. You earned it!",
        tag: "Pomodoro",
        icon: tomato,
        image: tomato,
        badge: tomato,
        vibrate: [100, 100, 200, 100, 200, 100, 100],
        renotify: true,
      })
    }

    let end = performance.now() + 3 * 1000

    let colors = ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]

    // custom component using shopify client-side libraries
    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      })
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      })

      if (performance.now() < end) {
        requestAnimationFrame(frame)
      }
    }
    requestAnimationFrame(frame)
  }

  const prompt = async () => {
    setShowNotificationPrompt(false)
    setTimerActive(true)
    await Notification.requestPermission()
  }

  return (
    <Layout>
      <SEO title="Pomodoro Timer" />
      <Timer
        celebrating={celebrate}
        startTimer={startTimer}
        stopTimer={stopTimer}
        timerActive={timerActive}
        time={time}
      />
      <Styled.Flexer am flex="1" width="960px">
        <Aside
          pomodoros={pomodoros}
          setPomodoros={setPomodoros}
          timerActive={timerActive}
        ></Aside>
        <TimeSlots pomodoros={pomodoros}></TimeSlots>
      </Styled.Flexer>
      {showNotificationPrompt && (
        <Styled.Prompt>
          <Styled.Modal>
            <h4>Hi! Quick info!</h4>
            <p>
              The idea is to send you a notification when the timer reaches 0,
              so please allow notifications.
            </p>
            <p>
              Press <b>"Allow"</b> when promted.
            </p>
            <Button
              onClick={() => {
                prompt()
              }}
            >
              Got it!
            </Button>
          </Styled.Modal>
        </Styled.Prompt>
      )}
    </Layout>
  )
}

export default IndexPage
