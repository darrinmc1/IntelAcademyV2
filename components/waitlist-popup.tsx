"use client"

import { useEffect, useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { HoneypotField } from "@/components/HoneypotField"

const TAG_ID = "4031941"
const POPUP_STORAGE_KEY = "intel-academy-waitlist-seen"

const SHOW_AFTER_MS = 5000
const SUPPRESS_DAYS = 30

export function WaitlistPopup() {
    const [isOpen, setIsOpen] = useState(false)
    const [email, setEmail] = useState("")
    const [honeypot, setHoneypot] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const lastSeen = localStorage.getItem(POPUP_STORAGE_KEY)
        if (lastSeen) {
            const daysSince =
                (Date.now() - parseInt(lastSeen, 10)) / (1000 * 60 * 60 * 24)
            if (daysSince < SUPPRESS_DAYS) return
        }

        const timer = setTimeout(() => {
            setIsOpen(true)
        }, SHOW_AFTER_MS)

        return () => clearTimeout(timer)
    }, [])

    const markSeen = () => {
        localStorage.setItem(POPUP_STORAGE_KEY, Date.now().toString())
    }

    const handleClose = () => {
        setIsOpen(false)
        markSeen()
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        if (honeypot !== '') {
            handleClose()
            return
        }

        setLoading(true)
        try {
            const res = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    email, 
                    source: 'popup',
                    website: honeypot 
                }),
            })

            if (res.ok) {
                setSubmitted(true)
                markSeen()
            } else {
                handleClose()
            }
        } catch (error) {
            console.error('Error:', error)
            handleClose()
        } finally {
            setLoading(false)
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-2xl">
                        🎓 Intel Academy is expanding
                    </DialogTitle>
                    <DialogDescription className="text-base pt-2">
                        We're adding new lessons every week. Drop your email to be notified when major content drops, plus first access to any paid tier we launch.
                    </DialogDescription>
                </DialogHeader>

                {!submitted ? (
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-4 pt-2"
                    >
                        <Input
                            type="email"
                            name="email"
                            required
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full"
                        />

                        <HoneypotField />

                        <input 
                            type="hidden" 
                            name="website" 
                            value={honeypot}
                            onChange={(e) => setHoneypot(e.target.value)}
                        />

                        <Button 
                            type="submit" 
                            className="w-full"
                            disabled={loading}
                        >
                            {loading ? 'Signing up...' : 'Keep me posted'}
                        </Button>

                        <p className="text-xs text-muted-foreground text-center">
                            We'll only contact you when the site's good and ready!
                        </p>
                    </form>
                ) : (
                    <div className="py-4 text-center space-y-3">
                        <p className="text-lg font-semibold">You're on the list 🌱</p>
                        <p className="text-sm text-muted-foreground">
                            Check your inbox for a confirmation email.
                        </p>
                        <Button
                            onClick={handleClose}
                            variant="outline"
                            className="mt-2"
                        >
                            Close
                        </Button>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    )
}
