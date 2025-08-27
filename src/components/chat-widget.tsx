


"use client"

import { useState } from "react"
import { X, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 h-[24rem] sm:w-72 sm:h-80 bg-white rounded-lg shadow-2xl border z-50 flex flex-col">
          {/* Chat Header */}
          <div className="bg-green-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shrink-0">
                <span className="text-green-600 text-sm font-bold">E</span>
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base">Chat with Elle</h3>
                <p className="text-xs text-green-100">CONNECTED</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="text-white hover:bg-green-700 p-1">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-green-700 p-1"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Chat Body */}
          <div className="flex-1 p-4 bg-gray-50 overflow-y-auto">
            <div className="text-center text-gray-500 text-sm">Start a conversation with Elle</div>
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Type a message"
                className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                Send
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Chat Button */}
      <div className="fixed right-4 bottom-8 z-50">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-20 h-20 sm:w-28 sm:h-28 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200"
        >
          {!isOpen && (
            <img
              src="https://crdbbank.custhelp.com/euf/assets/chatbot/images/elle-robo-hand.png?v=1.3"
              alt="Elle"
              className="w-full h-full rounded-full object-cover"
            />
          )}
        </div>
      </div>
    </>
  )
}
