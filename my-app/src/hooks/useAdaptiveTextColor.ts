'use client'
import { useEffect, useState, RefObject } from 'react'

interface UseAdaptiveTextColorProps {
  elementRef?: RefObject<HTMLElement | null>
  threshold?: number
}

export function useAdaptiveTextColor({
  elementRef,
  threshold = 128,
}: UseAdaptiveTextColorProps) {
  const [textColor, setTextColor] = useState<boolean>(false)

  useEffect(() => {
    if (!elementRef?.current) return

    const element = elementRef.current
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    if (!ctx) return

    // Get the computed background color
    const computedStyle = window.getComputedStyle(element)
    const backgroundColor = computedStyle.backgroundColor

    // Convert background color to brightness value
    const getBrightnessFromColor = (color: string): number => {
      // Handle rgba/rgb values
      const matches = color.match(/\d+/g)
      if (matches && matches.length >= 3) {
        const [r, g, b] = matches.map(Number)
        // Calculate brightness using luminance formula
        return (r * 299 + g * 587 + b * 114) / 1000
      }
      return 128 // Default middle brightness
    }

    const brightness = getBrightnessFromColor(backgroundColor)

    // Set text color based on brightness
    setTextColor(brightness > threshold ? false : true)
  }, [elementRef, threshold])

  return textColor
}
