"use client"

import { useEffect, useRef } from "react"

export default function NetworkVisual() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext("2d")
    if (!context) return

    const ctx: CanvasRenderingContext2D = context
    const dpr = window.devicePixelRatio || 1

    let width = canvas.offsetWidth
    let height = canvas.offsetHeight

    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = width + "px"
    canvas.style.height = height + "px"

    ctx.scale(dpr, dpr)

    const NODE_COUNT = 55
    const MAX_DISTANCE = 180

    const nodes = Array.from({ length: NODE_COUNT }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6
    }))

    let animationId: number

    function draw() {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < MAX_DISTANCE) {
            ctx.strokeStyle = `rgba(139,92,246,${0.5 - dist / MAX_DISTANCE})`
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      nodes.forEach((node, index) => {
        ctx.beginPath()
        ctx.arc(node.x, node.y, 2.8, 0, Math.PI * 2)

        if (index % 2 === 0) {
          ctx.fillStyle = "rgba(59,130,246,0.95)"
        } else {
          ctx.fillStyle = "rgba(139,92,246,0.95)"
        }

        ctx.fill()

        node.x += node.vx
        node.y += node.vy

        if (node.x <= 0 || node.x >= width) node.vx *= -1
        if (node.y <= 0 || node.y >= height) node.vy *= -1
      })

      animationId = requestAnimationFrame(draw)
    }

    draw()

    function handleResize() {
      const canvas = canvasRef.current
      if (!canvas) return

      width = canvas.offsetWidth
      height = canvas.offsetHeight

      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = width + "px"
      canvas.style.height = height + "px"

      ctx.scale(dpr, dpr)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
    />
  )
}