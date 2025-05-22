"use client"

import { useToast } from "@/components/ui/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast
            key={id}
            {...props}
            className="text-red-800 bg-red-50 border-red-200 shadow-lg px-8 py-6 rounded-xl min-w-[320px] max-w-[90vw]"
          >
            <div className="grid gap-1">
              {title && <ToastTitle className="text-lg font-bold text-red-900">{title}</ToastTitle>}
              {description && (
                <ToastDescription className="text-base text-red-800 font-medium">{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] flex flex-col items-center w-auto max-w-full" />
    </ToastProvider>
  )
}
